// src/routes/dashRoute.ts

import {Router} from "express";
import {obtenerPedidos, TotalPedidos, TotalVentas, TotalProductos} from "../controllers/dashController";

const router = Router();
//url base = https://h2x0xj0m-3000.usw3.devtunnels.ms/dashRoute

// https://h2x0xj0m-3000.usw3.devtunnels.ms/dashRoute/pedidosrecientes
router.get("/pedidosrecientes", obtenerPedidos);

// https://h2x0xj0m-3000.usw3.devtunnels.ms/dashRoute/totalpedidoshoy
router.get("/totalpedidoshoy", TotalPedidos)

// https://h2x0xj0m-3000.usw3.devtunnels.ms/dashRoute/totalventashoy
router.get("/totalventashoy", TotalVentas)

// https://h2x0xj0m-3000.usw3.devtunnels.ms/dashRoute/totalproductoshoy
router.get("/totalproductoshoy", TotalProductos)

export {router};




