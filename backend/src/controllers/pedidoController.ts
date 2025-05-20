// controllers/pedidoController.ts
import { Request, Response } from 'express';
import { crearPedido } from '../services/pedidoService';
import { crearNotificacion } from '../services/notifService';

export const postPedido = async (req: any, res: Response) => {
  try {
    const id_usuario = req.user.id_usuario; // <- obtenido del token
    const pedido = await crearPedido(req.body, id_usuario); // pásalo al servicio

    res.status(201).json({
      message: 'Pedido creado correctamente',
      pedido,
    });
  } catch (error) {
    res.status(500).json({ message: 'Error interno del servidor', error });
  }
};

export const crearNotifPedido = async (req: any, res: Response) => {
  try {
    const { idPedido } = req.body;
    await crearNotificacion(idPedido);
    res.status(201).json({
      message: 'Notificación creada correctamente'
    });
  } catch (error) {
    res.status(500).json({ error });
  }
};
