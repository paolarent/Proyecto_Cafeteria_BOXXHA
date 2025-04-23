{/*Importación de imagenes*/}
import fondoCafe from "../assets/fondo_cafe_mejorada.jpg";
import Almendra from "../assets/Iconos/leche_almendra.png";
import Entera from "../assets/Iconos/leche_regular.png";
import Deslactosada from "../assets/Iconos/lecha_deslactosada.jpg";
import Light from "../assets/Iconos/leche_light.jpg";
import Coco from "../assets/Iconos/leche_coco.png";
import Soya from "../assets/Iconos/leche_soya.jpg";
import BotonRegresar from "../assets/regresar.png";
import BotonContinuar from "../assets/continuar.png";

{/*Importación de componentes*/}
import NavBar from "../components/NavBar";

const Tipo_LecheView = () => {
    return (
        <div className="min-h-screen flex flex-col">
            <header className="sticky top-0 z-50">
                <NavBar />
            </header>
            
            <main className="flex flex-1">                
                <section className="relative w-full flex flex-col items-center space-y-10 pb-10 overflow-hidden">
                    <div
                        className="absolute inset-0 z-0"
                        style={{
                            backgroundImage: `url(${fondoCafe})`,
                            backgroundSize: "cover", 
                            backgroundPosition: "bottom",
                            backgroundRepeat: "no-repeat",
                            opacity: 0.5
                        }}
                    />
                    
                    <div className="flex flex-col relative p-4">

                        {/* Título con fondo oscuro y opacidad */}
                        <div className="flex flex-col relative bg-[#535251] p-4 bg-opacity-60 rounded-3xl">
                            <h2 className="font-Montserrat font-regular text-5xl text-center text-[#34251d] bg-[#ffffff] px-6 py-3 rounded-2xl shadow-md">
                            Seleccione el tipo de <span className="font-medium">Leche</span>
                            </h2>
                        </div>

                        {/* Contenedor para los botones, alineados a los lados del título */}
                        <div className="absolute top-1/2 -left-96 z-20 transform -translate-y-1/2 px-40">
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

                        <div className="absolute top-1/2 -right-96 z-20 transform -translate-y-1/2 px-40">
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

                    </div>
                    

                    <div className="flex flex-wrap justify-center gap-10 w-full px-8">

                        <div className="flex flex-col relative bg-[#535251] p-4 bg-opacity-60 rounded-3xl">
                            <button className="flex flex-col justify-center pt-6 pb-4 hover:scale-105 transition-transform duration-300 
                                                w-[230px] h-[230px] bg-white rounded-2xl border-2 border-black">
                                <img
                                    src={Entera}
                                    className="rounded-[20px] w-[160px] h-[160px] m-auto"
                                />  
                                <span className="font-Montserrat text-2xl font-semibold text-[#34251d] pt-2 pb-2">Entera</span>
                            </button>
                        </div>

                        <div className="flex flex-col relative bg-[#535251] p-4 bg-opacity-60 rounded-3xl">
                            <button className="flex flex-col justify-center pt-6 pb-4 hover:scale-105 transition-transform duration-300 
                                                w-[230px] h-[230px] bg-white rounded-2xl border-2 border-black">
                                <img
                                    src={Deslactosada}
                                    className="rounded-[20px] w-[160px] h-[160px] m-auto"
                                />  
                                <span className="font-Montserrat text-2xl font-semibold text-[#34251d] pt-2 pb-2">Deslactosada</span>
                            </button>
                        </div>

                        <div className="flex flex-col relative bg-[#535251] p-4 bg-opacity-60 rounded-3xl">
                            <button className="flex flex-col justify-center pt-6 pb-4 hover:scale-105 transition-transform duration-300 
                                                w-[230px] h-[230px] bg-white rounded-2xl border-2 border-black">
                                <img
                                    src={Light}
                                    className="rounded-[20px] w-[160px] h-[160px] m-auto"
                                />  
                                <span className="font-Montserrat text-2xl font-semibold text-[#34251d] pt-2 pb-2">Light</span>
                            </button>
                        </div>

                        <div className="flex flex-col relative bg-[#535251] p-4 bg-opacity-60 rounded-3xl">
                            <button className="flex flex-col justify-center pt-6 pb-4 hover:scale-105 transition-transform duration-300 
                                                w-[230px] h-[230px] bg-white rounded-2xl border-2 border-black">
                                <img
                                    src={Coco}
                                    className="rounded-[20px] w-[160px] h-[160px] m-auto"
                                />  
                                <span className="font-Montserrat text-2xl font-semibold text-[#34251d] pt-2 pb-2">Coco</span>
                            </button>
                        </div>
                    
                        <div className="flex flex-col relative bg-[#535251] p-4 bg-opacity-60 rounded-3xl">
                            <button className="flex flex-col justify-center pt-6 pb-4 hover:scale-105 transition-transform duration-300 
                                                w-[230px] h-[230px] bg-white rounded-2xl border-2 border-black">
                                <img
                                    src={Soya}
                                    className="rounded-[20px] w-[160px] h-[160px] m-auto"
                                />  
                                <span className="font-Montserrat text-2xl font-semibold text-[#34251d] pt-2 pb-2">Soya</span>
                            </button>
                        </div>

                        <div className="flex flex-col relative bg-[#535251] p-4 bg-opacity-60 rounded-3xl">
                            <button className="flex flex-col justify-center pt-6 pb-4 hover:scale-105 transition-transform duration-300 
                                                w-[230px] h-[230px] bg-white rounded-2xl border-2 border-black">
                                <img
                                    src={Almendra}
                                    className="rounded-[20px] w-[160px] h-[160px] m-auto"
                                />  
                                <span className="font-Montserrat text-2xl font-semibold text-[#34251d] pt-2 pb-2">Almendra</span>
                            </button>
                        </div>

                    </div>
                
                </section>
            </main>
        </div>
    );
};

export default Tipo_LecheView;