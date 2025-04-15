import React, { useState } from "react";
import fondoCafe from "../assets/fondo_cafe_mejorada.jpg";
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

            </main>
        </div>
    );
};

export default InicioView;