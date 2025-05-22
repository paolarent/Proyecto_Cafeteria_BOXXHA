import NavBarEmp from "../components/NavBarEmp";
import { useNavigate } from "react-router-dom";
import { useNotificaciones } from "../contexts/NotificacionContext";

const VerPedidos = () => {
    const navigate = useNavigate();
    const {notis} = useNotificaciones();

    return (
        <div className="relative min-h-screen">
            {/* NAVBAR DEL EMPLEADO */}
            <header className="sticky top-0 z-50">
                <NavBarEmp />
            </header>

            <main className="flex flex-1 bg-[#B0CEAC] overflow-y-auto">
                {/* Sección izquierda - 2/3 */}
                <section className="w-2/3 p-4">
                    {/* Pedido y su detalle */}
                    <h2 className="text-4xl text-center font-bold my-4">PEDIDOS</h2>
                    <ul>
                        {notis.map((noti, index)=> (
                            <li
                                key={index}
                                className="p-3 bg-gray-100 rounded-md text-black text-base shadow-sm"
                            >
                              {noti}  
                            </li>
                        ))}
                    </ul>

                </section>

                {/* Sección derecha - 1/3 */}
                <aside className="w-1/3 p-4 bg-[#7a5c49]">
                    {/* Contenido de la derecha */}
                    <div className="flex flex-col bg-white sm:w-full lg:w-[350px] max-w-3xl shadow-xl h-50 rounded-2xl mx-auto p-4 sm:p-10 gap-2">
                        <h2 className="flex justify-center text-black font-bold text-3xl mb-4">CANTIDAD</h2>

                        <div className="flex justify-between mt-1 text-black font-bold text-xl">
                            <span>Pendientes</span>
                            <span className="text-red-500">10</span>
                        </div>

                        <div className="flex justify-between mt-1 text-black font-bold text-xl">
                            <span>Completados</span>
                            <span className="text-green-500">20</span>
                        </div>
                    </div>


                    
                </aside>
            </main>

        </div>
    );
};

export default VerPedidos;