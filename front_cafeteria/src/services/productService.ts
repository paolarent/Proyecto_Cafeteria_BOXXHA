import axios from "axios";

const API_BASE_URL = "https://h2x0xj0m-3000.usw3.devtunnels.ms/productRoutes";

export const getCategoria = async (tabla: string) => {
    try {
        const response = await axios.get(`${API_BASE_URL}/${tabla}/categorias`);
        return response.data;
    } catch (error){
        console.error("Error al obtener categorias: ", error);
    }
};

export const getSabor = async (tabla: string, nombre: string, sabor: string) => {
    try {
        const response = await axios.get(`${API_BASE_URL}/${tabla}/sabores/${nombre}/${sabor}`);
        return response.data;
    } catch (error){
        console.error("Error al obtener el id del sabor: ", error);
    }
}

export const getProductos = async (tabla: string) => {
    try {
        const response = await axios.get(`${API_BASE_URL}/${tabla}`);
        return response.data;
    } catch (error){
        console.error("Error al obtener productos: ", error);
    }
}

export const obtenerLeches = async () => {
    try {
      const response = await axios.get(`${API_BASE_URL}/leche`);
      return response.data; // Devuelves los datos de las leches que te da la API
    } catch (error) {
      console.error("Error al obtener las leches:", error);
      return []; // En caso de error, devuelve un array vacío
    }
  };