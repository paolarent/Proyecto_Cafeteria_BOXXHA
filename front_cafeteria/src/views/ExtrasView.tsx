import { useEffect, useState } from "react";
import fondoCafe from "../assets/fondo_cafe_mejorada.jpg";
import NavBar from "../components/NavBar";
import BotonRegresar from "../assets/regresar.png";
import BotonContinuar from "../assets/continuar.png";
import { getExtras } from "../services/productService"; // tu fetch
import { usePedido } from "../contexts/PedidoContext";
import { useNavigate, useParams } from "react-router-dom";
import ModalCarrito from "../components/Carrito";

const ExtrasView = () => {
    const [extras, setExtras] = useState<{ id_extra: number; nombre: string; precio: number }[]>([]);
    const [cantidades, setCantidades] = useState<{ [id: number]: number }>({});
    
    const { pedidos, actualizarPedido } = usePedido(); // Hook para acceder al contexto del pedido
    const { index } = useParams(); // Capturamos el índice desde la URL
    const navigate = useNavigate();
    const i = Number(index);
    const pedidoActual = pedidos[i];

    const [showModalCarrito, setShowModalCarrito] = useState(false);    //para controlar el modal que es el carrito

    useEffect(() => {
        if (!pedidoActual) {
            alert("No se encontró el pedido.");
            navigate("/");
            return;
        }
        
        const fetchExtras = async () => {
            try {
                const response = await getExtras(); 
                setExtras(response); // Asigna los datos al estado
                console.log(response); // Muestra los datos en la consola
                const cantidadesIniciales = response.reduce((acc: { [id_extra: number]: number }, extra: any) => {
                    acc[extra.id_extra] = 0; // Inicializa la cantidad de cada extra a 0
                    return acc;
                }, {});
                setCantidades(cantidadesIniciales); // Inicializa el estado de cantidades
            } catch (error) {
                console.error("Error fetching extras:", error);
            }
    };
        fetchExtras();
    }, [pedidoActual, navigate]);


    const incrementar = (id: number) => {  
        setCantidades((prev) => ({
            ...prev,
            [id]: (prev[id] ?? 0) + 1
        }));
    }

    const decrementar = (id: number) => {   
        setCantidades((prev) => ({
            ...prev,
            [id]: Math.max(0, (prev[id] ?? 0) - 1)
        }));
    }

    const handleRegresar = () => {
        actualizarPedido(i,{ extras: [] }); // Limpia los extras del pedido
        navigate(-1); // Regresa a la vista anterior
    };

    const calcularTotalExtras = () => {
        let total = 0;
        let extrasGratis = 3;

        extras.forEach((extra) => {
            const cantidad = cantidades[extra.id_extra] || 0;

            if (cantidad > 0) {
                if (extra.precio > 0) {
                    // Cobramos normalmente los extras que si tienen costo
                    total += extra.precio * cantidad;
                } else {
                    // Si el extra es gratis, lo contamos como un extra gratis
                    if (cantidad <= extrasGratis) {
                        extrasGratis -= cantidad;
                    } else {
                        // Cobrar $5 por cada extra gratis adicional
                        const extrasAdicionales = cantidad - extrasGratis;
                        total += extrasAdicionales * 5; // Costo adicional por extras gratis
                        extrasGratis = 0; // Ya no quedan extras gratis
                    }
                }
            }
        });
        return total;
    };
        

    const handleContinuar = () => {
        const seleccionados = extras
        .filter((extra) => cantidades[extra.id_extra] > 0) // Filtra los extras seleccionados
        .map((extra) => ({
            id: extra.id_extra,
            cantidad: cantidades[extra.id_extra],
        }));
        const totalExtras = calcularTotalExtras(); // Calcula el total de los extras seleccionados
        const totalPedido = pedidoActual.total + totalExtras; // Suma el total de los extras al total del pedido
        actualizarPedido(i,{ extras: seleccionados, total: totalPedido }); // Actualiza el pedido en el contexto
        setShowModalCarrito(true);  //se abre el carrito despues de agregar un producto
    };

    
    return (
        <div className="relative h-screen overflow-y-auto overflow-x-hidden flex flex-col">
            <header className="sticky top-0 z-50">
                <NavBar />
            </header>
            
            <main className="flex-1 relative">
                <img 
                    src={fondoCafe} 
                    className="absolute inset-0 w-full h-full object-cover opacity-50"
                    alt="Fondo de café"
                />
                {/* Sección donde se encuentran el listado de extras y botones +/- */}
                <section className="relative w-full flex flex-col items-center space-y-6 pt-4">
                    <div className="flex flex-col relative bg-[#535251] p-4 bg-opacity-60 rounded-3xl">
                        <h2 className="font-Montserrat font-regular text-3xl md:text-5xl text-center text-[#34251d] bg-[#ffffff] px-6 py-3 
                        rounded-2xl shadow-md">¿Desea agregar <span className="font-medium"> Extras</span>?</h2>
                    </div>

                    <div className="flex flex-col w-full md:w-[38rem] bg-[#535251] p-4 bg-opacity-60 rounded-3xl">
                        <p className="text-white texl-md md:text-xl text-center font-medium px-4 py-2 bg-[#3B2B26] rounded-xl shadow-md">
                        NOTA: Si agrega más de 3 extras, se aplicará un cargo adicional de $5.
                        </p>

                        {/* Mapea los extras y genera los botones dinámicamente */}
                        {extras.map((extra) => (
                            <div key={extra.id_extra} className="flex flex-row gap-3 pt-2 items-center justify-center">
                                <button 
                                    className="w-14 h-14 rounded-3xl bg-white shadow-md border-2 border-black
                                    hover:scale-105 transition-transform hover:bg-[#dfc3a8] duration-300"
                                    onClick={() => decrementar(extra.id_extra)}
                                >
                                    <span className="font-Montserrat font-black text-3xl text-[#34251d]"> - </span>
                                </button>
                                <div className="flex flex-col relative min-w-max w-96 bg-white rounded-2xl justify-center items-center border-2 border-black">
                                    <span className="font-Montserrat font-semibold text-lg md:text-2xl text-[#34251d] px-4 py-2 text-center w-full">
                                        {extra.nombre} 
                                        {(cantidades[extra.id_extra] ?? 0) > 0 && (
                                            <span className="text-gray-500 ml-2 font-normal">+{cantidades[extra.id_extra]}</span>
                                        )}
                                    </span>
                                </div>
                                <button 
                                    className="w-14 h-14 rounded-3xl bg-white shadow-md border-2 border-black 
                                    hover:scale-105 transition-transform hover:bg-[#B0CEAC] duration-300"
                                    onClick={() => incrementar(extra.id_extra)}
                                >
                                    <span className="font-Montserrat font-black text-2xl text-[#34251d]"> + </span>
                                </button>
                            </div>
                        ))}
                    </div>

                    {/* ---------------------------------------------------------------------------------------------------- */}

                    {/* Botones laterales - solo en pantallas grandes */}
                    <div className="hidden lg:flex justify-between px-40 absolute top-1/2 left-0 right-0 transform -translate-y-1/2 z-20 pointer-events-none">
                        {/* Botón Regresar */}
                        <div className="pointer-events-auto bg-[#B0CEAC] bg-opacity-90 rounded-full p-4 shadow-lg hover:scale-110 hover:bg-[#f2ddc9] transition-transform duration-300">
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
                        <div className="pointer-events-auto bg-[#B0CEAC] bg-opacity-90 rounded-full p-4 shadow-lg transition-transform duration-300 hover:scale-110 hover:bg-[#f2ddc9]">
                            <button onClick={handleContinuar}>
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
                            <button onClick={handleContinuar}>
                                <img
                                    src={BotonContinuar}
                                    alt="Botón Continuar"
                                    title="Continuar"
                                    className="w-[70px] h-auto"
                                />
                            </button>
                        </div>
                    </div>

                </section>
            </main>
            {showModalCarrito && (
                <ModalCarrito 
                    isOpen={showModalCarrito} 
                    onClose={() => setShowModalCarrito(false)} 
                />
            )}
            
        </div>
    );
};

export default ExtrasView;