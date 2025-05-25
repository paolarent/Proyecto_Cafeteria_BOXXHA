import { Router } from "express";
import { login, register, verificarTipo, registerEmp } from "../controllers/authController";
import { auth } from '../middlewares/auth';

const router = Router();

// Ruta login GET http://localhost:3000/auth
// El archivo index.ts de la carpeta routes es el que se encarga de cargar todas las rutas de la aplicacion

// https://h2x0xj0m-3000.usw3.devtunnels.ms/authRoute/testregister
router.post("/testregister", registerEmp);

// https://h2x0xj0m-3000.usw3.devtunnels.ms/authRoute/login
router.post("/login", login); // Ruta para el login

// https://h2x0xj0m-3000.usw3.devtunnels.ms/authRoute/register
router.post("/register", register); // Ruta para el registro

router.get("/verify", auth, (req, res) => {
  res.status(200).json({ message: 'Token válido'});
});

router.get("/tipoUsuario", auth, verificarTipo);

export { router };

