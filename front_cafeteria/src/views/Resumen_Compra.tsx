import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import ProductoContenedor from "../components/ProductoContenedor";
import { getResumen } from "../services/protectedServices";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { usePedido } from "../contexts/PedidoContext";
import { useCatalagos } from "../contexts/CatalagosContext"; // Usamos el hook para acceder a los catálogos
import fondoCafe from "../assets/fondo_cafe_mejorada.jpg";

// To do en este doc
// Diseño 
/*
    -Boton realizar pago
    -Maybe agregar otro metodo de pago (Monedero electronico si lo llegamos a agregar)
    -Rediseñar el resumen compra (
        Hacerlo tipo ticket de compra literalmente que ese sea el diseño
        Seguir con el mismo diseño de los botones al realizar un pedido
        )
*/

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

    return (
        <div className=" h-full w-full flex flex-col">
            <header className="sticky top-0 z-50">
                <NavBar />
            </header>
            
            <main className="flex flex-row flex-1 h-full relative">
                {/*Sección izquierda para el resumen de compra */}
                <section className="relative flex flex-col w-1/2 bg-[#F7F7F7] p-12"
                        style={{
                            backgroundImage: `url(${fondoCafe})`,
                            //backgroundSize: "cover", 
                            backgroundPosition: "top",
                            backgroundRepeat: "repeat",
                        }}
                        >
                        {/* Capa de color con algo de opacidad encima, opcional */}
                        <div
                        className="absolute inset-0 z-0"
                        style={{ backgroundColor: "#f8e9df", opacity: 0.60 }}
                        />

                    <div className="relative z-10 sticky font-Montserrat top-20 w-full shadow-xl bg-white rounded-2xl gap-4 p-8">
                        <h2 className=" font-bold text-3xl text-left text-[#34251d] pb-6">Resumen compra</h2>
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
                                    />
                                );
                            })}
                        </div>
                    </div>
                </section>


                {/*Sección derecha para los formularios */}
                <section className="flex flex-col w-1/2 bg-[#B0CEAC] p-12 gap-14">
                    {/*Seccion de formulario METODO DE PAGO */}
                    <div className="flex flex-col bg-white w-104 shadow-xl h-auto rounded-2xl mx-auto p-10">
                        <h2 className="font-Montserrat font-bold text-3xl text-left text-[#34251d] pb-6"> Método de pago</h2>
                            <select onChange={(e) => setMetodo(e.target.value)}className="font-Montserrat font-regular text-left text-[#34251d] w-full px-3 py-2 border border-gray-300 rounded-md bg-[#5C48481A] focus:outline-none focus:ring focus:ring-[#3B2B26] font-semibold">
                                <option>Efectivo</option>
                                <option>Tarjeta Mastercard/Visa</option>
                        </select>
                        {metodo === "Tarjeta Mastercard/Visa" && (
                            <div className="flex flex-col min-w-full pt-4 gap-4 font-Montserrat mx-auto"> 
                                <div>
                                    <h2 className="font-semibold text-xl text-left text-[#34251d]">Numero de la tarjeta</h2>
                                    <input
                                            type="text"
                                            className="font-regular w-full mt-0 px-3 py-2 border border-gray-300 rounded-md bg-[#5C48481A] focus:outline-none focus:ring focus:ring-[#3B2B26]"
                                            placeholder="xxxx-xxxx-xxxx-xxxx"
                                    />
                                </div>
                                {/*Sección para la fecha de vencimiento y codigo cvv */}
                                <div className="w-full flex flex-row font-Montserrat">
                                    <div className="Relative flex flex-col">
                                        <h2 className="font-semibold text-xl text-left text-[#34251d]">Fecha de Vencimiento</h2>
                                        <input
                                                type="text"
                                                className="font-regular w-40 mt-0 px-3 py-2 border border-gray-300 rounded-md bg-[#5C48481A] focus:outline-none focus:ring focus:ring-[#3B2B26]"
                                                placeholder="01/26"
                                        />
                                    </div>

                                    <div className="Relative flex flex-col ml-auto">
                                        <h2 className="font-semibold text-xl text-left text-[#34251d]">Código CVV</h2>
                                        <input
                                                type="text"
                                                className="font-regular w-40 mt-0 px-3 py-2 border border-gray-300 rounded-md bg-[#5C48481A] focus:outline-none focus:ring focus:ring-[#3B2B26]"
                                                placeholder="cvv"
                                        />
                                    </div>
                                </div> 

                                <div>
                                    <h2 className="font-semibold text-xl text-left text-[#34251d]">Nombre del titular</h2>
                                    <input
                                            type="text"
                                            className=" font-regular w-full mt-0 px-3 py-2  border border-gray-300 rounded-md bg-[#5C48481A] focus:outline-none focus:ring focus:ring-[#3B2B26]"
                                            placeholder="José Romulo Sosa Ortíz"
                                    />
                                </div>

                                <div className="flex justify-start gap-20 mt-4">
                                {/*Quizás aqui agregar el boton Guardar Tarjeta*/}
                                    <button className="px-6 py-3 bg-[#311808] text-lg text-white rounded hover:bg-[#716865] font-bold
                                    transform transition-transform duration-300 hover:scale-105">
                                    Realizar pago</button>

                                    <button className="px-6 py-3 bg-[#311808] text-lg text-white rounded hover:bg-[#716865] font-bold
                                    transform transition-transform duration-300 hover:scale-105">
                                    Guardar Tarjeta</button>
                                </div>
                            </div>
                        )}
                    </div>

                    
                    {/*Mapa con Dirección Boxxha Café*/}
                    <div className="bg-white w-full h-auto shadow-xl rounded-2xl justify-left p-8">
                        {/*Contenedor de la dirección escrita o leyenda */}
                        <div className="relative flex flex-col justify-left w-full">
                            <p className="font-Montserrat font-bold text-3xl text-left text-[#34251d] pb-2 "> 
                                Entrega
                            </p>
                            <p className="font-Montserrat font-semibold text-xl text-left text-[#34251d] pb-2"> 
                                Recoge tu pedido en
                                Blvd. Macapule 2589, Viñedos, 81228 Los Mochis, Sin.
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

export default Resumen_CompraView;