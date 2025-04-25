import { Request, Response, NextFunction } from 'express';
import jwt, { JwtPayload } from 'jsonwebtoken';

// Extender la interfaz Request para que acepte user
declare global {
  namespace Express {
    interface Request {
      user?: { id_usuario : number }; // Especificar el tipo, probamos con id_usuario
    }
  }
}

//Middleware
export const auth = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
  console.log("Middleware ejecutado");
  const bearer = req.headers.authorization;

  if (!bearer) {
    res.status(401).json({ error: 'No autorizado' })
    return
  }

  const [, token] = bearer.split(' ');
  try {
    const secretKey = process.env.JWT_SECRET as string;
    const decoded = jwt.verify(token, secretKey) as { id_usuario: number };

    req.user = {id_usuario: decoded.id_usuario};
    next();
  } catch (error) {
    res.status(403).json({ error: 'Token inválido' });
  }
};