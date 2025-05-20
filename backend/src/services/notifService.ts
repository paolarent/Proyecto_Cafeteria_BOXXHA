import { prisma } from '../lib/prisma';
import { io } from '../app';

export async function crearNotificacion(idPedido: number) {
    // Obtener el pedido con los detalles
    const pedido = await prisma.pedido.findUnique({
        where: { id_pedido: idPedido },
        include: {
            usuario: true,
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

    // Crear notificacion solo si es cliente
    if (pedido.usuario.tipo_usuario !== 'cliente') return;

    //Construir el detalle de la notificacion
    const detalles = pedido.detalle_pedido.map((detalle) => {
        const nombreProducto = 
            detalle.bebcaliente?.nombre ||
            detalle.bebfria?.nombre ||
            detalle.frappe?.nombre ||
            detalle.postre?.nombre ||
            'Producto desconocido';

        const tamano = detalle.tamano?.nombre || 'Tamaño desconocido';
        const leche = detalle.leche?.nombre || 'Sin leche';
        const extras = detalle.detalleextra.length > 0
        ? detalle.detalleextra.map(e => e.extra?.nombre).join(', ')
        : 'Ninguno';

        return `Producto: ${nombreProducto} - Leche: ${leche} - Tamaño: ${tamano} - Extras: ${extras}`;
            }).join(' | ');
        
        const mensaje = `Nuevo pedido de ${pedido.usuario.nombre} ${idPedido}: ${detalles}`;

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
