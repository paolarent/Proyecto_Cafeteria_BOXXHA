import React, { createContext, useContext, useState, useEffect } from 'react';
import { getLeches, getExtras, getTamanos } from '../services/productService';
import { verificarTipoUsuario } from '../services/authService';

type CatalagoItem = {
    id: number;
    nombre: string;
    precio: number;
};

type Catalagos = {
    leches: CatalagoItem[];
    extras: CatalagoItem[];
    tamanos: CatalagoItem[];
    tipoUsuario: string | null;
};

const CatalagosContext = createContext<Catalagos | undefined>(undefined);

export const CatalagosProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const [catalagos, setCatalagos] = useState<Catalagos>({
        leches: [],
        extras: [],
        tamanos: [],
        tipoUsuario: null,
    });

    useEffect(() => {
        const fetchCatalagos = async () => {
            try {
                const [lechesData, extrasData, tamanosData, tipoUser] = await Promise.all([
                    getLeches(),
                    getExtras(),
                    getTamanos(),
                    verificarTipoUsuario(),
                ]);

                const leches = lechesData.map((l: any) => ({
                    id: l.id_leche,
                    nombre: l.nombre,
                    precio: l.precio_leche,
                }));

                const extras = extrasData.map((e: any) => ({
                    id: e.id_extra,
                    nombre: e.nombre,
                    precio: e.precio_extra,
                }));

                const tamanos = tamanosData.map((t: any) => ({
                    id: t.id_tamano,
                    nombre: t.nombre,
                    precio: t.precio_tamano,
                }));

                setCatalagos({
                    leches,
                    extras,
                    tamanos,
                    tipoUsuario: tipoUser.user.tipo_usuario,
                });
            } catch (error) {
                console.error('Error fetching catalagos:', error);
            }
        };
        fetchCatalagos();
    }, []);

    return (
        <CatalagosContext.Provider value={catalagos}>
            {children}
        </CatalagosContext.Provider>
    );
};

export const useCatalagos = () => {
    const context = useContext(CatalagosContext);
    if (!context) {
        throw new Error('useCatalagos must be used within a CatalagosProvider');
    }
    return context;
};
