import NavBar from "../components/NavBar";
import fondoCafe from "../assets/fondo_cafe_mejorada.jpg";
import { useNavigate } from "react-router-dom";

const MenuBoxxha = () => {

    return(

        <div className="min-h-screen flex flex-col ">
            <header className="sticky top-0 z-50">
                <NavBar />
            </header>

            <main className="relative flex flex-1 bg-[#B0CEAC] overflow-hidden">
                <div
                    className="absolute inset-0 z-0"
                    style={{
                        backgroundImage: `url(${fondoCafe})`,
                        //backgroundSize: "cover",              //DUDOSO, MAÑANA CHECALO MEJOR
                        backgroundPosition: "center",
                        backgroundRepeat: "repeat",
                        opacity: 0.1
                    }}
                />
                
                <section className="w-full flex flex-col items-center pt-10 space-y-10 pb-10 relative z-10">
                    
                    <div className="flex flex-col relative bg-white p-4 bg-opacity-80 rounded-[70px]">
                        <h2 className="font-Montserrat font-semibold text-5xl text-center text-[#34251d]">
                            ¡ Descubre nuestro variado Menú !
                        </h2>
                    </div>
                
                    <div className="flex items-center w-full space-x-2 bg-[#ffffff]">
                        <p className="font-Montserrat font-bold text-4xl text-center text-[#34251d] py-2 pl-32">Bebidas</p>
                    </div>

                    <div className="grid grid-cols-2 font-Montserrat gap-12 p-6">

                        {/* Tarjeta 1 */}
                        <div className="flex gap-6">
                            <div className="w-80 h-80 bg-gray-300 rounded-2xl"></div>
                            <div>
                                <h3 className="font-bold text-3xl">ESPRESSO</h3> <br></br>
                                <p className="text-xl"><span className="font-bold">Sabores:</span> Regular, Cortado,</p>
                                <p className="text-xl">Affogato</p> <br></br>
                                <p className="text-xl"><span className="font-bold">Tamaño:</span> 40 ml</p> <br></br>
                                <p className="text-xl"><span className="font-bold">Presentación:</span> Caliente</p> <br></br>
                                <p className="text-xl"><span className="font-bold">Precio base:</span> $40 - $60</p>
                            </div>
                        </div>

                        {/* Tarjeta 2 */}
                        <div className="flex gap-6">
                            <div className="w-80 h-80 bg-gray-300 rounded-2xl"></div>
                            <div>
                                <h3 className="font-bold text-3xl">AMERICANO</h3> <br></br>
                                <p className="text-xl"><span className="font-bold">Sabores:</span> Regular, Limón,</p>
                                <p className="text-xl">Gin Ale</p> <br></br>
                                <p className="text-xl"><span className="font-bold">Tamaño:</span> 12 y 16 OZ</p> <br></br>
                                <p className="text-xl"><span className="font-bold">Presentación:</span> Caliente y Frío</p> <br></br>
                                <p className="text-xl"><span className="font-bold">Precio base:</span> $45 - $60</p>
                            </div>
                        </div>

                        {/* Tarjeta 3 */}
                        <div className="flex gap-6">
                            <div className="w-80 h-80 bg-gray-300 rounded-2xl"></div>
                            <div>
                                <h3 className="font-bold text-3xl">LATTE</h3> <br></br>
                                <p className="text-xl"><span className="font-bold">Sabores:</span> Regular, Caramelo,</p>
                                <p className="text-xl">Vainilla, Avellana, Moka,</p>
                                <p className="text-xl"> Moka Blanco, Dulce de Leche</p>  <br></br>
                                <p className="text-xl"><span className="font-bold">Tamaño:</span> 12 y 16 OZ</p>  <br></br>
                                <p className="text-xl"><span className="font-bold">Presentación:</span> Caliente y Frío</p>  <br></br>
                                <p className="text-xl"><span className="font-bold">Precio base:</span> $60 - $90</p>
                            </div>
                        </div>

                        {/* Tarjeta 4 */}
                        <div className="flex gap-6">
                            <div className="w-80 h-80 bg-gray-300 rounded-2xl"></div>
                            <div>
                                <h3 className="font-bold text-3xl">CHAI</h3> <br></br>
                                <p className="text-xl"><span className="font-bold">Sabores:</span> Regular, Dirty Chai</p> <br></br>
                                <p className="text-xl"><span className="font-bold">Tamaño:</span> 12 y 16 OZ</p> <br></br>
                                <p className="text-xl"><span className="font-bold">Presentación:</span> Caliente y Frío</p> <br></br>
                                <p className="text-xl"><span className="font-bold">Precio base:</span> $75 - $95</p>
                            </div>
                        </div>

                        {/* Tarjeta 5 */}
                        <div className="flex gap-6">
                            <div className="w-80 h-80 bg-gray-300 rounded-2xl"></div>
                            <div>
                                <h3 className="font-bold text-3xl">MATCHA</h3> <br></br>
                                <p className="text-xl"><span className="font-bold">Sabores:</span> Regular, Caramelo,</p>
                                <p className="text-xl">Raffaello, Pasion Fruit,</p>
                                <p className="text-xl">Coconut</p>  <br></br> 
                                <p className="text-xl"><span className="font-bold">Tamaño:</span> 12 y 16 OZ</p> <br></br>
                                <p className="text-xl"><span className="font-bold">Presentación:</span> Caliente y Frío</p> <br></br>
                                <p className="text-xl"><span className="font-bold">Precio base:</span> $80 - $100</p>
                            </div>
                        </div>

                        {/* Tarjeta 6 */}
                        <div className="flex gap-6">
                            <div className="w-80 h-80 bg-gray-300 rounded-2xl"></div>
                            <div>
                                <h3 className="font-bold text-3xl">TÉ</h3> <br></br>
                                <p className="text-xl"><span className="font-bold">Sabores:</span> Té verde, Té Negro,</p>
                                <p className="text-xl">Maracuya Green Tea,</p>
                                <p className="text-xl">Strawberry Black Tea,</p>
                                <p className="text-xl">Tisana Berry</p>  <br></br> 
                                <p className="text-xl"><span className="font-bold">Tamaño:</span> 12 y 16 OZ</p> <br></br>
                                <p className="text-xl"><span className="font-bold">Presentación:</span> Caliente y Frío</p> <br></br>
                                <p className="text-xl"><span className="font-bold">Precio base:</span> $50 - $85</p>
                            </div>
                        </div>

                        {/* Tarjeta 7 */}
                        <div className="flex gap-6">
                            <div className="w-80 h-80 bg-gray-300 rounded-2xl"></div>
                            <div>
                                <h3 className="font-bold text-3xl">FRAPPÉ</h3> <br></br>
                                <p className="text-xl"><span className="font-bold">Sabores:</span> Frappuccino, </p>
                                <p className="text-xl">Oreo, Nutella, Raffaello,</p>
                                <p className="text-xl">Strawberry Cream</p>  <br></br> 
                                <p className="text-xl"><span className="font-bold">Tamaño:</span> 12 y 16 OZ</p> <br></br>
                                <p className="text-xl"><span className="font-bold">Presentación:</span> Frío</p> <br></br>
                                <p className="text-xl"><span className="font-bold">Precio base:</span> $90 - $95</p>
                            </div>
                        </div>

                        {/* Tarjeta 8 */}
                        <div className="flex gap-6">
                            <div className="w-80 h-80 bg-gray-300 rounded-2xl"></div>
                            <div>
                                <h3 className="font-bold text-3xl">TARO</h3> <br></br>
                                <p className="text-xl"><span className="font-bold">Sabores:</span> Regular</p> <br></br>
                                <p className="text-xl"><span className="font-bold">Tamaño:</span> 12 y 16 OZ</p> <br></br>
                                <p className="text-xl"><span className="font-bold">Presentación:</span> Caliente y Frío</p> <br></br>
                                <p className="text-xl"><span className="font-bold">Precio base:</span> $80 - $85</p>
                            </div>
                        </div>

                        {/* Tarjeta 9 */}
                        <div className="flex gap-6">
                            <div className="w-80 h-80 bg-gray-300 rounded-2xl"></div>
                            <div>
                                <h3 className="font-bold text-3xl">CAPPUCCINO</h3> <br></br>
                                <p className="text-xl"><span className="font-bold">Sabores:</span> Regular</p> <br></br>
                                <p className="text-xl"><span className="font-bold">Tamaño:</span> 12 y 16 OZ</p> <br></br>
                                <p className="text-xl"><span className="font-bold">Presentación:</span> Caliente</p> <br></br>
                                <p className="text-xl"><span className="font-bold">Precio base:</span>  $60 - $80</p>
                            </div>
                        </div>

                        {/* Tarjeta 10 */}
                        <div className="flex gap-6">
                            <div className="w-80 h-80 bg-gray-300 rounded-2xl"></div>
                            <div>
                                <h3 className="font-bold text-3xl">CHOCOLATE</h3> <br></br>
                                <p className="text-xl"><span className="font-bold">Sabores:</span> Regular</p> <br></br>
                                <p className="text-xl"><span className="font-bold">Tamaño:</span> 12 y 16 OZ</p> <br></br>
                                <p className="text-xl"><span className="font-bold">Presentación:</span> Caliente</p> <br></br>
                                <p className="text-xl"><span className="font-bold">Precio base:</span>   $65 - $75</p>
                            </div>
                        </div>

                    </div>

                    <div className="flex items-center w-full space-x-2 bg-[#ffffff]">
                        <p className="font-Montserrat font-bold text-4xl text-center text-[#34251d] py-2 pl-32">Postres</p>
                    </div>

                    <div className="grid grid-cols-2 font-Montserrat gap-12 p-6">

                        <div className="flex gap-6">
                            <div className="w-80 h-80 bg-gray-300 rounded-2xl"></div>
                            <div>
                                <h3 className="font-bold text-3xl">ROLES</h3> <br></br>
                                <p className="text-xl"><span className="font-bold">Sabores:</span> Clásico, Nuez,</p>
                                <p className="text-xl">Ferrero Rocher, Lotus,</p>
                                <p className="text-xl">Kinder Bueno</p>  <br></br> 
                                <p className="text-xl"><span className="font-bold">Porción:</span> Individual</p> <br></br>
                                <p className="text-xl"><span className="font-bold">Precio base:</span> $40 - $75</p>
                            </div>
                        </div>

                        <div className="flex gap-6">
                            <div className="w-80 h-80 bg-gray-300 rounded-2xl"></div>
                            <div>
                                <h3 className="font-bold text-3xl">GALLETAS</h3> <br></br>
                                <p className="text-xl"><span className="font-bold">Sabores:</span> Chocolate,</p>
                                <p className="text-xl">Red Velvet, Alfajor</p> <br></br>
                                <p className="text-xl"><span className="font-bold">Porción:</span> Individual</p> <br></br>
                                <p className="text-xl"><span className="font-bold">Precio base:</span> $30 - $40</p>
                            </div>
                        </div>

                        <div className="flex gap-6">
                            <div className="w-80 h-80 bg-gray-300 rounded-2xl"></div>
                            <div>
                                <h3 className="font-bold text-3xl">PASTELES</h3> <br></br>
                                <p className="text-xl"><span className="font-bold">Sabores:</span> Zahanoria,</p> 
                                <p className="text-xl">Chocolate, Red Velvet</p> <br></br>
                                <p className="text-xl"><span className="font-bold">Porción:</span> Individual</p> <br></br>
                                <p className="text-xl"><span className="font-bold">Precio base:</span>  $70 - $100</p>
                            </div>
                        </div>

                        <div className="flex gap-6">
                            <div className="w-80 h-80 bg-gray-300 rounded-2xl"></div>
                            <div>
                                <h3 className="font-bold text-3xl">PAYS</h3> <br></br>
                                <p className="text-xl"><span className="font-bold">Sabores:</span> Cheesecake clásico,</p>
                                <p className="text-xl">Lotus Biscoff, Frutos Rojos,</p> 
                                <p className="text-xl">Tortuga</p> <br></br>
                                <p className="text-xl"><span className="font-bold">Porción:</span> Individual</p> <br></br>
                                <p className="text-xl"><span className="font-bold">Precio base:</span>   $70 - $100</p>
                            </div>
                        </div>

                    </div>

                </section>
            </main>
        </div>
    );
};

export default MenuBoxxha;