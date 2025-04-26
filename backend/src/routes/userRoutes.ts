// src/routes/userRoutes.ts
import { Router } from 'express'
import { actualizarUser, actualizarContra } from "../controllers/userController";
import { auth } from "../middlewares/auth";

const router = Router();

// Ruta PUT https://h2x0xj0m-3000.usw3.devtunnels.ms/userRoutes
// El archivo index.ts de la carpeta routes  es el que se encarga de cargar todas las rutas de la aplicacion

// http://25.4.40.124:3000/userRoutes/actualizarUser
router.put("/actualizarUser", auth, actualizarUser); 
// http://25.4.40.124:3000/userRoutes/actualizarContra
router.put("/actualizarContra", auth,  actualizarContra); 

export { router }; 
