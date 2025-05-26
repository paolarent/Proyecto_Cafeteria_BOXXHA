import {prisma} from '../lib/prisma';
import bcrypt from "bcrypt";
import { usuario_status } from '@prisma/client';

export const actualizarStatusEmpleado = async (id: number, nuevoStatus: string) => {
  if (!["A", "B"].includes(nuevoStatus)) {
    throw new Error("Status inválido. Usa 'A' o 'B'.");
  }

  const existingEmployee = await prisma.usuario.findUnique({
    where: { id_usuario: id }
  });

  if (!existingEmployee) {
    throw new Error("Empleado no encontrado.");
  }

  const empleadoActualizado = await prisma.usuario.update({
    where: { id_usuario: id },
    data: { status: usuario_status.B }
  });

  return {
    id: empleadoActualizado.id_usuario,
    status: empleadoActualizado.status
  };
};

export const editarEmpleado = async (
  id: number,
  empleado: {
    nombre?: string,
    apellido?: string,
    usuario?: string,
    correoTel?: string,
  }
) => {
  const { nombre, apellido, correoTel, usuario } = empleado;

  const existingEmployee = await prisma.usuario.findUnique({
    where: { id_usuario: id }
  });

  if (!existingEmployee) {
    throw new Error("Empleado no encontrado.");
  }

  const correoTelLimpio = correoTel?.replace(/\s+/g, '') ?? "";
  const esEmail = correoTel ? correoTel.includes('@') : false;
  const esTelefono = correoTel ? !correoTel.includes('@') : false;

  const whereClause = {
    NOT: { id_usuario: id },
    OR: [] as any[],
  };

  if (usuario) whereClause.OR.push({ usuario });
  if (esEmail && correoTelLimpio) whereClause.OR.push({ email: correoTelLimpio });
  if (esTelefono && correoTelLimpio) whereClause.OR.push({ numero_tel: correoTelLimpio });

  if (whereClause.OR.length > 0) {
    const userWithSameData = await prisma.usuario.findFirst({
      where: whereClause
    });

    if (userWithSameData) {
      throw new Error("El nombre de usuario, email o número ya está registrado por otro usuario.");
    }
  }

  const data: any = {};

  if (nombre) data.nombre = nombre;
  if (apellido) data.apellido = apellido;
  if (usuario) data.usuario = usuario;

  if (correoTel !== undefined) {
    if (esEmail) {
      data.email = correoTelLimpio;
      data.numero_tel = null;
    } else if (esTelefono) {
      data.numero_tel = correoTelLimpio;
      data.email = null;
    } else {
      throw new Error("El valor de contacto no es un email ni un número de teléfono válido.");
    }
  }

  const empleadoActualizado = await prisma.usuario.update({
    where: { id_usuario: id },
    data: data
  });

  return {
    employee: {
      id: empleadoActualizado.id_usuario,
      nombre: empleadoActualizado.nombre,
      apellido: empleadoActualizado.apellido,
      usuario: empleadoActualizado.usuario,
      email: empleadoActualizado.email,
      numero_tel: empleadoActualizado.numero_tel
    }
  };
};




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
        orderBy: {id_usuario: 'asc'},
        where: {
            tipo_usuario: 'empleado',
            status: 'A',
        },
        select: {
            id_usuario: true,
            nombre: true,
            apellido: true,
            usuario: true,
            numero_tel: true,
            email: true,    
        },
    })

    return Empleados ?? [];
};
