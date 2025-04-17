import React from "react";

interface SaboresProductoProps {
    tipo: string;
    nombre: string;
}

type SaboresMap = {
    [key: string]: {
        [producto: string]: string[];
    };
};

const saboresPorTipoYNombreProducto: SaboresMap = {
    caliente: {
        expresso: ["Regular", "Maracuya Gin Expresso"],
        americano: ["Regular", "Limon", "Gin Ale", ],
        latte: ["Regular", "Caramelo", "Vainilla", "Avellana", "Moka", "Moka Blanco", "Dulce de leche"],
        //cappuccino: no tiene sabores, solo el regular/tradicional
        chai: ["Regular", "Dirty Chai"],
        te: ["Té verde", "Té Negro", "Maracuya Green Tea", "Strawberry Black Tea", "Tisana Berry"],
        matcha: ["Regular", "Caramel", "Rafaelo"]
        //chocolate no tiene sabores
    },

    frio: {
        latte: ["Regular", "Caramelo", "Vainilla", "Avellana", "Moka", "Moka Blanco", "Dulce de leche"],
        frappe: ["Frappuccino", "Strawberry Cream", "Oreo", "Nutella", "Rafaelo"],
        americano: ["Regular", "Limon", "Gin Ale", ],
        matcha: ["Regular", "Caramel", "Rafaelo", "Pasion Fruit", "Coconut"],
        chai: ["Regular", "Dirty Chai"],
        te: ["Té verde", "Té Negro", "Maracuya Green Tea", "Strawberry Black Tea", "Tisana Berry"]
        //taro: solo es el regular, no hay sabores en el menú
    },

    postre: {
        roles: ["Clasico", "Nuez", "Ferrero Rocher", "Lotus", "Kinder Delice"],
        galletas: ["Chispas de chocolate", "Alfajor", "Red Velvet"],
        pasteles: ["Zanahoria", "Chocolate", "Red Velvet"],
        pays: ["Cheesecake clasico", "Lotus", "Frutos Rojos", "Tortuga"]
    },

    nuevo: {        //NINGUNO DE LOS NUEVOS TIENE SABORES, IRIAN DIRECTAMENTE AL TAMAÑO Y SI APLICA
        //affogato: [""]
        //irlandes
        //frappe lotus
        //frappe caramelo
    },
};

const SaboresProducto: React.FC<SaboresProductoProps> = ({ tipo, nombre }) => {
    const sabores = saboresPorTipoYNombreProducto[tipo]?.[nombre.toLowerCase()] || [];

    return (
        <div className="flex flex-wrap justify-center gap-10 w-full px-8">
          {sabores.map((sabor, idx) => (
            <div
              key={idx}
              className="group flex flex-col items-center transition-transform duration-300 hover:scale-105"
            >
              <img
                className="bg-[#D9D9D9] rounded-[20px] w-[250px] h-[250px] mb-2"
                alt={sabor}
              />
              <button
                className="w-full font-Montserrat font-bold bg-[#5C4848] text-[#ffffff] py-2 px-4 rounded shadow-md text-xl opacity-80 
                group-hover:bg-[#f0eceb] group-hover:text-[#38241c] rounded-[10px]"
              >
                {sabor.toUpperCase()}
              </button>
            </div>
          ))}
        </div>
    );
};
    
export default SaboresProducto;

