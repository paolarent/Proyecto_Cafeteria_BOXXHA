// controllers/pedidoController.ts
import { Request, Response } from 'express';
import { crearPedido } from '../services/pedidoService';

export const postPedido = async (req: Request, res: Response) => {
  try {
    const pedido = await crearPedido(req.body);
    res.status(201).json({
      message: 'Pedido creado correctamente',
      pedido,
    });
  } catch (error) {
    res.status(500).json({ message: 'Error interno del servidor', error });
  }
};
