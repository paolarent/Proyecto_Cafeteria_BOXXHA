import icon_usuario from "../assets/Iconos/usuario.png";
import { useState } from "react";

// Ruta /admin_inicio
const Admin_Inicio = () => {
    const[Accion, setAccion] = useState('agregarProd', );
    const Usuario = "Jorge"
    return(
    // Fondo Cafe
    <div className="flex flex-col h-full w-full bg-[#947666]">
        <main className="flex flex-row gap-10 p-8">
            {/*Sección izquierda de las herramientas */}
            <div className="flex flex-col gap-2 w-1/4 h-screen items-center shadow-xl rounded-2xl bg-white p-8 ">
                <div className="flex flex-row p-6 gap-2 items-center">
                    <img
                        src={icon_usuario}
                        className="w-10 h-10"
                    />
                    <p className="font-Montserrat font-bold text-xl text-[#34251d]"> {Usuario} </p>  
                </div>

                <div className="font-Montserrat flex flex-col w-full h-full items-left shadow-2xl justify-left text-left gap-4 px-4 pl-6 pt-4">
                    <h2 className="font-semibold text-2xl  text-[#34251d]"> Herramientas</h2>
                    <div>   
                        <h2 className=" w-full font-semibold text-xl text-[#34251d]">Productos</h2>  
                        <button className="text-left w-full transition-transform duration-300 hover:scale-105 hover:bg-[#f2ddc9] pt-1"> Agregar producto</button>
                        <button className="text-left w-full transition-transform duration-300 hover:scale-105 hover:bg-[#f2ddc9] pt-1"> Editar producto</button>
                        <button className="text-left w-full transition-transform duration-300 hover:scale-105 hover:bg-[#f2ddc9] pt-1"> Eliminar producto</button>
                    </div>
                    <div className="flex flex-col  w-full items-left justify-left text-left gap-1">
                        <h2 className="font-Montserrat w-full font-semibold text-xl text-[#34251d]">Empleados</h2>  
                        <button className="text-left w-full transition-transform duration-300 hover:scale-105 hover:bg-[#f2ddc9] pt-1"> Agregar Empleado</button>
                        <button className="text-left w-full transition-transform duration-300 hover:scale-105 hover:bg-[#f2ddc9] pt-1"> Editar Empleado</button>
                        <button className="text-left w-full transition-transform duration-300 hover:scale-105 hover:bg-[#f2ddc9] pt-1"> Eliminar Empleado</button>
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