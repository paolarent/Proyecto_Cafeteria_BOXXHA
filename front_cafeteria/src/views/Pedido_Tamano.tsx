import fondoCafe from "../assets/fondo_cafe_mejorada.jpg";
import IconoCafe12OZ from "../assets/Iconos/Icono_14oz.png";
import IconoCafe16OZ from "../assets/Iconos/Icono_16oz.png";
import BotonRegresar from "../assets/regresar.png";
import BotonContinuar from "../assets/continuar.png";

import NavBar from "../components/NavBar";

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
        setTamanoSeleccionado(id_tamano);
        actualizarPedido(i,{ id_tamano }); // Actualiza el contexto
    };

    const handleRegresar = () => {
        actualizarPedido(i,{ id_tamano: undefined });
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
        <div className="relative h-screen overflow-hidden flex flex-col">
            <header className="sticky top-0 z-50">
                <NavBar />
            </header>
            
            {/* Contenedor Padre Father */}
            <main className="flex-1 relative ">
                {/*Imagen de fondo estatica*/ }
                <img 
                    src={fondoCafe} 
                    className="absolute inset-0 w-full h-full object-cover opacity-50"
                    alt="Fondo de café"
                />
            
                {/*Con la propiedad relative z-10 me aseguro que sea un fondo estatico*/ }
                {/*Con la layout flex puedo colocar los elementos en cualquier posición dentro del contenedor */}
                <section className="relative w-full flex flex-col items-center space-y-10 pt-20">
                    <div className="flex flex-col relative bg-[#535251] p-4 bg-opacity-60 rounded-3xl">
                        <h2 className="font-Montserrat font-regular text-5xl text-center text-[#34251d] bg-[#ffffff] px-6 py-3 rounded-2xl shadow-md">
                        Seleccione el <span className="font-medium">Tamaño</span>
                        </h2>
                    </div>
                    
                    <div className="flex flex-col md:flex-row gap-20 pt-2 justify-center items-center p-4 ">
                            
                        <div className="flex flex-col relative bg-[#535251] p-4 bg-opacity-60 rounded-3xl">
                            <button
                                onClick={() => handleSeleccionarTamano(1)} // ID para 12 OZ
                                className={`flex flex-col justify-center pt-6 pb-4 w-[230px] h-[230px] rounded-2xl border-2 border-black
                                    ${tamanoSeleccionado === 1  ? 'bg-[#B0CEAC] shadow-xl scale-105' : 'bg-white border-black shadow-md'} 
                                    hover:scale-105 transition-transform duration-300`}  
                                >
                                <img src={IconoCafe12OZ} className="rounded-[20px] w-[100px] h-[120px] mx-auto pt-4" />
                                <span className="font-Montserrat text-2xl font-semibold text-[#34251d] pt-4 pb-2">12 OZ</span>
                            </button>
                        </div>    
                        
                        <div className="flex flex-col relative bg-[#535251] p-4 bg-opacity-60 rounded-3xl">
                            <button
                                onClick={() => handleSeleccionarTamano(2)} // ID para 16 OZ para cambiar otra vez al borde: border-black border-8
                                className={`flex flex-col justify-center pt-6 pb-4 w-[230px] h-[230px] rounded-2xl border-2 border-black
                                    ${tamanoSeleccionado === 2  ? 'bg-[#B0CEAC] shadow-xl scale-105' : 'bg-white border-black shadow-md'} 
                                    hover:scale-105 transition-transform duration-300`}  
                                >   
                                <img src={IconoCafe16OZ} className="rounded-[20px] w-[100px] h-[140px] mx-auto pt-4" />
                                <span className="font-Montserrat text-2xl font-semibold text-[#34251d] pt-4 pb-2">16 OZ</span>
                            </button>
                        </div>
                    
                    </div>

                    {/* Botones laterales de navegación */}
                    <div className="absolute top-1/2 left-0 z-20 transform -translate-y-1/2 px-40">
                        <div className="bg-[#B0CEAC] bg-opacity-90 rounded-full p-4 shadow-lg transition-transform duration-300 hover:scale-110 hover:bg-[#f2ddc9]">
                            <button onClick={handleRegresar}>
                            <img
                                src={BotonRegresar}
                                alt="Botón Regresar"
                                title="Regresar"
                                className="w-[80px] h-auto"
                            />
                            </button>
                        </div>
                    </div>

                    <div className="absolute top-1/2 right-0 z-20 transform -translate-y-1/2 px-40">
                        <div className="bg-[#B0CEAC] bg-opacity-90 rounded-full p-4 shadow-lg transition-transform duration-300 hover:scale-110 hover:bg-[#f2ddc9]">
                            <button 
                            onClick={handleSiguientePaso}
                            disabled = {!tamanoSeleccionado}
                            className={`w-[80px] h-auto transition-opacity duration-300 ${
                                !tamanoSeleccionado ? 'opacity-50 cursor-not-allowed' : 'hover:scale-110'
                                }`   
                            }
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

                </section>
            </main>
        </div>
    );
};

export default PedidoTamañoView;