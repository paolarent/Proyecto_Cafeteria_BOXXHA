// controllers/pedidoController.ts
import { Request, Response } from 'express';
import { crearPedido, actualizarPedido, obtenerEstadosPedidos } from '../services/pedidoService';
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

export const actualizarPed = async (req: Request, res: Response) => {
  try {
    const { idPedido } = req.body;
    await actualizarPedido(idPedido);
    res.status(201).json({
      message: 'Pedido actualizado correctamente'
    });
  } catch (error){
    res.status(500).json({error});
  }
};

export const consultarEstadoPedidos = async (req: Request, res: Response) => {
  try {
    const { ids } = req.body;
    if (!Array.isArray(ids)) {
      res.status(400).json({ error: 'Formato de datos inválido. Se esperaba un arreglo de IDs.' });
    }

    const estados = await obtenerEstadosPedidos(ids);
    res.status(201).json(estados);
  } catch (error) {
    res.status(500).json({ error: 'Error interno del servidor' });
  }
};