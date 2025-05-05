import React, { createContext, useContext, useState, useEffect } from 'react';

type Pedido = {
    tipo?: 'caliente' | 'frio' | 'frappe' | 'postre';
    nombre?: string;
    id_bebida?: number;
    id_postre?: number;
    sabor?: string;
    id_tamano?: number;
    regular?: boolean;
    id_leche?: number;
    extras?: { id: number; cantidad: number }[];
    completo?: boolean;
    total?: number;
};

type PedidoContextType = {
    pedidos: Pedido[];
    agregarPedido: (pedido: Pedido) => number;
    actualizarPedido: (index: number, nuevo: Partial<Pedido>) => void;
    eliminarPedido: (index: number) => void;
    resetPedidos: () => void;
    pedidoActualIncompleto: Pedido | null;
    indexActualIncompleto : number;
};

const PedidoContext = createContext<PedidoContextType | undefined>(undefined);

export const PedidoProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const [pedidos, setPedidos] = useState<Pedido[]>(() => {
        const stored = localStorage.getItem('pedidos');
        return stored ? JSON.parse(stored) : [];
    });

    useEffect(() => {
        const user = localStorage.getItem('usuario');
        if (user) {
            localStorage.setItem('pedidos', JSON.stringify(pedidos));
        } else {
            localStorage.removeItem('pedidos'); // Limpia los pedidos si no hay sesión
        }
    }, [pedidos]); // Solo guarda si el usuario está logueado
    
    const agregarPedido = (pedido: Pedido): number => {
        const user = localStorage.getItem("usuario");
        if (!user) return -1;
    
        const nuevo = [...pedidos, pedido];
        setPedidos(nuevo);
        return nuevo.length - 1;
    };

    const actualizarPedido = (index: number, nuevo: Partial<Pedido>) => {
        setPedidos(prev => {
            const copia = [...prev];
            copia[index] = { ...copia[index], ...nuevo };
            return copia;
        });
    };

    const eliminarPedido = (index: number) => {
        setPedidos(prev => prev.filter((_, i) => i !== index));
    };

    const resetPedidos = () => {
        setPedidos([]);
        localStorage.removeItem('pedidos');
    };

    const pedidoActualIncompleto = (() => {
        const pedido = pedidos[pedidos.length - 1];
        return pedido && pedido.completo !== true ? pedido : null;
    })();
    
    
    const indexActualIncompleto = pedidos.findIndex(pedido => !pedido.completo);

    return (
        <PedidoContext.Provider value={{ pedidos, agregarPedido, actualizarPedido, eliminarPedido, resetPedidos, pedidoActualIncompleto, indexActualIncompleto }}>
            {children}
        </PedidoContext.Provider>
    );
};

export const usePedido = () => {
    const context = useContext(PedidoContext);
    if (!context) throw new Error("usePedido debe usarse dentro de PedidoProvider");
    return context;
};