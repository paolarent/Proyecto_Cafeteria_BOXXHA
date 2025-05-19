import { getImagenCarrito } from "../data/imagenesCarrito";
import { usePedido } from '../contexts/PedidoContext'; 
import { Pedido } from "../contexts/PedidoContext";

type ProductoContenedor2Props = {
    nombre?: string;
    tipo?: string;
    sabor?: string;
    regular? : string;
    tamano?: string;
    leche?: string;
    id_bebida?: number;
    id_tamano?: number;
    id_leche?: number;
    extras?: { id: number; nombre: string; cantidad: number; precio: number }[];
    total: number;
};

const ProductoContenedor2: React.FC<ProductoContenedor2Props> = ({ nombre, tipo, sabor, regular, tamano, leche, id_bebida, id_tamano, id_leche, extras, total }) => {
    const tiposValidos = ['caliente', 'frio', 'frappe', 'postre'] as const;

    const tipoSeguro = tiposValidos.includes(tipo as any) ? tipo as Pedido['tipo'] : undefined;
    const { agregarPedido, eliminarUnaCoincidencia } = usePedido();

    const handleIncrementar= () => {
        const nuevoPedido: Pedido = {
            nombre,
            tipo: tipoSeguro,
            sabor,
            completo: true,
            total,
            id_bebida,
            id_tamano,
            id_leche,
            regular: regular === "Regular" ? true : regular === "Descafeinado" ? false : undefined,
            extras: extras?.map(extra => ({
            id: extra.id,
            cantidad: extra.cantidad,
            precio: extra.precio
            }))
        };

        agregarPedido(nuevoPedido);
    };

    const handleDecrementar = () => {
        const pedidoParcial: Partial<Pedido> = {
            nombre,
            tipo: tipoSeguro,
            sabor,
            total,
            id_bebida,
            id_tamano,
            id_leche,
            regular: regular === "Regular" ? true : regular === "Descafeinado" ? false : undefined,
            extras: extras?.map(extra => ({
                id: extra.id,
                cantidad: extra.cantidad,
                precio: extra.precio
            })), 
            completo: true
        };
        eliminarUnaCoincidencia(pedidoParcial);
    }

    return (
        <div className="flex flex-row w-full min-h-max bg-[#e1e1e2] justify-left gap-2 rounded-2xl p-4">
            {/*Contenedor de la imagen */}
            <div className="flex flex-col items-center w-30">
                
                {/* Imagen simulada */}
                <div className="w-28 h-28 bg-gray-600 rounded-2xl flex items-center justify-center m-2">
                    {/*<p className="text-white">Imagen</p>*/}
                    <img
                        src={getImagenCarrito(tipo, nombre)}
                        alt={nombre}
                        className="w-28 h-28 rounded-2xl object-cover m-2 border-2 border-black"
                    />
                </div>

                {/* Botones + - y cantidad */}
                <div className="m-2 flex items-center justify-center gap-2">
                    <button 
                        onClick={handleDecrementar}
                        className="w-10 h-10 rounded-3xl bg-white shadow-md border-2 border-black
                        hover:scale-105 transition-transform hover:bg-[#dfc3a8] duration-300"
                    >
                        <span className="font-Montserrat font-black text-3xl text-[#34251d]">-</span>
                    </button>

                    <div className="flex items-center justify-center w-10 h-10 bg-white rounded-2xl border-2 border-black px-4">
                        <span className="font-Montserrat font-semibold text-xl text-[#34251d]">1</span>
                    </div>

                    <button 
                        onClick={handleIncrementar}
                        className="w-10 h-10 rounded-3xl bg-white shadow-md border-2 border-black 
                        hover:scale-105 transition-transform hover:bg-[#B0CEAC] duration-300"
                    >
                        <span className="font-Montserrat font-black text-2xl text-[#34251d]">+</span>
                    </button>
                </div>

            </div>

            {/*Contenedor del detalle */}
            <div className="flex flex-col justify-between min-h-[200px] relative flex-grow">
                <p className="font-Montserrat font-bold text-md lg:text-lg text-left text-[#34251d]">{nombre?.toUpperCase()}</p>
                <p className="font-Montserrat font-regular text-xs lg:text-base text-left text-[#34251d]"> 
                    <span className="font-semibold">Tipo: </span>{capitalizarPrimeraLetra(tipo)}
                </p>
                <p className="font-Montserrat font-regular text-xs lg:text-base text-left text-[#34251d]"> 
                    <span className="font-semibold">Sabor: </span>{sabor}
                </p>

                {/*Condicionales para que solo se impriman los campos utilizados */}
                {regular !== "No definido" &&(
                    <p className="font-Montserrat font-regular text-xs lg:text-base text-left text-[#34251d]">
                    <span className="font-semibold">Grano: </span>{regular} 
                    </p>
                )}

                {tamano !== "No definido" &&(
                    <p className="font-Montserrat font-regular text-xs lg:text-base text-left text-[#34251d]">
                    <span className="font-semibold">Tamaño: </span>{formatearTamano(tamano)} 
                    </p>
                )}
                
                {leche !== "No definido" &&(
                    <p className="font-Montserrat font-regular text-xs lg:text-base text-left text-[#34251d]">
                    <span className="font-semibold">Leche: </span>{leche}
                    </p>
                )}
                
                {extras && extras.length > 0  &&(
                    <>
                    <p className="font-Montserrat font-semibold text-sm lg:text-base text-left text-[#34251d]">Extras</p>
                    <ul>
                        {extras?.map((extra, index) => (
                            <li className="font-Montserrat font-regular text-xs lg:text-base text-left text-[#34251d]" key={index}>
                                <span>+ {extra.cantidad} {extra.nombre}</span>
                                <span> ${(extra.precio * extra.cantidad).toFixed(2)}</span>
                            </li>
                        ))}
                    </ul>
                    </>
                )}

                {/* Total del producto */} 
                <div className="flex justify-end pr-4 pt-2">
                    <p className="font-Montserrat font-bold text-md lg:text-lg text-[#34251d]">
                        Total: ${total.toFixed(2)}
                    </p>
                </div>
                
            </div>
        </div>
    );
};

function capitalizarPrimeraLetra(palabra?: string): string {
    if (!palabra) return "";
    return palabra.charAt(0).toUpperCase() + palabra.slice(1).toLowerCase();
}

const formatearTamano = (tamano: any) => {
    const match = tamano.match(/([a-zA-Z]+)(\d+)/i);
    if (!match) return tamano; // Return original if no match
    const [, unidad, numero] = match;
    return `${numero} ${unidad.toUpperCase()}`; // Return formatted string
};

export default ProductoContenedor2;