// routes/pedidoRoutes.ts
import express from 'express';
import { postPedido, crearNotifPedido, actualizarPed, consultarEstadoPedidos } from '../controllers/pedidoController';
import { auth } from "../middlewares/auth";

const router = express.Router();
router.post('/pedidos', auth, postPedido);
router.post('/notificaciones', crearNotifPedido); 
router.put('/actualizarPedido', actualizarPed);
router.post('/estadoPedido', consultarEstadoPedidos);

export { router };  
