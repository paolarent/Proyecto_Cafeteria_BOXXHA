import { createContext, useContext, useState, ReactNode } from "react";

interface NotificacionContextType {
    contador: number;
    notis: string[];
    agregarNotificacion: (mensaje: string) => void;
    limpiarNotificaciones: () => void;
}

const NotificacionContext = createContext<NotificacionContextType | undefined>(undefined);

export const NotificacionProvider = ({ children }: { children: ReactNode }) => {
    const [contador, setContador] = useState(0);
    const [notis, setNotis] = useState<string[]>([]);

    const agregarNotificacion = (mensaje: string) => {
        setNotis((prev) => [mensaje, ...prev]);
        setContador((prev) => prev + 1);
    };

    const limpiarNotificaciones = () => {
        setContador(0);
    };

    return (
        <NotificacionContext.Provider value={{ contador, notis, agregarNotificacion, limpiarNotificaciones }}>
            {children}
        </NotificacionContext.Provider>
    );
};

export const useNotificaciones = () => {
    const context = useContext(NotificacionContext);
    if (!context) {
        throw new Error("useNotificaciones debe usarse dentro de NotificacionProvider");
    }
    return context;
};
