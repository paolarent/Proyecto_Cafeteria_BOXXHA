// src/routes/privateRoutes.ts
import express from 'express';
import { auth } from '../middlewares/auth';

const router = express.Router();

// https://h2x0xj0m-3000.usw3.devtunnels.ms/privateRoutes/resumen
router.get("/resumen", auth, (req, res) => {
  const id = req.user?.id_usuario;
  res.json({ mensaje: `Bienvenido, usuario #${id}` });
});

export { router };  
