import React from "react";
import logob from "../assets/logo_boxxha.png"; 
import fondoCafe from "../assets/fondo_cafe_mejorada.jpg";
import NavBar from "../components/NavBar"

const RegistroView = () => {
    return (
        <div className="min-h-screen flex flex-col">
            <NavBar /> {/*Reutilizar la barra de navegacion que hice en componentes*/}
        
            <main className="flex flex-1 bg-[#B0CEAC]">
                {/* Misma logica, 2 secciones pero inverso */}
                <section
                    className="w-1/2 flex items-center justify-center relative bg-[#B0CEAC] rounded-r-[100px] overflow-hidden"
                    style={{
                        backgroundImage: `url(${fondoCafe})`,
                        backgroundSize: "cover", 
                        backgroundPosition: "center",
                        backgroundRepeat: "no-repeat",
                    }}
                    >
                    {/* Capa de color con algo de opacidad encima, opcional */}
                    <div
                        className="absolute inset-0"
                        style={{ backgroundColor: "white", opacity: 0.50 }}
                    />

                    {/* Contenido por encima de la capa del patron */}
                    <div className="relative z-10 text-center p-8 rounded-3xl bg-[#B0CEAC] shadow-md opacity-95 w-[420px] h-[410px]">
                        <div className="bg-white rounded-xl px-10 py-2 shadow-md inline-block mb-4">
                            <img src={logob} alt="Logo BOXXHA" className="h-[70px] mx-auto mb-2" />
                        </div>
                        <h2 className="text-2xl font-Montserrat font-bold text-[#000000] mt-6 mb-2">¡Hola! Bienvenid@ a</h2>
                        <h1 className="text-2xl font-Montserrat font-extrabold text-[#000000] mb-12">BOXXHA</h1>
                        <p className="text-xl font-Montserrat font-regular mb-4">¿Ya tienes una cuenta?</p>
                        <button className="bg-[#3B2B26] font-Montserrat font-semibold text-lg text-white px-4 py-2 rounded-md hover:bg-[#555655] 
                                            transform transition-transform duration-300 hover:scale-125">
                        Iniciar Sesión
                        </button>
                    </div>
                </section>

                <section className="w-1/2 flex items-center justify-center">
                    <div className="bg-white p-8 rounded-xl shadow-md w-[500px] h-[460px]">
                        <h2 className="text-4xl font-Montserrat font-bold text-[#453126] mb-4 text-center">Registrarse</h2>
                        <form className="space-y-4">
                            {/* Parte de seleccionar forma de registro y su input-text */}
                            <div className="grid grid-cols-2 gap-4">
                                <label className="col-span-2 block text-l text-[#453126] text-center">
                                    Elija una forma de identificarse:
                                </label>
                                
                                <div>
                                    <select className="w-full px-3 py-2 border border-gray-300 rounded-md bg-[#5C48481A] focus:outline-none focus:ring focus:ring-[#3B2B26] font-semibold">
                                    <option value="">Seleccionar</option>
                                    <option value="email">Email</option>
                                    <option value="telefono">Teléfono</option>
                                    </select>
                                </div>
                                
                                <div>
                                    <input
                                    type="text"
                                    className="w-full mt-0 px-3 py-2 border border-gray-300 rounded-md bg-[#5C48481A] focus:outline-none focus:ring focus:ring-[#3B2B26]"
                                    placeholder="Email o Télefono"
                                    />
                                </div>
                            </div>

                            {/* Nombre y Apellido */}
                            <div className="grid grid-cols-2 gap-4">
                                <div>
                                <label className="block text-l text-[#453126] mb-1">Nombre:</label>
                                <input
                                    type="text"
                                    className="w-full px-3 py-2 border border-gray-300 rounded-md bg-[#5C48481A] focus:outline-none focus:ring focus:ring-[#3B2B26]"
                                />
                                </div>
                                <div>
                                <label className="block text-l text-[#453126] mb-1">Apellido:</label>
                                <input
                                    type="text"
                                    className="w-full px-3 py-2 border border-gray-300 rounded-md bg-[#5C48481A] focus:outline-none focus:ring focus:ring-[#3B2B26]"
                                />
                                </div>
                            </div>

                            {/* Contraseña y Nombre de Usuario */}
                            <div className="grid grid-cols-2 gap-4">
                                <div>
                                    <label className="block text-l text-[#453126] mb-1">Contraseña:</label>
                                    <input
                                    type="password"
                                    className="w-full px-3 py-2 border border-gray-300 rounded-md bg-[#5C48481A] focus:outline-none focus:ring focus:ring-[#3B2B26]"
                                    />
                                </div>
                                <div>
                                    <label className="block text-l text-[#453126] mb-1">Nombre de Usuario:</label>
                                    <input
                                    type="text"
                                    className="w-full px-3 py-2 border border-gray-300 rounded-md bg-[#5C48481A] focus:outline-none focus:ring focus:ring-[#3B2B26]"
                                    />
                                </div>
                            </div>

                            {/* Confirmar contraseña */}
                            <div className="grid grid-cols-2 gap-4">
                                <div>
                                    <label className="block text-l text-[#453126] mb-1">Confirmar contraseña:</label>
                                    <input
                                    type="password"
                                    className="w-full px-3 py-2 border border-gray-300 rounded-md bg-[#5C48481A] focus:outline-none focus:ring focus:ring-[#3B2B26]"
                                    />
                                </div>

                                {/* Botón */}
                                <button
                                    type="submit"
                                    className="w-full mt-6 mb-2 px-3 py-3 bg-[#3B2B26] font-Montserrat font-semibold text-white rounded-md hover:bg-[#555655] transition-transform duration-300 hover:scale-105"
                                >
                                    REGISTRARSE
                                </button>
                            </div>
                        </form>
                    </div>
                </section>
            </main>
        </div>
    );
};

export default RegistroView;