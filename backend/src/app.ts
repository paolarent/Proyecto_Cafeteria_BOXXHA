// Configuración del servidor Express, archivo principal

import 'dotenv/config';
import express from 'express';
import cors from 'cors';
import { router } from './routes/auth';

// Declara una variable PORT  que toma el valor de la variable de entorno PORT o, si no está definida, el valor 3001
const PORT = process.env.PORT || 3000;
const app = express();
// Especificar a la API que puede ser consumida desde cualquier origen
app.use(cors());
app.use(router);
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
