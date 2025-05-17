import React from 'react';
import granos_cafe from "../assets/granos_cafe.png";
import logo_modal from "../assets/Icono_AboutUS2.png";

interface ModalAUProps {
    isOpen: boolean;
    onClose: () => void;
}

const ModalAU: React.FC<ModalAUProps> = ({ isOpen, onClose }) => {
    if (!isOpen) return null;

    return (
        <div className="font-Montserrat fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 px-4">
            <div
                className="relative bg-[#4a372a] text-white rounded-[40px] sm:rounded-[60px] p-4 sm:p-8 shadow-lg flex flex-col gap-6 items-start w-full sm:w-[60vw] max-w-[800px] max-h-[90vh] overflow-y-auto sm:overflow-hidden"
            >

                {/* Fondo decorativo de granos de café */}
                <img
                    src={granos_cafe}
                    alt="Granos de café"
                    className="hidden xl:block absolute top-[170px] left-[500px] w-[500px] h-[400px] object-cover opacity-50 pointer-events-none"
                    style={{ mixBlendMode: 'difference' }}
                />

                {/* Botón de cierre */}
                <button
                    onClick={onClose}
                    className="absolute top-4 right-6 text-white hover:text-black text-3xl font-bold z-10"
                    aria-label="Cerrar modal"
                >
                    &times;
                </button>

                {/* Imagen del logo */}
                <img
                    src={logo_modal}
                    alt="Logo Boxxha"
                    className="hidden xl:block absolute top-3 right-3 w-20 h-20 sm:w-48 sm:h-48 object-contain m-1"
                />

                {/* Título */}
                <div className="space-y-3 relative ml-2 sm:ml-3">
                    <h2 className="text-3xl sm:text-5xl md:text-6xl font-light text-white leading-tight mb-4 relative z-10">
                        Acerca de <span className="font-bold">Nosotros</span>
                    </h2>
                </div>

                {/* Contenido */}
                <div className="text-base sm:text-xl text-justify pr-0 xl:pr-[180px] z-10 space-y-4">
                    <p>
                        <strong>Boxxha</strong> (café en maya) nace de la admiración por la tierra que cultivó los primeros granos.
                        No solo servimos café, sino historias en cada taza.
                    </p>

                    <p>
                        Nuestra <strong>misión</strong> es reinventar la experiencia del café con blends únicos y un ambiente que invite a quedarse.
                    </p>

                    <p>
                        Nuestra <strong>visión</strong> llevar el sabor de nuestras raíces a nuevas generaciones.
                    </p>

                    <p>
                        Desde agosto 2024, te damos la bienvenida a tu lugar feliz.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default ModalAU;
