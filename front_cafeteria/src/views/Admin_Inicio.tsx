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
            <div className="flex flex-col gap-2 w-1/4 h-screen  items-left rounded-2xl ">
                <div className="flex flex-row p-6 gap-2 bg-white shadow-md rounded-2xl items-center">
                    <img
                        src={icon_usuario}
                        className="w-10 h-10"
                    />
                    <p className="font-Montserrat font-bold text-xl text-[#34251d]"> {Usuario} </p>  
                </div>
                
                {/*Contenedor de las Opciones*/}
                <div className="font-Montserrat flex flex-col w-full h-full items-left shadow-2xl bg-white rounded-2xl justify-left text-left gap-4 p-4">
                    {/*Boton Dashboard */}
                    <div className="flex flex-row items-left py-4 rounded-xl shadow-xl bg-white hover:bg-gray-200">
                        <div className="w-10 h-10"></div>
                        <button className="font-bold text-[#34251d]"> Dashboard </button>
                    </div>

                    {/*Boton Herramientas */}
                    <div className="flex flex-row items-left py-4 bg-white hover:bg-gray-200">
                        <div className="w-10 h-10"></div>
                        <button className="font-bold text-[#34251d]"> Herramientas </button>
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