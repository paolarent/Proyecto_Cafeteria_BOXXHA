import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import ProductoContenedor from "../components/ProductoContenedor";
import { getResumen } from "../services/protectedServices";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { usePedido } from "../contexts/PedidoContext";
import { useCatalagos } from "../contexts/CatalagosContext"; // Usamos el hook para acceder a los catálogos
import fondoCafe from "../assets/fondo_cafe_mejorada.jpg";
import React, { ChangeEvent } from "react";

import VisaIcon from "../assets/visa.svg";
import MastercardIcon from "../assets/mastercard.svg";
import AmericanEIcon from "../assets/american_express.svg";

import { enviarPedidos } from "../services/pedidoService";
import { toast, Toaster } from 'react-hot-toast'; //Importar react-hot-toast para las notificaciones

{/* Ruta /resumen */}
const Resumen_CompraView = () => {
    const { tamanos, leches, extras } = useCatalagos(); // Accedemos a los catálogos
    
    const [metodo, setMetodo] = useState("");
    const [mensaje, setMensaje] = useState("");
    const navigate = useNavigate();
    const { pedidos, actualizarPedido, resetPedidos } = usePedido();

    //Estados para la tarjeta
    const [nombreTitular, setNombreTitular] = useState("");
    const [numTarjeta, setNumTarjeta] = useState("");
    const [fechaVencimiento, setFechaVencimiento] = useState<string>('');
    const [cvv, setCvv] = useState<string>('');
    type CardType = "visa" | "mastercard" | "amex" | null;
    const [cardType, setCardType] = useState<CardType>(null);
    const [isValid, setIsValid] = useState<boolean | null>(null);

    useEffect(() => {
        const fetchResumen = async () => {
        try {
            const data = await getResumen();
            setMensaje(data.mensaje);
        } catch (error) {
            console.error("Error al obtener resumen:", error);
            setMensaje("No autorizado. Redirigiendo...");
            // Aquí podemos redirigir cuando no tengan acceso, ejemplo ERROR: 401 NO AUTORIZADO
            navigate("/401Error");
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

    const handleEnviarPedido = async () => {
        try {
            const response = await enviarPedidos(pedidos);
            if (response.success) {
                toast.success(response.data.message);
            } else {
                toast.error("Error al enviar el pedido"); 
            }
            const id_pqr = response.data.pedido.id_pedido; 
            const codigo = response.data.pedido.codigo_conf;

            // Obtener los pedidos previos (si hay)
            const pedidosQR = JSON.parse(localStorage.getItem("pedidos_confirmados") || "[]");
            const nombreCliente = localStorage.getItem("usuario");
            // Agregar el nuevo pedido
            pedidosQR.push({
                id_pqr,
                codigo,
                nombreCliente, 
            });

            //Guardar la lista actualizada
            localStorage.setItem("pedidos_confirmados", JSON.stringify(pedidosQR));

            localStorage.setItem("mostrar_modal_qr", "true");
            resetPedidos(); //Limpiar el pedido después de enviarlo

            //Esperar poquito antes de redirigir
            setTimeout(() => {
                navigate("/");
            }, 1000);

        } catch (error) {
            console.error("Error al enviar el pedido:", error);
            toast.error("Error al enviar el pedido");
        }        
    };

    const FechaExpiracionValida = (fecha: string): boolean => {
        //Validar formato MM/AA
        const regex = /^(0[1-9]|1[0-2])\/\d{2}$/;
        if (!regex.test(fecha)) return false;

        const [mesStr, anioStr] = fecha.split("/");
        const mes = parseInt(mesStr, 10);
        const anio = parseInt("20" + anioStr, 10); //convierte '25' => 2025

        //Fecha actual
        const ahora = new Date();
        const mesActual = ahora.getMonth() + 1; // getMonth() es 0-indexado
        const anioActual = ahora.getFullYear();

        //Comparar fechas
        if (anio < anioActual) return false;
        if (anio === anioActual && mes < mesActual) return false;

        return true;
    };

    const nombreTitularValido = (nombre: string): boolean => {
        // Divide el texto por espacios
        const palabras = nombre.trim().split(/\s+/);
        
        // Requiere al menos 2 palabras
        if (palabras.length < 2) return false;

        // Cada palabra debe tener al menos 2 letras (solo letras Unicode)
        const regex = /^\p{L}{2,}$/u;
        return palabras.every(palabra => regex.test(palabra));
    };

    //Función para formatear número con espacios cada 4 caracteres (ajustar para American express, por alguna razon es diferente)
    const formatoTarjeta = (value: string): string => {
        //Solo números
        const digits = value.replace(/\D/g, "");

        if (digits.startsWith("3")) {
        //American Express formato: 4-6-5 (ej: 3782 822463 10005)
        const part1 = digits.slice(0, 4);
        const part2 = digits.slice(4, 10);
        const part3 = digits.slice(10, 15);
        return [part1, part2, part3].filter(Boolean).join(" ");
        } else {
        //Visa y Mastercard: grupos de 4
        return digits.match(/.{1,4}/g)?.join(" ") || "";
        }
    };

    const handleNumTarjetaChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    let value = e.target.value;
    //Formatear con espacios
    value = formatoTarjeta(value);
    setNumTarjeta(value);

    const firstDigit = value.replace(/\D/g, "").charAt(0);
    setCardType(
        firstDigit === "4"
            ? "visa"
            : firstDigit === "5"
            ? "mastercard"
            : firstDigit === "3"
            ? "amex"
            : null
    );
    
    const digitsCount = value.replace(/\D/g, "").length;
        if (
        (firstDigit === "4" && digitsCount === 16) ||
        (firstDigit === "5" && digitsCount === 16) ||
        (firstDigit === "3" && digitsCount === 15) ) {
        setIsValid(true);
        } else {
        setIsValid(false);
        }
    };

    const handleRealizarPagoTarjeta = () => {
        if (
            !numTarjeta.trim() &&
            !fechaVencimiento.trim() &&
            !cvv.trim() &&
            !nombreTitular.trim()
        ) {
            toast.error("Por favor, complete los campos para realizar el pago");
            return;
        }

        if (!isValid) {
            toast.error("Número de tarjeta inválido");
            return;
        }
        if (!FechaExpiracionValida(fechaVencimiento)) {
            toast.error("Fecha de vencimiento inválida o expirada (MM/AA)");
            return;
        }
        if (!cvv.match(/^\d{3,4}$/)) {
            toast.error("CVV inválido");
            return;
        }
        if (!nombreTitularValido(nombreTitular)) {
            toast.error("El nombre de titular no tiene el formato correcto");
            return;
        }

        toast.success("Pago con tarjeta realizado correctamente");

        //Después enviar pedido y resetear igual que con efectivo si aplica
        handleEnviarPedido();
    };

    const getCardIcon = () => {
        if (!numTarjeta) return null; //Si está vacío el input, no muestra nada

        if (cardType === "visa") return VisaIcon;
        if (cardType === "mastercard") return MastercardIcon;
        if (cardType === "amex") return AmericanEIcon;
        return null;
    };

    const handleMetodoChange = (e: ChangeEvent<HTMLSelectElement>) => {
        const valor = e.target.value;
        setMetodo(valor);

        if (valor === "tarjeta") {
            setNumTarjeta("");
            setFechaVencimiento("");
            setCvv("");
            setNombreTitular("");
        }
    };

    return (
        <div className="h-full w-full flex flex-col overflow-x-hidden">
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
                                        cantidad: extra.cantidad,
                                        precio: extra.precio
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
                    <div className="flex flex-col bg-white sm:w-full lg:w-[520px] max-w-3xl shadow-xl h-auto rounded-2xl mx-auto p-6 sm:p-10">
                        <h2 className="font-Montserrat font-bold text-2xl sm:text-3xl lg:text-4xl text-left text-[#34251d] pb-6">
                            MÉTODO DE PAGO
                        </h2>

                        <select
                            onChange={handleMetodoChange}
                            className="font-Montserrat text-[#34251d] w-full px-3 py-2 border border-gray-300 rounded-md bg-[#5C48481A] focus:outline-none focus:ring focus:ring-[#3B2B26] font-semibold text-lg"
                        >
                            <option value="">-- Seleccione un método de pago --</option>
                            <option value="efectivo">Efectivo 💵</option>
                            <option value="tarjeta">Tarjeta Crédito/Débito 💳</option>
                        </select>
                        
                        {metodo === "efectivo" && (
                            <div className="flex flex-col sm:flex-row justify-between items-center w-full mt-4 gap-4">
                                <button onClick = {handleEnviarPedido}
                                className="w-full sm:w-auto px-4 py-3 lg:px-6 sm:py-3 bg-[#311808] text-white text-md sm:text-base lg:text-lg rounded hover:bg-[#716865] font-bold transform transition-transform duration-300 hover:scale-105 mt-4">
                                    Realizar pedido
                                </button>
                            </div>
                        )}

                        {metodo === "tarjeta" && (
                        <div className="flex flex-col w-full pt-6 gap-6 font-Montserrat">
                            <div>
                                <h2 className="font-semibold text-lg sm:text-xl text-left text-[#34251d]">
                                Número de tarjeta
                                </h2>

                                <div className="relative mt-1">

                                    <input
                                        type="text"
                                        value={numTarjeta}
                                        onChange={handleNumTarjetaChange}
                                        placeholder="XXXX XXXX XXXX XXXX"
                                        maxLength={19}
                                        className={`w-full px-3 py-2 rounded-md bg-[#5C48481A] focus:outline-none focus:ring focus:ring-[#3B2B26]
                                        ${
                                            !numTarjeta
                                            ? 'border border-gray-300'
                                            : isValid === true
                                            ? 'border-2 border-green-500'
                                            : isValid === false
                                            ? 'border-2 border-red-500'
                                            : 'border border-gray-300'
                                        }`}
                                    />
                                    
                                    {getCardIcon() && (
                                    <img
                                        src={getCardIcon() as string}
                                        alt={cardType || ""}
                                        className="absolute right-3 top-1/2 transform -translate-y-1/2 h-10"
                                    />
                                    )}
                                </div>

                            </div> 
                            {/* Fecha de vencimiento y código CVV */}
                            <div className="flex flex-col sm:flex-row gap-4 sm:gap-6">
                                <div className="flex flex-col flex-1">
                                    <h2 className="font-semibold text-lg sm:text-xl text-left text-[#34251d]">
                                        Fecha de Vencimiento
                                    </h2>

                                    <input
                                        type="text"
                                        value={fechaVencimiento}
                                        onChange={(e) => setFechaVencimiento(e.target.value)}
                                        maxLength={5}
                                        placeholder="MM/AA"
                                        className={`w-full mt-1 px-3 py-2 rounded-md bg-[#5C48481A] focus:outline-none focus:ring focus:ring-[#3B2B26]
                                        ${
                                        !fechaVencimiento
                                            ? 'border border-gray-300'
                                            : FechaExpiracionValida(fechaVencimiento)
                                            ? 'border-2 border-green-500'
                                            : 'border-2 border-red-500'
                                        }`}
                                    />

                                </div>

                                <div className="flex flex-col flex-1">
                                    <h2 className="font-semibold text-lg sm:text-xl text-left text-[#34251d]">
                                        Código CVV
                                    </h2>

                                    <input
                                        type="text"
                                        value={cvv}
                                        onChange={(e) => setCvv(e.target.value)}
                                        maxLength={4}
                                        placeholder="CVV"
                                        className={`w-full mt-1 px-3 py-2 rounded-md bg-[#5C48481A] focus:outline-none focus:ring focus:ring-[#3B2B26]
                                        ${
                                        !cvv
                                            ? 'border border-gray-300'
                                            : /^\d{3,4}$/.test(cvv)
                                            ? 'border-2 border-green-500'
                                            : 'border-2 border-red-500'
                                        }`}
                                    />

                                </div>
                            </div>

                            <div>
                                <h2 className="font-semibold text-lg sm:text-xl text-left text-[#34251d]">
                                Nombre del titular
                                </h2>

                                <input
                                    type="text"
                                    value={nombreTitular}
                                    onChange={(e) => setNombreTitular(e.target.value)}
                                    placeholder="José Rómulo Sosa Ortíz"
                                    className={`w-full mt-1 px-3 py-2 rounded-md bg-[#5C48481A] focus:outline-none focus:ring focus:ring-[#3B2B26]
                                    ${
                                    !nombreTitular
                                        ? 'border border-gray-300'
                                        : nombreTitularValido(nombreTitular)
                                        ? 'border-2 border-green-500'
                                        : 'border-2 border-red-500'
                                    }`}
                                />

                            </div>

                            <div className="flex flex-col sm:flex-row justify-between items-center w-full mt-4 gap-4">
                                <button onClick={handleRealizarPagoTarjeta}
                                    className="w-full sm:w-auto px-4 py-3 lg:px-6 sm:py-3 bg-[#311808] text-white text-md sm:text-base lg:text-lg rounded hover:bg-[#716865] font-bold transform transition-transform duration-300 hover:scale-105">
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

            <Toaster    //ESTILOS DE LAS NOTIFICACIONES
                position="top-center"
                reverseOrder={false}
                toastOptions={{
                duration: 3000,  //Duración de la notificación
                style: {
                    background: '#3B2B26',
                    color: '#fff',
                    fontFamily: 'Montserrat',
                    fontWeight: 600
                },
                }}
            />

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