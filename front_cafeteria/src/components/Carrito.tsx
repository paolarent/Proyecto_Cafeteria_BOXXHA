import React, { useEffect, useState } from 'react';
import ProductoContenedor2 from "../components/ProductoContenedor2";
import { usePedido } from "../contexts/PedidoContext";
import { useCatalagos } from "../contexts/CatalagosContext"; 
import { getResumen } from "../services/protectedServices";
import agregarcarrito from "../assets/Iconos/carrito.png";
import { useNavigate } from "react-router-dom";
import { useMenuContext } from '../contexts/ScrollContexto';


interface Carrito {
    isOpen: boolean;
    onClose: () => void;
}

const ModalCarrito: React.FC<Carrito> = ({ isOpen, onClose }) => {

    const navigate = useNavigate();
    const { pedidos, actualizarPedido } = usePedido(); 
    const { tamanos, leches, extras } = useCatalagos(); 
    const [mensaje, setMensaje] = useState("");
    const { scrollToMenu } = useMenuContext();

    if (!isOpen) return null;

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
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50 p-4">
            <div className="relative bg-white rounded-xl shadow-lg flex flex-col md:flex-row w-[95vw] h-[90vh] md:w-[900px] md:h-[600px] overflow-y-auto">
                
                {/* COLUMNA IZQUIERDA - 2/3 */}
                <div className="w-full md:w-1/2 h-1/2 md:h-full overflow-y-auto p-6 bg-[#B0CEAC]">

                    <h2 className="font-bold text-3xl mb-4">CARRITO  
                        <span className="font-semibold lg:text-2xl text-xl"> ({pedidos.length} productos)</span>
                    </h2>
                    
                    <div className="flex flex-col gap-4">
                        {pedidos.length > 0 ? (
                            pedidos.map((pedido, index) => {
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
                                    <ProductoContenedor2
                                        key={index}
                                        nombre={pedido.nombre}
                                        tipo={pedido.tipo}
                                        sabor={pedido.sabor}
                                        regular={regular}
                                        tamano={tamanoNombre}
                                        leche={lecheNombre}
                                        id_bebida={pedido.id_bebida}
                                        id_postre={pedido.id_postre}
                                        id_tamano={pedido.id_tamano}
                                        id_leche={pedido.id_leche}
                                        extras={extrasNombre?.map(extra => ({ ...extra, precio: extra.precio}))}
                                        total={pedido.total}
                                    />
                                );
                            })
                        ) : (
                            <p className="text-black font-bold text-center text-xl mt-8">¡ Aún no hay productos en el carrito !</p>
                        )}
                    </div>

                </div>

                {/* COLUMNA DERECHA FIJA - 1/3 */}
                <div className="w-full md:w-1/2 h-1/2 md:h-auto p-6 relative pt-10">

                    {/* Botón para cerrar el modal*/}
                    <button
                        onClick={onClose}
                        className="absolute top-2 right-4 text-4xl font-bold text-black hover:text-gray-600"
                        aria-label="Cerrar Carrito"
                    >
                        &times;
                    </button>

                    <div className="w-auto h-auto flex flex-col justify-between">
                        
                        {/* Subtotal */}
                        <div className="mt-6 text-sm">
                            <div className="flex justify-between text-lg font-semibold">
                                <p><span>Subtotal </span>
                                ({pedidos.length} Productos)</p> 
                                <span>${calcularTotal(pedidos)}</span>
                            </div>

                            <div className="flex justify-between mt-2 text-medium text-black text-lg">
                                <span>Servicio Pick-Up</span>
                                <span className="text-green-600 font-semibold">Sin costo</span>
                            </div>

                            <hr className="my-4 border-t" />

                            <div className="flex justify-between text-lg font-bold pb-8">
                                <span>TOTAL DE PEDIDO:</span>
                                <span>${calcularTotal(pedidos)}</span>
                            </div>

                            {/* Botón que ira al resumen-pago */}
                            <button 
                                onClick={ () => navigate("/resumen") }// Navega a la vista de resumen
                                disabled={pedidos.length === 0} // Deshabilitar si no hay productos
                                className={`text-xl font-bold py-3 rounded-2xl w-full transform transition-transform duration-300 
                                ${pedidos.length === 0 ? "bg-[#cacaca] cursor-not-allowed" //Que se vea gris y no se pueda hacer click
                                    : "bg-[#311808] text-white text-xl font-bold py-3 rounded-2xl w-full hover:bg-[#B0CEAC] hover:text-black transform transition-transform duration-300 hover:scale-105"
                                }`}
                            >
                                Ir a Pagar
                            </button>
                        </div>

                        <div className="m-12">
                            <div className="flex justify-center items-center bg-[#535251] bg-opacity-60 rounded-2xl p-4 w-fit mx-auto">
                                <button  
                                    onClick={() => {
                                        navigate('/');
                                        setTimeout(scrollToMenu, 300);
                                        onClose();
                                    }}                                    
                                    className="flex flex-col justify-center pt-6 pb-4 w-[180px] h-[180px] rounded-2xl border-black
                                    bg-white hover:scale-105 transition-transform duration-300 border-2 border-black"
                                >
                                    {/* Imagen del botón */}
                                    <img
                                        alt="Agregar Producto"
                                        src={agregarcarrito}
                                        className="rounded-2xl w-[120px] h-[140px] m-auto"
                                    />
                                    {/* Texto debajo de la imagen */}
                                    <span className="font-Montserrat text-xl font-semibold text-[#34251d] pt-2 pb-2">Agregar Producto</span>
                                </button>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
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

export default ModalCarrito;
