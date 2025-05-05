import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import fondoCafe from "../assets/fondo_cafe_mejorada.jpg";
import frappe from "../assets/frappe.png";
import rol from "../assets/postres.jpg";
import galleta from "../assets/galleta.jpg";
import pastel from "../assets/pastel.jpg";
import pay from "../assets/pay.jpg";
import latte from "../assets/beb_calientes.jpeg";
import americano from "../assets/americano.jpeg";
import espresso from "../assets/espresso.jpg";
import cappuccino from "../assets/cappuccino.jpg";
import chocolate from "../assets/chocolate.jpg";
import te from "../assets/te.jpeg";
import taro from "../assets/taro.jpg";
import chai from "../assets/chai.jpg";
import matcha from "../assets/matcha.jpg"


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
                        backgroundSize: "auto",              
                        backgroundPosition: "center",
                        backgroundRepeat: "repeat",
                        opacity: 0.1
                    }}
                />                
                <section className="w-full flex flex-col items-center pt-10 space-y-10 pb-6 relative z-10">
                    {/* Título principal */}
                    <div className="flex flex-col relative bg-white p-4 bg-opacity-80 rounded-[40px] md:rounded-[70px] mx-4">
                        <h2 className="font-Montserrat font-semibold text-3xl md:text-5xl text-center text-[#311808]">
                            ¡ Descubre nuestro variado Menú !
                        </h2>
                    </div>

                    {/* barra para separar la sección Bebidas */}
                    <div className="flex items-center w-full bg-white px-4 md:px-32">
                        <p className="font-Montserrat font-bold text-2xl md:text-4xl text-left text-[#34251d] py-2 w-full">
                            Bebidas
                        </p>
                    </div>

                    {/* en este div estan contenidas las tarjetas de menu bebidas */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-12 p-4 md:p-6 w-full max-w-7xl font-Montserrat">

                        {/* Tarjeta 1 */}
                        <div className="flex flex-col md:flex-row gap-4 md:gap-6 items-center bg-white bg-opacity-80 p-4 rounded-2xl">
                            <img src={espresso} className="w-40 h-40 md:w-80 md:h-80 bg-gray-300 rounded-2xl" />
                            <div className="text-center md:text-left">
                                <h3 className="font-bold text-2xl md:text-3xl">ESPRESSO</h3> <br />
                                <p className="text-md md:text-lg"><span className="font-bold">Sabores:</span> Clásico,</p>
                                <p className="text-md md:text-lg">Cortado, Affogato</p> <br />
                                <p className="text-md md:text-lg"><span className="font-bold">Tamaño:</span> 40 ml</p> <br />
                                <p className="text-md md:text-lg"><span className="font-bold">Presentación:</span> Caliente</p> <br />
                                <p className="text-md md:text-lg"><span className="font-bold">Precio base:</span> $40 - $60</p>
                            </div>
                        </div>

                        {/* Tarjeta 2 */}
                        <div className="flex flex-col md:flex-row gap-4 md:gap-6 items-center bg-white bg-opacity-80 p-4 rounded-2xl">
                            <img src={americano} className="w-40 h-40 md:w-80 md:h-80 bg-gray-300 rounded-2xl" />
                            <div className="text-center md:text-left">
                                <h3 className="font-bold text-2xl md:text-3xl">AMERICANO</h3> <br />
                                <p className="text-md md:text-lg"><span className="font-bold">Sabores:</span> Clásico, Limón,</p>
                                <p className="text-md md:text-lg">Gin Ale</p> <br />
                                <p className="text-md md:text-lg"><span className="font-bold">Tamaño:</span> 12 y 16 OZ</p> <br />
                                <p className="text-md md:text-lg"><span className="font-bold">Presentación:</span> Caliente y Frío</p> <br />
                                <p className="text-md md:text-lg"><span className="font-bold">Precio base:</span> $45 - $60</p>
                            </div>
                        </div>

                        {/* Tarjeta 3 */}
                        <div className="flex flex-col md:flex-row gap-4 md:gap-6 items-center bg-white bg-opacity-80 p-4 rounded-2xl">
                            <img src={latte} className="w-40 h-40 md:w-80 md:h-80 bg-gray-300 rounded-2xl" />
                            <div className="text-center md:text-left">
                                <h3 className="font-bold text-2xl md:text-3xl">LATTE</h3> <br />
                                <p className="text-md md:text-lg"><span className="font-bold">Sabores:</span> Clásico, Moka,</p>
                                <p className="text-md md:text-lg">Vainilla, Avellana, Cajeta,</p> 
                                <p className="text-md md:text-lg">Moka Blanco, Caramelo</p> <br />
                                <p className="text-md md:text-lg"><span className="font-bold">Tamaño:</span> 12 y 16 OZ</p> <br />
                                <p className="text-md md:text-lg"><span className="font-bold">Presentación:</span> Caliente y Frío</p> <br />
                                <p className="text-md md:text-lg"><span className="font-bold">Precio base:</span> $60 - $90</p>
                            </div>
                        </div> 

                        {/* Tarjeta 4 */}
                        <div className="flex flex-col md:flex-row gap-4 md:gap-6 items-center bg-white bg-opacity-80 p-4 rounded-2xl">
                            <img src={chai} className="w-40 h-40 md:w-80 md:h-80 bg-gray-300 rounded-2xl" />
                            <div className="text-center md:text-left">
                                <h3 className="font-bold text-2xl md:text-3xl">CHAI</h3> <br />
                                <p className="text-md md:text-lg"><span className="font-bold">Sabores:</span> Clásico, Dirty</p>
                                <p className="text-md md:text-lg">Chai</p> <br />
                                <p className="text-md md:text-lg"><span className="font-bold">Tamaño:</span> 12 y 16 OZ</p> <br />
                                <p className="text-md md:text-lg"><span className="font-bold">Presentación:</span> Caliente y Frío</p> <br />
                                <p className="text-md md:text-lg"><span className="font-bold">Precio base:</span> $75 - $95</p>
                            </div>
                        </div> 

                        {/* Tarjeta 5 */}
                        <div className="flex flex-col md:flex-row gap-4 md:gap-6 items-center bg-white bg-opacity-80 p-4 rounded-2xl">
                            <img src={matcha} className="w-40 h-40 md:w-80 md:h-80 bg-gray-300 rounded-2xl" />
                            <div className="text-center md:text-left">
                                <h3 className="font-bold text-2xl md:text-3xl">MATCHA</h3> <br />
                                <p className="text-md md:text-lg"><span className="font-bold">Sabores:</span> Clásico, Coconut,</p>
                                <p className="text-md md:text-lg">Raffaello, Pasion Fruit,</p> 
                                <p className="text-md md:text-lg">Caramelo</p> <br />
                                <p className="text-md md:text-lg"><span className="font-bold">Tamaño:</span> 12 y 16 OZ</p> <br />
                                <p className="text-md md:text-lg"><span className="font-bold">Presentación:</span> Caliente y Frío</p> <br />
                                <p className="text-md md:text-lg"><span className="font-bold">Precio base:</span> $80 - $100</p>
                            </div>
                        </div> 

                        {/* Tarjeta 6 */}
                        <div className="flex flex-col md:flex-row gap-4 md:gap-6 items-center bg-white bg-opacity-80 p-4 rounded-2xl">
                            <img src={te} className="w-40 h-40 md:w-80 md:h-80 bg-gray-300 rounded-2xl" />
                            <div className="text-center md:text-left">
                                <h3 className="font-bold text-2xl md:text-3xl">TÉ</h3> <br />
                                <p className="text-md md:text-lg"><span className="font-bold">Sabores:</span> Té Verde,</p>
                                <p className="text-md md:text-lg">Té Negro, Maracuya Green</p>
                                <p className="text-md md:text-lg">Tea, Strawberry Black Tea,</p>
                                <p className="text-md md:text-lg">Tisana Berry</p> <br />
                                <p className="text-md md:text-lg"><span className="font-bold">Tamaño:</span> 12 y 16 OZ</p> <br />
                                <p className="text-md md:text-lg"><span className="font-bold">Presentación:</span> Caliente y Frío</p> <br />
                                <p className="text-md md:text-lg"><span className="font-bold">Precio base:</span> $50 - $85</p>
                            </div>
                        </div> 

                        {/* Tarjeta 7 */}
                        <div className="flex flex-col md:flex-row gap-4 md:gap-6 items-center bg-white bg-opacity-80 p-4 rounded-2xl">
                            <img src={frappe} className="w-40 h-40 md:w-80 md:h-80 bg-gray-300 rounded-2xl" />
                            <div className="text-center md:text-left">
                                <h3 className="font-bold text-2xl md:text-3xl">FRAPPÉ</h3> <br />
                                <p className="text-sm md:text-md"><span className="font-bold text-md md:text-lg">Sabores:</span> Frappuccino, Oreo</p>
                                <p className="text-sm md:text-md">Nutella, Taro, Matcha, Chai,</p>
                                <p className="text-sm md:text-md">Strawberry Cream, Dirty Chai,</p> 
                                <p className="text-sm md:text-md">Latte (Vainilla, Caramelo, Moka,</p>
                                <p className="text-sm md:text-md">Moka Blanco,Avellana, Cajeta)</p> <br />
                                <p className="text-md md:text-lg"><span className="font-bold">Tamaño:</span> 12 y 16 OZ</p> <br />
                                <p className="text-md md:text-lg"><span className="font-bold">Presentación:</span> Frío</p> <br />
                                <p className="text-md md:text-lg"><span className="font-bold">Precio base:</span> $90 - $95</p>
                            </div>
                        </div> 

                        {/* Tarjeta 8 */}
                        <div className="flex flex-col md:flex-row gap-4 md:gap-6 items-center bg-white bg-opacity-80 p-4 rounded-2xl">
                            <img src={taro} className="w-40 h-40 md:w-80 md:h-80 bg-gray-300 rounded-2xl" />
                            <div className="text-center md:text-left">
                                <h3 className="font-bold text-2xl md:text-3xl">TARO</h3> <br />
                                <p className="text-md md:text-lg"><span className="font-bold">Sabores:</span> Clásico</p> <br />
                                <p className="text-md md:text-lg"><span className="font-bold">Tamaño:</span> 12 y 16 OZ</p> <br />
                                <p className="text-md md:text-lg"><span className="font-bold">Presentación:</span> Caliente y Frío</p> <br />
                                <p className="text-md md:text-lg"><span className="font-bold">Precio base:</span> $80 - $85</p>
                            </div>
                        </div>

                        {/* Tarjeta 9 */}
                        <div className="flex flex-col md:flex-row gap-4 md:gap-6 items-center bg-white bg-opacity-80 p-4 rounded-2xl">
                            <img src={cappuccino} className="w-40 h-40 md:w-80 md:h-80 bg-gray-300 rounded-2xl" />
                            <div className="text-center md:text-left">
                                <h3 className="font-bold text-2xl md:text-3xl">CAPPUCCINO</h3> <br />
                                <p className="text-md md:text-lg"><span className="font-bold">Sabores:</span> Clásico</p> <br />
                                <p className="text-md md:text-lg"><span className="font-bold">Tamaño:</span> 12 y 16 OZ</p> <br />
                                <p className="text-md md:text-lg"><span className="font-bold">Presentación:</span> Caliente</p> <br />
                                <p className="text-md md:text-lg"><span className="font-bold">Precio base:</span> $60 - $65</p>
                            </div>
                        </div>

                        {/* Tarjeta 10 */}
                        <div className="flex flex-col md:flex-row gap-4 md:gap-6 items-center bg-white bg-opacity-80 p-4 rounded-2xl">
                            <img src={chocolate} className="w-40 h-40 md:w-80 md:h-80 bg-gray-300 rounded-2xl" />
                            <div className="text-center md:text-left">
                                <h3 className="font-bold text-2xl md:text-3xl">CHOCOLATE</h3> <br />
                                <p className="text-md md:text-lg"><span className="font-bold">Sabores:</span> Clásico</p> <br />
                                <p className="text-md md:text-lg"><span className="font-bold">Tamaño:</span> 12 y 16 OZ</p> <br />
                                <p className="text-md md:text-lg"><span className="font-bold">Presentación:</span> Caliente</p> <br />
                                <p className="text-md md:text-lg"><span className="font-bold">Precio base:</span> $65 - $70</p>
                            </div>
                        </div>

                    </div>

                    {/* barra para separar la sección de postres */}
                    <div className="flex items-center w-full bg-white px-4 md:px-32">
                        <p className="font-Montserrat font-bold text-2xl md:text-4xl text-left text-[#34251d] py-2 w-full">
                            Postres
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-12 p-4 md:p-6 w-full max-w-7xl font-Montserrat">

                        <div className="flex flex-col md:flex-row gap-4 md:gap-6 items-center bg-white bg-opacity-80 p-4 rounded-2xl">
                            <img src={rol} className="w-40 h-40 md:w-80 md:h-80 bg-gray-300 rounded-2xl" />
                            <div className="text-center md:text-left">
                                <h3 className="font-bold text-2xl md:text-3xl">ROLES</h3> <br />
                                <p className="text-md md:text-lg"><span className="font-bold">Sabores:</span> Clásico, Nuez,</p> 
                                <p className="text-md md:text-lg">Ferrero Rocher, Lotus,</p>
                                <p className="text-md md:text-lg">Kinder Bueno</p> <br />
                                <p className="text-md md:text-lg"><span className="font-bold">Porción:</span> Individual</p> <br />
                                <p className="text-md md:text-lg"><span className="font-bold">Precio base:</span> $40 - $75</p>
                            </div>
                        </div>

                        <div className="flex flex-col md:flex-row gap-4 md:gap-6 items-center bg-white bg-opacity-80 p-4 rounded-2xl">
                            <img src={galleta} className="w-40 h-40 md:w-80 md:h-80 bg-gray-300 rounded-2xl"/>
                            <div className="text-center md:text-left">
                                <h3 className="font-bold text-2xl md:text-3xl">GALLETAS</h3> <br />
                                <p className="text-md md:text-lg"><span className="font-bold">Sabores:</span> Chocolate,</p> 
                                <p className="text-md md:text-lg">Red Velvet, Alfajor</p> <br />
                                <p className="text-md md:text-lg"><span className="font-bold">Porción:</span> Individual</p> <br />
                                <p className="text-md md:text-lg"><span className="font-bold">Precio base:</span> $30 - $40</p>
                            </div>
                        </div>

                        <div className="flex flex-col md:flex-row gap-4 md:gap-6 items-center bg-white bg-opacity-80 p-4 rounded-2xl">
                            <img src={pastel} className="w-40 h-40 md:w-80 md:h-80 bg-gray-300 rounded-2xl" />
                            <div className="text-center md:text-left">
                                <h3 className="font-bold text-2xl md:text-3xl">PASTELES</h3> <br />
                                <p className="text-md md:text-lg"><span className="font-bold">Sabores:</span> Zahanoria,</p> 
                                <p className="text-md md:text-lg">Chocolate, Red Velvet</p> <br />
                                <p className="text-md md:text-lg"><span className="font-bold">Porción:</span> Individual</p> <br />
                                <p className="text-md md:text-lg"><span className="font-bold">Precio base:</span> $70 - $100</p>
                            </div>
                        </div>

                        <div className="flex flex-col md:flex-row gap-4 md:gap-6 items-center bg-white bg-opacity-80 p-4 rounded-2xl">
                            <img src={pay} className="w-40 h-40 md:w-80 md:h-80 bg-gray-300 rounded-2xl"/>
                            <div className="text-center md:text-left">
                                <h3 className="font-bold text-2xl md:text-3xl">PAYS</h3> <br />
                                <p className="text-md md:text-lg"><span className="font-bold">Sabores:</span> Cheesecake</p> 
                                <p className="text-md md:text-lg"> clásico, Lotus Biscoff,</p> 
                                <p className="text-md md:text-lg">Frutos Rojos, Tortuga</p>  <br />
                                <p className="text-md md:text-lg"><span className="font-bold">Porción:</span> Individual</p> <br />
                                <p className="text-md md:text-lg"><span className="font-bold">Precio base:</span> $70 - $100</p>
                            </div>
                        </div>

                    </div>
                </section>
            </main>
                <Footer />
        </div>
    );
};

export default MenuBoxxha;