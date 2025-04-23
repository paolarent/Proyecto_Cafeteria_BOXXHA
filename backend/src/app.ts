// Configuración del servidor Express, archivo principal

import 'dotenv/config';
import express from 'express';
import cors from 'cors';
import { router } from './routes';

// Declara una variable PORT  que toma el valor de la variable de entorno PORT o, si no está definida, el valor 3001
const PORT = process.env.PORT || 3000;
const app = express();
// Especificar a la API que puede ser consumida 
app.use(cors({
    origin: "*", // Permitir todas las solicitudes de origen para pruebas
    methods: ["GET", "POST"]
  }));
  
// Permitir el uso de JSON en las peticiones
app.use(express.json());
app.use(router);
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
