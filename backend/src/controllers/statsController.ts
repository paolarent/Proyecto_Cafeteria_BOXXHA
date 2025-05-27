// backend/src/statsController/statsController.ts

import { Request, Response } from 'express';
import { ProductoEstrella, VentasPorCategoria } from '../services/statsService';

export const Producto_mas_vendido = async (req: Request, res: Response) => {
    try {
        const result = await ProductoEstrella(); 
        res.status(200).json(result);
    } catch (error: any) {
        res.status(400).json({error: error.message});
    }
};

export const Ventas_Categoria = async (req: Request, res: Response) => {
    try {
        const result = await VentasPorCategoria(); 
        res.status(200).json(result);
    } catch (error: any) {
        res.status(400).json({error: error.message});
    }
};
