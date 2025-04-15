import React, { useState } from "react";
import logom from "../assets/logo_menu.png";
import icon_user from "../assets/icon_usuario.png"
import icon_like from "../assets/icon_like.png"
import icon_carrito from "../assets/icon_carrito.png"
import AboutUsModal from "../components/ModalAU";
import { useNavigate } from "react-router-dom";

const NavBar = () => {
    const navigate = useNavigate();
    const [showAboutModal, setShowAboutModal] = useState(false);

    return (
        <div className="w-full flex flex-col">
            {/* Barra de navegación superior */}
            <nav className="flex justify-between items-center p-4 border-b border-gray-200">
                <div className="flex items-center h-10 space-x-2">
                    <button  onClick={() => navigate("/")} className="flex items-center space-x-2 hover:scale-105 transition">
                        <img src={logom} alt="Logo" className="h-14" />
                        <span className="text-xl font-extrabold font-serif">BOXXHA CAFÉ</span>
                    </button>
                </div>
                <ul className="flex space-x-8 text-sm font-Montserrat font-medium text-black-700">
                    <li><button onClick={() => navigate("/")} className="text-lg hover:[color:#A1C99C] transition">Inicio</button></li>
                    <li>
                        <button 
                        onClick={() => setShowAboutModal(true)}
                        className="text-lg hover:[color:#A1C99C] transition">Nosotros</button>
                    </li>
                    <li><button className="text-lg hover:[color:#A1C99C] transition">Shop</button></li>
                    <li><button className="text-lg hover:[color:#A1C99C] transition">Menú</button></li>
                    <li>
                        <button onClick={() => navigate("/login")}>
                        <img src={icon_user} alt="Usuario" className="h-7 hover:scale-110 transition" />
                        </button>
                    </li>
                    <li>
                        <button>
                        <img src={icon_like} alt="Favorito" className="h-7 hover:scale-110 transition" />
                        </button>
                    </li>
                    <li>
                        <button>
                        <img src={icon_carrito} alt="Carrito" className="h-7 hover:scale-110 transition" />
                        </button>
                    </li>
                </ul>
            </nav>

            {/* Modal */}
            {showAboutModal && (
                <AboutUsModal isOpen={showAboutModal} onClose={() => setShowAboutModal(false)} />
            )}
        </div>
    );
};

export default NavBar;