import fondoCafe from "../assets/fondo_cafe_mejorada.jpg";
import IconoCafe12OZ from "../assets/Iconos/12OZ_Cafe_Sin_Diseno.png";
import IconoCafe16OZ from "../assets/Iconos/ICONO_16OZ.jpg";
import NavBar from "../components/NavBar";
import { useNavigate } from "react-router-dom";

const PedidoTamañoView = () => {
    return (
        <div className="relative h-screen overflow-hidden flex flex-col">
            <header className="sticky top-0 z-50">
                <NavBar />
            </header>
            
            {/* Contenedor Padre Father */}
            <main className="flex-1 relative ">
                {/*Imagen de fondo estatica*/ }
                <img 
                    src={fondoCafe} 
                    className="absolute inset-0 w-full h-full object-cover opacity-80"
                    alt="Fondo de café"
                />
                {/*Con la propiedad relative z-10 me aseguro que sea un fondo estatico*/ }
                {/*Con la layout flex puedo colocar los elementos en cualquier posición dentro del contenedor */}
                <section className="relative w-full flex flex-col items-center space-y-10 pb-10">
                    <h2 className="font-Montserrat font-regular text-5xl text-center text-[#34251d] bg-[#ffffff] px-6 py-3 rounded-2xl shadow-md ">
                        Seleccione el <span className="font-medium">tamaño</span>
                    </h2>
                    <div className="flex flex-col md:flex-row gap-8 pt-8 justify-center items-center p-4 ">
                            <button className="flex flex-col justify-center hover:scale-105 transition-transform w-40 h-40 bg-white rounded-2xl border-2 border-black">
                                <img
                                    src={IconoCafe12OZ}
                                    className="w-24 h-24 object-contain mx-auto"
                                />
                                <span className="font-Montserrat text-xl text-[#34251d]">12 OZ</span>
                            </button>
                            <button className="flex flex-col justify-center hover:scale-105 transition-transform w-40 h-40 bg-white rounded-2xl border-2 border-black">
                                <img
                                    src={IconoCafe16OZ}
                                    className="w-24 h-24 object-contain mx-auto"    
                                />
                                <span className="font-Montserrat text-xl text-[#34251d]">16 OZ</span>
                            </button>
                        </div>
                </section>
            </main>
        </div>
    );
};

export default PedidoTamañoView;