import { useState } from "react";
import logom from "../assets/logo_menu.png";
import icon_user from "../assets/icon_usuario.png";
import icon_notificacion from "../assets/notificacion.png";
import icon_carrito from "../assets/icon_carrito.png";
import { useNavigate } from "react-router-dom";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline"; //Iconos para el menu responsive
import ModalLogin from "../components/ModalLogin";
import cerrarsesionem from "../assets/cerrarsesionem.png";
import { usePedido } from '../contexts/PedidoContext';
import { useNotificaciones } from "../contexts/NotificacionContext";
import ModalConfirm from "../components/ModalConfirm";
import ModalTerminoPed from "../components/ModalTerminoEmp";
import { useAuth } from "../contexts/AuthContext"; // Usamos el hook para acceder a la autenticación    

const NavBarEmpleado = () => {
    const navigate = useNavigate();
    const [isMenuOpen, setIsMenuOpen] = useState(false);        //para controlar el menu movil
    const [MostrarModalLogin, setMostrarModalLogin] = useState(false);
    const user = JSON.parse(localStorage.getItem("usuario") || '""'); //Recuperar el usuario almacenado sin las comillas
    const { resetPedidos } = usePedido();
    const { pedidoActualIncompleto, indexActualIncompleto, eliminarPedido} = usePedido();
    const [MostrarModalConfirm, setMostrarModalConfirm] = useState(false);
    const [MostrarModalTerminoPed, setMostrarModalTerminoPed] = useState(false);

    const { contador, limpiarNotificaciones } = useNotificaciones();
    const { clearTipoUsuario } = useAuth();

    {/* PARA EVITAR PEDIDOS INCOMPLETOS */}
    const handleIrAInicio = () => {
        if (pedidoActualIncompleto) {
            setMostrarModalConfirm(true); // Abrir modal de confirmación
        } else {
            navigate('/empleado'); // No hay pedido incompleto, va directo
        }
    };

    const handleIrAPedir = () => {
        if (pedidoActualIncompleto) {
            setMostrarModalConfirm(true); // Abrir modal de confirmación
        } else {
            navigate('/pedido'); // No hay pedido incompleto, va directo
        }
    };
    
    const handleIrAMenu = () => {
        if (pedidoActualIncompleto) {
            setMostrarModalConfirm(true); // Abrir modal de confirmación
        } else {
            navigate('/nuestro_menu');
        }
    };

    const handleConfirmarSalir = () => {
        eliminarPedido(indexActualIncompleto); // Eliminar el pedido incompleto
        navigate('/empleado'); // Ir al inicio
        setMostrarModalConfirm(false); // Cerrar modal
    };
    
    const handleCancelarSalir = () => {
        setMostrarModalConfirm(false); // Solo cerrar el modal sin hacer nada
    };


    const handleLogout= () => {
        localStorage.removeItem("token");
        localStorage.removeItem("usuario");
        localStorage.removeItem("ultimo_id_pedido");
        localStorage.removeItem("ultimo_codigo_conf");
        localStorage.removeItem("pedidos_confirmados");
        resetPedidos();
        clearTipoUsuario(); // Limpiar el tipo de usuario
        navigate('/'); 
    };     

    return (
        <div className="w-full flex flex-col bg-white shadow-md">
            {/* Barra de navegación superior */}
            <nav className="flex justify-between items-center p-4 border-b border-gray-200">
                <div className="flex items-center h-10 space-x-2">
                    <button onClick={handleIrAInicio} className="flex items-center space-x-2 hover:scale-105 transition">
                        <img src={logom} alt="Logo" className="h-14" />
                        <span className="text-xl font-extrabold font-serif">BOXXHA CAFÉ</span>
                    </button>
                </div>

                {/* Botón hamburguesa (solo en móvil) */}
                {!isMenuOpen && (
                    <button className="md:hidden" onClick={() => setIsMenuOpen(true)} aria-label="Abrir menú">
                        <Bars3Icon className="h-7 w-7 text-black" />
                    </button>
                )}

                {/* Menú normal en escritorio, diseño original, se oculta en pantallas pequeñas y se muestra en las grandes */}
                <ul className="hidden md:flex space-x-8 text-sm font-Montserrat font-medium text-black-700 items-center">
                    <li><button onClick={handleIrAInicio} className="text-lg hover:[color:#A1C99C] transition">Inicio</button></li>
                    
                    <li><button onClick={handleIrAPedir} className="text-lg hover:[color:#A1C99C] transition">Nuevo Pedido</button></li>
                    <li><button onClick={handleIrAMenu} className="text-lg hover:[color:#A1C99C] transition">Menú</button></li>
                    {/* NOTIFICACIONES */}
                    <li>
                    <button onClick={limpiarNotificaciones} className="relative">
                        <img src={icon_notificacion} alt="Notificaciones" className="h-7 hover:scale-110 transition" />
                        {contador > 0 && (
                        <span className="absolute -top-1 -right-1 bg-red-600 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center font-bold">
                            {contador}
                        </span>
                        )}
                    </button>
                    </li>
                    <li>
                        <div className="flex items-center space-x-2 cursor-pointer" onClick={() => { setMostrarModalTerminoPed(true) }}>
                            <img src={icon_user} alt="Usuario" className="h-7 hover:scale-110 transition" />
                            <span className="hidden md:inline text-lg font-Montserrat font-medium text-black-700">{user}</span>
                        </div>
                    </li>
                    <li><button onClick={handleLogout}><img src={cerrarsesionem} alt="Cerrar Sesion" className="h-7 mt-1 hover:scale-110 transition" /></button></li>
                </ul>
            </nav>

            {/* Menú desplegable en móvil */}
            {isMenuOpen && (
                <>
                    {/* Fondo oscuro semitransparente */}
                    <div 
                        className="fixed inset-0 bg-black bg-opacity-40 z-40"
                        onClick={() => setIsMenuOpen(false)}
                    ></div>

                    {/* Panel lateral derecho */}
                    <div className="fixed top-0 right-0 h-full w-3/5 bg-white shadow-lg z-50 p-4 space-y-4 transition-all duration-300
                                    text-lg font-Montserrat font-medium text-black-700">

                        {/* Botón X en la esquina superior izquierda */}
                        <div className="flex justify-between items-center mb-4">
                            <div className="flex items-center h-10 space-x-2">
                                <img src={logom} alt="Logo" className="h-14" />
                                <span className="text-xl font-extrabold font-serif">BOXXHA CAFÉ</span>
                            </div>
                            <button onClick={() => setIsMenuOpen(false)} aria-label="Cerrar menú">
                                <XMarkIcon className="h-6 w-6 text-black hover:text-[#A1C99C] transition" />
                            </button>
                        </div>

                        <button 
                            className="hover:text-[#A1C99C] block"
                            onClick={() => { navigate("/empleado"); setIsMenuOpen(false); }}
                        >Inicio</button>

                        <button onClick={handleIrAPedir}
                            className="hover:text-[#A1C99C] block"
                        >Nuevo Pedido</button>

                        <button 
                            className="hover:text-[#A1C99C] block"
                        >Menú</button>

                        <div className="flex justify-between pt-4 border-t">
                            <button>
                                <img src={icon_user} alt="Usuario" className="h-7 hover:scale-110 transition" />
                            </button>
                            <button>
                                <img src={icon_notificacion} alt="Notificaciones" className="h-7 hover:scale-110 transition" />
                            </button>
                            <button onClick={handleLogout}>
                                <img src={cerrarsesionem} alt="Cerrar Sesion" className="h-7 hover:scale-110 transition" />
                            </button>
                        </div>
                    </div>
                </>
            )}

            {/* Modal */}
            {MostrarModalLogin && (
                <ModalLogin
                    isOpen={MostrarModalLogin} 
                    onClose={() => setMostrarModalLogin(false)} 
                />
            )}

            <ModalConfirm
                isOpen={MostrarModalConfirm}
                onClose={handleCancelarSalir}
                onConfirm={handleConfirmarSalir}
            />

            {MostrarModalTerminoPed && (
                <ModalTerminoPed
                    isOpen={MostrarModalTerminoPed} 
                    onClose={() => setMostrarModalTerminoPed(false)} 
                />
            )}
        </div>
    );
};

export default NavBarEmpleado;
