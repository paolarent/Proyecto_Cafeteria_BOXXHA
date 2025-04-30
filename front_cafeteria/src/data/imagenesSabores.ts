import clasico from "../assets/sabores/regular.png";
import cortado from "../assets/sabores/cortado.png";
import affogato from "../assets/sabores/affogato.png"
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
import taro from "../assets/sabores/taro.png";
import chocolate from "../assets/sabores/chocolate.png"

type ImagenMap = {
    [tipo: string]: {
        [producto: string]: {
            [sabor: string]: string;
        };
    };
};

const imagenesSabores: ImagenMap = {
    caliente: {
        espresso: {
            "Clásico": clasico,
            "Cortado": cortado,
            "Affogato": affogato
        },

        americano: {
            "Clásico": clasico
        },

        latte: {
            "Clásico": clasico,
            "Caramelo": caramelo,
            "Vainilla": vainilla,
            "Avellana": avellana,
            "Moka": moka,
            "Moka Blanco": moka_blanco,
            "Cajeta": dulce_leche
        },

        cappuccino: {
            "Clásico": clasico
        },

        chai: {
            "Clásico": chai,
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
            "Clásico": matcha,
            "Caramelo": caramelo,
            "Raffaello": raffaello
        },

        chocolate: {
            "Clásico": chocolate
        }
    },

    frio: {
        latte: {
            "Clásico": clasico,
            "Caramelo": caramelo,
            "Vainilla": vainilla,
            "Avellana": avellana,
            "Moka": moka,
            "Moka Blanco": moka_blanco,
            "Cajeta": dulce_leche
        },

        americano: {
            "Clásico": clasico,
            "Limon": limon,
            "Gin Ale": gin_ale
        },

        matcha: {
            "Clásico": matcha,
            "Caramelo": caramelo,
            "Raffaello": raffaello,
            "Pasion Fruit": maracuya,
            "Coconut": coco
        },

        chai: {
            "Clásico": chai,
            "Dirty Chai": dirty_chai
        },

        té: {
            "Té Verde": te_verde,
            "Té Negro": te_negro,
            "Maracuya Green Tea": maracuya_gt,
            "Strawberry Black Tea": strawberry_bt,
            "Tisana Berry": tisana_be
        },

        taro: {
            "Clásico": taro
        }
    },

    frappe: {    
        frappé: {
            "Frappuchino": clasico, 
            "Latte Caramelo": caramelo, 
            "Latte Vainilla": vainilla, 
            "Latte Avellana": avellana, 
            "Latte Moka": moka, 
            "Latte Moka Blanco": moka_blanco, 
            "Latte Cajeta": dulce_leche, 
            "Oreo": oreo, 
            "Strawberry Cream": fresa, 
            "Nutella": nutella, 
            "Taro": taro, 
            "Chai": chai, 
            "Dirty Chai": dirty_chai, 
            "Matcha": matcha
        }
    },

    postre: {
        rol: {
            "Clásico": rol_clasico,
            "Nuez": rol_nuez,
            "Ferrero Rocher": rol_ferrero,
            "Lotus": rol_lotus,
            "Kinder Bueno": rol_kinder
        },

        galleta: {
            "Chocolate": galleta_chispas,
            "Alfajor": alfajor,
            "Red Velvet": galleta_rv
        },

        pastel: {
            "Zanahoria": pastel_zanahoria,
            "Chocolate": pastel_chocolate,
            "Red Velvet": pastel_rv
        },

        pay: {
            "Cheesecake clasico": pay_clasico,
            "Lotus": pay_lotus,
            "Frutos Rojos": pay_frutosr,
            "Tortuga": pay_tortuga
        }
    }
};

export default imagenesSabores;
