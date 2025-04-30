import React, { createContext, useState, useEffect, useContext, ReactNode } from "react";
import { getCategoria } from "../services/productService";

// Definimos el tipo del contexto
interface CategoriaContextType {
  categorias: string[];
  loading: boolean;
}

// Definir el tipo de las propiedades del Provider, incluyendo children
interface CategoriaProviderProps {
  children: ReactNode;
}

const CategoriaContext = createContext<CategoriaContextType | undefined>(undefined);

export const CategoriaProvider: React.FC<CategoriaProviderProps> = ({ children }) => {
  const [categorias, setCategorias] = useState<string[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchCategorias = async () => {
      const data = await getCategoria("bebcaliente");
      if (data) {
        const nombres = data.map((item: { nombre: string }) => item.nombre);
        setCategorias(nombres);
      }
      setLoading(false);
    };
    fetchCategorias();
  }, []);

  return (
    <CategoriaContext.Provider value={{ categorias, loading }}>
      {children}
    </CategoriaContext.Provider>
  );
};

export const useCategorias = () => {
  const context = useContext(CategoriaContext);
  if (!context) {
    throw new Error("useCategorias must be used within a CategoriaProvider");
  }
  return context;
};
