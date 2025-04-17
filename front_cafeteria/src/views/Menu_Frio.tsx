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
                <section className="w-full flex flex-col items-center pt-5 space-y-10 pb-10">
                    <h2 className="font-Montserrat font-regular text-5xl text-center text-[#34251d]">
                    - Bebidas <span className="font-bold">Frias</span> -
                    </h2>
                    <div className="flex flex-wrap justify-center gap-10 w-full px-8">
                        {/* 7 secciones, (7 categorias de bebida fria) */}

                        {/* LATTE */}
                        <div className="group flex flex-col items-center transition-transform duration-300 hover:scale-105">
                            <img className="bg-[#D9D9D9] rounded-[20px] w-[250px] h-[250px] mb-2" />
                            <button className="w-full font-Montserrat font-bold bg-[#5C4848] text-[#ffffff] py-2 px-4 rounded shadow-md text-xl opacity-80 
                                group-hover:bg-[#f0eceb] group-hover:text-[#38241c] rounded-[10px]">
                                LATTE
                            </button>
                        </div>

                        {/* FRAPPÉ */}
                        <div className="group flex flex-col items-center transition-transform duration-300 hover:scale-105">
                            <img className="bg-[#D9D9D9] rounded-[20px] w-[250px] h-[250px] mb-2" />
                            <button className="w-full font-Montserrat font-bold bg-[#5C4848] text-[#ffffff] py-2 px-4 rounded shadow-md text-xl opacity-80 
                                group-hover:bg-[#f0eceb] group-hover:text-[#38241c] rounded-[10px]">
                                FRAPPÉ
                            </button>
                        </div>

                        {/* AMERICANO */}
                        <div className="group flex flex-col items-center transition-transform duration-300 hover:scale-105">
                            <img className="bg-[#D9D9D9] rounded-[20px] w-[250px] h-[250px] mb-2" />
                            <button className="w-full font-Montserrat font-bold bg-[#5C4848] text-[#ffffff] py-2 px-4 rounded shadow-md text-xl opacity-80 
                                group-hover:bg-[#f0eceb] group-hover:text-[#38241c] rounded-[10px]">
                                AMERICANO
                            </button>
                        </div>
                    
                        {/* MATCHA */}
                        <div className="group flex flex-col items-center transition-transform duration-300 hover:scale-105">
                            <img className="bg-[#D9D9D9] rounded-[20px] w-[250px] h-[250px] mb-2" />
                            <button className="w-full font-Montserrat font-bold bg-[#5C4848] text-[#ffffff] py-2 px-4 rounded shadow-md text-xl opacity-80 
                                group-hover:bg-[#f0eceb] group-hover:text-[#38241c] rounded-[10px]">
                                MATCHA
                            </button>
                        </div>

                        {/* CHAI */}
                        <div className="group flex flex-col items-center transition-transform duration-300 hover:scale-105">
                            <img className="bg-[#D9D9D9] rounded-[20px] w-[250px] h-[250px] mb-2" />
                            <button className="w-full font-Montserrat font-bold bg-[#5C4848] text-[#ffffff] py-2 px-4 rounded shadow-md text-xl opacity-80 
                                group-hover:bg-[#f0eceb] group-hover:text-[#38241c] rounded-[10px]">
                                CHAI
                            </button>
                        </div>

                        {/* TÉ */}
                        <div className="group flex flex-col items-center transition-transform duration-300 hover:scale-105">
                            <img className="bg-[#D9D9D9] rounded-[20px] w-[250px] h-[250px] mb-2" />
                            <button className="w-full font-Montserrat font-bold bg-[#5C4848] text-[#ffffff] py-2 px-4 rounded shadow-md text-xl opacity-80 
                                group-hover:bg-[#f0eceb] group-hover:text-[#38241c] rounded-[10px]">
                                TÉ
                            </button>
                        </div>

                        {/* TARO */}
                        <div className="group flex flex-col items-center transition-transform duration-300 hover:scale-105">
                            <img className="bg-[#D9D9D9] rounded-[20px] w-[250px] h-[250px] mb-2" />
                            <button className="w-full font-Montserrat font-bold bg-[#5C4848] text-[#ffffff] py-2 px-4 rounded shadow-md text-xl opacity-80 
                                group-hover:bg-[#f0eceb] group-hover:text-[#38241c] rounded-[10px]">
                                TARO
                            </button>
                        </div>
                    </div>
                </section>
            </main>
        </div>
    );
};

export default MenuBebidasFriasView;