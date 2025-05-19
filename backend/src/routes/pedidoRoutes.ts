// routes/pedidoRoutes.ts
import express from 'express';
import { postPedido } from '../controllers/pedidoController';
import { auth } from "../middlewares/auth";

const router = express.Router();

router.post('/pedidos', auth, postPedido);

export { router };  
