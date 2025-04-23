import NavBar from "../components/NavBar";
const producto = {
    nombre: "Café Latte",
    sabor: "Vainilla",
    tamano: "16 OZ",
    leche: "Entera",
    extras: ["Leche de almendra", "Doble shot"]
};

const Resumen_CompraView = () => {
    return (
        <div className="relative h-full w-full flex flex-col">
            <header className="sticky top-0 z-50">
                <NavBar />
            </header>
            
            <main className="flex flex-row flex-1 relative">
                {/*Sección izquierda para el resumen de compra */}
                <section className="flex flex-col w-1/2 bg-white p-8">
                    <h2 className="font-Montserrat font-regular text-3xl text-left text-[#34251d] pb-2">Resumen compra</h2>
                    {/* Posible componente */}
                    <div className="flex flex-col w-96 h-56 min-w-max bg-[#E2E2E2] justify-left rounded-2xl p-4">
                        <p>{producto.nombre}</p>
                        <p>{producto.sabor}</p>
                        <p>{producto.tamano}</p>
                        <p>{producto.leche}</p>
                        <p>Extras</p>
                        <ul>
                            {producto.extras.map((extra, index) => (
                            <li key={index}>{extra}</li>
                            ))}
                        </ul>
                    </div>
                </section>

                {/*Sección derecha para los formularios */}
                <section className="flex flex-col w-1/2  bg-[#FFE6D9] p-12 gap-14">
                    <div className="bg-white w-full h-full rounded-2xl justify-left p-8">
                        {/*Contenedor de la dirección escrita o leyenda */}
                        <div className="relative flex flex-col justify-left w-full">
                            <p className="font-Montserrat font-bold text-3xl text-left text-[#34251d]"> 
                                Entrega
                            </p>
                            <p className="font-Montserrat font-semibold text-xl text-left text-[#34251d] pb-2"> 
                                Recoge tu pedido en
                                Blvd. Macapule 2589, Viñedos, 81228 Los Mochis, Sin.
                            </p>
                        </div>
                        {/*Mapa con Dirección Boxxha Café*/}
                        <div className="flex flex-col w-full">
                            <iframe 
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d897.8664617336078!2d-108.98246811785354!3d25.821190637920285!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x86ba2900647132dd%3A0xc09c4a8f6a0e69cf!2scafeteria%20boxxha!5e0!3m2!1ses-419!2smx!4v1745380050009!5m2!1ses-419!2smx" 
                            className="border-0 h-96 w-full;"
                            loading="lazy">
                            </iframe>
                        </div>
                    </div>
                    <div className="flex flex-col bg-white w-full h-full rounded-2xl justify-left p-8">
                        <h2 className="font-Montserrat font-bold text-2xl text-left text-[#34251d]"> Metodo de pago</h2>
                        <label>Label</label>
                        <input className="border-2 border-black"/>
                        <label>Label</label>
                        <input className="border-2 border-black"/>
                        <label>Label</label>
                        <input className="border-2 border-black"/>
                        <label>Label</label>
                        <input className="border-2 border-black"/>
                        <label>Label</label>
                        <input className="border-2 border-black"/>
                    </div>
                </section>
            </main>
        </div>
    );
};

export default Resumen_CompraView;