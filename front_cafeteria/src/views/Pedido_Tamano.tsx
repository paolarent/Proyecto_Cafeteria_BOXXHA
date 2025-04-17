import fondoCafe from "../assets/fondo_cafe_mejorada.jpg";
import NavBar from "../components/NavBar";
import { useNavigate } from "react-router-dom";

const PedidoTamañoView = () => {
    return (
        <div className="relative h-screen overflow-hidden flex flex-col">
            <header className="sticky top-0 z-50">
                <NavBar />
            </header>
            
            {/* Contenedor Padre Father */}
            <main className="flex-1 relative">
                {/*Imagen de fondo estatica*/ }
                <img 
                    src={fondoCafe} 
                    className="absolute inset-0 w-full h-full object-cover opacity-80"
                    alt="Fondo de café"
                />
                {/*Con la propiedad relative z-10 me aseguro que sea un fondo estatico*/ }
                {/*Con la layout flex puedo colocar los elementos en cualquier posición dentro del contenedor */}
                <div className="relative z-10 flex flex-col justify-center items-center">
                    <button className="w-1000px h-1200px bg-[#ffffff]">Boton1</button>
                </div>
            </main>
        </div>
    );
};

export default PedidoTamañoView;