import React, { createContext, useContext, useState } from 'react';

type Pedido = {
    tipo?: 'caliente' | 'frio' | 'frappe' | 'postre'; // para decidir qué campo de ID usar
    nombre?: string;            // para navegación y visualización, ej: 'latte', 'moka'
    id_bebida?: number;         // id de la bebida según el tipo (id_bebfria, id_frappe, etc.)
    id_tamano?: number;
    regular?: boolean;
    id_leche?: number;
    extras?: number[];          // id de extras seleccionados
    total?: number;
};

type PedidoContextType = {
    pedido: Pedido;
    setPedido: (pedido: Pedido) => void;
    actualizarPedido: (nuevo: Partial<Pedido>) => void;
};

const PedidoContext = createContext<PedidoContextType | undefined>(undefined);

export const PedidoProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const [pedido, setPedido] = useState<Pedido>({});

    const actualizarPedido = (nuevo: Partial<Pedido>) => {
        setPedido(prev => ({ ...prev, ...nuevo}));
    };

    return (
        <PedidoContext.Provider value={{ pedido, setPedido, actualizarPedido}}>
            {children}
        </PedidoContext.Provider>
    );
};

export const usePedido = () => {
    const context = useContext(PedidoContext);
    if (!context) throw new Error("usePedido debe usarse dentro de PedidoProvider");
    return context;
};