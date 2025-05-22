import NavBarEmp from "../components/NavBarEmp";
import ProductoContenedor from "../components/ProductoContenedor";
import { getResumen } from "../services/protectedServices";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { usePedido } from "../contexts/PedidoContext";
import { useCatalagos } from "../contexts/CatalagosContext"; // Usamos el hook para acceder a los catálogos
import fondoCafe from "../assets/fondo_cafe_mejorada.jpg";
import React, { ChangeEvent } from "react";
import eliminar from "../assets/eliminar.png";

import { enviarPedidos } from "../services/pedidoService";
import { toast, Toaster } from 'react-hot-toast'; //Importar react-hot-toast para las notificaciones
import { verificarTipoUsuario } from "../services/authService";

{/* Ruta /resumen */}
const ResumenPedido = () => {
    const { tamanos, leches, extras } = useCatalagos(); // Accedemos a los catálogos
    
    const [metodo, setMetodo] = useState("");
    const [mensaje, setMensaje] = useState("");
    const navigate = useNavigate();
    const { pedidos, actualizarPedido, resetPedidos } = usePedido();
    
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
            const response = await enviarPedidos(pedidos, metodo);
            if (response.success) {
                setTimeout(() => {
                    toast.success(response.data.message);
                }, 3000); //3000 milisegundos = 2 segundos de delay
            } else {
                toast.error("Error al enviar el pedido"); 
            }
            
            try {
                const data = await verificarTipoUsuario();
                const tipoUser = data.user.tipo_usuario;
                if (tipoUser === "cliente") {
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

                } else if (tipoUser === "empleado") {
                    resetPedidos(); //Limpiar el pedido después de enviarlo
                    setTimeout(() => {
                        navigate("/empleado");
                    }, 3500);
                }
            } catch (error) {
                //No poner nada, no es necesario
            }
        
        } catch (error) {
            console.error("Error al enviar el pedido:", error);
            toast.error("Error al enviar el pedido");
        }        
    };

    const handleMetodoChange = (e: ChangeEvent<HTMLSelectElement>) => {
        const valor = e.target.value;
        setMetodo(valor);
    };

    const handlePagoConTarjeta = () => {
        toast.promise(
            new Promise(async (resolve, reject) => {
                try {
                    await handleEnviarPedido();
                    resolve("ok");
                } catch (error) {
                    reject(error);
                }
            }),
            {
                loading: "Procesando pago...",
                success: "Pago con tarjeta realizado correctamente",
                error: "No se pudo procesar el pago",
            }
        );
    };


    return (
        <div className="min-h-screen w-full flex flex-col bg-[#F7F7F7]">
            <header className="sticky top-0 z-50">
                <NavBarEmp />
            </header>
            
            <main className="flex flex-col md:flex-row flex-1 h-full relative overflow-x-hidden">
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

                    <div className="relative z-10 sticky font-Montserrat top-10 w-full lg:w-104 shadow-xl bg-[#d8d7d7] rounded-2xl gap-4 p-8">
                        <h2 className=" font-bold text-3xl lg:text-4xl text-center text-[#34251d] pb-6">RESUMEN DEL PEDIDO</h2>
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
                                    >
                                        
                                    {/* Boton extra */}
                                    <div className="w-14 h-14 bg-[#e47873] rounded-full flex items-center justify-center cursor-pointer hover:bg-[#B0CEAC] hover:scale-110 duration-300 shadow-md">
                                        <img
                                            src={eliminar}
                                            alt="Eliminar producto"
                                            title="Eliminar este Producto"
                                            className="w-12 h-12 object-contain p-1"
                                        />
                                    </div>
                                    </ProductoContenedor>
                                );

                            })}
                        </div>

                    </div>
                </section>


                {/*Sección derecha */}
                <section className="flex flex-col w-full lg:w-1/2 bg-[#B0CEAC] lg:py-10 lg:p-12 lg:gap-8 py-10 p-4 gap-6">
                    
                    {/* DIV PARA EL SUBTOTAL Y EL TOTAL */}
                    <div className="flex flex-col bg-white sm:w-full lg:w-[500px] max-w-3xl shadow-xl h-auto rounded-2xl mx-auto p-6 sm:p-10">
                        <div className="flex justify-between text-lg font-semibold">
                            <p><span className="text-2xl">Subtotal </span>
                            ({pedidos.length} Productos)</p> 
                            <span className="text-xl">${calcularTotal(pedidos)}</span>
                        </div>

                        <div className="flex justify-between mt-2 text-medium text-black text-lg">
                            <span className="text-xl">Servicio en Sucursal</span>
                            <span className="text-xl text-green-600 font-semibold">Sin costo</span>
                        </div>

                        <br /> <hr />

                        <div className="flex justify-between mt-4 text-xl lg:text-2xl font-bold">
                            <span>TOTAL DE PEDIDO</span>
                            <span>${calcularTotal(pedidos)}</span>
                        </div>
                    </div>

                    {/* Sección de formulario MÉTODO DE PAGO */}
                    <div className="flex flex-col bg-white sm:w-full lg:w-[500px] max-w-3xl shadow-xl h-auto rounded-2xl mx-auto p-6 sm:p-10">
                        <h2 className="font-Montserrat font-bold text-3xl lg:text-3xl text-left text-[#34251d] pb-6">
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
                                disabled={pedidos.length === 0} // Deshabilitar si no hay productos
                                className="w-full sm:w-auto px-4 py-3 lg:px-6 sm:py-3 bg-[#311808] text-white text-md sm:text-base lg:text-lg rounded hover:bg-[#716865] font-bold transform transition-transform duration-300 hover:scale-105 mt-4">
                                    Realizar pedido
                                </button>
                            </div>
                        )}

                        {metodo === "tarjeta" && (
                            <div className="flex flex-col sm:flex-row justify-between items-center w-full mt-4 gap-4">
                                <button onClick={handlePagoConTarjeta}
                                disabled={pedidos.length === 0} // Deshabilitar si no hay productos
                                className="w-full sm:w-auto px-4 py-3 lg:px-6 sm:py-3 bg-[#311808] text-white text-md sm:text-base lg:text-lg rounded hover:bg-[#716865] font-bold transform transition-transform duration-300 hover:scale-105 mt-4">
                                    Realizar Pago
                                </button>
                            </div>
                        )}

                    </div>
                </section>
            </main>

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


export default ResumenPedido;