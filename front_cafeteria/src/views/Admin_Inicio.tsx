import icon_usuario from "../assets/Iconos/usuario.png";
import { useState } from "react";

    /*posibles cambios.-
    Tamaño de los botones
    Hora y fecha
    Dashboard
        - Producto mas vendido
        - Total historico pedidos
        - Grafico de pastel, tipo de bebida producto / ventas
    Productos
        - CRUD de productos
    Clientes
        - Acceso a la información de clientes
        - Listado clientes con más pedidos
    Logout
    Volver al inicio */



// Ruta /admin_inicio
const Admin_Inicio = () => {
    const[Opcion, setOpcion] = useState('');
    const rawUser = localStorage.getItem("usuario");
    const Usuario = rawUser?.replace(/^"(.*)"$/, '$1');
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
                    { Opcion === 'Dashboard' ? (
                        <div className="flex flex-row items-left gap-2 p-4 shadow-md bg-white bg-[#a3968c] border-l-4 border-l-[#311808]">
                            <div className="w-10 h-10 bg-gray-500"></div>
                            <button
                            onClick={() => setOpcion('Dashboard')} 
                            className="w-full h-full text-left font-bold text-[#34251d]"> Dashboard 
                            </button>
                        </div>
                    ) : (
                        <div className="flex flex-row items-left gap-2 p-4 shadow-md bg-white hover:bg-[#a3968c] group focus-within:bg-[#a3968c] focus-within:border-l-4 focus-within:border-l-[#311808] border-l-4 border-l-transparent">
                            <div className="w-10 h-10 bg-gray-500"></div>
                            <button
                            onClick={() => setOpcion('Dashboard')} 
                            className="w-full h-full text-left font-bold text-[#34251d]"> Dashboard 
                            </button>
                        </div>
                    )}
                    

                    {/*Boton Productos */}
                    { Opcion === 'Productos' ? (
                        <div className="flex flex-row items-left gap-2 p-4 shadow-md bg-white bg-[#a3968c] border-l-4 border-l-[#311808]">
                            <div className="w-10 h-10 bg-gray-500"></div>
                            <button
                            onClick={() => setOpcion('Productos')} 
                            className="w-full h-full text-left font-bold text-[#34251d]"> Productos 
                            </button>
                        </div>
                    ) : (
                        <div className="flex flex-row items-left gap-2 p-4 shadow-md bg-white hover:bg-[#a3968c] group focus-within:bg-[#a3968c] focus-within:border-l-4 focus-within:border-l-[#311808] border-l-4 border-l-transparent">
                            <div className="w-10 h-10 bg-gray-500"></div>
                            <button
                            onClick={() => setOpcion('Productos')} 
                            className="w-full h-full text-left font-bold text-[#34251d]"> Productos 
                            </button>
                        </div>
                    )}
                     
                    {/*Boton clientes para checar nuestro clientes */}
                    { Opcion === 'Clientes' ? (
                        <div className="flex flex-row items-left gap-2 p-4 shadow-md bg-white bg-[#a3968c] border-l-4 border-l-[#311808]">
                            <div className="w-10 h-10 bg-gray-500"></div>
                            <button
                            onClick={() => setOpcion('Clientes')} 
                            className="w-full h-full text-left font-bold text-[#34251d]"> Clientes 
                            </button>
                        </div>
                    ) : (
                        <div className="flex flex-row items-left gap-2 p-4 shadow-md bg-white hover:bg-[#a3968c] group focus-within:bg-[#a3968c] focus-within:border-l-4 focus-within:border-l-[#311808] border-l-4 border-l-transparent">
                            <div className="w-10 h-10 bg-gray-500"></div>
                            <button
                            onClick={() => setOpcion('Clientes')} 
                            className="w-full h-full text-left font-bold text-[#34251d]"> Clientes 
                            </button>
                        </div>
                    )}
                </div>
                
                
            </div>
            
            {/*Sección derecha, se encontrara los form*/}
            <div className="flex flex-col w-3/4 h-screen items-center shadow-xl bg-white p-8 ">
                { Opcion === 'Dashboard' && (
                    <div className="flex flex-row w-full h-1/3"> 
                        <div className="w-1/2 shadow-xl"> 
                        </div>
                        <div className="w-1/2 shadow-xl"> 
                        </div>                              
                    </div>
                )}

                {Opcion === 'Productos' && (
                    <div className="font-Montserrat flex flex-col w-full h-full shadow-xl">
                        <div className="w-full h-10 bg-gray-500 p-2 font-bold text-white text-center ">
                            <p>Menu - Productos</p>
                        </div>
                        {/*Tipo navbar */}
                        <header className="flex flex-row w-full h-auto bg-gray-300">
                            <div className="w-1/2 h-auto text-left">
                                <button className="w-1/4 h-10 bg-gray-400 font-bold text-white">
                                    Nuevo
                                </button>
                                <button className="w-1/4 h-10 bg-gray-400 font-bold text-white">
                                    Editar
                                </button>
                                <button className="w-1/4 h-10 bg-gray-400 font-bold text-white">
                                    Eliminar
                                </button>
                                <button className="w-1/4 h-10 bg-gray-400 font-bold text-white">
                                    Consultar
                                </button>
                            </div>
                            <div className="w-1/2 h-auto text-right">
                                <button className="w-1/4 h-10 bg-gray-400 font-bold text-white">
                                    Guardar
                                </button>
                                <button className="w-1/4 h-10 bg-gray-400 font-bold text-white">
                                    Cancelar
                                </button>
                            </div>
                        </header>    
                    </div>
                )}

                {Opcion === 'Clientes' && (
                    <div className="flex flex-col w-full h-full bg-red-200">

                    </div>
                )}
            </div>

        </main>
    </div>
    );
};

export default Admin_Inicio;