import React, { useState } from "react";
import fondoCafe from "../assets/fondo_cafe_mejorada.jpg";
import fondo_in1 from "../assets/foto_inicio1.png"
import NavBar from "../components/NavBar"
import { useNavigate } from "react-router-dom";
import { motion } from 'framer-motion';

const InicioView = () => {
    return (
        <div className="min-h-screen flex flex-col">
            <header className="sticky top-0 z-50">
                <NavBar />
            </header>
            <div className="overflow-hidden bg-[#5a3c29] text-white py-2">
                <motion.div
                    animate={{ x: ["100vw", "-100vw"] }}
                    transition={{
                    duration: 15,
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
            <main className="flex flex-1 bg-[#f1e6df]">
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
                
                <section className="w-1/2 flex items-center justify-center">
                <div className="relative w-[400px] h-[450px] mx-auto">
                    <img
                        src={fondoCafe}
                        alt="Fondo Boxxha"
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
        </div>
    );
};

export default InicioView;