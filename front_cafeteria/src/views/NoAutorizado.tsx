import { useNavigate } from "react-router-dom";
import fondoCafe from "../assets/fondo_cafe_mejorada.jpg"

const NoAutorizado = () => {
    const navigate = useNavigate();

    const handleHover = () => {
        navigate("/");
    };

    return (
        <div className="relative flex items-center justify-center min-h-screen">
            {/*Imagen de fondo estatica*/ }
            <img 
                src={fondoCafe} 
                className="absolute inset-0 w-full h-full object-cover opacity-80 z-0"
                alt="Fondo de café"
            />
            {/* Capa de color con algo de opacidad encima, color menta */}
            <div className="absolute inset-0 bg-[#B0CEAC] opacity-50 z-10" />
            
            <div className="flex flex-col relative bg-[#535251] p-6 bg-opacity-80 rounded-3xl">
                <div className="font-Montserrat bg-white shadow-xl rounded-3xl p-8 text-center max-w-md z-20"> 
                    <h1 className="text-6xl font-bold text-red-600 mb-4"> 401 </h1>
                    <h2 className="text-3xl font-bold mb-6"> No Autorizado </h2>
                    <p className="text-gray-600 text-xl mb-4 mx-2"><span className="font-bold">ERROR:</span> No tiene permisos para acceder a esta página.</p>
                    <button
                        onClick={handleHover}
                        className="mt-6 bg-[#401f0a] text-white font-semibold py-2 px-6 rounded shadow-md text-xl hover:bg-[#B0CEAC] 
                        hover:text-black transition transform transition-transform duration-300 hover:scale-105"      
                    >       
                    Volver al Inicio   
                    </button>
                </div>
            </div>
        </div>
    );
};

export default NoAutorizado;