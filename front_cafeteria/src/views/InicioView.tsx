import fondoCafe from "../assets/fondo_cafe_mejorada.jpg";
import fondo_in1 from "../assets/foto_inicio1.png"
import fondo_in2 from "../assets/fondo_inicio2.jpg"
import NavBar from "../components/NavBar"
import { motion } from 'framer-motion';

const InicioView = () => {
    return (
        <div className="h-screen overflow-y-scroll snap-y snap-mandatory">
            {/* NAVBAR y BANNER */}
            <header className="sticky top-0 z-50">
                <NavBar />
            </header>
            <div className="overflow-hidden bg-[#5a3c29] text-white py-2">
                <motion.div
                    animate={{ x: ["0%", "-100vw"] }}
                    transition={{
                    duration: 15,       /*Aqui se ajusta la velocidad del banner*/
                    ease: "linear",
                    repeat: Infinity,
                    }}
                    className="whitespace-nowrap font-semibold text-lg flex gap-16"
                >
                    <span>☕ ¡Ordena y recoge! Tu café favorito te espera — Lunes a Sábado de 8am a 10pm y Domingo de 3:00pm a 9:00pm ☕</span>
                    <span>☕ ¡Ordena y recoge! Tu café favorito te espera — Lunes a Sábado de 8am a 10pm y Domingo de 3:00pm a 9:00pm ☕</span>
                    <span>☕ ¡Ordena y recoge! Tu café favorito te espera — Lunes a Sábado de 8am a 10pm y Domingo de 3:00pm a 9:00pm ☕</span>
                </motion.div>
            </div>
            
            <main className="flex flex-1 bg-[#f1e6df] pb-12">
                <section className="w-1/2 flex flex-col items-center justify-center space-y-10">
                    <div className="text-center">
                        <p className="font-Montserrat font-medium text-5xl">¡Bienvenido!</p>
                        <p className="font-Montserrat font-medium text-5xl">Llegaste a tu lugar feliz.</p>
                        <p className="font-Montserrat italic font-semibold text-[#5E4D47] text-5xl mt-2">- boxxha</p>
                    </div>

                    <div className="flex gap-12">
                        <button className="bg-[#401f0a] text-white font-Montserrat font-semibold py-3 px-6 rounded shadow-md text-2xl hover:bg-[#9a9998] transition 
                                            transform transition-transform duration-300 hover:scale-105">
                            Pide ahora
                        </button>
                        <button className="border border-black text-black bg-white font-Montserrat font-semibold text-2xl py-3 px-6 rounded hover:bg-[#9a9998] hover:border-white hover:text-white transition 
                                        transform transition-transform duration-300 hover:scale-105">
                            Ver menú
                        </button>
                    </div>
                </section>
                
                <section className="w-1/2 flex items-center justify-center mt-10">
                <div className="relative w-[400px] h-[450px] mx-auto">
                    <img
                        src={fondoCafe}
                        alt="Fondo de patron Boxxha"
                        className="absolute -top-4 -left-4 w-full h-full object-cover object-bottom rounded-[80px] z-0 shadow-lg opacity-80"
                    />

                    <img
                        src={fondo_in1}
                        alt="Vasos Boxxha"
                        className="absolute top-6 left-8 w-full h-full object-cover rounded-[80px] z-10 shadow-md"
                    />
                    </div>
                </section>
            </main>

            <section
            className="min-h-screen bg-[#dcd1c4] bg-cover bg-center bg-no-repeat px-6 py-16"
            style={{ backgroundImage: `url(${fondo_in2})` }}
            >
                <div className="grid grid-cols-4 gap-10 justify-items-center">
                    {/*Bebidas Calientes*/}
                    <div className="group flex flex-col items-center mt-40 transition-transform duration-300 hover:scale-105">
                        <button className="w-[200px] font-Montserrat font-bold bg-[#5C4848] text-[#ffffff] py-2 px-4 rounded shadow-md text-xl opacity-90 
                            group-hover:bg-[#424141] group-hover:text-white mb-2">
                            Bebidas Calientes
                        </button>
                        <img className="bg-[#D9D9D9] rounded-[20px] w-[300px] h-[300px]" />
                    </div>

                    {/*Bebidas Frias*/}
                    <div className="group flex flex-col items-center mt-20 transition-transform duration-300 hover:scale-105">
                        <img className="bg-[#D9D9D9] rounded-[20px] w-[300px] h-[300px] mb-2" />
                        <button className="w-[200px] font-Montserrat font-bold bg-[#5C4848] text-[#ffffff] py-2 px-4 rounded shadow-md text-xl opacity-90 
                            group-hover:bg-[#424141] group-hover:text-white">
                            Bebidas Frias
                        </button>
                    </div>

                    {/*Postres*/}
                    <div className="group flex flex-col items-center mt-40 transition-transform duration-300 hover:scale-105">
                        <button className="w-[200px] font-Montserrat font-bold bg-[#5C4848] text-[#ffffff] py-2 px-4 rounded shadow-md text-xl opacity-90 
                            group-hover:bg-[#424141] group-hover:text-white mb-2">
                            Postres
                        </button>
                        <img className="bg-[#D9D9D9] rounded-[20px] w-[300px] h-[300px]" />
                    </div>

                    {/*Nuevos*/}
                    <div className="group flex flex-col items-center mt-20 transition-transform duration-300 hover:scale-105">
                        <img className="bg-[#D9D9D9] rounded-[20px] w-[300px] h-[300px] mb-2" />
                        <button className="w-[200px] font-Montserrat font-bold bg-[#5C4848] text-[#ffffff] py-2 px-4 rounded shadow-md text-xl opacity-90 
                            group-hover:bg-[#424141] group-hover:text-white">
                            Nuevos
                        </button>
                    </div>
                </div>

            </section>
        </div>
    ); 
};

export default InicioView;