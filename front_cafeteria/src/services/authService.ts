// src/services/authService.ts

import axios from "axios";

const API_BASE_URL = "https://h2x0xj0m-3000.usw3.devtunnels.ms/authRoute";

export const registrarUsuario = async (datos: any) => {
  try {
    const response = await axios.post(`${API_BASE_URL}/register`, datos, {
      headers: {
        "Content-Type": "application/json",
      },
    });

    return response.data;
  } catch (error: any) {
    console.error("Error al registrar:", error);
  
    if (error.response) {
      console.error("Detalle del error:", error.response.data);
      throw new Error(error.response.data.message || "Error en el registro");
    } else if (error.request) {
      console.error("No se recibió respuesta del servidor", error.request);
      throw new Error("No se recibió respuesta del servidor");
    } else {
      console.error("Error desconocido", error.message);
      throw new Error("Error desconocido al registrar");
    }
  }
  
};

export const registrarUsuario_test = async (datos: any) => {
  try {
    const response = await axios.post(`${API_BASE_URL}/testregister`, datos, {
      headers: {
        "Content-Type": "application/json",
      },
    });

    return response.data;
  } catch (error: any) {
    console.error("Error al registrar:", error);
  
    if (error.response) {
      console.error("Detalle del error:", error.response.data);
      throw new Error(error.response.data.message || "Error en el registro");
    } else if (error.request) {
      console.error("No se recibió respuesta del servidor", error.request);
      throw new Error("No se recibió respuesta del servidor");
    } else {
      console.error("Error desconocido", error.message);
      throw new Error("Error desconocido al registrar");
    }
  }
  
};

export const loginUser = async (identificador: string, contra: string) => {
  try {
    const response = await axios.post(`${API_BASE_URL}/login`, {
      identificador,
      contra,
    });

    return response.data;
  } catch (error: any) {
    throw new Error(error.response?.data?.error || "Error en el login");
  }
};

export const verificarTipoUsuario = async () => {
  try{
    const token = localStorage.getItem("token");
    if (!token) {
      throw new Error("No se encontró token de autenticación");
    }
    // Verificar el tipo de usuario
    const response = await axios.get(`${API_BASE_URL}/tipoUsuario`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return response.data;
  } catch (error: any){
    return {error};
  }
}