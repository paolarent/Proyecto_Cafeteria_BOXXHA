import { prisma } from '../lib/prisma';

export const generarCodigoUnico = async (): Promise<string> => {
  let codigo = " ";
  let existe = true;

  while (existe) {
    // Genera un número aleatorio entre 100000 y 999999 (6 dígitos)
    codigo = Math.floor(100000 + Math.random() * 900000).toString();

    // Verifica si ya existe en la base de datos
    const pedidoExistente = await prisma.pedido.findMany({
      where: { codigo_conf: codigo },
    });

    existe = pedidoExistente.length > 0;
  }

  return codigo;
};
