import NavBarEmp from "../components/NavBarEmp";
import fondoCafe from "../assets/fondo_cafe_mejorada.jpg";
import postre from "../assets/postres.jpg";
import fondo_in2 from "../assets/fondo_inicio2.jpg";
import ver_menu from "../assets/vermenu.png";
import nuevo_pedido from "../assets/nuevoped.png";
import ver_pedidos from "../assets/pedidos.png";

const InicioEmpleado = () => {
    return (
        <div className="h-screen overflow-y-hidden snap-y snap-mandatory">
            {/* NAVBAR DEL EMPLEADO */}
            <header className="sticky top-0 z-50">
                <NavBarEmp />
            </header>

            <main className="relative h-[calc(100vh-4rem)] flex items-center justify-center">
                {/* Fondo desenfocado */}
                <div
                    className="absolute inset-0 bg-cover bg-center bg-no-repeat"
                    style={{ backgroundImage: `url(${fondo_in2})` }}
                    aria-hidden="true"
                />

                {/* Contenedor central */}
                <div className="relative z-10 flex gap-16">
                    {/* Opción 1 */}
                    <div className="bg-white px-5 py-5 rounded-2xl border-4 border-black transition-transform duration-300 hover:scale-105">
                        <div className="group flex flex-col items-center w-[250px] h-[280px] mb-6">
                            <img 
                                src={nuevo_pedido}
                                alt="Nuevo Pedido"
                                className="rounded-[20px] w-[230px] h-[240px] mt-2 mb-1" 
                            />
                            <button 
                                className="w-full font-Montserrat font-bold bg-[#B0CEAC] text-black py-3 px-4 rounded-[10px] shadow-md text-2xl">
                                Nuevo Pedido
                            </button>
                        </div>
                    </div>

                    {/* Opción 2 */}
                    <div className="bg-white px-5 py-5 rounded-2xl border-4 border-black transition-transform duration-300 hover:scale-105">
                        <div className="group flex flex-col items-center w-[250px] h-[280px] mb-6">
                            <img 
                                src={ver_menu}
                                alt="Ver Menú"
                                className="rounded-[20px] w-[220px] h-[210px] mt-2 mb-6" 
                            />
                            <button 
                                className="w-full font-Montserrat font-bold bg-[#B0CEAC] text-black py-3 px-4 rounded-[10px] shadow-md text-2xl">
                                Ver Menú
                            </button>
                        </div>
                    </div>

                    {/* Opción 3 */}
                    <div className="bg-white px-5 py-5 rounded-2xl border-4 border-black transition-transform duration-300 hover:scale-105">
                        <div className="group flex flex-col items-center w-[250px] h-[280px] mb-6">
                            <img 
                                src={ver_pedidos}
                                alt="Ver Pedidos"
                                className="rounded-[20px] w-[220px] h-[210px] mt-2 mb-6" 
                            />
                            <button 
                                className="w-full font-Montserrat font-bold bg-[#B0CEAC] text-black py-3 px-4 rounded-[10px] shadow-md text-2xl">
                                Ver Pedidos
                            </button>
                        </div>
                    </div>
                </div>
            </main>
        </div>
    );
};

export default InicioEmpleado;
