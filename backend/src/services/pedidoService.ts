import { prisma } from '../lib/prisma';
import { pedido, pedido_status } from '@prisma/client';
import { generarCodigoUnico } from './codigoService';

interface ExtraInput {
  id: number;
  cantidad: number;
}

interface DetallePedidoInput {
  id_bebcaliente?: number;
  id_bebfria?: number;
  id_frappe?: number;
  id_postre?: number;
  id_tamano: number;
  regular?: boolean;
  id_leche?: number;
  total: number;
  extras?: ExtraInput[];
}

interface PedidoInput {
  total: number;
  detalle_pedido: DetallePedidoInput[];
}

export const crearPedido = async (input: PedidoInput, id_usuario: number) => {
  const { total, detalle_pedido } = input;
  // Generar código único
  const codigo_conf = await generarCodigoUnico();
  
  // 1. Crear pedido
  const pedido = await prisma.pedido.create({
    data: { id_usuario, status: pedido_status.pendiente, codigo_conf, total },
  });

  // 2. Crear cada detalle_pedido
  for (const detalle of detalle_pedido) {
    const {
      id_bebcaliente,
      id_bebfria,
      id_frappe,
      id_postre,
      id_tamano,
      regular,
      id_leche,
      total: totalDetalle,
      extras,
    } = detalle;

    const nuevoDetalle = await prisma.detalle_pedido.create({
      data: {
        id_pedido: pedido.id_pedido,
        id_bebcaliente,
        id_bebfria,
        id_frappe,
        id_postre,
        id_tamano,
        regular,
        id_leche,
        total: totalDetalle,
      },
    });

    // 3. Crear extras si existen
    if (extras?.length) {
      for (const extra of extras) {
        const extraInfo = await prisma.extra.findUnique({
          where: { id_extra: extra.id },
        });

        await prisma.detalle_extra.create({
          data: {
            id_detalle: nuevoDetalle.id_detalle,
            id_extra: extra.id,
            cantidad: extra.cantidad,
            precio_total: extraInfo?.precio_extra
              ? extraInfo.precio_extra * extra.cantidad
              : 0,
          },
        });
      }
    }
  }

  return pedido;
};
