// src/components/privateRoute.tsx
import { Navigate } from "react-router-dom";
import { ReactNode } from "react";

interface Props {
  children: ReactNode;
}

const PrivateRoute = ({ children }: Props) => {
  const token = localStorage.getItem("token");

  console.log("Token en PrivateRoute:", token); // Verifica el token en la consola
  // Si no hay token, redirige al login
  if (!token) {
    console.log("No hay token, redirigiendo a /login"); // Mensaje de depuración
    return <Navigate to="/login" replace />;
  }

  // Si hay token, permite el acceso
  return <>{children}</>;
};

export default PrivateRoute;
