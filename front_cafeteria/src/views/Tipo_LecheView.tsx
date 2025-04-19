{/*Importación de imagenes*/}
import fondoCafe from "../assets/fondo_cafe_mejorada.jpg";
import Almond from "../assets/Iconos/Almond_Icono.jpg";
import Entera from "../assets/Iconos/ICONO_Leche_Entera.png";
import Deslactosada from "../assets/Iconos/ICONO_Leche_Deslactosada.png";
import Light from "../assets/Iconos/ICONO_Leche_Light.png";
import Coco from "../assets/Iconos/ICONO_Leche_Coco.png";
import Soya from "../assets/Iconos/ICONO_Leche_Soya.png";

{/*Importación de componentes*/}
import NavBar from "../components/NavBar";

const Tipo_LecheView = () => {
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
                {/*Contenedor que almacena las dos filas de botones (Tipos de leche) */}
                <section className="relative w-full flex flex-col items-center space-y-10 pt-10">
                    <h2 className="font-Montserrat font-regular text-5xl text-center text-[#34251d] bg-[#ffffff] px-6 py-3 rounded-2xl shadow-md">
                        Seleccione un tipo de  <span className="font-medium">Leche</span>
                    </h2>
                    {/*Segunda fila de botones*/}
                    <div className="flex flex-col md:flex-row gap-8 pt-8 justify-center items-center">
                            <button className="flex flex-col justify-center pt-6 hover:scale-105 transition-transform duration-300 w-40 h-40 bg-white rounded-2xl border-2 border-black">
                                <img
                                    src={Entera}
                                    className="w-24 h-24 object-contain m-auto"
                                />  
                                <span className="font-Montserrat text-xl text-[#34251d] pb-2">Entera</span>
                            </button>
                            <button className="flex flex-col justify-center hover:scale-105 transition-transform duration-300 w-40 h-40 bg-white rounded-2xl border-2 border-black">
                                <img
                                    src={Deslactosada}
                                    className="relative top-1 w-24 h-24 object-contain m-auto "    
                                />
                                <span className="font-Montserrat text-xl text-[#34251d] pb-2">Deslactosada</span>
                            </button>
                            <button className="flex flex-col justify-center hover:scale-105 transition-transform duration-300 w-40 h-40 bg-white rounded-2xl border-2 border-black">
                                <img
                                    src={Light}
                                    className="relative top-2.5 w-24 h-24 object-contain m-auto "    
                                />
                                <span className="font-Montserrat text-xl text-[#34251d] pb-2">Light</span>
                            </button>
                            
                    </div>
                    {/*Segunda fila de botones*/}
                    <div className="flex flex-col md:flex-row gap-8 justify-center items-center ">
                    <button className="flex flex-col justify-center pt-6 hover:scale-105 transition-transform duration-300 w-40 h-40 bg-white rounded-2xl border-2 border-black">
                            <img
                                src={Coco}
                                className="w-24 h-24 object-contain m-auto "    
                            />
                            <span className="font-Montserrat text-xl text-[#34251d] pb-2">Coco</span>
                        </button>
                        <button className="flex flex-col justify-center pt-6 hover:scale-105 transition-transform duration-300 w-40 h-40 bg-white rounded-2xl border-2 border-black">
                            <img
                                src={Soya}
                                className="relative top-2 w-24 h-24 object-contain m-auto"  
                            />
                            <span className="font-Montserrat text-xl text-[#34251d] pb-2">Soya</span>
                        </button>
                        <button className="flex flex-col justify-center pt-6 hover:scale-105 transition-transform duration-300 w-40 h-40 bg-white rounded-2xl border-2 border-black">
                            <img
                                src={Almond}
                                className="w-24 h-24 object-contain m-auto "    
                            />
                            <span className="font-Montserrat text-xl text-[#34251d] pb-2">Almendra</span>
                        </button>
                    </div>
                </section>
            </main>
        </div>
    );
};

export default Tipo_LecheView;