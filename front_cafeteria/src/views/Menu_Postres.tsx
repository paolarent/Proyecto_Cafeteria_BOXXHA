import React, { useState } from "react";
import NavBar from "../components/NavBar"
import { useNavigate } from "react-router-dom";

const MenuPostresView = () => {
    return (
        <div className="min-h-screen flex flex-col ">
            <header className="sticky top-0 z-50">
                <NavBar />
            </header>

            <main className="flex flex-1 bg-[#B0CEAC]">
                <section className="w-full flex flex-col items-center pt-5 space-y-10 pt-20">
                    <h2 className="font-Montserrat font-regular text-5xl text-center text-[#34251d]">
                    - Nuestros <span className="font-bold">Postres</span> -
                    </h2>
                    <div className="flex flex-wrap justify-center gap-10 w-full px-8">
                        {/* Roles */}
                        <div className="group flex flex-col items-center transition-transform duration-300 hover:scale-105">
                            <img className="bg-[#D9D9D9] rounded-[20px] w-[250px] h-[250px] mb-2" />
                            <button className="w-full font-Montserrat font-bold bg-[#5C4848] text-[#ffffff] py-2 px-4 rounded shadow-md text-xl opacity-80 
                                group-hover:bg-[#f0eceb] group-hover:text-[#38241c] rounded-[10px]">
                                ROLES
                            </button>
                        </div>

                        {/* Galletas */}
                        <div className="group flex flex-col items-center transition-transform duration-300 hover:scale-105">
                            <img className="bg-[#D9D9D9] rounded-[20px] w-[250px] h-[250px] mb-2" />
                            <button className="w-full font-Montserrat font-bold bg-[#5C4848] text-[#ffffff] py-2 px-4 rounded shadow-md text-xl opacity-80 
                                group-hover:bg-[#f0eceb] group-hover:text-[#38241c] rounded-[10px]">
                                GALLETAS
                            </button>
                        </div>

                        {/* Pastel */}
                        <div className="group flex flex-col items-center transition-transform duration-300 hover:scale-105">
                            <img className="bg-[#D9D9D9] rounded-[20px] w-[250px] h-[250px] mb-2" />
                            <button className="w-full font-Montserrat font-bold bg-[#5C4848] text-[#ffffff] py-2 px-4 rounded shadow-md text-xl opacity-80 
                                group-hover:bg-[#f0eceb] group-hover:text-[#38241c] rounded-[10px]">
                                PASTELES
                            </button>
                        </div>

                        {/* Pays */}
                        <div className="group flex flex-col items-center transition-transform duration-300 hover:scale-105">
                            <img className="bg-[#D9D9D9] rounded-[20px] w-[250px] h-[250px] mb-2" />
                            <button className="w-full font-Montserrat font-bold bg-[#5C4848] text-[#ffffff] py-2 px-4 rounded shadow-md text-xl opacity-80 
                                group-hover:bg-[#f0eceb] group-hover:text-[#38241c] rounded-[10px]">
                                PAYS
                            </button>
                        </div>


                    </div>
                </section>
            </main>

        </div>
    );
};

export default MenuPostresView;