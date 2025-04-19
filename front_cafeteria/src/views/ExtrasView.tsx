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
                <section className="w-full h-full flex-col md:flex-row gap-8 pt-8 justify-center items-center">
                    <div className= "flex flex-col relative mx-auto">
                        <div className="flex flex-rowbg-white">
                            <button className="w-6 h-6 rounded-2xl bg-white border-2 border-black"> + </button>
                            <h2> Shot de expresso </h2>
                            <button> - </button>
                        </div>
                        <div className="flex flex-rowbg-white">
                            <button className="w-6 h-6 rounded-2xl bg-white border-2 border-black"> + </button>
                            <h2> Shot de expresso </h2>
                            <button> - </button>
                        </div>
                    </div>
                </section>
            </main>
        </div>
    );
};

export default ExtrasView;