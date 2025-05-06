import icon_usuario from "../assets/Iconos/usuario.png";
import { useState } from "react";

// Ruta /admin_inicio
const Admin_Inicio = () => {
    const[Accion, setAccion] = useState('agregarProd', );
    const Usuario = "Jorge"
    return(
    // Fondo Cafe
    <div className="flex flex-col h-full w-full bg-[#947666] opacity-95">
        <main className="flex flex-row gap-10 p-10">
            {/*Sección izquierda de las herramientas */}
            <div className="flex flex-col gap-2 w-1/4 h-screen  items-left ">
                <div className="flex flex-row p-6 gap-2 bg-white shadow-md items-center">
                    <img
                        src={icon_usuario}
                        className="w-12 h-12 p-1 rounded-full border border-gray-200"
                    />
                    <p className="font-Montserrat font-bold text-xl text-[#34251d] "> {Usuario} </p>  
                </div>
                
                {/*Contenedor de las Opciones*/}
                <div className="font-Montserrat flex flex-col p-4 w-full h-full items-left shadow-2xl bg-white justify-left text-left gap-4 ">
                    {/*Boton Dashboard */}
                    <div className="flex flex-row items-left gap-2 shadow-md p-4 bg-white hover:bg-[#a3968c] group focus-within:bg-[#a3968c] focus-within:border-l-4 focus-within:border-l-[#311808] border-l-4 border-l-transparent">
                        <div className="w-10 h-10 bg-gray-500"></div>
                        <button className="w-full h-full text-left font-bold text-[#34251d]"> Dashboard </button>
                    </div>

                    {/*Boton Herramientas */}
                    <div className="flex flex-row items-left gap-2 shadow-md p-4 bg-white hover:bg-[#a3968c] group focus-within:bg-[#a3968c] focus-within:border-l-4 focus-within:border-l-[#311808] border-l-4 border-l-transparent">
                        <div className="w-10 h-10 bg-gray-500"></div>
                        <button className="w-full h-full text-left font-bold text-[#34251d]"> Productos </button>
                    </div>
                     
                    {/*Boton clientes para checar nuestro clientes */}
                    <div className="flex flex-row items-left gap-2 shadow-md p-4 bg-white hover:bg-[#a3968c] group focus-within:bg-[#a3968c] focus-within:border-l-4 focus-within:border-l-[#311808] border-l-4 border-l-transparent">
                        <div className="w-10 h-10 bg-gray-500"></div>
                        <button className="w-full h-full text-left font-bold text-[#34251d]"> Clientes </button>
                    </div>
                </div>
                
                
            </div>
            
            {/*Sección derecha, se encontrara los form*/}
            <div className="flex flex-col w-3/4 h-screen items-center shadow-xl rounded-2xl bg-white p-4 p-6 ">

            </div>

        </main>
    </div>
    );
};

export default Admin_Inicio;