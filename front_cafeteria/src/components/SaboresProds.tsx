import React from "react";
import NavBar from "../components/NavBar";
import { useParams } from "react-router-dom";
import fondoCafe from "../assets/fondo_cafe_mejorada.jpg";

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
            <header className="sticky top-0 z-50">  {/* hace que el header quede fijo en la parte superior mientras se hace scroll */}
                <NavBar />
            </header>

            <main className="flex flex-1">
            <section className="relative w-full flex flex-col items-center space-y-10 pb-10 overflow-hidden" 
                    style={{
                            backgroundImage: `url(${fondoCafe})`,
                            backgroundSize: "cover", 
                            backgroundPosition: "bottom",
                            backgroundRepeat: "no-repeat",
                        }}
                    >
                    {/* Capa de color con algo de opacidad encima, opcional */}
                    <div
                        className="absolute inset-0"
                        style={{ backgroundColor: "#f8e9df", opacity: 0.60 }}
                    />

                    {/*Titulo variable dependiendo de los props que recibe de las vistas*/}
                    <div className="relative z-10 pt-5">
                        <h2 className="font-Montserrat font-regular text-5xl text-center text-[#34251d] bg-[#ffffff] px-6 py-3 rounded-2xl shadow-md">
                            Sabores de <span className="font-medium">{nombre?.toUpperCase()}</span> {/*({tipo})*/}
                        </h2>
                    </div>

                    <div className="flex flex-wrap justify-center gap-10 w-full px-8">
                        {sabores.map((sabor, idx) => (
                            <div className="relative z-10 bg-[#ffffff] px-5 py-5 rounded-2xl">
                                <div className="group flex flex-col items-center transition-transform duration-300 hover:scale-105">
                                    <img className="bg-[#D9D9D9] rounded-[20px] w-[200px] h-[200px] mb-2" />
                                    <button className="w-full font-Montserrat font-bold bg-[#5C4848] text-[#ffffff] py-2 px-4 rounded shadow-md text-xl opacity-80 
                                        group-hover:bg-[#B0CEAC] group-hover:text-[#000000] rounded-[10px]">
                                        {sabor}
                                    </button>
                                </div>
                                
                                {/* <p key={idx} className="font-Montserrat font-regular text-xl font-semibold text-[#000000]">
                                {sabor}
                                </p>*/}
                            </div>
                        ))}
                    </div>
                </section>
            </main>
        </div>
    );
};

export default SaboresProducto;

