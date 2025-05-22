import { prisma } from '../lib/prisma';
import { io } from '../app';
import { usuario_tipo_usuario } from '@prisma/client';

export const crearNotificacion = async (idPedido: number) => {
    // Obtener el pedido con los detalles
    const pedido = await prisma.pedido.findUnique({
        where: { id_pedido: idPedido },
        include: {
            usuario: {
                select: {
                    nombre: true,
                    tipo_usuario: true,
                } 
            },
            detalle_pedido:{
                include: {
                    bebcaliente: true,
                    bebfria: true,
                    frappe: true,
                    postre: true,
                    tamano: true,
                    leche: true,
                    detalleextra: {
                        include: {
                            extra: true
                        }
                    }
                }
            }
        }
    });

        
    if (!pedido) {
        console.error(`Pedido ${idPedido} no encontrado`);
        return;
    }

    const cliente = usuario_tipo_usuario.cliente;

    if (pedido.usuario.tipo_usuario !== cliente) {
        throw new Error('Abortar notificación para tipo de usuario no cliente');
    }

    const detalles = pedido.detalle_pedido.map((detalle) => {
        const nombreProducto = 
            detalle.bebcaliente?.nombre ||
            detalle.bebfria?.nombre ||
            detalle.frappe?.nombre ||
            detalle.postre?.nombre ||
            'Producto desconocido';

        const saborProducto =
            detalle.bebcaliente?.sabor ||
            detalle.bebfria?.sabor ||
            detalle.frappe?.sabor ||
            detalle.postre?.sabor ||
            'Sabor desconocido';

        const tipoProducto =
            detalle.bebcaliente ? 'Caliente' :
            detalle.bebfria ? 'Frío' :
            detalle.frappe ? 'Frappe' :
            detalle.postre ? 'Postre' :
            'Tipo desconocido';

        const tamano = detalle.tamano?.nombre || 'Tamaño desconocido';
        const mostrarRegular = typeof detalle.regular === 'boolean';
        const tipoGrano = mostrarRegular ? (detalle.regular ? 'Regular' : 'Descafeinado') : null;
        const leche = detalle.leche?.nombre?.toLowerCase(); // por si viene en mayúsculas
        const mostrarLeche = leche && leche !== 'sin leche' && leche !== 'ninguno';

        const extrasArray = Array.isArray(detalle.detalleextra)
            ? detalle.detalleextra
                .filter(e => e.extra?.nombre?.toLowerCase() !== 'ninguno')
                .map(e => `${e.cantidad || 1}x ${e.extra?.nombre ?? 'Extra desconocido'}`)
            : [];

        const mostrarExtras = extrasArray.length > 0 && !extrasArray.every(e => e === 'ninguno');

        // Construir mensaje
        let mensaje = `Producto: ${nombreProducto} ${saborProducto} - Tipo: ${tipoProducto}`; 
        if (tipoGrano) mensaje += ` - Tipo de grano: ${tipoGrano}`;
        if (mostrarLeche) mensaje += ` - Leche: ${detalle.leche?.nombre}`;
        mensaje += ` - Tamaño: ${tamano}`;
        if (mostrarExtras) mensaje += ` - Extras: ${extrasArray.join(', ')}`;

        return mensaje;
    }).join(' | ');

        
    const mensaje = `Pedido #${idPedido}, TOKEN: ${pedido.codigo_conf}, Cliente: ${pedido.usuario.nombre}: ${detalles} - TOTAL: $${pedido.total}`;

    // Insertar la notificacion en la base de datos
    await prisma.notificacion.create({
        data: {
            id_pedido: idPedido,
            mensaje: mensaje
        }
    });

    // Emitir la notificación a través de Socket.IO
    io.emit('notificacion', {
        id_pedido: idPedido,
        mensaje: mensaje
    });
}
