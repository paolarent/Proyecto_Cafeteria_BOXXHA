import fondoCafe from "../assets/fondo_cafe_mejorada.jpg";
import IconoCafeina from "../assets/Iconos/cafe_cafeinado.png"
import IconoNoCafeina from "../assets/Iconos/cafe_descafeinado.png"
import BotonRegresar from "../assets/regresar.png";
import BotonContinuar from "../assets/continuar.png";
import LayoutConNavbar from "../components/LayoutNavBar";

import { usePedido } from "../contexts/PedidoContext";
import { useNavigate, useParams } from "react-router-dom";

const Decaf_RegularView = () => {
    const { pedidos, actualizarPedido } = usePedido();
    const { index } = useParams(); // Capturamos el índice desde la URL
    const navigate = useNavigate();
    const i = Number(index);
    const pedidoActual = pedidos[i];
  
    const nombreBebida = pedidoActual?.nombre?.toLowerCase();

    const handleSiguientePaso = () => {
        if (nombreBebida === "americano") {
            navigate(`/extras/${i}`);
        }
        else {navigate(`/tipo_leche/${i}`);}
    }

    const handleSeleccionarRegular = () => {
        actualizarPedido(i,{ regular: true });
    };

    const handleSeleccionarDescafeinado = () => {
        actualizarPedido(i,{ regular: false });
    };

    const handleRegresar = () => {
        actualizarPedido(i,{ regular: undefined });
        navigate(-1);
    }
    
    return (
        <div className="relative h-screen overflow-y-auto overflow-x-hidden flex flex-col">
            <LayoutConNavbar />
            
            <main className="flex-1 relative">
                <img 
                    src={fondoCafe} 
                    className="absolute inset-0 w-full h-full object-cover opacity-50"
                    alt="Fondo de café"
                />
                <section className="relative w-full flex flex-col items-center space-y-10 pt-10 md:pt-20">

                    <div className="flex flex-col relative bg-[#535251] p-4 bg-opacity-60 rounded-3xl">
                        <h2 className="font-Montserrat font-regular text-4xl md:text-5xl text-center text-[#34251d] bg-[#ffffff] px-6 py-3 rounded-2xl shadow-md">
                            Seleccione una <span className="font-medium">Opción</span>
                        </h2>
                    </div>

                    <div className="flex flex-col md:flex-row gap-10 md:gap-20 pt-2 justify-center items-center p-4">
                        <div className="flex flex-col relative bg-[#535251] p-4 bg-opacity-60 rounded-3xl">
                            <button onClick={handleSeleccionarRegular} 
                            className={`flex flex-col justify-center pt-6 pb-4 w-[230px] h-[230px] md:w-[230px] md:h-[230px] rounded-2xl border-2 border-black
                                ${pedidoActual?.regular=== true ? 'bg-[#B0CEAC] shadow-xl scale-105' : 'bg-white border-black shadow-md'} 
                                hover:scale-105 transition-transform duration-300`}
                            >
                                <img
                                    src={IconoCafeina}
                                    className="rounded-[20px] w-[160px] h-[160px] m-auto"
                                />  
                                <span className="font-Montserrat text-2xl font-semibold text-[#34251d] pt-2 pb-2">Regular</span>
                            </button>
                        </div>

                        <div className="flex flex-col relative bg-[#535251] p-4 bg-opacity-60 rounded-3xl">
                            <button onClick={handleSeleccionarDescafeinado} 
                                className={`flex flex-col justify-center pt-6 pb-4 w-[230px] h-[230px] rounded-2xl border-2 border-black
                                ${pedidoActual?.regular=== false ? 'bg-[#B0CEAC] shadow-xl scale-105' : 'bg-white border-black shadow-md'} 
                                hover:scale-105 transition-transform duration-300`}
                            >
                                <img
                                    src={IconoNoCafeina}
                                    className="rounded-[20px] w-[160px] h-[160px] m-auto"    
                                />
                                <span className="font-Montserrat text-2xl font-semibold text-[#34251d] pt-2 pb-2">Descafeinado</span>
                            </button>
                        </div>
                    </div>

                        {/* Botones laterales - solo en pantallas grandes */}
                    <div className="hidden lg:flex justify-between items-center w-full px-40 absolute top-1/2 left-0 right-0 transform -translate-y-1/2 z-20">
                        {/* Botón Regresar */}
                        <div className="bg-[#B0CEAC] bg-opacity-90 rounded-full p-4 shadow-lg hover:scale-110 hover:bg-[#f2ddc9] transition-transform duration-300">
                            <button onClick={handleRegresar}>
                            <img
                                src={BotonRegresar}
                                alt="Botón Regresar"
                                title="Regresar"
                                className="w-[80px] h-auto"
                            />
                            </button>
                        </div>

                        {/* Botón Continuar */}
                        <div className="bg-[#B0CEAC] bg-opacity-90 rounded-full p-4 shadow-lg transition-transform duration-300 hover:scale-110 hover:bg-[#f2ddc9]">
                            <button
                            onClick={handleSiguientePaso}
                            disabled={pedidoActual?.regular === undefined}
                            //Esto es para bloquearle al usuario que siga si no ha seleccionado una opcion
                            className={`w-[80px] h-auto transition-opacity duration-300 ${
                                pedidoActual?.regular === undefined ? 'opacity-50 cursor-not-allowed' : ''
                                }`   
                            }>
                            <img
                                src={BotonContinuar}
                                alt="Botón Continuar"
                                title="Continuar"
                                className="w-[80px] h-auto"
                            />
                            </button>
                        </div>
                    </div>
                    
                    {/* Botones abajo - solo en pantallas pequeñas y medianas */}
                    <div className="flex lg:hidden justify-center items-center gap-10 pt-1 z-10">
                        {/* Botón Regresar */}
                        <div className="bg-[#B0CEAC] bg-opacity-90 rounded-full p-4 shadow-lg hover:scale-110 hover:bg-[#f2ddc9] transition-transform duration-300">
                            <button onClick={handleRegresar}>
                            <img
                                src={BotonRegresar}
                                alt="Botón Regresar"
                                title="Regresar"
                                className="w-[70px] h-auto"
                            />
                            </button>
                        </div>

                        {/* Botón Continuar */}
                        <div className="bg-[#B0CEAC] bg-opacity-90 rounded-full p-4 shadow-lg transition-transform duration-300 hover:scale-110 hover:bg-[#f2ddc9]">
                            <button
                            onClick={handleSiguientePaso}
                            disabled={pedidoActual?.regular === undefined}
                            //Esto es para bloquearle al usuario que siga si no ha seleccionado una opcion
                            className={`w-[70px] h-auto transition-opacity duration-300 ${
                                pedidoActual?.regular === undefined ? 'opacity-50 cursor-not-allowed' : ''
                                }`   
                            }>
                            <img
                                src={BotonContinuar}
                                alt="Botón Continuar"
                                title="Continuar"
                                className="w-full h-auto"
                            />
                            </button>
                        </div>
                    </div>
                    
                    
                </section>
            </main>
        </div>
    );
};

export default Decaf_RegularView;