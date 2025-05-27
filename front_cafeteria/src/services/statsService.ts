// src/services/dashServices
import axios from "axios";

// Paola te refieres a esta manera??}   es que en alguna parte yo vi la ruta del tunel creo, tengo borroso eso,
// Las rutas estan en los demás servicios del frontend, ahi vas a encontra la ruta con el tunnel
const API_BASE_URL = "https://h2x0xj0m-3000.usw3.devtunnels.ms/statsRoute";
// http://25.4.40.124:5173/dashRoute


export const ProductoEstrella = async () => {
    try {
        const response = await axios.get(`${API_BASE_URL}/productoestrella`);
        return response.data;
    } catch (error: any) {
        throw new Error(error.response?.data?.error || "Error al obtener producto estrella");
    }
}

export const Ventas_Categoria = async () => {
    try {
        const response = await axios.get(`${API_BASE_URL}/ventas_categoria`);
        return response.data;
    } catch (error: any) {
        throw new Error(error.response?.data?.error || "Error al obtener producto estrella");
    }
}