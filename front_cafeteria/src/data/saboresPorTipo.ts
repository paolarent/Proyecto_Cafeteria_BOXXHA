
type SaboresMap = {
    [key: string]: {
        [producto: string]: string[];
    };
};

const saboresPorTipoYNombreProducto: SaboresMap = {
    caliente: {
        espresso: ["Clásico", "Cortado", "Affogato"],
        americano: ["Clásico"],
        latte: ["Clásico", "Caramelo", "Vainilla", "Avellana", "Moka", "Moka Blanco", "Cajeta"],
        cappuccino: ["Clásico"],
        chai: ["Clásico", "Dirty Chai"],
        té: ["Té Verde", "Té Negro", "Maracuya Green Tea", "Strawberry Black Tea", "Tisana Berry"],
        matcha: ["Clásico", "Caramelo", "Raffaello"],
        chocolate: ["Clásico"]
    },

    frio: {
        latte: ["Clásico", "Caramelo", "Vainilla", "Avellana", "Moka", "Moka Blanco", "Cajeta"],
        americano: ["Clásico", "Limon", "Gin Ale", ],
        matcha: ["Clásico", "Caramelo", "Raffaello", "Pasion Fruit", "Coconut"],
        chai: ["Clásico", "Dirty Chai"],
        té: ["Té Verde", "Té Negro", "Maracuya Green Tea", "Strawberry Black Tea", "Tisana Berry"],
        taro: ["Clásico"]
    },

    frappe: {        
        frappé: ["Frappuchino", "Latte Caramelo", "Latte Vainilla", "Latte Avellana", "Latte Moka", 
            "Latte Moka Blanco", "Latte Cajeta", "Oreo", "Strawberry Cream", "Nutella", "Taro", "Chai", "Dirty Chai", "Matcha"]
    },

    postre: {
        rol: ["Clásico", "Nuez", "Ferrero Rocher", "Lotus", "Kinder Bueno"],
        galleta: ["Chocolate", "Alfajor", "Red Velvet"],
        pastel: ["Zanahoria", "Chocolate", "Red Velvet"],
        pay: ["Cheesecake clasico", "Lotus", "Frutos Rojos", "Tortuga"]
    }
};

export default saboresPorTipoYNombreProducto;
