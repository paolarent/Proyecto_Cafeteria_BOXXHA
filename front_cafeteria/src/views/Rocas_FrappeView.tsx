import fondoCafe from "../assets/fondo_cafe_mejorada.jpg";
import IconoFrappe from "../assets/Iconos/icono_frappe1.png";
import IconoRocas from "../assets/Iconos/icono_rocas1.png";
import BotonRegresar from "../assets/regresar.png";
import BotonContinuar from "../assets/continuar.png";
import NavBar from "../components/NavBar";

const Rocas_FrappeView = () => {
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
                {/* Capa de color con algo de opacidad encima, opcional */}
                <div
                    className="absolute inset-0"
                    style={{ backgroundColor: "#B0CEAC", opacity: 0.50 }}
                />

                {/*Con la propiedad relative z-10 me aseguro que sea un fondo estatico*/ }
                {/*Con la layout flex puedo colocar los elementos en cualquier posición dentro del contenedor */}
                <section className="relative w-full flex flex-col items-center space-y-10 pt-20">
                    <div className="flex flex-col relative bg-[#535251] p-4 bg-opacity-60 rounded-3xl">
                        <h2 className="font-Montserrat font-regular text-5xl text-center text-[#34251d] bg-[#ffffff] px-6 py-3 rounded-2xl shadow-md">
                            Seleccione el <span className="font-medium">Estilo</span>
                        </h2>
                    </div>

                    <div className="flex flex-col md:flex-row gap-20 pt-2 justify-center items-center p-4 ">

                        <div className="flex flex-col relative bg-[#535251] p-4 bg-opacity-60 rounded-3xl">
                            <button className="flex flex-col items-center justify-center pt-6 pb-4 hover:scale-105 transition-transform duration-300 
                                                w-[230px] h-[240px] bg-white rounded-2xl border-2 border-black">
                                <img
                                    src={IconoFrappe}
                                    className="rounded-[20px] w-[100px] h-[180px] mx-auto pt-4"
                                />
                                <span className="font-Montserrat text-2xl font-semibold text-[#34251d] pt-4 pb-4">FRAPPÉ</span>
                            </button>
                        </div>
                            
                        <div className="flex flex-col relative bg-[#535251] p-4 bg-opacity-60 rounded-3xl">
                            <button className="flex flex-col items-center justify-center pt-6 pb-4 hover:scale-105 transition-transform duration-300 
                                                w-[230px] h-[240px] bg-white rounded-2xl border-2 border-black">
                                <img
                                    src={IconoRocas}
                                    className="rounded-[20px] w-[100px] h-[180px] mx-auto pt-4"    
                                />
                                <span className="font-Montserrat text-2xl font-semibold text-[#34251d] pt-4 pb-4">ROCAS</span>
                            </button>
                        </div>
                    </div>

                    {/* Botones laterales de navegación */}
                    <div className="absolute top-1/2 left-0 z-20 transform -translate-y-1/2 px-40">
                        <div className="bg-[#ffffff] bg-opacity-90 rounded-full p-4 shadow-lg transition-transform duration-300 hover:scale-110 hover:bg-[#f2ddc9]">
                            <button>
                            <img
                                src={BotonRegresar}
                                alt="Botón Regresar"
                                title="Regresar"
                                className="w-[80px] h-auto"
                            />
                            </button>
                        </div>
                    </div>

                    <div className="absolute top-1/2 right-0 z-20 transform -translate-y-1/2 px-40">
                        <div className="bg-[#ffffff] bg-opacity-90 rounded-full p-4 shadow-lg transition-transform duration-300 hover:scale-110 hover:bg-[#f2ddc9]">
                            <button>
                                <img
                                src={BotonContinuar}
                                alt="Botón Continuar"
                                title="Continuar"
                                className="w-[80px] h-auto"
                                />
                            </button>
                        </div>
                    </div>

                </section>
            </main>
        </div>
    );
};

export default Rocas_FrappeView;