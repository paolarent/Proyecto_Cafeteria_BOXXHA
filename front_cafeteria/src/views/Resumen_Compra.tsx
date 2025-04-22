import NavBar from "../components/NavBar";

const Resumen_CompraView = () => {
    return (
        <div className="relative h-screen overflow-hidden flex flex-col">
            <header className="sticky top-0 z-50">
                <NavBar />
            </header>
            
            <main className="flex flex-row flex-1 relative">
                {/*Sección izquierda para el resumen de compra */}
                <section className="w-1/2 bg-white p-4">
                </section>

                {/*Sección derecha para los formularios */}
                <section className="w-1/2 bg-[#FFE6D9] p-4">
                </section>
            </main>
        </div>
    );
};

export default Resumen_CompraView;