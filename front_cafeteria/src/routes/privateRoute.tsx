// src/components/privateRoute.tsx
import { Navigate } from "react-router-dom";
import { ReactNode } from "react";

interface Props {
  children: ReactNode;
}

const PrivateRoute = ({ children }: Props) => {
  const token = localStorage.getItem("token");

  // Si no hay token, redirige al pagina de error
  if (!token) {
    return <Navigate to="/401Error" replace />;
  }

  // Si hay token, permite el acceso
  return <>{children}</>;
};

export default PrivateRoute;
