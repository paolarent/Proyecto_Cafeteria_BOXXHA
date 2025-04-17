import React, { useState } from "react";
import NavBar from "../components/NavBar"
import { useNavigate } from "react-router-dom";

const MenuBebidasFriasView = () => {
    return (
        <div className="min-h-screen flex flex-col ">
            <header className="sticky top-0 z-50">
                <NavBar />
            </header>

            <main className="flex flex-1 bg-[#B0CEAC]">
            <section className="w-full flex flex-col items-center pt-5 space-y-10">
                <h2 className="font-Montserrat font-regular text-5xl text-center text-[#34251d]">
                - Bebidas <span className="font-bold">Frias</span> -
                </h2>
                <div className="grid grid-cols-4 gap-10 justify-items-center w-full px-8">
                
                </div>
            </section>
            </main>

        </div>
    );
};

export default MenuBebidasFriasView;