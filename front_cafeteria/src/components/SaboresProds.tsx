import React from "react";
import NavBar from "../components/NavBar";
import { useParams } from "react-router-dom";
import fondoCafe from "../assets/fondo_cafe_mejorada.jpg";
import regular from "../assets/sabores/regular.png";
import maracuya from "../assets/sabores/maracuya.png";
import limon from "../assets/sabores/limon.png";
import gin_ale from "../assets/sabores/gin_ale.png";
import caramelo from "../assets/sabores/caramelo.png";
import vainilla from "../assets/sabores/vainilla.png";
import avellana from "../assets/sabores/avellana.png";
import moka from "../assets/sabores/moka.png";
import moka_blanco from "../assets/sabores/moka_blanco.png";
import dulce_leche from "../assets/sabores/dulceleche.png";
import chai from "../assets/sabores/chai.png";
import dirty_chai from "../assets/sabores/dirtychai.png";
import te_verde from "../assets/sabores/teverde.png";
import te_negro from "../assets/sabores/tenegro.png";
import maracuya_gt from "../assets/sabores/maracuya_greentea.png";
import strawberry_bt from "../assets/sabores/strawberry_blacktea.png";
import tisana_be from "../assets/sabores/tisana_berry.png";
import matcha from "../assets/sabores/matcha.png";
import raffaello from "../assets/sabores/Raffaello2.png";
import fresa from "../assets/sabores/fresa.png";
import oreo from "../assets/sabores/oreo.png";
import nutella from "../assets/sabores/nutella2.png";
import coco from "../assets/sabores/coco.png";
import rol_clasico from "../assets/sabores/rol_canela.png";
import rol_nuez from "../assets/sabores/rol_nuez.png";
import rol_ferrero from "../assets/sabores/rol_ferrero.png";
import rol_lotus from "../assets/sabores/rol_lotus.png";
import rol_kinder from "../assets/sabores/rol_kinder.png";
import galleta_chispas from "../assets/sabores/galleta_cc.png";
import alfajor from "../assets/sabores/alfajor.png";
import galleta_rv from "../assets/sabores/galleta_rv.png";
import pastel_zanahoria from "../assets/sabores/pastel_zanahoria.png";
import pastel_chocolate from "../assets/sabores/pastel_chocolate.png";
import pastel_rv from "../assets/sabores/pastel_rv.png";
import pay_clasico from "../assets/sabores/pay_clasico.png";
import pay_lotus from "../assets/sabores/pay_lotus.png";
import pay_frutosr from "../assets/sabores/pay_frutosr.png";
import pay_tortuga from "../assets/sabores/pay_tortuga.png";

type SaboresMap = {
    [key: string]: {
        [producto: string]: string[];
    };
};

type ImagenMap = {
    [tipo: string]: {
        [producto: string]: {
            [sabor: string]: string;
        };
    };
};

