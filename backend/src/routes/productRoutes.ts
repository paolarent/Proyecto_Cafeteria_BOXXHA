import { Router } from "express";
import { getBebCalientes, getBebFrias, getExtra, getFrappe, getLeche, getPostre, getTamano } from "../controllers/productController";

const router = Router();

router.get("/bebcaliente", getBebCalientes);

router.get("/bebfria", getBebFrias);

router.get("/frappe", getFrappe);

router.get("/leche", getLeche);

router.get("/postre", getPostre);

router.get("/extra", getExtra);

router.get("/tamano", getTamano);

export { router };
