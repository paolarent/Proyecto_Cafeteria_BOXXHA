import fondoCafe from "../assets/fondo_cafe_mejorada.jpg";
import IconoCafe12OZ from "../assets/Iconos/Icono_14oz.png";
import IconoCafe16OZ from "../assets/Iconos/Icono_16oz.png";
import NavBar from "../components/NavBar";

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
                <section className="relative w-full flex flex-col items-center space-y-10 pt-20">
                    <div className="flex flex-col relative bg-[#535251] p-4 bg-opacity-60 rounded-3xl">
                        <h2 className="font-Montserrat font-regular text-5xl text-center text-[#34251d] bg-[#ffffff] px-6 py-3 rounded-2xl shadow-md">
                        Seleccione el <span className="font-medium">Tamaño</span>
                        </h2>
                    </div>
                    
                    <div className="flex flex-col md:flex-row gap-20 pt-2 justify-center items-center p-4 ">
                            
                        <div className="flex flex-col relative bg-[#535251] p-4 bg-opacity-60 rounded-3xl">
                            <button className="flex flex-col justify-center hover:scale-105 transition-transform duration-300 w-40 h-40 bg-white rounded-2xl border-2 border-black">
                                <img
                                    src={IconoCafe12OZ}
                                    className="w-20 h-20 object-contain mx-auto mt-4"
                                />
                                <span className="font-Montserrat text-xl text-[#34251d] pt-2">12 OZ</span>
                            </button>
                        </div>    
                        
                        <div className="flex flex-col relative bg-[#535251] p-4 bg-opacity-60 rounded-3xl"></div>
                            <button className="flex flex-col justify-center transition-transform duration-300 hover:scale-105 w-40 h-40 bg-white rounded-2xl border-2 border-black">
                                <img
                                    src={IconoCafe16OZ}
                                    className="w-24 h-24 object-contain mx-auto"    
                                />
                                <span className="font-Montserrat text-xl text-[#34251d] pt-2">16 OZ</span>
                            </button>
                        </div>

                        {/*BOTONES PENDIENTES*/}
                        <div className="flex flex-col md:flex-row gap-8 justify-center items-center">
                            <button className="w-56 h-10 bg-white rounded-2xl border-2 border-black hover:scale-105 
                            transition-transform duration-300"> <span className="font-Montserrat text-xl text-[#34251d] pb-2"> Regresar </span></button>
                            <button className="w-56 h-10 bg-white rounded-2xl border-2 border-black hover:scale-105 
                            transition-transform duration-300"> <span className="font-Montserrat text-xl text-[#34251d] pb-2"> Continuar </span></button>
                        </div>
                    </section>
                
            </main>
        </div>
    );
};

export default PedidoTamañoView;