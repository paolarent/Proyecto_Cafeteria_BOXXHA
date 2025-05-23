import { createContext, useContext, useState, ReactNode, useEffect } from "react";
import socket from "../utils/socket"; 

interface Notificacion {
    id_pedido: number;
    mensaje: string;
}

interface NotificacionContextType {
    contador: number;
    notis: Notificacion[];
    agregarNotificacion: (noti: Notificacion) => void;
    limpiarNotificaciones: () => void;
    eliminarNotificacion: (id_pedido: number) => void;
}

const NotificacionContext = createContext<NotificacionContextType | undefined>(undefined);

export const NotificacionProvider = ({ children }: { children: ReactNode }) => {
    const [contador, setContador] = useState(0);
    const [notis, setNotis] = useState<Notificacion[]>([]);

    const agregarNotificacion = (noti: Notificacion) => {
        setNotis((prev) => [noti, ...prev]);
        setContador((prev) => prev + 1);
    };

    const limpiarNotificaciones = () => {
        setContador(0);
    };

    const eliminarNotificacion = (id_pedido: number) => {
        setNotis((prev) => prev.filter(noti => noti.id_pedido !== id_pedido));
    };

    // Aquí colocamos el listener del socket PARA TODA LA APP:
    useEffect(() => {
        const handleNotificacion = (data: { id_pedido: number; mensaje: string }) => {
            agregarNotificacion({ id_pedido: data.id_pedido, mensaje: data.mensaje });
        };

        socket.on('notificacion', handleNotificacion);

        return () => {
            socket.off('notificacion', handleNotificacion);
        };
    }, []);

    return (
        <NotificacionContext.Provider value={{ contador, notis, agregarNotificacion, limpiarNotificaciones, eliminarNotificacion }}>
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
