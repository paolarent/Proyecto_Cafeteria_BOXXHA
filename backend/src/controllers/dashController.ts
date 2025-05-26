// src/controllers/dashController.ts

import { Request, Response } from 'express';
import {actualizarStatusEmpleado, editarEmpleado, pedidosRecientes, TotalPedidosHoy, TotalVentasHoy, TotalProductosHoy, ObtenerEmpleados} from '../services/dashService';

export const actualizarEstado = async (req: Request, res: Response) => {
    try {
        const { id } = req.params;
        const {status} = req.body;
        const empleadoId = Number(id);
        const result = await actualizarStatusEmpleado(empleadoId, status);
        res.status(200).json(result);
    } catch (error: any) {
        res.status(500).json({error: error.message});
    }
}

export const actualizarEmpleado = async (req: Request, res: Response) => {
    try {
        const { id } = req.params;
        const empleadoData = req.body;
        const empleadoId = Number(id);
        const result = await editarEmpleado(empleadoId, empleadoData);
        res.status(200).json(result);
    } catch (error: any) {
        res.status(500).json({error: error.message});
    }
}
export const obtenerEmpleados = async (req: Request, res: Response) => {
    try {
        const result = await ObtenerEmpleados();
        res.status(200).json(result);
    } catch (error: any) {
        res.status(500).json({error: error.message});
    }
}

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
        const resul = await TotalProductosHoy();
        res.status(200).json(resul);
    } catch (error: any) {
        res.status(500).json({error: error.message});
    }
};