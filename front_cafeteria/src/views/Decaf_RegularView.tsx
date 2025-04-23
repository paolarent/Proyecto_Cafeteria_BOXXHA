import fondoCafe from "../assets/fondo_cafe_mejorada.jpg";
import IconoCafeina from "../assets/Iconos/cafe_cafeinado.png"
import IconoNoCafeina from "../assets/Iconos/cafe_descafeinado.png"
import BotonRegresar from "../assets/regresar.png";
import BotonContinuar from "../assets/continuar.png";
import NavBar from "../components/NavBar";

const Decaf_RegularView = () => {
    return (
        <div className="relative h-screen overflow-hidden flex flex-col">
            <header className="sticky top-0 z-50">
                <NavBar />
            </header>
            
            <main className="flex-1 relative">
                <img 
                    src={fondoCafe} 
                    className="absolute inset-0 w-full h-full object-cover opacity-70"
                    alt="Fondo de café"
                />
                <section className="relative w-full flex flex-col items-center space-y-10 pt-20">

                    <div className="flex flex-col relative bg-[#535251] p-4 bg-opacity-60 rounded-3xl">
                        <h2 className="font-Montserrat font-regular text-5xl text-center text-[#34251d] bg-[#ffffff] px-6 py-3 rounded-2xl shadow-md">
                            Seleccione una <span className="font-medium">Opción</span>
                        </h2>
                    </div>

                    <div className="flex flex-col md:flex-row gap-20 pt-2 justify-center items-center">
                            
                            <div className="flex flex-col relative bg-[#535251] p-4 bg-opacity-60 rounded-3xl">
                                <button className="flex flex-col justify-center pt-6 pb-4 hover:scale-105 transition-transform duration-300 
                                                    w-[230px] h-[230px] bg-white rounded-2xl border-2 border-black">
                                    <img
                                        src={IconoCafeina}
                                        className="rounded-[20px] w-[160px] h-[160px] m-auto"
                                    />  
                                    <span className="font-Montserrat text-2xl font-semibold text-[#34251d] pt-2 pb-2">Regular</span>
                                </button>
                            </div>

                            <div className="flex flex-col relative bg-[#535251] p-4 bg-opacity-60 rounded-3xl">
                                <button className="flex flex-col justify-center pt-6 pb-4 hover:scale-105 transition-transform duration-300 
                                                    w-[230px] h-[230px] bg-white rounded-2xl border-2 border-black">
                                    <img
                                        src={IconoNoCafeina}
                                        className="rounded-[20px] w-[160px] h-[160px] m-auto"    
                                    />
                                    <span className="font-Montserrat text-2xl font-semibold text-[#34251d] pt-2 pb-2">Descafeinado</span>
                                </button>
                            </div>

                    </div>
                    
                    {/* Botones laterales de navegación */}
                    <div className="absolute top-1/2 left-0 z-20 transform -translate-y-1/2 px-40">
                        <div className="bg-[#B0CEAC] bg-opacity-90 rounded-full p-4 shadow-lg transition-transform duration-300 hover:scale-110 hover:bg-[#f2ddc9]">
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
                        <div className="bg-[#B0CEAC] bg-opacity-90 rounded-full p-4 shadow-lg transition-transform duration-300 hover:scale-110 hover:bg-[#f2ddc9]">
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

export default Decaf_RegularView;