const imagenesSabores: ImagenMap = {
    caliente: {
        expresso: {
            "Regular": regular,
            "Maracuya Gin": maracuya
        },

        americano: {
            "Regular": regular,
            "Limon": limon,
            "Gin Ale": gin_ale
        },

        latte: {
            "Regular": regular,
            "Caramelo": caramelo,
            "Vainilla": vainilla,
            "Avellana": avellana,
            "Moka": moka,
            "Moka Blanco": moka_blanco,
            "Dulce de leche": dulce_leche
        },

        chai: {
            "Regular": chai,
            "Dirty Chai": dirty_chai
        },

        té: {
            "Té Verde": te_verde,
            "Té Negro": te_negro,
            "Maracuya Green Tea": maracuya_gt,
            "Strawberry Black Tea": strawberry_bt,
            "Tisana Berry": tisana_be
        },

        matcha: {
            "Regular": matcha,
            "Caramelo": caramelo,
            "Raffaello": raffaello
        }
    },

    frio: {
        latte: {
            "Regular": regular,
            "Caramelo": caramelo,
            "Vainilla": vainilla,
            "Avellana": avellana,
            "Moka": moka,
            "Moka Blanco": moka_blanco,
            "Dulce de leche": dulce_leche
        },

        frappe: {
            "Frappuccino": regular,
            "Strawberry Cream": fresa,
            "Oreo": oreo,
            "Nutella": nutella,
            "Raffaello": raffaello
        },

        americano: {
            "Regular": regular,
            "Limon": limon,
            "Gin Ale": gin_ale
        },

        matcha: {
            "Regular": matcha,
            "Caramelo": caramelo,
            "Raffaello": raffaello,
            "Pasion Fruit": maracuya,
            "Coconut": coco
        },

        chai: {
            "Regular": chai,
            "Dirty Chai": dirty_chai
        },

        té: {
            "Té Verde": te_verde,
            "Té Negro": te_negro,
            "Maracuya Green Tea": maracuya_gt,
            "Strawberry Black Tea": strawberry_bt,
            "Tisana Berry": tisana_be
        }
    },

    postre: {
        roles: {
            "Clasico": rol_clasico,
            "Nuez": rol_nuez,
            "Ferrero Rocher": rol_ferrero,
            "Lotus": rol_lotus,
            "Kinder Bueno": rol_kinder
        },

        galletas: {
            "Chocolate": galleta_chispas,
            "Alfajor": alfajor,
            "Red Velvet": galleta_rv
        },

        pasteles: {
            "Zanahoria": pastel_zanahoria,
            "Chocolate": pastel_chocolate,
            "Red Velvet": pastel_rv
        },

        pays: {
            "Cheesecake clasico": pay_clasico,
            "Lotus": pay_lotus,
            "Frutos Rojos": pay_frutosr,
            "Tortuga": pay_tortuga
        }
    },

    nuevo: {    //NINGUNO DE LOS NUEVOS TIENE SABORES, IRIAN DIRECTAMENTE AL TAMAÑO Y SI APLICA, NO IMAGENES

    }
};

const saboresPorTipoYNombreProducto: SaboresMap = {
    caliente: {
        expresso: ["Regular", "Maracuya Gin"],
        americano: ["Regular", "Limon", "Gin Ale", ],
        latte: ["Regular", "Caramelo", "Vainilla", "Avellana", "Moka", "Moka Blanco", "Dulce de leche"],
        //cappuccino: no tiene sabores, solo el regular/tradicional
        chai: ["Regular", "Dirty Chai"],
        té: ["Té Verde", "Té Negro", "Maracuya Green Tea", "Strawberry Black Tea", "Tisana Berry"],
        matcha: ["Regular", "Caramelo", "Raffaello"]
        //chocolate no tiene sabores
    },

    frio: {
        latte: ["Regular", "Caramelo", "Vainilla", "Avellana", "Moka", "Moka Blanco", "Dulce de leche"],
        frappe: ["Frappuccino", "Strawberry Cream", "Oreo", "Nutella", "Raffaello"],
        americano: ["Regular", "Limon", "Gin Ale", ],
        matcha: ["Regular", "Caramelo", "Raffaello", "Pasion Fruit", "Coconut"],
        chai: ["Regular", "Dirty Chai"],
        té: ["Té Verde", "Té Negro", "Maracuya Green Tea", "Strawberry Black Tea", "Tisana Berry"]
        //taro: solo es el regular, no hay sabores en el menú
    },

    postre: {
        roles: ["Clasico", "Nuez", "Ferrero Rocher", "Lotus", "Kinder Bueno"],
        galletas: ["Chocolate", "Alfajor", "Red Velvet"],
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
                    <div className="relative z-10 border border-black border-2 rounded-2xl">
                        <h2 className="font-Montserrat font-regular text-5xl text-center text-[#34251d] bg-[#ffffff] px-6 py-3 rounded-2xl shadow-md">
                            Sabores de <span className="font-medium">{nombre?.toUpperCase()}</span> {/*({tipo})*/}
                        </h2>
                    </div>

                    <div className="flex flex-wrap justify-center gap-10 w-full px-8">
                        {sabores.map((sabor, idx) => (
                            <div className="relative z-10 bg-[#ffffff] px-5 py-5 rounded-2xl border border-black border-2 transition-transform duration-300 hover:scale-105">
                                <div className="group flex flex-col items-center w-[200px] h-[250px]">
                                    <img 
                                        src={imagenesSabores[tipo as string]?.[nombre?.toLowerCase() || ""]?.[sabor] || ""}
                                        alt={sabor}
                                        className="rounded-[20px] w-[160px] h-[140px] mt-6 mb-6" 
                                    />
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

