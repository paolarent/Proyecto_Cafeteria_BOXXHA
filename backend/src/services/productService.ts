import { prisma } from '../lib/prisma';

export const getBebidasCalientes = async () => {
  return prisma.bebcaliente.findMany({
    select: {
      id_bebcaliente: true,
      nombre: true,
      sabor: true,
      precio_base: true
    }
  });
};

export const getCategoriasGenerico = async (tabla: string) => {
    const tablasPermitidas: Record<string, any> = {
        'bebcaliente': prisma.bebcaliente,
        'bebfria': prisma.bebfria,
        'frappe': prisma.frappe,
        'postre': prisma.postre
    };

    const modelo = tablasPermitidas[tabla as keyof typeof tablasPermitidas];

    if (!modelo){
        throw new Error('Tabla no válida');
    }

    return modelo.findMany({
        distinct: ['nombre'],
        select: { nombre: true}
    });
};

// Sirve para obtener los sabores de cualquier producto de cualquier tabla
// Se le pasa el nombre de la tabla y el nombre del producto
export const getSaboresGenerico = async (tabla: string, nombre: string) => {
    const tablasPermitidas: Record<string, any> = {
        'bebcaliente': prisma.bebcaliente,
        'bebfria': prisma.bebfria,
        'frappe': prisma.frappe,
        'postre': prisma.postre
    };

    const modelo = tablasPermitidas[tabla as keyof typeof tablasPermitidas];

    if (!modelo){
        throw new Error('Tabla no válida');
    }

    return modelo.findMany({
        where: {
            nombre:{
                equals: nombre
            } 
        },
        distinct: ['sabor'],
        select: { sabor: true }
    });
};

export const getBebidasFrias = async () => {
    return prisma.bebfria.findMany({
      select: {
        id_bebfria: true,
        nombre: true,
        sabor: true,
        precio_base: true
      }
    });
};

export const getFrappes = async () => {
    return prisma.frappe.findMany({	
        select: {
            id_frappe: true,
            nombre: true,
            sabor: true,
            precio_base: true
        }
    });
};

export const getPostres = async () => {
    return prisma.postre.findMany({
        select: {
            id_postre: true,
            nombre: true,
            sabor: true,
            precio_base: true
        }
    });
};

export const getExtras = async () => {
    return prisma.extra.findMany({
        select: {
            id_extra: true,
            nombre: true,
            precio_extra: true
        }
    });
};

export const getTamanos = async () => {
    return prisma.tamano.findMany({
        select: {
            id_tamano: true,
            nombre: true,
            precio_tamano: true
        }
    });
};

export const getLeches = async () => {
    return prisma.leche.findMany({
        select: {
            id_leche: true,
            nombre: true,
            precio_leche: true
        }
    });
};
  