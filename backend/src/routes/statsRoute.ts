// backend/src/statsRoute/statsRoute.ts

import {Router} from "express";
import {Producto_mas_vendido, Ventas_Categoria} from "../controllers/statsController";

const router = Router();
//url base = https://h2x0xj0m-3000.usw3.devtunnels.ms/statsRoute

// https://h2x0xj0m-3000.usw3.devtunnels.ms/statsRoute/productoestrella
router.get("/productoestrella", Producto_mas_vendido);

// https://h2x0xj0m-3000.usw3.devtunnels.ms/statsRoute/ventas_categoria
router.get("/ventas_categoria", Ventas_Categoria);


export {router};
