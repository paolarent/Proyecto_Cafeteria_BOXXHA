// routes/pedidoRoutes.ts
import express from 'express';
import { postPedido } from '../controllers/pedidoController';

const router = express.Router();

router.post('/pedidos', postPedido);

export { router };  
