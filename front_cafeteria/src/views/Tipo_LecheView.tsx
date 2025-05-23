{/*Importación de imagenes*/}
import fondoCafe from "../assets/fondo_cafe_mejorada.jpg";
import Almendra from "../assets/Iconos/leche_almendra.png";
import Entera from "../assets/Iconos/leche_regular.png";
import Deslactosada from "../assets/Iconos/lecha_deslactosada.jpg";
import Light from "../assets/Iconos/leche_light.jpg";
import Coco from "../assets/Iconos/leche_coco.png";
import Soya from "../assets/Iconos/leche_soya.jpg";
import BotonRegresar from "../assets/regresar.png";
import BotonContinuar from "../assets/continuar.png";

{/*Importación de componentes*/}
import LayoutConNavbar from "../components/LayoutNavBar";

import { usePedido } from "../contexts/PedidoContext";
import { useNavigate, useParams } from "react-router-dom";
import { useCatalagos } from "../contexts/CatalagosContext"; // Usamos el hook para acceder a los catálogos

const lecheImagenes: Record<string, string> = {
    "Entera": Entera,
    "Deslactosada": Deslactosada,
    "Light": Light,
    "Coco": Coco,
    "Soya": Soya,
    "Almendra": Almendra,
};

const Tipo_LecheView = () => {
    const { leches } = useCatalagos(); // Accede a las leches del catálogo
    const { pedidos,actualizarPedido } = usePedido(); // Accede al pedido global
    const { index } = useParams(); // Capturamos el índice desde la URL
    const navigate = useNavigate();
    const i = Number(index);
    const pedidoActual = pedidos[i];

    const handleLecheSeleccionada = (id_leche: number, nuevoExtra: number) => {
        // Busca el precio anterior de la leche seleccionada (si existe)
        const lecheAnterior = leches.find(l => l.id === pedidoActual?.id_leche);
        const extraAnterior = lecheAnterior ? lecheAnterior.precio : 0;

        // Calcula el nuevo total: resta el anterior y suma el nuevo
        const nuevoTotal = pedidoActual?.total - extraAnterior + nuevoExtra;

        actualizarPedido(i, {
            id_leche,
            total: nuevoTotal,
        });

        console.log("Total actualizado:", nuevoTotal);
    };

    const handleSiguientePaso = () => {
        navigate(`/extras/${i}`);
    }
    
    const handleRegresar = () => {
        const lecheAnterior = leches.find(l => l.id === pedidoActual?.id_leche);
        const extraAnterior = lecheAnterior ? lecheAnterior.precio : 0;

        // Calcula el nuevo total: resta el anterior y suma el nuevo
        const nuevoTotal = pedidoActual?.total - extraAnterior ;
        actualizarPedido(i,{ id_leche: undefined, total: nuevoTotal });
        navigate(-1);
    }

    return (
        <div className="min-h-screen flex flex-col">
            <LayoutConNavbar />
            
            <main className="flex flex-1">                
                <section className="relative w-full flex flex-col items-center space-y-4 pb-10 overflow-hidden">
                    <div
                        className="absolute inset-0 z-0"
                        style={{
                            backgroundImage: `url(${fondoCafe})`,
                            backgroundSize: "cover", 
                            backgroundPosition: "bottom",
                            backgroundRepeat: "no-repeat",
                            opacity: 0.5
                        }}
                    />
                    
                    <div className="flex flex-col relative p-4">

                        {/* Título con fondo oscuro y opacidad */}
                        <div className="flex flex-col relative bg-[#535251] p-4 bg-opacity-60 rounded-3xl">
                            <h2 className="font-Montserrat font-regular text-4xl md:text-5xl text-center text-[#34251d] bg-[#ffffff] px-6 py-3 rounded-2xl shadow-md">
                            Seleccione el tipo de <span className="font-medium">Leche</span>
                            </h2>
                        </div>

                        {/* ------------------------------------------------------------------------------------------------- */}

                        {/* Contenedor para los botones, alineados a los lados del título */}
                        <div className="absolute top-1/2 -left-96 z-20 transform -translate-y-1/2 px-40">
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

                        <div className="absolute top-1/2 -right-96 z-20 transform -translate-y-1/2 px-40">
                            <div className="bg-[#B0CEAC] bg-opacity-90 rounded-full p-4 shadow-lg transition-transform duration-300 hover:scale-110 hover:bg-[#f2ddc9]">
                            <button 
                            onClick={handleSiguientePaso}
                            disabled = {pedidoActual?.id_leche === undefined}
                            className={`w-[80px] h-auto transition-opacity duration-300 ${
                                pedidoActual?.id_leche === undefined ? 'opacity-50 cursor-not-allowed' : ''
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

                    </div>
                    
                    {/* ------------------------------------------------------------------------------------------------- */}

                     {/* Contenedor para las leches estáticas */}
                    <div className="flex flex-wrap justify-center gap-10 w-full px-8">
                        {leches.map((leche) => (
                        <div key={leche.id} className="flex flex-col relative bg-[#535251] p-4 bg-opacity-60 rounded-3xl">
                            <button
                            onClick={() => handleLecheSeleccionada(leche.id, leche.precio)}
                            className={`flex flex-col justify-center pt-6 pb-4 w-[230px] h-[230px] rounded-2xl border-2 border-black
                                ${pedidoActual?.id_leche === leche.id ? 'bg-[#B0CEAC] shadow-xl scale-105' : 'bg-white border-black shadow-md'} 
                                hover:scale-105 transition-transform duration-300`}
                            >

                            {/* Condicional para mostrar "+10" */}
                            {pedidoActual?.id_leche === leche.id && leche.id !== 1 && (
                                <span className="absolute top-2 right-2 bg-green-600 text-white text-lg font-bold w-10 h-10 rounded-full shadow-lg flex 
                                                items-center justify-center">
                                    +10
                                </span>

                            )}

                            <img
                                src={lecheImagenes[leche.nombre]}
                                className="rounded-[20px] w-[160px] h-[160px] m-auto"
                            />
                            <span className="font-Montserrat text-2xl font-semibold text-[#34251d] pt-2 pb-2">{leche.nombre}</span>
                            </button>
                        </div>
                        ))}
                    </div>


                    {/* Botones abajo - solo en pantallas pequeñas y medianas */}
                    <div className="flex lg:hidden justify-center items-center gap-10 pt-4 z-10">
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
                            disabled = {pedidoActual?.id_leche === undefined}
                            className={`w-[70px] h-auto transition-opacity duration-300 ${
                                pedidoActual?.id_leche === undefined ? 'opacity-50 cursor-not-allowed' : ''
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

export default Tipo_LecheView;