// src/controllers/dashController.ts

import { Request, Response } from 'express';
import {pedidosRecientes, TotalPedidosHoy, TotalVentasHoy, TotalProductosHoy} from '../services/dashService';

export const obtenerPedidos = async (req: Request, res: Response) => {
    try {
        const result = await pedidosRecientes(); 
        res.status(200).json(result);
    } catch (error: any) {
        // Regresar el codigo 500 Internal Server Error
        res.status(500).json({error: error.message});
    }
};

export const TotalPedidos = async (req: Request, res: Response) => {
    try {
        const result = await TotalPedidosHoy(); 
        res.status(200).json(result);
    } catch (error: any) {
        res.status(500).json({error: error.message});
    }
};

export const TotalVentas = async (req: Request, res: Response) => {
    try {
        const resul = await TotalVentasHoy();
        res.status(200).json(resul);
    } catch (error: any) {
        res.status(500).json({error: error.message});
    }
};

export const TotalProductos = async (req: Request, res: Response ) => {
    try {
        const resul = await TotalProductosHoy;
        res.status(200).json(resul);
    } catch (error: any) {
        res.status(500).json({error: error.message});
    }
};