import NavBar from "../components/NavBar";

const Resumen_CompraView = () => {
    return (
        <div className="relative h-screen overflow-hidden flex flex-col">
            <header className="sticky top-0 z-50">
                <NavBar />
            </header>
            
            <main className="flex flex-row flex-1 relative">
                {/*Sección izquierda para el resumen de compra */}
                <section className="flex flex-col w-1/2 bg-white p-8">
                    <h2 className="font-Montserrat font-regular text-3xl text-left text-[#34251d] pb-2">Resumen compra</h2>
                    {/* Posible componente */}
                    <div className="flex flex-row w-96 h-56 min-w-max bg-[#E2E2E2] justify-center items-center rounded-2xl">
                        <p> Texto ejemplo</p>
                    </div>
                </section>

                {/*Sección derecha para los formularios */}
                <section className="flex flex-col w-1/2  bg-[#FFE6D9] p-14 gap-14">
                    <div className="flex flex-row bg-white w-full h-full rounded-2xl justify-left">
                        <h2> Entrega</h2>
                    </div>
                    <div className="flex flex-row bg-white w-full h-full rounded-2xl justify-center">
                        <h2> Metodo de pago</h2>
                    </div>
                </section>
            </main>
        </div>
    );
};

export default Resumen_CompraView;