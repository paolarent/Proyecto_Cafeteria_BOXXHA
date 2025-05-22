import NavBarEmp from "../components/NavBarEmp";
import { useNavigate } from "react-router-dom";
import { useNotificaciones } from "../contexts/NotificacionContext";

const VerPedidos = () => {
    const navigate = useNavigate();
    const {notis} = useNotificaciones();

    return (
        <div className="min-h-screen flex flex-col bg-[#F7F7F7]">
            {/* NAVBAR DEL EMPLEADO */}
            <header className="sticky top-0 z-50">
                <NavBarEmp />
            </header>

            <main className="flex flex-1 bg-[#B0CEAC]">
                {/* Sección izquierda - 2/3 */}
                <section className="w-2/3 p-4 overflow-y-auto">
                    {/* Pedido y su detalle */}
                    <h2 className="text-4xl text-center font-bold m-4">PEDIDOS</h2>
                    
                    <div className="flex flex-col items-center gap-6 my-6">
                        <div className="p-6 w-[75%] h-auto bg-white rounded-xl font-Montserrat font-bold text-black text-center text-xl shadow-sm">
                            {notis.length > 0 ? (
                                <>
                                    {notis.map((noti, index) => (
                                        <div key={index}>
                                            {noti}
                                        </div>
                                    ))}

                                    <div className="flex justify-between mt-4 gap-4">
                                        <button className="mt-4 w-full sm:w-auto px-4 py-3 lg:px-6 sm:py-3 bg-[#671212] text-white text-md sm:text-base lg:text-lg rounded-2xl hover:bg-[#716865] font-bold transform transition-transform duration-300 hover:scale-105">
                                            Cancelar
                                        </button>

                                        <button className="mt-4 w-full sm:w-auto px-4 py-3 lg:px-6 sm:py-3 bg-[#3f5a3b] text-white text-md sm:text-base lg:text-lg rounded-2xl hover:bg-[#716865] font-bold transform transition-transform duration-300 hover:scale-105">
                                            Entregado
                                        </button>
                                    </div>
                                </>
                            ) : (
                                <p className="text-gray-600 text-lg">No hay pedidos pendientes</p>
                            )}
                        </div>
                    </div>


                </section>

                {/* Sección derecha - 1/3 */}
                <aside className="w-1/3 p-4 bg-[#7a5c49]">
                    {/* Contenido de la derecha */}
                    <div className="flex flex-col bg-white sm:w-full lg:w-[350px] max-w-3xl shadow-xl h-50 rounded-2xl mx-auto p-4 sm:p-10 gap-2 mt-4">
                        <h2 className="flex justify-center text-black font-bold text-4xl mb-4">CANTIDAD</h2>

                        <div className="flex justify-between mt-1 text-black font-bold text-2xl">
                            <span>Pendientes</span>
                            <span className="text-[#671212] font-black">10</span>
                        </div>

                        <div className="flex justify-between mt-1 text-black font-bold text-2xl">
                            <span>Completados</span>
                            <span className="text-[#3f5a3b] font-black">20</span>
                        </div>
                    </div>


                    
                </aside>
            </main>

        </div>
    );
};

export default VerPedidos;