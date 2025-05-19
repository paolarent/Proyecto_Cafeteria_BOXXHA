import { Router } from "express";
import { login, register } from "../controllers/authController";
import { auth } from '../middlewares/auth';

const router = Router();

// Ruta login GET http://localhost:3000/auth
// El archivo index.ts de la carpeta routes es el que se encarga de cargar todas las rutas de la aplicacion

// http://25.4.40.124:3000/authRoute/login
router.post("/login", login); // Ruta para el login
// http://25.4.40.124:3000/authRoute/register
router.post("/register", register); // Ruta para el registro

router.get('/verify', auth, (req, res) => {
  res.status(200).json({ message: 'Token válido'});
});

export { router };

