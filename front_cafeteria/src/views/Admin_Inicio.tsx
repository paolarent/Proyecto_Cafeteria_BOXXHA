import icon_usuario from "../assets/Iconos/usuario.png";
import { useState } from "react";

const Admin_Inicio = () => {
    const[Accion, setAccion] = useState('agregarProd', );
    return(
    <div className="flex flex-col h-full w-full bg-[#947666]">
        <header className="flex flex-col">
            <div>

            </div>
        </header>

        <main className="flex flex-row gap-10 p-8">
            <div className="flex flex-col gap-2 w-1/4 h-screen items-center shadow-xl rounded-2xl bg-white p-8 ">
                <img
                    src={icon_usuario}
                    className="w-20 h-20"
                />
                <p className="font-Montserrat font-bold text-xl text-[#34251d]"> Bienvenido Administrador </p>
                <div className="flex flex-col w-full items-left justify-left text-left gap-1 px-4 pl-6">
                    <h2 className="font-Montserrat w-full font-semibold text-xl border-black border-b-2 text-[#34251d]">Productos</h2>  
                    <button className="text-left w-full transition-transform duration-300 hover:scale-105 hover:bg-[#f2ddc9] pt-1"> Agregar producto</button>
                    <button className="text-left w-full transition-transform duration-300 hover:scale-105 hover:bg-[#f2ddc9] pt-1"> Editar producto</button>
                    <button className="text-left w-full transition-transform duration-300 hover:scale-105 hover:bg-[#f2ddc9] pt-1"> Eliminar producto</button>
                </div>
                <div className="flex flex-col  w-full items-left justify-left text-left gap-1 px-4 pl-6">
                    <h2 className="font-Montserrat w-full font-semibold text-xl border-black border-b-2 text-[#34251d]">Empleados</h2>  
                    <button className="text-left w-full transition-transform duration-300 hover:scale-105 hover:bg-[#f2ddc9] pt-1"> Agregar Empleado</button>
                    <button className="text-left w-full transition-transform duration-300 hover:scale-105 hover:bg-[#f2ddc9] pt-1"> Editar Empleado</button>
                    <button className="text-left w-full transition-transform duration-300 hover:scale-105 hover:bg-[#f2ddc9] pt-1"> Eliminar Empleado</button>
                </div>
                
            </div>
            
            <div className="flex flex-col w-3/4 h-screen items-center shadow-xl rounded-2xl bg-white p-4 p-6 ">
            </div>

        </main>
    </div>
    );
};

export default Admin_Inicio;