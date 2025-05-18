import React from "react";
import { useState } from "react";
import NavBar from "../components/NavBar";
import { useNavigate } from "react-router-dom";
import { useParams } from "react-router-dom";
import fondoCafe from "../assets/fondo_cafe_mejorada.jpg";

import  saboresPorTipoYNombreProducto  from "../data/saboresPorTipo"; //Importamos los datos de sabores
import  imagenesSabores  from "../data/imagenesSabores"; //Importamos los datos de imagenes

import { getSabor } from "../services/productService"; 
import { usePedido } from '../contexts/PedidoContext';
import ModalCarrito from "../components/Carrito";

const SaboresProducto: React.FC = () => {
    const { tipo, nombre } = useParams(); //Usamos useParams para obtener los parámetros de la URL de la ruta
    const navigate = useNavigate();
    const {index} = useParams();
    const i = Number(index);
    const { actualizarPedido } = usePedido(); //Para capturar el pedido
    const [showModalCarrito, setShowModalCarrito] = useState(false);    //para controlar el modal que es el carrito

    //Verificamos si los valores de tipo y nombre existen en los datos
    const sabores = saboresPorTipoYNombreProducto[tipo as string]?.[nombre?.toLowerCase() || ""] || [];

    const handleSaborClick = async (tipo: string, nombre: string, sabor?: string) => {
        let tipoLower = tipo.toLowerCase();
        let nombreLower = nombre.toLowerCase();
        let saborFinal = sabor;
    
        //El plan es que asigne sabor Regular a los productos q no tienen sabor, asigna regular
        if (!saborFinal) {
            if (
                (tipoLower === "caliente" && (nombreLower === "americano" || nombreLower === "cappuccino" || nombreLower === "chocolate")) ||
                (tipoLower === "frio" && nombreLower === "taro")
                //(tipoLower === "frappe" && nombreLower === "frappé") //los frappes si tienen sabor pero el tipo y el nombre viene siendo lo mismo
            ) {
                saborFinal = "Regular";
            }
        }

        try {
            if (tipoLower === "caliente") {
                tipoLower = "bebcaliente"; 
            } else if (tipoLower === "frio") {
                tipoLower = "bebfria"; 
            }

            const response = await getSabor(tipoLower, nombreLower, saborFinal || "Regular");
            console.log("Respuesta de la API:", response); // Verifica la respuesta de la API en consola
            const key = Object.keys(response)[0];  // Obtiene la primera clave (ej. "id_bebfria")
            const idProducto = response[key];  // Accede al valor asociado a esa clave
            console.log("ID del producto con prefijo:", idProducto);
            const sabor = response.sabor; // Accede al sabor del producto
            console.log("Sabor del producto:", sabor); // Verifica el sabor en consola
            const precio = response.precio_base; // Accede al precio del producto
            console.log("Precio del producto:", precio); // Verifica el precio en consola

            // Guarda el ID en el contexto
            if (tipoLower === "postre") {
                actualizarPedido(i,{ id_postre: idProducto , sabor: sabor, id_tamano: 3, total: precio}); //id_tamano = 3 pq es pza
            } else if (nombreLower === "espresso") {
                actualizarPedido(i,{ id_bebida: idProducto, sabor: sabor , id_tamano: 4, total: precio}); //id_tamano = 4 pq es espresso
            }
            else {
                actualizarPedido(i,{ id_bebida: idProducto, sabor: sabor, total: precio}); 
            }
    
        } catch (error) {
            console.error("Error al obtener el ID del producto:", error);
            // Podrías mostrar un mensaje de error aquí si quieres
        }
        
        //Redirecciones especiales dependiendo de lo que sigue de sabores
        if (nombreLower === "espresso" && sabor === "Cortado") {
            navigate(`/tipo_leche/${i}`); // espresso cortado va a leche
        } else if (nombreLower === "espresso") {
            setShowModalCarrito(true); //cualquier otro espresso van al carrito
        } else if (tipoLower === "postre") {
            setShowModalCarrito(true);  //los postres tambien van al carrito
        } else {
            navigate(`/pedido_tamano/${i}`);
        }
        
    };
    

    if (sabores.length === 0) {
        return <p>No se encontraron sabores disponibles para {nombre} en tipo {tipo}.</p>;
    }

    return (
        <div className="min-h-screen flex flex-col">    
            <header className="sticky top-0 z-50">  {/* hace que el header quede fijo en la parte superior mientras se hace scroll */}
                <NavBar />
            </header>

            <main className="flex flex-1">
            <section className="relative w-full flex flex-col items-center space-y-10 pb-10 overflow-hidden" 
                    style={{
                            backgroundImage: `url(${fondoCafe})`,
                            backgroundSize: "cover", 
                            backgroundPosition: "bottom",
                            backgroundRepeat: "no-repeat",
                        }}
                    >
                    {/* Capa de color con algo de opacidad encima, opcional */}
                    <div
                        className="absolute inset-0"
                        style={{ backgroundColor: "#f8e9df", opacity: 0.60 }}
                    />

                    {/*Titulo variable dependiendo de los props que recibe de las vistas*/}
                    <div className="relative z-10 border border-black border-2 rounded-2xl">
                        <h2 className="font-Montserrat font-regular text-5xl text-center text-[#34251d] bg-[#ffffff] px-6 py-3 rounded-2xl shadow-md">
                            Sabores de <span className="font-medium">{nombre?.toUpperCase()}</span> {/*({tipo})*/}
                        </h2>
                    </div> 

                    <div className="flex flex-wrap justify-center gap-10 w-full px-8">
                        {sabores.map((sabor) => (
                            <div 
                                //LLAMAR A LA FUNCION PARA REDIRIGIR DEPENDIENDO DEL CONTEXTO
                                onClick={() => handleSaborClick(tipo!, nombre!, sabor)}
                                className="relative z-10 bg-[#ffffff] px-5 py-5 rounded-2xl border border-black border-2 transition-transform duration-300 hover:scale-105">
                                <div className="group flex flex-col items-center w-[200px] h-[250px]">
                                    <img 
                                        src={imagenesSabores[tipo as string]?.[nombre?.toLowerCase() || ""]?.[sabor] || ""}
                                        alt={sabor}
                                        className="rounded-[20px] w-[160px] h-[140px] mt-6 mb-6" 
                                    />
                                    <button 
                                        className="w-full font-Montserrat font-bold bg-[#5C4848] text-[#ffffff] py-2 px-4 rounded shadow-md text-xl opacity-80 
                                        group-hover:bg-[#B0CEAC] group-hover:text-[#000000] rounded-[10px]">
                                        {sabor}
                                    </button>
                                </div>
                            
                            </div>
                        ))}
                    </div>
                </section>
            </main>

            {showModalCarrito && (
                <ModalCarrito 
                    isOpen={showModalCarrito} 
                    onClose={() => setShowModalCarrito(false)} 
                />
            )}
        </div>
    );
};

export default SaboresProducto;

