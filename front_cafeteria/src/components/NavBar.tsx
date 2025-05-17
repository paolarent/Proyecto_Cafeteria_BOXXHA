import React, { useState } from "react";
import logom from "../assets/logo_menu.png";
import icon_user from "../assets/icon_usuario.png";
import icon_like from "../assets/icon_like.png";
import icon_carrito from "../assets/icon_carrito.png";
import AboutUsModal from "../components/ModalAU";
import { useNavigate } from "react-router-dom";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline"; //Iconos para el menu responsive
import { useMenuContext } from '../contexts/ScrollContexto';
import { UserMenu } from "../components/DD_DatosUsuario"; 
import { CambiarContraModal } from "../components/ActualizarContra";
import { CambiarDatosModal } from "../components/ActualizarDUser";
import { usePedido } from '../contexts/PedidoContext';
import ModalConfirm from "../components/ModalConfirm";
import ModalCarrito from "../components/Carrito";

const NavBar: React.FC = () => {
    const navigate = useNavigate();
    const [showAboutModal, setShowAboutModal] = useState(false);    //para controlar el modal
    const [isMenuOpen, setIsMenuOpen] = useState(false);        //para controlar el menu movil
    const { scrollToMenu, scrollToInicio } = useMenuContext(); //Obtener la función scrollToMenu desde el contexto
    const [isUserMenuOpen, setIsUserMenuOpen] = useState(false); //para controlar el menu dropdown de usuario
    const [MostrarModalContra, setMostrarModalContra] = useState(false); //controlar mostrar el modal para actualizar la contrasena
    const [MostrarModalDatosA, setMostrarModalDatosA] = useState(false);    //controlar el modal de actualizar los datos
    
    const { resetPedidos } = usePedido();

    const { pedidoActualIncompleto, indexActualIncompleto, eliminarPedido} = usePedido();
    const [MostrarModalConfirm, setMostrarModalConfirm] = useState(false);
    const [showModalCarrito, setShowModalCarrito] = useState(false);    //para controlar el modal que es el carrito

    {/* PARA EVITAR PEDIDOS INCOMPLETOS */}
    const handleIrAInicio = () => {
        if (pedidoActualIncompleto) {
            setMostrarModalConfirm(true); // Abrir modal de confirmación
        } else {
            navigate('/'); // No hay pedido incompleto, va directo
            setTimeout(scrollToInicio, 300);  //Da tiempo a que la navegación ocurra (cambio de ruta)
        }
    };

    const handleIrAPedir = () => {
        if (pedidoActualIncompleto) {
            setMostrarModalConfirm(true); // Abrir modal de confirmación
        } else {
            navigate('/'); // No hay pedido incompleto, va directo
            setTimeout(scrollToMenu, 300);  //Da tiempo a que la navegación ocurra (cambio de ruta)
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
        navigate('/'); // Ir al inicio
        setMostrarModalConfirm(false); // Cerrar modal
    };
    
    const handleCancelarSalir = () => {
        setMostrarModalConfirm(false); // Solo cerrar el modal sin hacer nada
    };

    const user = JSON.parse(localStorage.getItem("usuario") || '""'); //Recuperar el usuario almacenado sin las comillas

    //Esto sirve para saber si hay un usuario que haya ingresado sesion, si si le muestra sus datos, si no lo dirige a /login
    const handlePerfilClick = () => {
        const token = localStorage.getItem("token");
        if (token) {
            setIsUserMenuOpen(!isUserMenuOpen);
        } else {
            navigate("/login");
        }
    }

    // Cerrar sesion
    const logOut = () => {
        localStorage.removeItem("token");
        localStorage.removeItem("usuario");
        resetPedidos();
        setIsUserMenuOpen(false);
        navigate("/");
    }

    return (
        <div className="w-full flex flex-col bg-white shadow-md">
            {/* Barra de navegación superior SUPER IMPORTANTE LA SANGRIAAA CASI LA CAGO: ANDREA*/ }
            <nav className="flex justify-between items-center p-4 border-b border-gray-200">
                <div className="flex items-center h-10 space-x-2">
                    <button 
                        onClick={handleIrAInicio}
                        className="flex items-center space-x-2 hover:scale-105 transition">
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
                    <li>
                        <button onClick={handleIrAInicio} className="text-lg hover:[color:#A1C99C] transition">
                            Inicio
                        </button>
                    </li>


                    <li><button onClick={() => setShowAboutModal(true)} className="text-lg hover:[color:#A1C99C] transition">Nosotros</button></li>
                    
                    <li>
                        <button
                            onClick={handleIrAPedir}
                            className="text-lg hover:[color:#A1C99C] transition"
                        >
                        Pedir
                        </button>
                    </li>

                    <li><button onClick={handleIrAMenu} className="text-lg hover:[color:#A1C99C] transition">Menú</button></li>
                    
                    <li>
                        <button 
                            onClick={handlePerfilClick}>
                            <img src={icon_user} alt="Usuario" className="h-7 hover:scale-110 transition" />
                        </button>

                        {isUserMenuOpen && user && (
                            <div className="absolute right-0 z-50">
                                {/* Barra de navegación superior */}
                                <UserMenu
                                    user={user}
                                    onClose={() => setIsUserMenuOpen(false)}
                                    onLogout={logOut}
                                    
                                    onUpdateContra={() => {
                                        setIsUserMenuOpen(false); // Cierra el dropdown
                                        setMostrarModalContra(true); // Abre el modal contra
                                    }}

                                    onUpdateDatos={() => {
                                        setIsUserMenuOpen(false); // Cierra el dropdown
                                        setMostrarModalDatosA(true); // Abre el modal datos
                                    }}
                                />
                            </div>
                        )}
                    </li>
                    
                    <li className="relative">
                        <button>
                            <img src={icon_like} alt="Favorito" className="h-7 hover:scale-110 transition" />
                        </button>
                    </li>
                    
                    {/**<li><button ><img src={icon_like} alt="Favorito" className="h-7 hover:scale-110 transition" /></button></li>*/}
                    <li>
                        <button onClick={() => setShowModalCarrito(true)}>
                            <img src={icon_carrito} alt="Carrito" className="h-7 hover:scale-110 transition" />
                        </button>
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
                            onClick={() => {
                                navigate("/"); 
                                setTimeout(scrollToInicio, 300);  //Da tiempo a que la navegación ocurra (cambio de ruta)
                                setIsMenuOpen(false);
                            }}
                        >Inicio</button>

                        <button 
                            className="hover:text-[#A1C99C] block"
                            onClick={() => { setShowAboutModal(true); setIsMenuOpen(false); }}
                        >Nosotros</button>

                        <button
                            onClick={() => {
                                navigate("/"); 
                                setTimeout(scrollToMenu, 300);  //Da tiempo a que la navegación ocurra (cambio de ruta)
                            }}
                            className="hover:text-[#A1C99C] block"
                            >
                            Pedir
                        </button>


                        <button 
                            onClick={handleIrAMenu}
                            className="hover:text-[#A1C99C] block"
                        >Menú</button>

                        <div className="flex justify-between pt-4 border-t">

                            <button 
                                onClick={handlePerfilClick}>
                                <img src={icon_user} alt="Usuario" className="h-7 hover:scale-110 transition" />
                            </button>
                            
                            {isUserMenuOpen && user && (
                                <div className="absolute right-0 z-50">
                                    {/* Barra de navegación superior */}
                                    <UserMenu
                                        user={user}
                                        onClose={() => setIsUserMenuOpen(false)}
                                        onLogout={logOut}
                                        
                                        onUpdateContra={() => {
                                            setIsUserMenuOpen(false); // Cierra el dropdown
                                            setMostrarModalContra(true); // Abre el modal contra
                                        }}

                                        onUpdateDatos={() => {
                                            setIsUserMenuOpen(false); // Cierra el dropdown
                                            setMostrarModalDatosA(true); // Abre el modal datos
                                        }}
                                    />
                                </div>
                            )}

                            {/* --------------------------------------------------------------------- */}
                            <button>
                                <img src={icon_like} alt="Favorito" className="h-7 hover:scale-110 transition" />
                            </button>

                            <button onClick={() => setShowModalCarrito(true)}>
                                <img src={icon_carrito} alt="Carrito" className="h-7 hover:scale-110 transition" />
                            </button>
        
                        </div>
                    </div>
                </>
            )}

            {/* MODALES */}
            {showAboutModal && (
                <AboutUsModal isOpen={showAboutModal} onClose={() => setShowAboutModal(false)} />
            )}

            {MostrarModalContra && (
                <CambiarContraModal onClose={() => setMostrarModalContra(false)} />
            )}

            {MostrarModalDatosA && (
                <CambiarDatosModal onClose={() => setMostrarModalDatosA(false)} />
            )}

            <ModalConfirm
            isOpen={MostrarModalConfirm}
            onClose={handleCancelarSalir}
            onConfirm={handleConfirmarSalir}
            />

            {showModalCarrito && (
                <ModalCarrito 
                    isOpen={showModalCarrito} 
                    onClose={() => setShowModalCarrito(false)} 
                />
            )}
            
        </div>
    );
};

export default NavBar;
