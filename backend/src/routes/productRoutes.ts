import { Router } from "express";
import { getBebCalientes, getBebFrias, getExtra, getFrappe, getLeche, getPostre, getTamano, getCategorias, getSabores } from "../controllers/productController";

const router = Router();

router.get("/bebcaliente", getBebCalientes);

// ruta ejemplo: https://h2x0xj0m-3000.usw3.devtunnels.ms/productRoutes/postre/sabores?nombre=Rol
// nombre de la tabla / sabores -> ?nombre=producto
router.get("/:tabla/sabores", getSabores);

// ruta ejemplo: https://h2x0xj0m-3000.usw3.devtunnels.ms/productRoutes/postre/categorias
router.get("/:tabla/categorias", getCategorias);

router.get("/bebfria", getBebFrias);

router.get("/frappe", getFrappe);    

router.get("/leche", getLeche);

router.get("/postre", getPostre);

router.get("/extra", getExtra);

router.get("/tamano", getTamano);

export { router };
