import React from "react";
import NavBar from "../components/NavBar";
import { useParams } from "react-router-dom";

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

const SaboresProducto: React.FC = () => {
    const { tipo, nombre } = useParams(); //Usamos useParams para obtener los parámetros de la URL de la ruta

    //Verificamos si los valores de tipo y nombre existen en los datos
    const sabores = saboresPorTipoYNombreProducto[tipo as string]?.[nombre?.toLowerCase() || ""] || [];

    if (sabores.length === 0) {
        return <p>No se encontraron sabores disponibles para {nombre} en tipo {tipo}.</p>;
    }

    return (
        <div className="min-h-screen flex flex-col">
            <header className="sticky top-0 z-50">
                <NavBar />
            </header>
            <main className="flex flex-1 bg-[#B0CEAC]">
                <section className="w-full flex flex-col items-center pt-5 space-y-10 pb-10">
                    <h2 className="font-Montserrat font-regular text-5xl text-center text-[#34251d]">
                        Sabores de {nombre} ({tipo})
                    </h2>
                    <div className="flex flex-wrap justify-center gap-10 w-full px-8">
                        {sabores.map((sabor, idx) => (
                            <p key={idx} className="text-xl font-semibold text-[#5C4848]">
                            {sabor}
                            </p>
                        ))}
                    </div>
                </section>
            </main>
        </div>
    );
};

export default SaboresProducto;

