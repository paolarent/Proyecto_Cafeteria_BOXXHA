import NavBarEmp from "../components/NavBarEmp";
import { useState } from "react";
import { useNotificaciones } from "../contexts/NotificacionContext";
import { actualizarPedido } from "../services/pedidoService";
import fondoCafe from "../assets/fondo_cafe_mejorada.jpg";

const VerPedidos = () => {
    const { notis, eliminarNotificacion } = useNotificaciones();
    const [completados, setCompletados] = useState(0);
    
    const handleEntregado = async (id_pedido: number) => {
        console.log("Entregar pedido:", id_pedido);
        try {
            const response = await actualizarPedido(id_pedido);
            console.log("Success: " ,response.data.message);
            eliminarNotificacion(id_pedido);
            setCompletados(completados+1);
        } catch (error) {
            console.log("Error al actualizar el pedido: ",error)
        }
    };

    return (
        <div className="min-h-screen flex flex-col bg-[#F7F7F7]">
            {/* NAVBAR DEL EMPLEADO */}
            <header className="sticky top-0 z-50">
                <NavBarEmp />
            </header>

            <main className="flex flex-1">
                {/* Sección principal */}
                <section
                    className="w-full p-4 overflow-y-auto relative"
                    style={{
                        backgroundImage: `url(${fondoCafe})`,
                        backgroundPosition: "top",
                        backgroundRepeat: "repeat",
                    }}
                >
                    {/* Capa de color con opacidad */}
                    <div
                        className="absolute inset-0 z-0"
                        style={{ backgroundColor: "#B0CEAC", opacity: 0.70 }}
                    />

                    <div className="relative z-10">
                        {/* Encabezado superior */}
                        <div className="flex flex-col sm:flex-row items-center justify-between px-6 mt-4 mb-8 space-y-4 sm:space-y-0">
                            {/* PENDIENTES */}
                            <div className="text-3xl flex items-center space-x-4 p-4 bg-white rounded-xl shadow-md min-w-[150px] justify-center">
                                <span className="font-bold">Pendientes</span>
                                <span className="text-[#671212] font-black">{notis.length}</span>
                            </div>

                            {/* TITULO CENTRADO */}
                            <h2 className="text-3xl sm:text-4xl text-white font-bold text-center py-4 px-6 sm:px-14 bg-[#311808]
                            rounded-xl shadow-md max-w-full sm:max-w-lg mx-auto">
                                PEDIDOS
                            </h2>

                            {/* COMPLETADOS */}
                            <div className="text-3xl flex items-center space-x-4 p-4 bg-white rounded-xl shadow-md min-w-[150px] justify-center">
                                <span className="font-bold">Entregados</span>
                                <span className="text-[#3f5a3b] font-black">{completados}</span>
                            </div>
                        </div>

                        {/* Lista de pedidos */}
                        <div className="grid grid-cols-[repeat(auto-fit,minmax(280px,1fr))] gap-6 px-6 items-start">
                            {notis.length > 0 ? (
                                notis.map((noti) => (
                                    <div
                                        key={noti.id_pedido}
                                        className="max-w-md w-full p-6 bg-white rounded-xl font-Montserrat font-semibold text-black text-center text-xl shadow-sm"
                                    >
                                        <p className="font-bold text-xl">ID Pedido: {noti.id_pedido}</p>
                                        <p className="whitespace-pre-wrap">{noti.mensaje}</p>

                                        <div className="flex justify-center mt-4">
                                            <button
                                                onClick={() => handleEntregado(noti.id_pedido)}
                                                className="w-full sm:w-auto px-4 py-3 bg-[#3f5a3b] text-white text-lg lg:text-xl rounded-2xl hover:bg-[#716865] font-bold transition-transform duration-300 hover:scale-105"
                                            >
                                                Entregado
                                            </button>
                                        </div>
                                    </div>
                                ))
                            ) : (
                                <div className="p-6 w-full font-bold rounded-xl text-black bg-white text-xl text-center shadow-sm">
                                    No hay pedidos pendientes
                                </div>
                            )}
                        </div>
                    </div>
                </section>
            </main>
        </div>
    );
};

export default VerPedidos;
