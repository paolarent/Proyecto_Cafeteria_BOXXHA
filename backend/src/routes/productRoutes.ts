import { Router } from "express";
import { getBebCalientes, getBebFrias, getExtra, getFrappe, getLeche, getPostre, getTamano, getSabores } from "../controllers/productController";

const router = Router();

router.get("/bebcaliente", getBebCalientes);

router.get("/bebcaliente/sabores", getSabores);

router.get("/bebfria", getBebFrias);

router.get("/frappe", getFrappe);    //siguele ps, ire a lavarme los dientes y ya, vale vale

router.get("/leche", getLeche);

router.get("/postre", getPostre);

router.get("/extra", getExtra);

router.get("/tamano", getTamano);

export { router };
