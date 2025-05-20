// src/controllers/dashController.ts

import { Request, Response } from 'express';
import {pedidosRecientes} from '../services/dashService';

export const obtenerPedidos = async (req: Request, res: Response) => {
    try {
        const result = await pedidosRecientes() 
        res.status(200).json(obtenerPedidos);
    } catch (error: any) {
        // Regresar el codigo 500 
        res.status(500).json({error: error.message});
    }
}
