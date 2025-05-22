// {prisma} from '../lib/prisma';

// Función que retorna las 25 ultimas ordenes para ser consultadas en el 
// Dasborad

/*export const ordenesRecientes = async () => {
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
            }
        }    

    })
}*/