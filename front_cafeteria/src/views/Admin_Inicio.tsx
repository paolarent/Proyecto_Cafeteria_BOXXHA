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
    const Usuario = rawUser?.replace(/^"(.*)"$/, '$1'); // Retirar la comillas del usuario
    const Ventas = "10,574.00";
    const Pedidos = 123;
    const totalProductos = 234;
    return(
    // Fondo Cafe
    <div className="flex flex-col h-full w-full bg-[#9C6644] opacity-95">
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
                
                
                {/*Contenedor de las Opciones aplicando interpolación de clases*/}
                <div className="font-Montserrat flex flex-col p-4 w-full h-full items-left shadow-2xl bg-white justify-left text-left gap-4 ">
                    {/*Boton Dashboard */}
                    { Opcion === 'Dashboard' ? (
                        // Elemento al ser seleccionado
                        <div className="flex flex-row items-left gap-2 p-4 shadow-md bg-[#c49475] border-l-4 border-l-[#814721]">
                            <div className="w-10 h-10 bg-gray-500"></div>
                            <button
                            onClick={() => setOpcion('Dashboard')} 
                            className="w-full h-full text-left font-bold text-[#34251d]"> Dashboard 
                            </button>
                        </div>
                    ) : (
                        // Elemento al no ser seleccionado
                        <div className="flex flex-row items-left gap-2 p-4 shadow-md bg-white hover:bg-[#c49475] group focus-within:bg-[#a3968c] focus-within:border-l-4 focus-within:border-l-[#814721] border-l-4 border-l-transparent">
                            <div className="w-10 h-10 bg-gray-500"></div>
                            <button
                            onClick={() => setOpcion('Dashboard')} 
                            className="w-full h-full text-left font-bold text-[#34251d]"> Dashboard 
                            </button>
                        </div>
                    )}
                    

                    {/*Boton Productos */}
                    { Opcion === 'Productos' ? (
                        // Elemento al ser seleccionado     
                        <div className="flex flex-row items-left gap-2 p-4 shadow-md bg-[#c49475] border-l-4 border-l-[#814721]">
                            <div className="w-10 h-10 bg-gray-500"></div>
                            <button
                            onClick={() => setOpcion('Productos')} 
                            className="w-full h-full text-left font-bold text-[#34251d]"> Productos 
                            </button>
                        </div>
                    ) : (
                        // Elemento al no ser seleccionado
                        <div className="flex flex-row items-left gap-2 p-4 shadow-md bg-white hover:bg-[#c49475] group focus-within:bg-[#a3968c] focus-within:border-l-4 focus-within:border-l-[#814721] border-l-4 border-l-transparent">
                            <div className="w-10 h-10 bg-gray-500"></div>
                            <button
                            onClick={() => setOpcion('Productos')} 
                            className="w-full h-full text-left font-bold text-[#34251d]"> Productos 
                            </button>
                        </div>
                    )}
                     
                    {/*Boton clientes para checar nuestro clientes */}
                    { Opcion === 'Clientes' ? (
                        // Elemento al ser seleccionado
                        <div className="flex flex-row items-left gap-2 p-4 shadow-md bg-[#c49475] border-l-[#814721] border-l-4 ">
                            <div className="w-10 h-10 bg-gray-500"></div>
                            <button
                            onClick={() => setOpcion('Clientes')} 
                            className="w-full h-full text-left font-bold text-[#34251d]"> Clientes 
                            </button>
                        </div>
                    ) : (
                        // Elemento al no ser seleccionado      
                        <div className="flex flex-row items-left gap-2 p-4 shadow-md bg-white hover:bg-[#c49475] group focus-within:bg-[#a3968c] focus-within:border-l-4 focus-within:border-l-[#814721] border-l-4 border-l-transparent">
                            <div className="w-10 h-10 bg-gray-500"></div>
                            <button
                            onClick={() => setOpcion('Clientes')} 
                            className="w-full h-full text-left font-bold text-[#34251d]"> Clientes 
                            </button>
                        </div>
                    )}
                </div>
                
                
            </div>
            
            {/*Sección derecha, se encontrarán los form*/}
            <div className="font-Montserrat flex flex-col w-3/4 h-screen items-center shadow-xl bg-white p-8 ">
                { Opcion === 'Dashboard' && (
                    <div className="flex flex-col w-full h-full">
                        <div className="flex flex-col w-full h-1/3 gap-6"> 
                            <div className="flex flex-col">
                                <p className="font-bold text-3xl text-[#34251d]">Dashboard</p>
                            </div>
                            <div className="flex flex-col gap-1">
                                <p className="font-bold text-md text-[#34251d] opacity-90"> En las ultimas 24 horas </p>
                                <div className="flex flex-row gap-2">
                                    {/*elemento con ventas totales */}
                                    <div className="flex flex-row w-1/3 h-auto shadow-xl bg-[#7F5539] rounded-2xl text-left p-6">
                                        <div className="flex flex-row min-w-full w-1/2 h-full gap-4 font-semibold">
                                            <div className="flex flex-col text-left gap-1">
                                                <p className="text-md text-white"> Total ventas </p>
                                                <p className="text-2xl text-white font-bold"> ${Ventas} </p>
                                            </div> 

                                        </div>                           
                                    </div>


                                    <div className="flex flex-row w-1/3 h-auto shadow-xl bg-[#7F5539] rounded-2xl text-left p-6">
                                        <div className="flex flex-row min-w-full w-1/2 h-full gap-4 font-semibold">
                                            <div className="flex flex-col text-left gap-1">
                                                <p className="text-md text-white"> Total pedidos </p>
                                                <p className="text-2xl text-white font-bold"> {Pedidos} </p>
                                            </div> 

                                        </div>                           
                                    </div>

                                    <div className="flex flex-row w-1/3 h-auto shadow-xl bg-[#7F5539] rounded-2xl text-left p-6">
                                        <div className="flex flex-row min-w-full w-1/2 h-full gap-4 font-semibold">
                                            <div className="flex flex-col text-left gap-1">
                                                <p className="text-md text-white"> Productos vendidos </p>
                                                <p className="text-2xl text-white font-bold"> {totalProductos} </p>
                                            </div> 

                                        </div>                           
                                    </div>
                                </div>    
                            </div>{/*Fin de la fila de datos */}
                        </div>
                        <div className="flex flex-col min-w-full h-full gap-2">
                            <p className="font-bold text-md text-[#34251d] opacity-90"> Ultimas ordenes </p>
                            <div className="flex flex-col h-2/3 min-w-full shadow-xl bg-white">

                            </div>
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