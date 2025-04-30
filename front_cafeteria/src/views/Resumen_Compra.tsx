import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import ProductoContenedor from "../components/ProductoContenedor"
import { getResumen } from "../services/protectedServices";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";


const productos = [
    {
    nombre: "Latte",
    sabor: "Vainilla",
    tamano: "16 OZ",
    leche: "Entera",
    extras: ["+2 Azucar", "+1 Canela"]
    },
    {
    nombre: "Americano",
    sabor: "Limon",
    tamano: "12 OZ",
    leche: "Entera",
    extras: ["+2 Azucar"]
    },
    {
        nombre: "Americano",
        sabor: "Limon",
        tamano: "12 OZ",
        leche: "Entera",
        extras: ["+2 Azucar"]
    }

];

const tarjeta = {
    nombreTitular:"",
    numTarjeta:"",
    fechaVencimiento:"",
    cvv:""
};

{/* Ruta /resumen */}
const Resumen_CompraView = () => {
    const [metodo, setMetodo] = useState('efectivo');
    const [mensaje, setMensaje] = useState("");
    const navigate = useNavigate();

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

    return (
        <div className=" h-full w-full flex flex-col">
            <header className="sticky top-0 z-50">
                <NavBar />
            </header>
            
            <main className="flex flex-row flex-1 h-full relative">
                {/*Sección izquierda para el resumen de compra */}
                <section className="flex flex-col w-1/2 bg-[#F7F7F7] p-12">
                    <div className="sticky top-20 w-full shadow-xl bg-white rounded-2xl gap-4 p-8">
                        <h2 className="font-Montserrat font-bold text-3xl text-left text-[#34251d] pb-2">Resumen compra</h2>
                        <div className="flex flex-col gap-y-4">
                            {productos.map((producto, index) => (
                                <ProductoContenedor
                                key={index}
                                nombre={producto.nombre}
                                sabor={producto.sabor}
                                tamano={producto.tamano}
                                leche={producto.leche}
                                extras={producto.extras}
                                />
                            ))}
                        </div>
                    </div>
                </section>

                {/*Sección derecha para los formularios */}
                <section className="flex flex-col w-1/2  bg-[#947666] p-12 gap-14">
                    {/*Mapa con Dirección Boxxha Café*/}
                    <div className="flex flex-col bg-white w-full shadow-xl h-full rounded-2xl justify-left p-8">
                        <h2 className="font-Montserrat font-bold text-3xl text-left text-[#34251d] pb-4"> Método de pago</h2>
                            <select onChange={(e) => setMetodo(e.target.value)}className="font-Montserrat font-regular text-left text-[#34251d] w-3/4 px-3 py-2 border border-gray-300 rounded-md bg-[#5C48481A] focus:outline-none focus:ring focus:ring-[#3B2B26] font-semibold">
                                <option>Efectivo</option>
                                <option>Tarjeta Mastercard/Visa</option>
                        </select>
                        {metodo === "Tarjeta Mastercard/Visa" && (
                            <div className="Flex flex-col min-w-full pt-4"> 
                                <h2 className="font-Montserrat font-semibold text-xl text-left text-[#34251d]">Numero de la tarjeta</h2>
                                <input
                                        type="text"
                                        className="font-Montserrat font-regular w-3/4 mt-0 px-3 py-2 border border-gray-300 rounded-md bg-[#5C48481A] focus:outline-none focus:ring focus:ring-[#3B2B26]"
                                        placeholder="xxxx-xxxx-xxxx-xxxx"
                                />
                                {/*Sección para la fecha de vencimiento y codigo cvv */}
                                <div className="w-full flex flex-row pt-4 font-Montserrat">
                                    <div className="Relative flex flex-col w-1/2">
                                        <h2 className="font-Montserrat font-semibold text-xl text-left text-[#34251d]">Fecha de Vencimiento</h2>
                                        <input
                                                type="text"
                                                className="font-Montserrat font-regular w-1/2 mt-0 px-3 py-2 border border-gray-300 rounded-md bg-[#5C48481A] focus:outline-none focus:ring focus:ring-[#3B2B26]"
                                                placeholder="01/26"
                                        />
                                    </div>
                                    <div className="Relative flex flex-col w-1/2">
                                        <h2 className="font-Montserrat font-semibold text-xl text-left text-[#34251d]">Código CVV</h2>
                                        <input
                                                type="text"
                                                className="font-Montserrat font-regular w-1/2 mt-0 px-3 py-2 border border-gray-300 rounded-md bg-[#5C48481A] focus:outline-none focus:ring focus:ring-[#3B2B26]"
                                                placeholder="cvv"
                                        />
                                    </div>
                                </div> 
                                <h2 className="font-semibold text-xl text-left text-[#34251d] pt-4">Nombre del titular</h2>
                                <input
                                        type="text"
                                        className=" font-regular w-3/4 mt-0 px-3 py-2 border border-gray-300 rounded-md bg-[#5C48481A] focus:outline-none focus:ring focus:ring-[#3B2B26]"
                                        placeholder="José Romulo Sosa Ortíz"
                                />
                                <button className="w-1/2 bg-white rounded-2xl">
                                Realizar pago</button>
                            </div>
                        )}
                    </div>
                    <div className="bg-white w-full h-full shadow-xl rounded-2xl justify-left p-8">
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