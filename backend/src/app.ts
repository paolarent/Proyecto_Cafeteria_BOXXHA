// Configuración del servidor Express, archivo principal

import 'dotenv/config';
import express from 'express';
import cors from 'cors';
import { createServer } from 'http';
import { Server } from 'socket.io';
import { router } from './routes';

// Declara una variable PORT  que toma el valor de la variable de entorno PORT o, si no está definida, el valor 3001
const PORT = process.env.PORT || 3000;
const app = express();
const httpServer = createServer(app);

// Inicializa el servidor Socket.io
export const io = new Server(httpServer, {
  cors: {
    origin: '*', // Permitir todas las solicitudes de origen para pruebas
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
  }
});


// Especificar a la API que puede ser consumida 
app.use(cors({
    origin: "*", // Permitir todas las solicitudes de origen para pruebas
    methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
    allowedHeaders: ["Content-Type", "Authorization"],
  }));
  
// Permitir el uso de JSON en las peticiones
app.use(express.json());
app.use(router);

// Socket conectado
io.on('connection', (socket) => {
  console.log(`Usuario conectado: ${socket.id}`);

  socket.on('disconnect', () => {
    console.log(`Usuario desconectado: ${socket.id}`);
  });
});

// Iniciar el servidor
httpServer.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
