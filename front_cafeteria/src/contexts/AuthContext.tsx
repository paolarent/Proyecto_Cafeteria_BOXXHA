import React, { createContext, useContext, useState, useEffect } from 'react';
import { verificarTipoUsuario } from '../services/authService';

type AuthContextType = {
  tipoUsuario: string;
  setTipoUsuario: (tipo: string) => void;
  clearTipoUsuario: () => void;
  loading: boolean;
};

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [tipoUsuario, setTipoUsuario] = useState<string>('');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchTipoUsuario = async () => {
      const token = localStorage.getItem('token');
      if (!token) {
        setTipoUsuario('');
        setLoading(false);
        return;
      }

      try {
        const response = await verificarTipoUsuario();
        setTipoUsuario(response?.user?.tipo_usuario || '');
      } catch (error) {
        console.error('Error al verificar tipo de usuario:', error);
        setTipoUsuario('');
      } finally {
        setLoading(false);
      }
    };

    fetchTipoUsuario();
  }, []);

  const clearTipoUsuario = () => {
    localStorage.removeItem('token');
    setTipoUsuario('');
  };

  return (
    <AuthContext.Provider
      value={{
        tipoUsuario,
        setTipoUsuario,
        clearTipoUsuario,
        loading,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) throw new Error('useAuth debe usarse dentro de un AuthProvider');
  return context;
};
