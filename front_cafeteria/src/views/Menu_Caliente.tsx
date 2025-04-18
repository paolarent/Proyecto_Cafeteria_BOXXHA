import NavBar from "../components/NavBar";
import { useNavigate } from "react-router-dom";


const MenuBebidasCalView = () => {
    const navigate = useNavigate();
    type TipoBebida = 'caliente' | 'frio' | 'postre' | 'nuevo';
    const irASabores = (tipo: TipoBebida, nombre: string) => {
        navigate(`/sabores/${tipo}/${nombre}`);
    };

    return (
        <div className="min-h-screen flex flex-col ">
            <header className="sticky top-0 z-50">
                <NavBar />
            </header>

            <main className="flex flex-1 bg-[#B0CEAC]">
                <section className="w-full flex flex-col items-center pt-5 space-y-10 pb-10">
                    <h2 className="font-Montserrat font-regular text-5xl text-center text-[#34251d]">
                    - Bebidas <span className="font-bold">Calientes</span> -
                    </h2>
                    <div className="flex flex-wrap justify-center gap-10 w-full px-8">
                        {/* 8 secciones, (8 categorias de bebida caliente) */}

                        {/* EXPRESSO */}
                        <div onClick={() => irASabores("caliente", "expresso")} className="group flex flex-col items-center transition-transform duration-300 hover:scale-105">
                            <img className="bg-[#D9D9D9] rounded-[20px] w-[250px] h-[250px] mb-2" />
                            <button className="w-full font-Montserrat font-bold bg-[#5C4848] text-[#ffffff] py-2 px-4 rounded shadow-md text-xl opacity-80 
                                group-hover:bg-[#f0eceb] group-hover:text-[#38241c] rounded-[10px]">
                                EXPRESSO
                            </button>
                        </div>

                        {/* AMERICANO */}
                        <div onClick={() => irASabores("caliente", "americano")} className="group flex flex-col items-center transition-transform duration-300 hover:scale-105">
                            <img className="bg-[#D9D9D9] rounded-[20px] w-[250px] h-[250px] mb-2" />
                            <button className="w-full font-Montserrat font-bold bg-[#5C4848] text-[#ffffff] py-2 px-4 rounded shadow-md text-xl opacity-80 
                                group-hover:bg-[#f0eceb] group-hover:text-[#38241c] rounded-[10px]">
                                AMERICANO
                            </button>
                        </div>

                        {/* LATTE */}
                        <div onClick={() => irASabores("caliente", "latte")} className="group flex flex-col items-center transition-transform duration-300 hover:scale-105">
                            <img className="bg-[#D9D9D9] rounded-[20px] w-[250px] h-[250px] mb-2" />
                            <button className="w-full font-Montserrat font-bold bg-[#5C4848] text-[#ffffff] py-2 px-4 rounded shadow-md text-xl opacity-80 
                                group-hover:bg-[#f0eceb] group-hover:text-[#38241c] rounded-[10px]">
                                LATTE
                            </button>
                        </div>

                        {/* CAPPUCCINO */}
                        <div className="group flex flex-col items-center transition-transform duration-300 hover:scale-105">
                            <img className="bg-[#D9D9D9] rounded-[20px] w-[250px] h-[250px] mb-2" />
                            <button className="w-full font-Montserrat font-bold bg-[#5C4848] text-[#ffffff] py-2 px-4 rounded shadow-md text-xl opacity-80 
                                group-hover:bg-[#f0eceb] group-hover:text-[#38241c] rounded-[10px]">
                                CAPPUCCINO
                            </button>
                        </div>

                        {/* CHAI */}
                        <div onClick={() => irASabores("caliente", "chai")} className="group flex flex-col items-center transition-transform duration-300 hover:scale-105">
                            <img className="bg-[#D9D9D9] rounded-[20px] w-[250px] h-[250px] mb-2" />
                            <button className="w-full font-Montserrat font-bold bg-[#5C4848] text-[#ffffff] py-2 px-4 rounded shadow-md text-xl opacity-80 
                                group-hover:bg-[#f0eceb] group-hover:text-[#38241c] rounded-[10px]">
                                CHAI
                            </button>
                        </div>

                        {/* TÉ */}
                        <div onClick={() => irASabores("caliente", "té")} className="group flex flex-col items-center transition-transform duration-300 hover:scale-105">
                            <img className="bg-[#D9D9D9] rounded-[20px] w-[250px] h-[250px] mb-2" />
                            <button className="w-full font-Montserrat font-bold bg-[#5C4848] text-[#ffffff] py-2 px-4 rounded shadow-md text-xl opacity-80 
                                group-hover:bg-[#f0eceb] group-hover:text-[#38241c] rounded-[10px]">
                                TÉ
                            </button>
                        </div>

                        {/* MATCHA */}
                        <div onClick={() => irASabores("caliente", "matcha")} className="group flex flex-col items-center transition-transform duration-300 hover:scale-105">
                            <img className="bg-[#D9D9D9] rounded-[20px] w-[250px] h-[250px] mb-2" />
                            <button className="w-full font-Montserrat font-bold bg-[#5C4848] text-[#ffffff] py-2 px-4 rounded shadow-md text-xl opacity-80 
                                group-hover:bg-[#f0eceb] group-hover:text-[#38241c] rounded-[10px]">
                                MATCHA
                            </button>
                        </div>

                        {/* CHOCOLATE */}
                        <div className="group flex flex-col items-center transition-transform duration-300 hover:scale-105">
                            <img className="bg-[#D9D9D9] rounded-[20px] w-[250px] h-[250px] mb-2" />
                            <button className="w-full font-Montserrat font-bold bg-[#5C4848] text-[#ffffff] py-2 px-4 rounded shadow-md text-xl opacity-80 
                                group-hover:bg-[#f0eceb] group-hover:text-[#38241c] rounded-[10px]">
                                CHOCOLATE
                            </button>
                        </div>

                    </div>
                </section>
            </main>
        </div>
    );
};

export default MenuBebidasCalView;