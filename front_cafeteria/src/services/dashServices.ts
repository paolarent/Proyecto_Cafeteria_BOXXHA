// src/services/dashServices
import axios from "axios";

// Paola te refieres a esta manera??}   es que en alguna parte yo vi la ruta del tunel creo, tengo borroso eso,
// Las rutas estan en los demás servicios del frontend, ahi vas a encontra la ruta con el tunnel
const API_BASE_URL = "https://h2x0xj0m-3000.usw3.devtunnels.ms/dashRoute";
// http://25.4.40.124:5173/dashRoute


export const actualizarStatus = async (id: number, status: "A" | "B") => {
  try {
    const response = await axios.put(`${API_BASE_URL}/eliminarEmpleado/${id}`, { status });
    return response.data;
  } catch (error: any) {
    throw new Error(error.response?.data?.error || "Error al cambiar el status del empleado");
  }
};

export const actualizarEmpleado = async (id: number, empleadoData: {
  nombre?: string,
  apellido?: string,
  usuario?: string,
  correoTel?: string,

}) => {
  try {
    // Realizamos una petición PUT para hacer el update
    const response = await axios.put(`${API_BASE_URL}/actualizarEmpleado/${id}`, empleadoData);    
    return response.data;
  } catch (error: any) {
        throw new Error(error.response?.data?.error || "Error al actualizar empleado"); 
  }
};


export const obtenerEmpleados = async () => {
    try {
        const response = await axios.get(`${API_BASE_URL}/obtenerEmpleados`);
        return response.data;
    } catch (error: any) {
        throw new Error(error.response?.data?.error || "Error al obtener empleados");
    }
}

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

