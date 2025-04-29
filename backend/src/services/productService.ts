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

export const getCategoriasCalientes = async () => {
    return prisma.bebcaliente.findMany({
        distinct: ['nombre'],
        select: { nombre: true}
    });
};

export const getSaboresCategoria = async (nombre: string) => {
    return prisma.bebcaliente.findMany({
        where: { nombre },
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
  