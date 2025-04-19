import fondoCafe from "../assets/fondo_cafe_mejorada.jpg";
import NavBar from "../components/NavBar";

const ExtrasView = () => {
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
                {/*Sección donde se encuentran el listado de extras y botones +/- */}
                <section className="relative w-full flex flex-col items-center space-y-10 pt-10">
                    <h2 className="font-Montserrat font-regular text-5xl text-center text-[#34251d] bg-[#ffffff] px-6 py-3 rounded-2xl shadow-md">Seleccione<span className="font-medium"> extras</span></h2>
                    <div className= "flex flex-col relative ">
                        <div className="flex flex-row gap-3">
                            <button className="w-14 h-14 rounded-3xl bg-white shadow-md border-2 border-black
                            hover:scale-105 transition-transform hover:bg-gray-200 duration-300"> <span className= "font-Montserrat font-regular text-2xl text-[#34251d]"> + </span> </button>
                            <div className="flex flex-col relative min-w-max w-96 bg-white rounded-2xl justify-center items-center border-2 border-black sha">
                                <span className="font-Montserrat font-regular text-2xl text-[#34251d] px-6 py-3shadow-md"> Shot de expresso </span>
                            </div>
                            <button className="w-14 h-14 rounded-3xl bg-white shadow-md border-2 border-black 
                            hover:scale-105 transition-transform hover:bg-gray-200 duration-300"> <span className= "font-Montserrat font-regular text-3xl text-[#34251d]"> - </span> </button>
                        </div>
                        <div className="flex flex-row gap-3 pt-3">
                            <button className="w-14 h-14 rounded-3xl bg-white shadow-md border-2 border-black
                            hover:scale-105 transition-transform hover:bg-gray-200 duration-300"> <span className= "font-Montserrat font-regular text-2xl text-[#34251d]"> + </span> </button>
                            <div className="flex flex-col relative min-w-max w-96 bg-white rounded-2xl justify-center items-center border-2 border-black sha">
                                <span className="font-Montserrat font-regular text-2xl text-[#34251d] px-6 py-3shadow-md"> Matcha </span>
                            </div>
                            <button className="w-14 h-14 rounded-3xl bg-white shadow-md border-2 border-black 
                            hover:scale-105 transition-transform hover:bg-gray-200 duration-300"> <span className= "font-Montserrat font-regular text-3xl text-[#34251d]"> - </span> </button>
                        </div>
                        <div className="flex flex-row gap-3 pt-3">
                            <button className="w-14 h-14 rounded-3xl bg-white shadow-md border-2 border-black
                            hover:scale-105 transition-transform hover:bg-gray-200 duration-300"> <span className= "font-Montserrat font-regular text-2xl text-[#34251d]"> + </span> </button>
                            <div className="flex flex-col relative min-w-max w-96 bg-white rounded-2xl justify-center items-center border-2 border-black sha">
                                <span className="font-Montserrat font-regular text-2xl text-[#34251d] px-6 py-3shadow-md"> Perlas Explosivas </span>
                            </div>
                            <button className="w-14 h-14 rounded-3xl bg-white shadow-md border-2 border-black 
                            hover:scale-105 transition-transform hover:bg-gray-200 duration-300"> <span className= "font-Montserrat font-regular text-3xl text-[#34251d]"> - </span> </button>
                        </div>
                        <div className="flex flex-row gap-3 pt-3">
                            <button className="w-14 h-14 rounded-3xl bg-white shadow-md border-2 border-black
                            hover:scale-105 transition-transform hover:bg-gray-200 duration-300"> <span className= "font-Montserrat font-regular text-2xl text-[#34251d]"> + </span> </button>
                            <div className="flex flex-col relative min-w-max w-96 bg-white rounded-2xl justify-center items-center border-2 border-black sha">
                                <span className="font-Montserrat font-regular text-2xl text-[#34251d] px-6 py-3shadow-md"> Bola de nieve</span>
                            </div>
                            <button className="w-14 h-14 rounded-3xl bg-white shadow-md border-2 border-black 
                            hover:scale-105 transition-transform hover:bg-gray-200 duration-300"> <span className= "font-Montserrat font-regular text-3xl text-[#34251d]"> - </span> </button>
                        </div>
                        
                        
                        
                    </div>
                </section>
            </main>
        </div>
    );
};

export default ExtrasView;