import fondoCafe from "../assets/fondo_cafe_mejorada.jpg";
import IconoCafe12OZ from "../assets/Iconos/Icono_14oz.png";
import IconoCafe16OZ from "../assets/Iconos/Icono_16oz.png";
import BotonRegresar from "../assets/regresar.png";
import BotonContinuar from "../assets/continuar.png";

import LayoutConNavbar from "../components/LayoutNavBar";

import { usePedido } from "../contexts/PedidoContext";
import { useNavigate, useParams } from "react-router-dom";
import { useState } from "react"; 

const PedidoTamañoView = () => {
    const { pedidos, actualizarPedido } = usePedido();
    const { index } = useParams(); // Capturamos el índice desde la URL
    const navigate = useNavigate();
    const i = Number(index);
    const pedidoActual = pedidos[i];

    const nombreBebida = pedidoActual?.nombre?.toLowerCase();
    const [tamanoSeleccionado, setTamanoSeleccionado] = useState<number | null>(null);

    const handleSeleccionarTamano = (id_tamano: number) => {
        const anteriorTamano = pedidoActual.id_tamano;
        const extraAnterior = anteriorTamano === 2 ? 5 : 0;
        const extraNuevo = id_tamano === 2 ? 5 : 0;

        const nuevoTotal = pedidoActual.total - extraAnterior + extraNuevo;

        setTamanoSeleccionado(id_tamano);
        actualizarPedido(i, { id_tamano, total: nuevoTotal });
    };

    const handleRegresar = () => {
        const costoTamano = tamanoSeleccionado === 2 ? 5 : 0;
        const nuevoTotal = pedidoActual.total - costoTamano;

        actualizarPedido(i, { id_tamano: undefined, total: nuevoTotal });
        navigate(-1); 
    };


    // Redirección condicional según el nombre
    const handleSiguientePaso = () => {
    
        switch (nombreBebida) {
            case "matcha":
            case "chai":
            case"frappé":
            case "taro":
            case "chocolate":
                navigate(`/tipo_leche/${i}`);
                break;
            case "latte":
            case "americano":
            case "cappuccino":
                navigate(`/decaf_regular/${i}`);
                break;
            default:
                navigate(`/extras/${i}`);
        }
    };
    
    return (
        <div className="relative h-screen overflow-y-auto overflow-x-hidden flex flex-col">
            <LayoutConNavbar />
            
            {/* Contenedor Padre Father */}
            <main className="flex-1 relative">
                {/*Imagen de fondo estatica*/ }
                <img 
                    src={fondoCafe} 
                    className="absolute inset-0 w-full h-full object-cover opacity-50"
                    alt="Fondo de café"
                />
            
                {/*Con la propiedad relative z-10 me aseguro que sea un fondo estatico*/ }
                {/*Con la layout flex puedo colocar los elementos en cualquier posición dentro del contenedor */}
                <section className="relative w-full flex flex-col items-center space-y-10 pt-10 md:pt-20">
                    <div className="flex flex-col relative bg-[#535251] p-4 bg-opacity-60 rounded-3xl">
                        <h2 className="font-Montserrat font-regular text-4xl md:text-5xl text-center text-[#34251d] bg-[#ffffff] px-6 py-3 rounded-2xl shadow-md">
                        Seleccione el <span className="font-medium">Tamaño</span>
                        </h2>
                    </div>
                    
                    <div className="flex flex-col md:flex-row gap-10 md:gap-20 pt-2 justify-center items-center p-4">
                            
                        <div className="flex flex-col relative bg-[#535251] p-4 bg-opacity-60 rounded-3xl">
                            <button
                                onClick={() => handleSeleccionarTamano(1)} // ID para 12 OZ
                                className={`flex flex-col justify-end pt-4 pb-2 w-56 h-56 md:w-56 md:h-56 rounded-2xl border-2 border-black
                                    ${tamanoSeleccionado === 1  ? 'bg-[#B0CEAC] shadow-xl scale-105' : 'bg-white border-black shadow-md'} 
                                    hover:scale-105 transition-transform duration-300`}  
                                >
                                <img src={IconoCafe12OZ} className="rounded-[20px] w-[100px] h-[120px] mx-auto pt-4" />
                                <span className="font-Montserrat text-2xl font-semibold text-[#34251d] pt-4 pb-2">12 OZ</span>
                            </button>
                        </div>    
                        
                        <div className="flex flex-col relative bg-[#535251] p-4 bg-opacity-60 rounded-3xl">
                            <button
                                onClick={() => handleSeleccionarTamano(2)} //ID para 16 OZ para cambiar otra vez al borde: border-black border-8
                                className={`flex flex-col justify-end pt-4 pb-2 w-56 h-56 sm:w-56 sm:h-56 rounded-2xl border-2 border-black
                                    ${tamanoSeleccionado === 2  ? 'bg-[#B0CEAC] shadow-xl scale-105' : 'bg-white border-black shadow-md'} 
                                    hover:scale-105 transition-transform duration-300`}  
                                >   
                                {/* Condicional para mostrar "+5" */}
                                {tamanoSeleccionado === 2 && (
                                    <span className="absolute top-2 right-2 bg-green-600 text-white text-xl font-bold w-10 h-10 rounded-full shadow-lg flex 
                                                    items-center justify-center pr-1">
                                        +5
                                    </span>

                                )}
                                <img src={IconoCafe16OZ} className="rounded-[20px] w-[100px] h-[140px] mx-auto pt-4" />
                                <span className="font-Montserrat text-2xl font-semibold text-[#34251d] pt-4 pb-2">16 OZ</span>
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
                            disabled={!tamanoSeleccionado}
                            className={`w-[80px] h-auto transition-opacity duration-300 ${
                                !tamanoSeleccionado ? 'opacity-50 cursor-not-allowed' : ''
                            }`}
                            >
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
                            disabled={!tamanoSeleccionado}
                            className={`w-[70px] h-auto transition-opacity duration-300 ${
                                !tamanoSeleccionado ? 'opacity-50 cursor-not-allowed' : ''
                            }`}
                            >
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

export default PedidoTamañoView;