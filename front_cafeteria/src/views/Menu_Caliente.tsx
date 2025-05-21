import { useNavigate } from "react-router-dom";
import { getCategoria } from "../services/productService";
import { useEffect, useState } from "react";
import espresso from "../assets/espresso.jpg";
import cappuccino from "../assets/cappuccino.jpg";
import latte from "../assets/beb_calientes.jpeg";
import chocolate from "../assets/chocolate.jpg";
import te from "../assets/te.jpeg";
import chai from "../assets/chai.jpg";
import americano from "../assets/americano.jpeg";
import matchac from "../assets/matcha_cal.jpg";
import LayoutConNavbar from "../components/LayoutNavBar";


import { usePedido } from '../contexts/PedidoContext'; 

const imagenesPorNombreC: { [key: string]: string } = {
    Espresso: espresso,
    Cappuccino: cappuccino,
    Latte: latte,
    Americano: americano,
    Chai: chai,
    Té: te,
    Chocolate: chocolate,
    Matcha: matchac
};

const MenuBebidasCalView = () => {
    const [categorias, setCategorias] = useState<string[]>([]);
    const [loading, setLoading] = useState(true);
    const navigate = useNavigate();
    const { agregarPedido } = usePedido();

    useEffect(() => {
        const fetchCategorias = async () => {
            const data = await getCategoria("bebcaliente");
            if (data) {
                const nombres = data.map((item: { nombre: string }) => item.nombre);
                setCategorias(nombres);
            }
            setLoading(false);
        };
        fetchCategorias();
    }, []);

    type TipoBebida = "caliente" | "frio" | "frappe" | "postre";
    const irASabores = (tipo: TipoBebida, nombre: string) => {
        const index = agregarPedido({ tipo, nombre,  completo: false, total: 0 });
        navigate(`/sabores/${tipo}/${nombre}/${index}`); // Navegar a la página de sabores
    };

    return (
        <div className="min-h-screen flex flex-col ">
            <LayoutConNavbar />

            <main className="flex flex-1 bg-[#B0CEAC]">
                <section className="w-full flex flex-col items-center pt-5 space-y-10 pb-10">
                    <h2 className="font-Montserrat font-regular text-5xl text-center text-[#34251d]">
                        - Bebidas <span className="font-bold">Calientes</span> -
                    </h2>

                    {loading ? (
                        // Spinner centrado
                        <div className="flex justify-center items-center h-96">
                            <div className="w-16 h-16 border-4 border-t-transparent border-white rounded-full animate-spin border-[#34251d]"></div>
                        </div>
                    ) : (
                        <div className="flex flex-wrap justify-center gap-10 w-full px-8">
                            {categorias.map((nombre) => (
                                <div
                                    key={nombre}
                                    onClick={() => irASabores("caliente", nombre)}
                                    className="group flex flex-col items-center transition-transform duration-300 hover:scale-105"
                                >
                                    <img
                                        src={imagenesPorNombreC[nombre]}
                                        className="bg-[#D9D9D9] rounded-[20px] w-[250px] h-[250px] mb-2"
                                        alt={nombre}
                                    />
                                    <button className="w-full font-Montserrat font-bold bg-[#5C4848] text-[#ffffff] py-2 px-4 rounded shadow-md text-xl opacity-80 
                                        group-hover:bg-[#f0eceb] group-hover:text-[#38241c] rounded-[10px]">
                                        {nombre.toUpperCase()}
                                    </button>
                                </div>
                            ))}
                        </div>
                    )}
                </section>
            </main>
        </div>
    );
};

export default MenuBebidasCalView;
