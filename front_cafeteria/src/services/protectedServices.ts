import axios from "axios";

export const getResumen = async () => {

  const token = localStorage.getItem("token");

  if (!token) {
    console.log("No hay token, redirigiendo a /"); // Mensaje de depuración
  }

  const API_BASE_URL = "https://h2x0xj0m-3000.usw3.devtunnels.ms/privateRoutes";

  const response = await axios.get(`${API_BASE_URL}/resumen`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  return response.data;
};