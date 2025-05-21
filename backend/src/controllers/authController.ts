// src/controllers/authController.ts
import { Request, Response } from 'express';
import { handleHttp } from '../utils/error.handle';
import { registerUser, loginUser, verificarTipoUsuario } from '../services/authService';

const register = async (req: Request, res: Response) => {
    try {
        const result = await registerUser(req.body);
        res.status(201).json(result);
    } catch (error: any) {
        res.status(401).json({ error: error.message });
        //handleHttp(res, "Error en el registro");
    }
}


const login = async (req: Request, res: Response) => {
    try {
        const { identificador, contra } = req.body;
        const result = await loginUser(identificador, contra);
        res.status(200).json(result);
    } catch (error: any) {
        res.status(401).json({ error: error.message });
        //handleHttp(res, "Error en el login");
    }
};

const verificarTipo = async (req: any, res: Response) => {
    try {
        const id = req.user.id_usuario; // <- obtenido del token
        const tipo = await verificarTipoUsuario(id);
        res.status(200).json(tipo);
    } catch (error: any){
        res.status(401).json({ error: error.message });
    }
};

export {register, login, verificarTipo};