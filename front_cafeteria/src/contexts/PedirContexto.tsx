import React, { createContext, useContext, useRef, ReactNode } from 'react';

interface MenuContextType {
    menuRef: React.RefObject<HTMLDivElement | null>;
    scrollToMenu: () => void;
    inicioRef: React.RefObject<HTMLDivElement | null>;
    scrollToInicio: () => void;
}

// Añadimos `children` como un prop de tipo `ReactNode`
interface MenuProviderProps {
    children: ReactNode;
}

// Crea el contexto
const MenuContext = createContext<MenuContextType | undefined>(undefined);

// Componente proveedor que envolverá tu aplicación
export const MenuProvider: React.FC<MenuProviderProps> = ({ children }) => {
    const menuRef = useRef<HTMLDivElement | null>(null);
    const inicioRef = useRef<HTMLDivElement | null>(null);

    //Función para hacer scroll al menú
    const scrollToMenu = () => {
        if (menuRef.current) {
        menuRef.current.scrollIntoView({ behavior: 'smooth' });
        }
    };

    //Función para hacer scroll al inicio
    const scrollToInicio = () => {
        if (inicioRef.current) {
        inicioRef.current.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <MenuContext.Provider value={{ menuRef, scrollToMenu, inicioRef, scrollToInicio }}>
        {children}
        </MenuContext.Provider>
    );
};

//Custom hook para usar el contexto
export const useMenuContext = (): MenuContextType => {
    const context = useContext(MenuContext);
    if (!context) {
        throw new Error('useMenuContext se debe usar con MenuProvider');
    }
    return context;
};
