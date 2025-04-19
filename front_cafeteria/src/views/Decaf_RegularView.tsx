import fondoCafe from "../assets/fondo_cafe_mejorada.jpg";
import IconoRegular from "../assets/Iconos/ICONO_Cafeinado.png";
import IconoDecaf from "../assets/Iconos/ICONO_Decf.png";
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
                <section className="relative w-full flex flex-col items-center space-y-10 pt-20">
                    <h2 className="font-Montserrat font-regular text-5xl text-center text-[#34251d] bg-[#ffffff] px-6 py-3 rounded-2xl shadow-md">
                        Seleccione una <span className="font-medium">Opción</span>
                    </h2>
                    <div className="flex flex-col md:flex-row gap-24 pt-8 justify-center items-center p-4 ">
                            <button className="flex flex-col justify-center pt-6 hover:scale-105 transition-transform duration-300 w-40 h-40 bg-white rounded-2xl border-2 border-black">
                                <img
                                    src={IconoRegular}
                                    className="w-24 h-24 object-contain m-auto"
                                />  
                                <span className="font-Montserrat text-xl text-[#34251d]  pb-2">Regular</span>
                            </button>
                            <button className="flex flex-col justify-center hover:scale-105 transition-transform duration-300 w-40 h-40 bg-white rounded-2xl border-2 border-black">
                                <img
                                    src={IconoDecaf}
                                    className="w-24 h-24 object-contain m-auto "    
                                />
                                <span className="font-Montserrat text-xl text-[#34251d] pt-2 pb-2">Descafeinado</span>
                            </button>
                        </div>
                </section>
            </main>
        </div>
    );
};

export default Decaf_RegularView;