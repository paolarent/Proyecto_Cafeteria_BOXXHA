import NavBar from "../components/NavBar"
import { useNavigate } from "react-router-dom";
import img_frappe_lotus from "../assets/frappe_lotus2.png"
import img_frappe_caramel from "../assets/frappe_caramelo2.png"

const MenuNuevosView = () => {
    const navigate = useNavigate();
    //agregue esto aqui, pero no aplica a ninguno de los "nuevos", pero si se llega a cambiar es reutilizable, adaptable a
    /* type TipoBebida = 'caliente' | 'frio' | 'postre' | 'nuevo';
    const irASabores = (tipo: TipoBebida, nombre: string) => {
        navigate(`/sabores/${tipo}/${nombre}`);
    }; */

    return (
        <div className="min-h-screen flex flex-col ">
            <header className="sticky top-0 z-50">
                <NavBar />
            </header>

            <main className="flex flex-1 bg-[#B0CEAC]">
            <section className="w-full flex flex-col items-center space-y-10 pt-20">
                <h2 className="font-Montserrat font-regular text-5xl text-center text-[#34251d]">
                - Nuestros <span className="font-bold">Frappés</span> -
                </h2>
                <div className="flex flex-wrap justify-center gap-10 w-full px-8">

                    {/* Irlandes */}
                    <div className="group flex flex-col items-center transition-transform duration-300 hover:scale-105">
                        <img className="bg-[#D9D9D9] rounded-[20px] w-[250px] h-[250px] mb-2" />
                        <button className="w-full font-Montserrat font-bold bg-[#5C4848] text-[#ffffff] py-2 px-4 rounded shadow-md text-xl opacity-80 
                            group-hover:bg-[#f0eceb] group-hover:text-[#38241c] rounded-[10px]">
                            IRLANDES
                        </button>
                    </div>

                    {/* Lotus Frappé */}
                    <div className="group flex flex-col items-center transition-transform duration-300 hover:scale-105">
                        <img 
                            src={img_frappe_lotus} 
                            alt="Lotus Frappé" 
                            className="bg-[#D9D9D9] rounded-[20px] w-[250px] h-[250px] mb-2" 
                        />
                        <button className="w-full font-Montserrat font-bold bg-[#5C4848] text-[#ffffff] py-2 px-4 rounded shadow-md text-xl opacity-80 
                            group-hover:bg-[#f0eceb] group-hover:text-[#38241c] rounded-[10px]">
                            LOTUS FRAPPÉ
                        </button>
                    </div>

                    {/* Caramel Frappé */}
                    <div className="group flex flex-col items-center transition-transform duration-300 hover:scale-105">
                        <img 
                            src={img_frappe_caramel} 
                            alt="Caramel Frappé" 
                            className="bg-[#D9D9D9] rounded-[20px] w-[250px] h-[250px] mb-2" 
                        />
                        <button className="w-full font-Montserrat font-bold bg-[#5C4848] text-[#ffffff] py-2 px-4 rounded shadow-md text-xl opacity-80 
                            group-hover:bg-[#f0eceb] group-hover:text-[#38241c] rounded-[10px]">
                            CARAMEL FRAPPÉ
                        </button>
                    </div>

                </div>
            </section>
            </main>

        </div>
    );
};

export default MenuNuevosView;