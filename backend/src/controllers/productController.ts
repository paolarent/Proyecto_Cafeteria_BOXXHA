// src/controllers/productController.ts

import { Request, Response } from "express";
import { getBebidasCalientes, getBebidasFrias, getFrappes, getExtras, getPostres, getLeches, getTamanos, getSaboresCategoria } from "../services/productService";

export const getBebCalientes = async (req: Request, res: Response) => {
    try {
        const bebidas = await getBebidasCalientes();
        res.json(bebidas); 
    } catch (error){
        res.status(500).json({error: "Error al obtener bebidas calientes"});
    }
}

export const getSabores = async (req: Request, res: Response) => {
    try {
        const { categoria } = req.params;
        const sabores = await getSaboresCategoria(categoria);
        res.json(sabores); 
    } catch (error){
        res.status(500).json({error: "Error al obtener sabores"});
    } 
}

export const getBebFrias = async (req: Request, res: Response) => {
    try {
        const bebidas = await getBebidasFrias();
        res.json(bebidas); 
    } catch (error){
        res.status(500).json({error: "Error al obtener bebidas frias"});
    }
}

export const getFrappe = async (req: Request, res: Response) => {
    try {
        const bebidas = await getFrappes();
        res.json(bebidas); 
    } catch (error){
        res.status(500).json({error: "Error al obtener los frappes"});
    }
}

export const getPostre = async (req: Request, res: Response) => {
    try {
        const bebidas = await getPostres();
        res.json(bebidas); 
    } catch (error){
        res.status(500).json({error: "Error al obtener los postres"});
    }
}

export const getExtra = async (req: Request, res: Response) => {
    try {
        const bebidas = await getExtras();
        res.json(bebidas); 
    } catch (error){
        res.status(500).json({error: "Error al obtener los extras"});
    }
}

export const getLeche = async (req: Request, res: Response) => {
    try {
        const bebidas = await getLeches();
        res.json(bebidas); 
    } catch (error){
        res.status(500).json({error: "Error al obtener las leches"});
    }
}

export const getTamano = async (req: Request, res: Response) => {
    try {
        const bebidas = await getTamanos();
        res.json(bebidas); 
    } catch (error){
        res.status(500).json({error: "Error al obtener los tamaños"});
    }
}