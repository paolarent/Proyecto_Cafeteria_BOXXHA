import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import ProductoContenedor from "../components/ProductoContenedor";
import { getResumen } from "../services/protectedServices";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { usePedido } from "../contexts/PedidoContext";
import { useCatalagos } from "../contexts/CatalagosContext"; // Usamos el hook para acceder a los catálogos
import fondoCafe from "../assets/fondo_cafe_mejorada.jpg";

const tarjeta = {
    nombreTitular:"",
    numTarjeta:"",
    fechaVencimiento:"",
    cvv:""
};

{/* Ruta /resumen */}
const Resumen_CompraView = () => {
    const { tamanos, leches, extras } = useCatalagos(); // Accedemos a los catálogos
    
    const [metodo, setMetodo] = useState('efectivo');
    const [mensaje, setMensaje] = useState("");
    const navigate = useNavigate();
    const { pedidos, actualizarPedido } = usePedido();

    useEffect(() => {
        const fetchResumen = async () => {
        try {
            const data = await getResumen();
            setMensaje(data.mensaje);
        } catch (error) {
            console.error("Error al obtener resumen:", error);
            setMensaje("No autorizado. Redirigiendo...");
            // Aquí podemos redirigir cuando no tengan acceso, ejemplo ERROR: 401 NO AUTORIZADO
            //navigate("/401Error");
        }
        };

        fetchResumen();
    }, []);
    
    useEffect(() => {
        const marcarCompleto = () => {
            pedidos.forEach((pedido, index) => {
                if (!pedido.completo){
                    actualizarPedido(index, {completo: true});
                }
            });
        };
        marcarCompleto();
    },[pedidos]);

    const handleEnviarPedido = () => {
        // Enviamos el pedido al backend
    }
    
    return (
        <div className=" h-full w-full flex flex-col overflow-x-hidden">
            <header className="sticky top-0 z-50">
                <NavBar />
            </header>
            
            <main className="flex flex-col md:flex-row flex-1 h-full relative">
                {/*Sección izquierda para el resumen de compra */}
                <section className="relative flex flex-col w-full lg:w-1/2 bg-[#F7F7F7] lg:py-12 lg:p-12 py-8 p-4"
                        style={{
                            backgroundImage: `url(${fondoCafe})`,
                            backgroundPosition: "top",
                            backgroundRepeat: "repeat",
                        }}
                        >
                        {/* Capa de color con algo de opacidad encima, opcional */}
                        <div
                        className="absolute inset-0 z-0"
                        style={{ backgroundColor: "#f8e9df", opacity: 0.60 }}
                        />

                    <div className="relative z-10 sticky font-Montserrat top-20 w-full lg:w-104 shadow-xl bg-[#d8d7d7] rounded-2xl gap-4 p-8">
                        <h2 className=" font-bold text-2xl lg:text-4xl text-center text-[#34251d] pb-6">RESUMEN DEL PEDIDO</h2>
                        <div className="flex flex-col gap-y-4">
                            {pedidos.map((pedido, index) => {
                                const regular = pedido.regular === undefined
                                    ? "No definido"
                                    : pedido.regular
                                        ? "Regular"
                                        : "Descafeinado";

                                const tamanoNombre = tamanos.find(t => t.id === pedido.id_tamano)?.nombre || "No definido";
                                const lecheNombre = leches.find(t => t.id === pedido.id_leche)?.nombre || "No definido";
                                
                                const extrasNombre = pedido.extras?.map(extra => {
                                    const detalle = extras.find(e => e.id === extra.id);
                                    return {
                                        id: extra.id,
                                        nombre: detalle?.nombre || "No definido",
                                        cantidad: extra.cantidad
                                    };
                                });

                                return (
                                    <ProductoContenedor
                                        key={index}
                                        nombre={pedido.nombre}
                                        tipo={pedido.tipo}
                                        sabor={pedido.sabor}
                                        regular={regular}
                                        tamano={tamanoNombre}
                                        leche={lecheNombre}
                                        extras={extrasNombre}
                                        total={pedido.total}
                                    />
                                );
                            })}
                        </div>

                        {/* DIV PARA EL SUBTOTAL Y EL TOTAL */}
                        <div className="w-full bg-white text-[#1f1f1f] border-y-4 border-dashed border-[#a3a3a3] px-4 py-2 font-medium text-sm mt-6">
                            <div className="flex justify-between text-lg font-semibold">
                                <p><span>Subtotal </span>
                                ({pedidos.length} Productos)</p> 
                                <span>${calcularTotal(pedidos)}</span>
                            </div>

                            <div className="flex justify-between mt-2 text-medium text-black text-lg">
                                <span>Servicio Pick-Up</span>
                                <span className="text-green-600 font-semibold">Sin costo</span>
                            </div>

                            <div className="flex justify-between mt-8 text-xl font-bold">
                                <span>TOTAL DE PEDIDO:</span>
                                <span>${calcularTotal(pedidos)}</span>
                            </div>
                        </div>

                    </div>
                </section>


                {/*Sección derecha para los formularios */}
                <section className="flex flex-col w-full lg:w-1/2 bg-[#B0CEAC] lg:py-12 lg:p-12 lg:gap-16 py-8 p-4 gap-8">
                    
                    {/* Sección de formulario MÉTODO DE PAGO */}
                    <div className="flex flex-col bg-white w-full max-w-3xl shadow-xl h-auto rounded-2xl mx-auto p-6 sm:p-10">
                        <h2 className="font-Montserrat font-bold text-2xl sm:text-3xl lg:text-4xl text-left text-[#34251d] pb-6">
                            MÉTODO DE PAGO
                        </h2>

                        <select
                            onChange={(e) => setMetodo(e.target.value)}
                            className="font-Montserrat text-[#34251d] w-full px-3 py-2 border border-gray-300 rounded-md bg-[#5C48481A] focus:outline-none focus:ring focus:ring-[#3B2B26] font-semibold"
                        >
                            <option>-- Seleccione un método de pago --</option>
                            <option>Efectivo</option>
                            <option>Tarjeta Mastercard/Visa</option>
                        </select>
                        
                        {metodo === "Efectivo" && (
                            <div className="flex flex-col sm:flex-row justify-between items-center w-full mt-4 gap-4">
                                <button className="w-full sm:w-auto px-4 py-3 lg:px-6 sm:py-3 bg-[#311808] text-white text-md sm:text-base lg:text-lg rounded hover:bg-[#716865] font-bold transform transition-transform duration-300 hover:scale-105 mt-4">
                                    Enviar pedido
                                </button>
                            </div>
                        )}

                        {metodo === "Tarjeta Mastercard/Visa" && (
                        <div className="flex flex-col w-full pt-6 gap-6 font-Montserrat">
                            <div>
                                <h2 className="font-semibold text-lg sm:text-xl text-left text-[#34251d]">
                                Número de la tarjeta
                                </h2>
                                <input
                                type="text"
                                className="w-full mt-1 px-3 py-2 border border-gray-300 rounded-md bg-[#5C48481A] focus:outline-none focus:ring focus:ring-[#3B2B26]"
                                placeholder="xxxx-xxxx-xxxx-xxxx"
                                />
                            </div>

                            {/* Fecha de vencimiento y código CVV */}
                            <div className="flex flex-col sm:flex-row gap-4 sm:gap-6">
                                <div className="flex flex-col flex-1">
                                    <h2 className="font-semibold text-lg sm:text-xl text-left text-[#34251d]">
                                        Fecha de Vencimiento
                                    </h2>
                                    <input
                                        type="text"
                                        className="w-full mt-1 px-3 py-2 border border-gray-300 rounded-md bg-[#5C48481A] focus:outline-none focus:ring focus:ring-[#3B2B26]"
                                        placeholder="01/26"
                                    />
                                </div>

                                <div className="flex flex-col flex-1">
                                    <h2 className="font-semibold text-lg sm:text-xl text-left text-[#34251d]">
                                        Código CVV
                                    </h2>
                                    <input
                                        type="text"
                                        className="w-full mt-1 px-3 py-2 border border-gray-300 rounded-md bg-[#5C48481A] focus:outline-none focus:ring focus:ring-[#3B2B26]"
                                        placeholder="CVV"
                                    />
                                </div>
                            </div>

                            <div>
                                <h2 className="font-semibold text-lg sm:text-xl text-left text-[#34251d]">
                                Nombre del titular
                                </h2>
                                <input
                                type="text"
                                className="w-full mt-1 px-3 py-2 border border-gray-300 rounded-md bg-[#5C48481A] focus:outline-none focus:ring focus:ring-[#3B2B26]"
                                placeholder="José Rómulo Sosa Ortíz"
                                />
                            </div>

                            <div className="flex flex-col sm:flex-row justify-between items-center w-full mt-4 gap-4">
                                <button className="w-full sm:w-auto px-4 py-3 lg:px-6 sm:py-3 bg-[#311808] text-white text-md sm:text-base lg:text-lg rounded hover:bg-[#716865] font-bold transform transition-transform duration-300 hover:scale-105">
                                    Realizar pago
                                </button>

                                <button className="w-full sm:w-auto px-4 py-3 lg:px-6 sm:py-3 bg-[#311808] text-white text-md sm:text-base lg:text-lg rounded hover:bg-[#716865] font-bold transform transition-transform duration-300 hover:scale-105">
                                    Guardar tarjeta
                                </button>
                            </div>

                        </div>
                        )}
                    </div>

                    
                    {/*Mapa con Dirección Boxxha Café*/}
                    <div className="bg-white w-full h-auto shadow-xl rounded-2xl justify-left p-8">
                        {/*Contenedor de la dirección escrita o leyenda */}
                        <div className="relative flex flex-col justify-left w-full">
                            <p className="font-Montserrat font-bold text-2xl lg:text-4xl text-left text-[#34251d] pb-2"> 
                                ENTREGA
                            </p>
                            <p className="font-Montserrat font-semibold text-xl text-left text-[#34251d] pb-2"> 
                                Recoge tu pedido en: <br />
                                <span className="font-bold"> Blvd. Macapule 2589, Viñedos, 81228 Los Mochis, Sin.</span>
                            </p>
                        </div>
                        <div className="flex flex-col w-full">
                            <iframe 
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d897.8664617336078!2d-108.98246811785354!3d25.821190637920285!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x86ba2900647132dd%3A0xc09c4a8f6a0e69cf!2scafeteria%20boxxha!5e0!3m2!1ses-419!2smx!4v1745380050009!5m2!1ses-419!2smx" 
                            className="border-0 h-96 w-full;"
                            loading="lazy">
                            </iframe>
                        </div>
                    </div>
                </section>
            </main>
            <Footer />
        </div>
    );
};

const calcularTotal = (pedidos: any) => {
    let total = 0;
    pedidos.forEach((pedido: any) => {
        total += pedido.total;
    });
    return total.toFixed(2);
};


export default Resumen_CompraView;