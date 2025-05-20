import {prisma} from '../lib/prisma';

// Función que retorna las 25 ultimas ordenes para ser consultadas en el 
// Dasborad


export const pedidosRecientes = async () => {
    return await prisma.pedido.findMany({
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
};

export const TotalVentasHoy = async () => {
    const resul = await prisma.pedido.aggregate({
        _sum:{
            total: true,
        },
    });
    return resul._sum.total ?? 0; // Si no hay tuplas regresa 0
};

export const TotalPediosHoy = async () => {
    const inicioDelDia = new Date();
    inicioDelDia.setHours(0, 0, 0, 0); // Hoy a las 00:00

    const ahora = new Date(); // Fecha y hora actual
    
    const resul = await prisma.pedido.aggregate({
        where: {
            fecha:{
                gte: inicioDelDia,
                lte: ahora,
            },
        },
    });  
    return resul ?? 0;
};

