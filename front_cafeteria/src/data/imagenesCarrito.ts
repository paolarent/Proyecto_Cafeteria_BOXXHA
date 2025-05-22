//Importación de imágenes
import rol from "../assets/postres.jpg";
import galleta from "../assets/galleta.jpg";
import pastel from "../assets/pastel.jpg";
import pay from "../assets/pay.jpg";
import frappe from "../assets/frappe.png";
import espresso from "../assets/espresso.jpg";
import cappuccino from "../assets/cappuccino.jpg";
import latte from "../assets/beb_calientes.jpeg";
import chocolate from "../assets/chocolate.jpg";
import te from "../assets/te.jpeg";
import chai from "../assets/chai.jpg";
import americano from "../assets/americano.jpeg";
import matchac from "../assets/matcha_cal.jpg";
import taro from "../assets/taro.jpg";
import lattef from "../assets/beb_frias.png";
import matcha from "../assets/matcha.jpg";
import tef from "../assets/te_frio.png";
import americanof from "../assets/iced_americano.jpg";
import chaif from "../assets/chai_frio.jpg";

//Estructura anidada por tipo y producto
type ImagenCarrito = {
    [tipo: string]: {
        [nombre: string]: string;
    };
};

//Diccionario de imágenes organizado por tipo y producto
const imagenesProductos: ImagenCarrito = {
    caliente: {
        Espresso: espresso,
        Cappuccino: cappuccino,
        Latte: latte,
        Americano: americano,
        Chai: chai,
        Té: te,
        Chocolate: chocolate,
        Matcha: matchac
    },

    frio: {
        Latte: lattef,
        Americano: americanof,
        Matcha: matcha,
        Chai: chaif,
        Té: tef,
        Taro: taro 
    },

    frappe: {
        frappé: frappe
    },

    postre: {
        Rol: rol,
        Galleta: galleta,
        Pastel: pastel,
        Pay: pay
    }
};

//Función exportada para obtener la imagen
export const getImagenCarrito = (tipo?: string, nombre?: string): string | undefined => {
    if (!tipo || !nombre) return undefined;
    return imagenesProductos[tipo]?.[nombre];
};
