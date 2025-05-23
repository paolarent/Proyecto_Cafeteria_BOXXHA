import { prisma } from '../lib/prisma';
import { io } from '../app';
import { usuario_tipo_usuario } from '@prisma/client';

export const crearNotificacion = async (idPedido: number) => {
    const pedido = await prisma.pedido.findUnique({
        where: { id_pedido: idPedido },
        include: {
            usuario: {
                select: {
                    nombre: true,
                    tipo_usuario: true,
                } 
            },
            detalle_pedido: {
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

    if (pedido.usuario.tipo_usuario !== usuario_tipo_usuario.cliente) {
        throw new Error('Abortar notificación para tipo de usuario no cliente');
    }

    let mensaje = `TOKEN: ${pedido.codigo_conf} - CLIENTE: ${pedido.usuario.nombre}\n\n`;

    mensaje += pedido.detalle_pedido.map((detalle, index) => {
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
        const tipoGrano = typeof detalle.regular === 'boolean'
            ? (detalle.regular ? 'Regular' : 'Descafeinado') : null;

        const leche = detalle.leche?.nombre?.toLowerCase();
        const mostrarLeche = leche && leche !== 'sin leche' && leche !== 'ninguno';

        const extrasArray = Array.isArray(detalle.detalleextra)
            ? detalle.detalleextra
                .filter(e => e.extra?.nombre?.toLowerCase() !== 'ninguno')
                .map(e => `${e.cantidad || 1}x ${e.extra?.nombre}`)
            : [];

        let mensajeProducto = `• ${nombreProducto} ${saborProducto} (${tipoProducto})\n`;
        if (tipoGrano) mensajeProducto += `  - Tipo de grano: ${tipoGrano}\n`;
        if (mostrarLeche) mensajeProducto += `  - Leche: ${detalle.leche?.nombre}\n`;
        mensajeProducto += `  - Tamaño: ${tamano}\n`;
        if (extrasArray.length > 0) {
            mensajeProducto += `  - Extras: ${extrasArray.join(', ')}\n`;
        }
        mensajeProducto += `  - Total: $${detalle.total?.toFixed(2) || '0.00'}\n`;

        return mensajeProducto;
    }).join('\n');

    mensaje += `\nTOTAL DE PEDIDO: $${pedido.total?.toFixed(2) || '0.00'}`;

    // Insertar en la base de datos
    await prisma.notificacion.create({
        data: {
            id_pedido: idPedido,
            mensaje
        }
    });

    // Emitir por socket
    io.emit('notificacion', {
        id_pedido: idPedido,
        mensaje
    });
};
