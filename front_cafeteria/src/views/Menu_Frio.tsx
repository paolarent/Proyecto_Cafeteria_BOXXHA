import NavBar from "../components/NavBar"
import { useNavigate } from "react-router-dom";
import { getCategoria } from "../services/productService";
import { useEffect, useState } from "react";
import taro from "../assets/taro.jpg";
import lattef from "../assets/beb_frias.png";
import matcha from "../assets/matcha.jpg";
import tef from "../assets/te_frio.png";
import americanof from "../assets/iced_americano.jpg";
import chaif from "../assets/chai_frio.jpg";

import { usePedido } from '../contexts/PedidoContext'; 

const imagenesPorNombreF: { [key: string]: string } = {
    Latte: lattef,
    Americano: americanof,
    Matcha: matcha,
    Chai: chaif,
    Té: tef,
    Taro: taro
};

const MenuBebidasFriasView = () => {
    const [categorias, setCategorias] = useState<string[]>([]);
    const [loading, setLoading] = useState(true);
    const navigate = useNavigate();
    const { agregarPedido } = usePedido();

    useEffect(() => {
        const fetchCategorias = async () => {
            const data = await getCategoria("bebfria");
            if (data) {
                const nombres = data.map((item: { nombre: string }) => item.nombre);
                setCategorias(nombres);
            }
            setLoading(false);
        };
        fetchCategorias();
    }, []);

    type TipoBebida = 'caliente' | 'frio' | 'frappe' | 'postre' ;
    const irASabores = (tipo: TipoBebida, nombre: string) => {
        const index = agregarPedido({ tipo, nombre,  completo: false });
        navigate(`/sabores/${tipo}/${nombre}/${index}`);
    };

    return (
        <div className="min-h-screen flex flex-col ">
            <header className="sticky top-0 z-50">
                <NavBar />
            </header>

            <main className="flex flex-1 bg-[#B0CEAC]">
                <section className="w-full flex flex-col items-center pt-5 space-y-10 pb-10">
                    <h2 className="font-Montserrat font-regular text-5xl text-center text-[#34251d]">
                        - Bebidas <span className="font-bold">Frias</span> -
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
                                    onClick={() => irASabores("frio", nombre)}
                                    className="group flex flex-col items-center transition-transform duration-300 hover:scale-105"
                                >
                                    <img
                                        src={imagenesPorNombreF[nombre]}
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
export default MenuBebidasFriasView;