import React, { createContext, useContext, useState, useEffect } from 'react';

export type Pedido = {
    tipo?: 'caliente' | 'frio' | 'frappe' | 'postre';
    nombre?: string;
    id_bebida?: number;
    id_postre?: number;
    sabor?: string;
    id_tamano?: number;
    regular?: boolean;
    id_leche?: number;
    extras?: { id: number; cantidad: number; precio: number }[];
    completo?: boolean;
    total: number;
};

type PedidoContextType = {
    pedidos: Pedido[];
    agregarPedido: (pedido: Pedido) => number;
    actualizarPedido: (index: number, nuevo: Partial<Pedido>) => void;
    eliminarPedido: (index: number) => void;
    resetPedidos: () => void;
    pedidoActualIncompleto: Pedido | null;
    indexActualIncompleto : number;
    eliminarUnaCoincidencia: (parcial: Partial<Pedido>) => void;
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

    const eliminarUnaCoincidencia = (parcial: Partial<Pedido>) => {
        // Actualizamos el estado de los pedidos
        setPedidos((prev) => {
            // Buscamos el índice del primer pedido que coincida exactamente con las propiedades
            const index = prev.findIndex(p =>
                p.tipo === parcial.tipo &&  
                p.nombre === parcial.nombre &&
                p.sabor === parcial.sabor &&
                p.id_tamano === parcial.id_tamano &&
                p.id_leche === parcial.id_leche &&
                JSON.stringify(p.extras || []) ===  //compara los extras
                JSON.stringify(parcial.extras || []) //usamos JSON.stringify para comparar arrays de objetos
            );

            // Si no encontramos coincidencia, devolvemos el estado anterior (lista original)
            if (index === -1) return prev;

            // Si encontramos coincidencia, creamos una copia del estado anterior y eliminamos el pedido en el índice encontrado
            const copia = [...prev];
            copia.splice(index, 1); // eliminamos solo un elemento
            
            // Actualizamos el estado con la nueva lista
            return copia;
        });
    };

    return (
        <PedidoContext.Provider value={{ pedidos, agregarPedido, actualizarPedido, eliminarPedido, resetPedidos, pedidoActualIncompleto, indexActualIncompleto, eliminarUnaCoincidencia }}>
            {children}
        </PedidoContext.Provider>
    );
};

export const usePedido = () => {
    const context = useContext(PedidoContext);
    if (!context) throw new Error("usePedido debe usarse dentro de PedidoProvider");
    return context;
};