import {prisma} from '../lib/prisma';

// Función que retorna las 25 ultimas ordenes para ser consultadas en el 
// Dasborad


export const pedidosRecientes = async () => {
    const pedidos =  await prisma.pedido.findMany({
        // Especificamos el orden en que se consultaran los datos
        orderBy: {fecha: 'desc'},
        take: 25,
        // Usamos select para seleccionar que campos queremos regresar
        select: {
            id_pedido: true,
            fecha: true,
            total: true,
            status:true,
            // Podemos hacer referencia a otro modelo (tabla) en la misma consulta
            usuario: {
                select: {
                    nombre: true,
                },
            },
        },    

    });
    // Cambiamos el formato de la fecha para que regrese la hora 
    return pedidos.map(pedido => ({
    ...pedido,
    fecha: new Date(pedido.fecha).toLocaleString('es-MX', {
      day: '2-digit',
      month: '2-digit',
      year: 'numeric',
      hour: '2-digit',
      minute: '2-digit',
    }),
  }));
};

export const TotalVentasHoy = async () => {
    const inicioDelDia = new Date();
    inicioDelDia.setHours(0, 0, 0, 0); // Hoy a las 00:00

    const ahora = new Date(); // Fecha y hora actual
    
    const resul = await prisma.pedido.aggregate({

        // Se filtran las tuplas 
        where: {
            fecha:{
            gte: inicioDelDia,
            lte: ahora,
        },
        },

        // Se llama la funcíon _sum (sumatoria)
        _sum: {
            total: true,
        }
    });
    return resul._sum.total ?? 0; // Si no hay tuplas regresa 0
};

export const TotalPedidosHoy = async () => {
    const inicioDelDia = new Date();
    inicioDelDia.setHours(0, 0, 0, 0); // Hoy a las 00:00

    const ahora = new Date(); // Fecha y hora actual
    
    const resul = await prisma.pedido.count({
        where: {
            fecha:{
                gte: inicioDelDia,
                lte: ahora,
            },
        },
    });  
    return resul ?? 0;
};


export const TotalProductosHoy = async () => {
    const inicioDelDia = new Date();
    inicioDelDia.setHours(0, 0, 0, 0); // Hoy a las 00:00
    const ahora = new Date(); // Fecha y hora actual
    
    const resul = await prisma.detalle_pedido.count({
        where: {
            pedido: {
                fecha: {
                    gte: inicioDelDia,
                    lte: ahora,
                }
            }
        },
    });
    return resul ?? 0;
};

export const ObtenerEmpleados = async () => {
    const Empleados = await prisma.usuario.findMany({
        orderBy: {id_usuario: 'desc'},
        select: {
            id_usuario: true,
            nombre: true,
            apellido: true,
            usuario: true,
            numero_tel: true,
            email: true,
        },
    })

    return Empleados ?? 0;
};

export const EliminarEmpleado = async () => {
    
}