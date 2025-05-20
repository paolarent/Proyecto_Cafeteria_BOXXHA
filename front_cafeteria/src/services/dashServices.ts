// src/services/dashServices
import axios from "axios";

const API_BASE_URL = "https://h2x0xj0m-3000.usw3.devtunnels.ms/dashRoute";

export const obtenerPedidos = async () => {
    try {
        const response = await axios.get(`${API_BASE_URL}/pedidosrecientes`);
        return response.data;
    } catch (error: any) {
        throw new Error(error.response?.data?.error || "Error al obtener ordenes");
    }
};

export const TotalPedidosHoy = async () => {
    try {
        const response = await axios.get(`${API_BASE_URL}/totalpedidoshoy`);
        return response.data;
    } catch (error: any) {
        throw new Error(error.response?.data?.error || "Error al obtener total pedidos");
    }
};

export const TotalVentasHoy = async () => {
    try {
        const response = await axios.get(`${API_BASE_URL}/totalventashoy`);
        return response.data;
    } catch (error: any) {
        throw new Error(error.response?.data?.error || "Error al obtener total ventas");
        return 0;
    }  
};

export const TotalProductosHoy = async () => {
    try {
        const response = await axios.get(`${API_BASE_URL}/totalproductoshoy`);
        return response.data;
    } catch (error: any) {
        throw new Error(error.response?.data?.error || "Error al obtener total ventas");
        return 0;
    }  
};

