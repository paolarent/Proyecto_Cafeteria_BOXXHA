import { useNavigate } from "react-router-dom";

const NoAutorizado = () => {
    const navigate = useNavigate();

    const handleHover = () => {
        navigate("/");
    };

    return (
        <div className="flex items-center justify-center min-h-screen" style={{ backgroundColor: "#917347" }}>
            <div className="bg-white shadow-xl rounded-lg p-8 text-center max-w-md"> 
                <h1 className="text-4xl font-bold text-red-600 mb-4"> 401 </h1>
                <h2 className="text-xl font-semibold mb-2"> No Autorizado </h2>
                <p className="text-gray-600"> No tienes permisos para acceder a esta página </p>
                <button
                    onClick={handleHover} //YA QUEDO FUNCIONAL PERO SI QUIERES HAZLA MAS BONITA
                    className="mt-4 bg-blue-500 hover:bg-blue-600 text-white px-2 py-2 rounded transtion"      
                >       
                Volver al Inicio   
                </button>
            </div>
        </div>
    );
};

export default NoAutorizado;