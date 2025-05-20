import React, { useState } from "react";
import logom from "../assets/logo_menu.png";
import icon_user from "../assets/icon_usuario.png";
import icon_notificacion from "../assets/notificacion.png";
import icon_carrito from "../assets/icon_carrito.png";
import AboutUsModal from "./ModalAU";
import { useNavigate } from "react-router-dom";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline"; //Iconos para el menu responsive
import ModalLogin from "../components/ModalLogin";

const NavBarEmpleado = () => {
    const navigate = useNavigate();
    const [isMenuOpen, setIsMenuOpen] = useState(false);        //para controlar el menu movil
    const [MostrarModalLogin, setMostrarModalLogin] = useState(false);

    return (
        <div className="w-full flex flex-col bg-white shadow-md">
            {/* Barra de navegación superior */}
            <nav className="flex justify-between items-center p-4 border-b border-gray-200">
                <div className="flex items-center h-10 space-x-2">
                    <button onClick={() => navigate("/empleado")} className="flex items-center space-x-2 hover:scale-105 transition">
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
                    <li><button onClick={() => navigate("/empleado")} className="text-lg hover:[color:#A1C99C] transition">Inicio</button></li>
                    
                    <li><button className="text-lg hover:[color:#A1C99C] transition">Nuevo Pedido</button></li>
                    <li><button onClick={() => navigate("/nuestro_menu_emp")} className="text-lg hover:[color:#A1C99C] transition">Menú</button></li>
                    <li><button><img src={icon_notificacion} alt="Favorito" className="h-7 hover:scale-110 transition" /></button></li>
                    <li>
                        <div className="flex items-center space-x-2 cursor-pointer" onClick={() => { setMostrarModalLogin(true) }}>
                            <img src={icon_user} alt="Usuario" className="h-7 hover:scale-110 transition" />
                            <span className="hidden md:inline text-lg font-Montserrat font-medium text-black-700">Nombre Empleado</span>
                        </div>
                    </li>
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

                        <button 
                            className="hover:text-[#A1C99C] block"
                        >Shop</button>

                        <button 
                            className="hover:text-[#A1C99C] block"
                        >Menú</button>

                        <div className="flex justify-between pt-4 border-t">
                            <button onClick={() => { navigate("/login"); setIsMenuOpen(false); }}>
                                <img src={icon_user} alt="Usuario" className="h-7 hover:scale-110 transition" />
                            </button>
                            <button>
                                <img src={icon_notificacion} alt="Favorito" className="h-7 hover:scale-110 transition" />
                            </button>
                            <button>
                                <img src={icon_carrito} alt="Carrito" className="h-7 hover:scale-110 transition" />
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
        </div>
    );
};

export default NavBarEmpleado;
