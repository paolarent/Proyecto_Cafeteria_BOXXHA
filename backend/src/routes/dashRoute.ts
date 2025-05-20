// src/routes/dashRoute.ts

import {Router} from "express";
import {obtenerPedidos} from "../controllers/dashController";

const router = Router();

// https://h2x0xj0m-3000.usw3.devtunnels.ms/authRoute/login
router.get("/pedidosrecientes", obtenerPedidos)






