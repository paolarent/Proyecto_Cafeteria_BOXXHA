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
        <div className="font-Montserrat fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
            <div className="relative bg-[#4a372a] text-white rounded-[60px] p-8 shadow-lg flex flex-col gap-6 items-start w-[60vw] h-[39vw]"
            style={{
                width: '90vw',
                maxWidth: '800px',
                maxHeight: '90vh',
                overflow: 'hidden', // Esto ocultará lo que sobresalga
            }}
            >
                
                {/* Fondo decorativo de granos de café */}
                <img
                    src={granos_cafe}
                    alt="Granos de café"
                    className="absolute top-[170px] left-[500px] w-[500px] h-[400px] object-cover opacity-50 pointer-events-none"
                    style={{
                        mixBlendMode: 'difference', //Aplica un filtro de oscuridad a la imagen
                    }}
                />

                {/* Botón de cierre del modal*/}
                <button
                onClick={onClose}
                className="absolute top-5 right-7 text-white hover:text-black text-3xl font-bold z-10"
                aria-label="Cerrar modal"
                >
                &times;
                </button>

                {/* Imagen del logo en la esquina superior derecha*/}
                <img
                src={logo_modal}
                alt="Logo Boxxha"
                className="absolute top-4 right-4 w-[200px] h-[200px] object-contain m-1"
                />

                {/* Título con sombra manual */}
                <div className="text-sm md:text-base space-y-3 relative ml-3">
                    {/* Sombra manual detrás */}
                    <h2 className="text-5xl font-bold text-black opacity-30 leading-tight font-Montserrat text-left absolute top-1 left-1 select-none pointer-events-none">
                        Acerca de <br />
                        <span className="block ml-[130px]">Nosotros</span>
                    </h2>

                    {/* Texto blanco (principal) */}
                    <h2 className="text-5xl font-bold text-white leading-tight font-Montserrat text-left ml-2 relative z-10">
                        Acerca de <br />
                        <span className="block ml-[130px]">Nosotros</span>
                    </h2>
                </div>

                {/* Texto/contenido de la pagina */}
                <div className="text-xl space-y text-justify pr-[180px] z-10">
                    <p>
                        <strong>Boxxha</strong> (café en maya) nace de la admiración por la tierra que cultivó los primeros granos.
                        <br /> No solo servimos café, sino historias en cada taza.
                    </p>
                    <br></br>

                    <p>
                        Nuestra <strong>misión</strong> es reinventar la experiencia del café con blends únicos y un ambiente que invite a quedarse.
                    </p>
                    <br></br>

                    <p>
                        Nuestra <strong>visión</strong> llevar el sabor de nuestras raíces a nuevas generaciones.
                    </p>
                    <br></br>

                    <p>
                        Desde agosto 2024, te damos la bienvenida a tu lugar feliz.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default ModalAU;
