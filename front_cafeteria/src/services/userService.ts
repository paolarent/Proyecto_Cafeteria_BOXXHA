// src/services/userService.ts

import axios from "axios";

const API_BASE_URL = "https://h2x0xj0m-3000.usw3.devtunnels.ms/userRoutes";

export const updateUser = async (data: {
    nombre: string,
    apellido: string,
    usuario: string,
}) => {
    try {
        const token = localStorage.getItem("token");
        const response = await axios.put(
            `${API_BASE_URL}/actualizarUser`, 
            data,
            {
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            } 
        );
        return response.data;
    } catch (error: any){
        console.error("Error al actualizar el usuario: ", error.response?.data || error.message);
        throw error; 
    }
}

export const updatePassword = async (data: {
    antiguaContra: string,
    contra: string,
}) => {
    try {
        const token = localStorage.getItem("token");
        const response = await axios.put(
            `${API_BASE_URL}/actualizarContra`, 
            data,
            {
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            } 
        );
        return response.data;
    } catch (error: any){
        console.error("Error al actualizar la contraseña: ", error.response?.data || error.message);
        throw error;
    }
}