import { Button } from "@headlessui/react";
import fondoCafe from "../assets/fondo_cafe_mejorada.jpg";
import NavBar from "../components/NavBar";

const ExtrasView = () => {
    return (
        <div className="relative h-screen overflow-hidden flex flex-col">
            <header className="sticky top-0 z-50">
                <NavBar />
            </header>
            
            <main className="flex-1 relative">
                <img 
                    src={fondoCafe} 
                    className="absolute inset-0 w-full h-full object-cover opacity-80"
                    alt="Fondo de café"
                />
                {/*Sección donde se encuentran el listado de extras y botones +/- */}
                <section className="relative w-full flex flex-col items-center space-y-6 pt-5">
                    <div className="bg-[#535251] bg-opacity-60 rounded-2xl p-4">
                        <h2 className="font-Montserrat font-regular text-5xl text-center text-[#34251d] bg-[#ffffff] px-6 py-3 
                        rounded-2xl shadow-md">¿Desea agregar <span className="font-medium"> Extras</span>?</h2>
                    </div>
                
                    <div className="flex flex-col relative bg-[#535251] p-10 bg-opacity-60 rounded-3xl">
                        <div className="flex flex-row gap-3 pt-3 items-center justify-center">
                            <button className="w-14 h-14 rounded-3xl bg-white shadow-md border-2 border-black
                                hover:scale-105 transition-transform hover:bg-[#dfc3a8] duration-300">
                                <span className="font-Montserrat font-black text-3xl text-[#34251d]"> - </span> 
                            </button>
                            <div className="flex flex-col relative min-w-max w-96 bg-white rounded-2xl justify-center items-center border-2 border-black">
                                <span className="font-Montserrat font-semibold text-2xl text-[#34251d] px-4 py-2 text-center w-full"> Shot de espresso </span>
                            </div>
                            <button className="w-14 h-14 rounded-3xl bg-white shadow-md border-2 border-black 
                            hover:scale-105 transition-transform hover:bg-[#B0CEAC] duration-300">
                                <span className="font-Montserrat font-black text-2xl text-[#34251d]"> + </span>
                            </button>
                        </div>

                        <div className="flex flex-row gap-3 pt-3 items-center justify-center">
                            <button className="w-14 h-14 rounded-3xl bg-white shadow-md border-2 border-black
                            hover:scale-105 transition-transform hover:bg-[#dfc3a8] duration-300">
                                <span className="font-Montserrat font-black text-3xl text-[#34251d]"> - </span> 
                            </button>
                            <div className="flex flex-col relative min-w-max w-96 bg-white rounded-2xl justify-center items-center border-2 border-black">
                                <span className="font-Montserrat font-semibold text-2xl text-[#34251d] px-4 py-2 text-center w-full"> Matcha </span>
                            </div>
                            <button className="w-14 h-14 rounded-3xl bg-white shadow-md border-2 border-black 
                            hover:scale-105 transition-transform hover:bg-[#B0CEAC] duration-300">
                                <span className="font-Montserrat font-black text-2xl text-[#34251d]"> + </span>
                            </button>
                        </div>

                        <div className="flex flex-row gap-3 pt-3 items-center justify-center">
                            <button className="w-14 h-14 rounded-3xl bg-white shadow-md border-2 border-black
                            hover:scale-105 transition-transform hover:bg-[#dfc3a8] duration-300">
                                <span className="font-Montserrat font-black text-3xl text-[#34251d]"> - </span>
                            </button>
                            <div className="flex flex-col relative min-w-max w-96 bg-white rounded-2xl justify-center items-center border-2 border-black">
                                <span className="font-Montserrat font-semibold text-2xl text-[#34251d] px-4 py-2 text-center w-full"> Perlas Explosivas </span>
                            </div>
                            <button className="w-14 h-14 rounded-3xl bg-white shadow-md border-2 border-black 
                            hover:scale-105 transition-transform hover:bg-[#B0CEAC] duration-300">
                                <span className="font-Montserrat font-black text-2xl text-[#34251d]"> + </span>
                            </button>
                        </div>

                        <div className="flex flex-row gap-3 pt-3 items-center justify-center">
                            <button className="w-14 h-14 rounded-3xl bg-white shadow-md border-2 border-black
                            hover:scale-105 transition-transform hover:bg-[#dfc3a8] duration-300">
                                <span className="font-Montserrat font-black text-3xl text-[#34251d]"> - </span>
                            </button>
                            <div className="flex flex-col relative min-w-max w-96 bg-white rounded-2xl justify-center items-center border-2 border-black">
                                <span className="font-Montserrat font-semibold text-2xl text-[#34251d] px-4 py-2 text-center w-full"> Bola de nieve</span>
                            </div>
                            <button className="w-14 h-14 rounded-3xl bg-white shadow-md border-2 border-black 
                            hover:scale-105 transition-transform hover:bg-[#B0CEAC] duration-300">
                                <span className="font-Montserrat font-black text-2xl text-[#34251d]"> + </span>
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

export default ExtrasView;