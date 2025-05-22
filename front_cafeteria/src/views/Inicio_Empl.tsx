import NavBarEmp from "../components/NavBarEmp";
import fondo_in2 from "../assets/fondo_inicio2.jpg";
import ver_menu from "../assets/vermenu.png";
import nuevo_pedido from "../assets/nuevoped.png";
import ver_pedidos from "../assets/pedidos.png";
import { Navigate, useNavigate } from "react-router-dom";
import { useEffect, useState } from 'react';
import socket from "../utils/socket";
import { toast, Toaster } from 'react-hot-toast';
import { verificarTipoUsuario } from "../services/authService";
import { useNotificaciones } from "../contexts/NotificacionContext";
import ModalTerminoPed from "../components/ModalTerminoEmp";

const InicioEmpleado = () => {
    const navigate = useNavigate();
    const [notis, setNotis] = useState<string[]>([]);
    const { agregarNotificacion } = useNotificaciones();
    const [showModalTermino, setShowModalTermino] = useState(false);

    useEffect(() => {
        const debeMostrar = localStorage.getItem("mostrar_carrito");
        if (debeMostrar === "true") {
            setShowModalTermino(true);
            localStorage.removeItem("mostrar_carrito");
        }
    }, []);

    useEffect(() => {
        const verificarUsuario = async () => {
            try {
                const data = await verificarTipoUsuario();
                const tipoUsuario = data.user.tipo_usuario;
                if (tipoUsuario !== "empleado") {
                    navigate("/");
                }
            } catch (error) {
                navigate("/login");
            }
        };

        verificarUsuario();
    }, [navigate]);

    useEffect(() => {
        const handleConnect = () => {
            console.log('Conectado al socket');
        };

        const handleNotificacion = (data: { mensaje: string }) => {
            toast.success('Nuevo pedido recibido');
            setNotis((prev) => [data.mensaje, ...prev]);
            agregarNotificacion(data.mensaje);
        };

        socket.on('connect', handleConnect);
        socket.on('notificacion', handleNotificacion);

        return () => {
            socket.off('connect', handleConnect);
            socket.off('notificacion', handleNotificacion);
        };
    }, [agregarNotificacion]);

    return (
    <div className="relative min-h-screen overflow-hidden">
        {/* NAVBAR DEL EMPLEADO */}
        <header className="sticky top-0 z-50">
            <NavBarEmp />
        </header>

        {/* Fondo */}
        <div
            className="absolute inset-0 bg-cover bg-center bg-no-repeat z-0"
            style={{ backgroundImage: `url(${fondo_in2})` }}
            aria-hidden="true"
        />

        <main className="relative z-10 flex items-center justify-center px-4 py-8">
            
            {/* Contenedor central */}
            <div className="flex flex-col lg:flex-row gap-16 lg:gap-20 items-center lg:mt-20 my-10">
                {/* Opción 1 */}
                <div  onClick={() => navigate("/pedido")} 
                    className="bg-white px-5 py-5 rounded-2xl border-4 border-black transition-transform duration-300 hover:scale-105">
                    <div className="group flex flex-col items-center w-[200px] h-[230px] lg:w-[250px] lg:h-[280px] mb-6">
                        <img
                        src={nuevo_pedido}
                        alt="Nuevo Pedido"
                        className="rounded-[20px] w-[180px] h-[190px] lg:w-[230px] lg:h-[240px] mt-2 mb-1"
                        />

                        <button className="w-full font-Montserrat font-bold bg-[#B0CEAC] text-black py-3 px-4 rounded-[10px] shadow-md text-2xl">
                        Nuevo Pedido
                        </button>
                    </div>
                </div>

                {/* Opción 2 */}
                <div
                onClick={() => navigate("/nuestro_menu")}
                className="bg-white px-5 py-5 rounded-2xl border-4 border-black transition-transform duration-300 hover:scale-105"
                >
                <div className="group flex flex-col items-center w-[200px] h-[230px] lg:w-[250px] lg:h-[280px] mb-6">
                    <img
                    src={ver_menu}
                    alt="Ver Menú"
                    className="rounded-[20px] w-[160px] h-[160px] lg:w-[220px] lg:h-[210px] mt-2 mb-6"
                    />
                    <button className="w-full font-Montserrat font-bold bg-[#B0CEAC] text-black py-3 px-4 rounded-[10px] shadow-md text-2xl">
                    Ver Menú
                    </button>
                </div>
                </div>

                {/* Opción 3 */}
                <div onClick={ ()=> navigate("/ver_pedidos") } className="bg-white px-5 py-5 rounded-2xl border-4 border-black transition-transform duration-300 hover:scale-105">
                    <div className="group flex flex-col items-center w-[200px] h-[230px] lg:w-[250px] lg:h-[280px] mb-6">
                        <img
                        src={ver_pedidos}
                        alt="Ver Pedidos"
                        className="rounded-[20px] w-[160px] h-[160px] lg:w-[220px] lg:h-[210px] mt-2 mb-6"
                        />
                        <button className="w-full font-Montserrat font-bold bg-[#B0CEAC] text-black py-3 px-4 rounded-[10px] shadow-md text-2xl">
                        Ver Pedidos
                        </button>
                    </div>
                </div>
            </div>
        </main>

        <Toaster
        position="top-center"
        reverseOrder={false}
        toastOptions={{
            duration: 3000,
            style: {
            background: "#3B2B26",
            color: "#fff",
            fontFamily: "Montserrat",
            fontWeight: 600,
            },
        }}
        />

        {showModalTermino && (
                <ModalTerminoPed
                    isOpen={showModalTermino} 
                    onClose={() => setShowModalTermino(false)} 
                />
        )}
    </div>
);

};

export default InicioEmpleado;
