import React from 'react';
import granos_cafe from "../assets/granos_cafe.png";
import logo_modal from "../assets/Icono_AboutUS.png";

interface ModalAUProps {
    isOpen: boolean;
    onClose: () => void;
}

const ModalAU: React.FC<ModalAUProps> = ({ isOpen, onClose }) => {
    if (!isOpen) return null;

    return (
        <div className="font-Montserrat fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 responsive-modal">
            <style>
                {`
                    .responsive-modal > div {
                        transition: width 0.3s ease, height 0.3s ease;
                    }

                    @media (max-width: 900px) {
                        .responsive-modal > div {
                            width: 90%;
                            height: auto;
                        }
                        .responsive-modal h2 {
                            font-size: 2.5rem !important;
                        }
                        .responsive-modal p {
                            font-size: 1rem !important;
                        }
                    }

                    @media (max-width: 700px) {
                        .responsive-modal > div {
                            width: 85%;
                            height: auto;
                        }
                        .responsive-modal h2 {
                            font-size: 2.1rem !important;
                        }
                        .responsive-modal p {
                            font-size: 0.95rem !important;
                        }
                    }

                    @media (max-width: 500px) {
                        .responsive-modal > div {
                            width: 90%;
                            height: auto;
                        }
                        .responsive-modal h2 {
                            font-size: 1.8rem !important;
                        }
                        .responsive-modal p {
                            font-size: 0.9rem !important;
                        }
                    }
                `}
            </style>

            <div
                className="relative bg-[#4a372a] text-white rounded-[60px] p-8 shadow-lg flex flex-col gap-6 items-start"
                style={{
                    width: '90%',
                    maxWidth: '800px',
                    height: 'auto',
                    overflow: 'hidden',
                }}
            >
                {/* Fondo decorativo de granos de café */}
                <img
                    src={granos_cafe}
                    alt="Granos de café"
                    className="absolute top-[170px] left-[500px] w-[500px] h-[400px] object-cover opacity-50 pointer-events-none"
                    style={{ mixBlendMode: 'difference' }}
                />

                {/* Botón de cierre del modal */}
                <button
                    onClick={onClose}
                    className="absolute top-5 right-7 text-white hover:text-black text-3xl font-bold z-10"
                    aria-label="Cerrar modal"
                >
                    &times;
                </button>

                {/* Imagen del logo en la esquina superior derecha */}
                <img
                    src={logo_modal}
                    alt="Logo Boxxha"
                    className="
                        absolute top-4 right-4 object-contain m-1
                        w-[200px] h-[200px]
                        md:w-[120px] md:h-[120px]
                        sm:w-[80px] sm:h-[80px]
                        max-[450px]:w-[60px] max-[450px]:h-[60px]
                    "
                />

                {/* Título con sombra */}
                <div className="text-sm md:text-base space-y-3 relative">
                    <h2 className="text-5xl font-bold text-black opacity-30 leading-tight font-Montserrat text-left absolute top-1 left-1 select-none pointer-events-none">
                        Acerca de <br />
                        <span className="block ml-[130px] sm:ml-[60px] max-[450px]:ml-[30px]">Nosotros</span>
                    </h2>

                    <h2 className="text-5xl font-bold text-white leading-tight font-Montserrat text-left ml-2 relative z-10">
                        Acerca de <br />
                        <span className="block ml-[130px] sm:ml-[60px] max-[450px]:ml-[30px]">Nosotros</span>
                    </h2>
                </div>

                {/* Contenido (texto en el modal) */}
                <div className="text-xl text-justify pr-[180px] sm:pr-[60px] max-[450px]:pr-[20px] z-10 space-y-4">
                    <p>
                        <strong>Boxxha</strong> (café en maya) nace de la admiración por la tierra que cultivó los primeros granos.
                        <br /> No solo servimos café, sino historias en cada taza.
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

