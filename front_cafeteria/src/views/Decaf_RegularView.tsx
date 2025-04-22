import fondoCafe from "../assets/fondo_cafe_mejorada.jpg";
import IconoRegular from "../assets/Iconos/ICONO_Cafeinado.png";
import IconoDecaf from "../assets/Iconos/ICONO_Decf.png";
import IconoCafeina from "../assets/Iconos/cafe_cafeinado.png"
import IconoNoCafeina from "../assets/Iconos/cafe_descafeinado.png"
import NavBar from "../components/NavBar";

const Decaf_RegularView = () => {
    return (
        <div className="relative h-screen overflow-hidden flex flex-col">
            <header className="sticky top-0 z-50">
                <NavBar />
            </header>
            
            <main className="flex-1 relative ">
                <img 
                    src={fondoCafe} 
                    className="absolute inset-0 w-full h-full object-cover opacity-80"
                    alt="Fondo de café"
                />
                <section className="relative w-full flex flex-col items-center space-y-10 pt-10">

                    <div className="flex flex-col relative bg-[#535251] p-4 bg-opacity-60 rounded-3xl">
                        <h2 className="font-Montserrat font-regular text-5xl text-center text-[#34251d] bg-[#ffffff] px-6 py-3 rounded-2xl shadow-md">
                            Seleccione una <span className="font-medium">Opción</span>
                        </h2>
                    </div>

                    <div className="flex flex-col md:flex-row gap-20 pt-2 justify-center items-center p-4 ">
                            
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

export default Decaf_RegularView;