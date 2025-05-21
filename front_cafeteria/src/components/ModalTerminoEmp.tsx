import React, { useEffect, useState } from 'react';
import ProductoContenedor2 from "../components/ProductoContenedor2";
import { usePedido } from "../contexts/PedidoContext";
import { useCatalagos } from "../contexts/CatalagosContext"; 
import { getResumen } from "../services/protectedServices";
import agregarcarrito from "../assets/Iconos/carrito.png";
import terminarpedido from "../assets/terminar_pedido.png";
import { useNavigate } from "react-router-dom";
import { useMenuContext } from '../contexts/ScrollContexto';


interface FinPedido {
    isOpen: boolean;
    onClose: () => void;
}

const ModalTerminoPed: React.FC<FinPedido> = ({ isOpen, onClose }) => {

    const navigate = useNavigate();
    const { pedidos, actualizarPedido } = usePedido(); 
    const [mensaje, setMensaje] = useState("");

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
            <div className="relative bg-[#B0CEAC] rounded-xl shadow-lg flex flex-col md:flex-row w-full max-w-2xl h-auto max-h-[90vh] overflow-y-auto p-6 gap-10 py-12">
                
                <button onClick={onClose}
                    className="absolute top-1 right-3 text-[#3B2B26] hover:text-[#8e1919] text-3xl font-bold z-10"
                    aria-label="Cerrar modal"
                >
                    &times;
                </button>

                <div className="flex justify-center items-center bg-[#535251] bg-opacity-60 rounded-2xl p-4 w-fit mx-auto">
                    <button  
                        onClick={() => { navigate('/pedido'); }}                                      
                        className="flex flex-col justify-center pt-6 pb-4 w-[220px] h-[220px] rounded-2xl bg-white border-2 border-black hover:scale-105 transition-transform duration-300"
                    >
                        <img
                        alt="Agregar Producto"
                        src={agregarcarrito}
                        className="rounded-2xl w-[150px] h-[150px] m-auto"
                        />
                        <span className="font-Montserrat text-2xl font-semibold text-[#34251d] pt-2 pb-2 text-center">
                        Agregar al Pedido
                        </span>
                    </button>
                </div>

                <div className="flex justify-center items-center bg-[#535251] bg-opacity-60 rounded-2xl p-4 w-fit mx-auto">
                    <button  
                        onClick={() => { navigate('/empleado'); }}                                      
                        className="flex flex-col justify-center pt-6 pb-4 w-[220px] h-[220px] rounded-2xl bg-white border-2 border-black hover:scale-105 transition-transform duration-300"
                    >

                        <img
                        alt="Terminar Pedido"
                        src={terminarpedido}
                        className="rounded-2xl w-[150px] h-[150px] m-auto"
                        />
                        <span className="font-Montserrat text-2xl font-semibold text-[#34251d] pt-2 pb-2 text-center">
                        Terminar Pedido
                        </span>
                    </button>
                </div>
            </div>
        </div>
    );
};

export default ModalTerminoPed;