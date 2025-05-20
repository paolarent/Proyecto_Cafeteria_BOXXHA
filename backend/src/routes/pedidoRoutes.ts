// routes/pedidoRoutes.ts
import express from 'express';
import { postPedido, crearNotifPedido } from '../controllers/pedidoController';
import { auth } from "../middlewares/auth";

const router = express.Router();

router.post('/pedidos', auth, postPedido);
router.post('/notificaciones', crearNotifPedido); 
export { router };  
