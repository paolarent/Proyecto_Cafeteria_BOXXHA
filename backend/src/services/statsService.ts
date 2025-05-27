// backend/src/services/statsService.ts

import {prisma} from '../lib/prisma';

export const VentasPorCategoria = async () => {
    const Productos = await prisma.detalle_pedido.findMany({
        // Capturamos unicamente las id y las contamos
        select: {
            id_frappe: true,
            id_bebcaliente: true,
            id_bebfria: true,
            id_postre: true,
        },
    })
    // Inicializamos 4 arreglos vacios de tipo number para almacenar todas las id encontradas
    let idsFrappe: number[] = [];
    let idsBebFria: number[] = [];
    let idsBebCaliente: number[] = [];
    let idsPostre: number[] = [];

    // Llenamos los arreglos con los valores capturados
    for (const item of Productos) {
        if (item.id_frappe !== null) idsFrappe.push(item.id_frappe)
        if (item.id_bebcaliente !== null) idsBebCaliente.push(item.id_bebcaliente);
        if (item.id_bebfria !== null) idsBebFria.push(item.id_bebfria);
        if (item.id_postre !== null) idsPostre.push(item.id_postre);
    }

    type Data = { categoria: string, cant: number };

    // Con la longitud del arreglo ya sabemos cuantos se vendieron
    const venta_frappe = idsFrappe.length;
    const venta_bebcaliente = idsBebCaliente.length;
    const venta_bebfria = idsBebFria.length;
    const venta_postre = idsPostre.length;


    const ventas: (Data | null)[] = [
        venta_frappe ? { categoria: "Frappe", cant: venta_frappe } : null,
        venta_bebcaliente ? { categoria: "Bebida Caliente", cant: venta_bebcaliente } : null,
        venta_bebfria ? { categoria: "Bebida Fria", cant: venta_bebfria } : null,
        venta_postre ? { categoria: "Postres", cant: venta_postre } : null,
    ];

    return ventas ?? null;

}

export const ProductoEstrella = async () => {
    const Productos = await prisma.detalle_pedido.findMany({
        // Capturamos todas las id y la guardamos en Productos
        select: {
            id_frappe: true,
            id_bebcaliente: true,
            id_bebfria: true,
            id_postre: true,
        },
    });
    // Preparamos los arreglos vacios para clasificar todas
    // las id
    let idsFrappe: number[] = [];
    let idsBebFria: number[] = [];
    let idsBebCaliente: number[] = [];
    let idsPostre: number[] = [];

    // Llenamos los arreglos con los valores capturados
    for (const item of Productos) {
        if(item.id_frappe !== null) idsFrappe.push(item.id_frappe)
        if (item.id_bebcaliente !== null) idsBebCaliente.push(item.id_bebcaliente);
        if (item.id_bebfria !== null) idsBebFria.push(item.id_bebfria);
        if (item.id_postre !== null) idsPostre.push(item.id_postre);
    }

    // Obtener la moda (producto más vendido) de cada categoria
    const modaFrappe = obtenerModa(idsFrappe);
    const modaBebCaliente = obtenerModa(idsBebCaliente);
    const modaBebFria = obtenerModa(idsBebFria);
    const modaPostre = obtenerModa(idsPostre);

    // Definimos el tipo que almacenara la relación categoria, id, moda
    type ModaInfo = { categoria: string; id: number; repeticiones: number };

    const modasPosibles: (ModaInfo | null)[] = [
        modaFrappe ? { categoria: "frappe", ...modaFrappe } : null,
        modaBebCaliente ? { categoria: "caliente", ...modaBebCaliente } : null,
        modaBebFria ? { categoria: "frio", ...modaBebFria } : null,
        modaPostre ? { categoria: "postre", ...modaPostre } : null,
    ];

    const modas: ModaInfo[] = modasPosibles.filter((m): m is ModaInfo => m !== null);

    modas.sort((a, b) => b.repeticiones - a.repeticiones);
    const masVendido = modas[0]; 

    let producto;

    if (masVendido.categoria === "frappe") {
    producto = await prisma.frappe.findUnique({
        where: { id_frappe: masVendido.id },
        select: { nombre: true, sabor: true },
    });
    } else if (masVendido.categoria === "bebcaliente") {
    producto = await prisma.bebcaliente.findUnique({
        where: { id_bebcaliente: masVendido.id },
        select: { nombre: true, sabor: true },
    });
    } else if (masVendido.categoria === "bebfria") {
    producto = await prisma.bebfria.findUnique({
        where: { id_bebfria: masVendido.id },
        select: { nombre: true, sabor: true },
    });
    } else if (masVendido.categoria === "postre") {
    producto = await prisma.postre.findUnique({
        where: { id_postre: masVendido.id },
        select: { nombre: true, sabor: true },
    });
    }
    return {
        tipo: masVendido.categoria,
        ...producto,
    };
}; 



function obtenerModa(arr: number[]): { id: number, repeticiones: number } | null {
  if (arr.length === 0) return null;

  const contador = new Map<number, number>();

  for (const num of arr) {
    contador.set(num, (contador.get(num) || 0) + 1);
  }

  let moda = arr[0];
  let maxReps = 0;

  for (const [id, reps] of contador.entries()) {
    if (reps > maxReps) {
      moda = id;
      maxReps = reps;
    }
  }

  return { id: moda, repeticiones: maxReps };
}

