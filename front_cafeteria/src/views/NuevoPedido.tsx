import { useNavigate } from "react-router-dom";
import NavBarEmp from "../components/NavBarEmp";
import beb_frias from "../assets/beb_frias.png";
import frappe from "../assets/frappe.png";
import postre from "../assets/postres.jpg";
import beb_calientes from "../assets/beb_calientes.jpeg";
import fondoCafe from "../assets/fondo_cafe_mejorada.jpg";
import { usePedido } from '../contexts/PedidoContext';

const NuevoPedido = () => {
    const navigate = useNavigate();
    const { agregarPedido } = usePedido();

    {/* ATAJO DE FRAPPES */}
    type TipoBebida = 'caliente' | 'frio' | 'frappe' | 'postre' ;
    const irASabores = (tipo: TipoBebida, nombre: string) => {
        const total = 0;
        const index = agregarPedido({ tipo, nombre, completo: false, total: total });
        navigate(`/sabores/${tipo}/${nombre}/${index}`);
    };

    return (
        <div className="relative min-h-screen overflow-hidden">
            {/*Imagen de fondo estatica*/ }
            <img 
                src={fondoCafe} 
                className="absolute inset-0 w-full h-full object-cover opacity-70"
                alt="Fondo de café"
            />
            {/* Capa de color con algo de opacidad encima, opcional */}
            <div
                className="absolute inset-0"
                style={{ backgroundColor: "#B0CEAC", opacity: 0.50 }}
            />

            {/* NAVBAR DEL EMPLEADO */}
            <header className="sticky top-0 z-50">
                <NavBarEmp />
            </header>

            <section className="relative z-10 px-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-10 justify-items-center">
                        {/*Bebidas Calientes*/}
                        <div onClick={() => navigate("/bebidas_calientes")} className="group flex flex-col items-center m-8 lg:mt-40 transition-transform duration-300 hover:scale-105">
                            <img 
                                src={beb_calientes}
                                alt="bebidas calientes"
                                className="bg-[#D9D9D9] rounded-2xl w-[300px] h-[300px] mb-2" 
                            />
                            <button className="w-[300px] font-Montserrat font-bold bg-[#311808] text-[#ffffff] py-2 px-4 rounded-2xl shadow-md text-2xl 
                                group-hover:bg-[#424141] group-hover:text-white">
                                Bebidas Calientes
                            </button>
                        </div>

                        {/*Bebidas Frias*/}
                        <div onClick={() => navigate("/bebidas_frias")} className="group flex flex-col items-center m-8 lg:mt-20 transition-transform duration-300 hover:scale-105">
                            <button className="w-[300px] font-Montserrat font-bold bg-[#311808] text-[#ffffff] py-2 px-4 rounded-2xl shadow-md text-2xl 
                                group-hover:bg-[#424141] group-hover:text-white mb-2">
                                Bebidas Frias
                            </button>

                            <img 
                                src={beb_frias}
                                alt="bebidas frias"
                                className="bg-[#D9D9D9] rounded-2xl w-[300px] h-[300px]" 
                            />
                        </div>

                        {/*Frappés (VA DIRECTAMENTE A SABORES PQ NO HAY SUBCATEGORIA DE PRODUCTOS AQUI)*/}
                        <div onClick={() => irASabores("frappe", "frappé")} className="group flex flex-col items-center m-8 lg:mt-40 transition-transform duration-300 hover:scale-105">
                            <img 
                                src={frappe}
                                alt="frappes"
                                className="bg-[#D9D9D9] rounded-2xl w-[300px] h-[300px] mb-2"
                            />
                            <button className="w-[300px] font-Montserrat font-bold bg-[#311808] text-[#ffffff] py-2 px-4 rounded-2xl shadow-md text-2xl
                                group-hover:bg-[#424141] group-hover:text-white">
                                Frappés
                            </button>
                        </div>

                        {/*Postres*/}
                        <div onClick={() => navigate("/postres")} className="group flex flex-col items-center m-8 lg:mt-20 transition-transform duration-300 hover:scale-105">
                            <button className="w-[300px] font-Montserrat font-bold bg-[#311808] text-[#ffffff] py-2 px-4 rounded-2xl shadow-md text-2xl 
                                group-hover:bg-[#424141] group-hover:text-white mb-2">
                                Postres
                            </button>

                            <img 
                                src={postre}
                                alt="postres"
                                className="bg-[#D9D9D9] rounded-2xl w-[300px] h-[300px]" 
                            />
                        </div>
                    </div>
            </section>
        </div>
    );

};

export default NuevoPedido;