import { Router } from "express";
import { login, register } from "../controllers/authController";

const router = Router();

// Ruta login GET http://localhost:3000/auth
// El archivo index.ts de la carpeta routes es el que se encarga de cargar todas las rutas de la aplicacion

router.post("/login", login); // Ruta para el login
router.post("/register", register); // Ruta para el registro

export { router };

