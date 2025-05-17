
type ProductoContenedorProps = {
    nombre?: string;
    tipo?: string;
    sabor?: string;
    regular? : string;
    tamano?: string;
    leche?: string;
    precioBase?: number;
    extras?: { id: number; nombre: string; cantidad: number }[];
};

const ProductoContenedor: React.FC<ProductoContenedorProps> = ({ nombre, tipo, sabor, regular, tamano, leche, extras, precioBase }) => {
    return (
        <div className="w-full bg-white text-[#1f1f1f] border-y-4 border-dashed border-[#a3a3a3] px-4 py-2 font-medium text-sm">

            {/*Contenedor de la imagen 
            <div className="flex flex-col pr-2">
                <div className="flex flex-col w-40 h-40 text-center items-center bg-gray-600 rounded-2xl">
                    <p>Imagen</p>
                </div>
            </div>*/}
            {/*Contenedor del detalle */}
            <div className="flex flex-col">
                <p className="font-Montserrat font-bold text-2xl lg:text-3xl text-left text-[#34251d] pb-2">{nombre?.toUpperCase()}</p>
                <p className="font-Montserrat font-regular text-lg lg:text-xl text-left text-[#34251d] pb-2"> 
                    <span className="font-bold">Tipo: </span>{tipo?.toUpperCase()}
                </p>
                <p className="font-Montserrat font-regular text-lg lg:text-xl text-left text-[#34251d] pb-2"> 
                    <span className="font-bold">Sabor: </span>{sabor}
                </p>

                {/*Condicionales para que solo se impriman los campos utilizados */}
                {regular !== "No definido" &&(
                    <p className="font-Montserrat font-regular text-lg lg:text-xl text-left text-[#34251d] pb-2">
                    <span className="font-bold">Grano: </span>{regular} 
                    </p>
                )}

                {tamano !== "No definido" &&(
                    <p className="font-Montserrat font-regular text-lg lg:text-xl text-left text-[#34251d] pb-2">
                    <span className="font-bold">Tamaño: </span>{formatearTamano(tamano)} 
                    </p>
                )}
                
                {leche !== "No definido" &&(
                    <p className="font-Montserrat font-regular text-lg lg:text-xl text-left text-[#34251d] pb-2">
                    <span className="font-bold">Leche: </span>{leche}
                    </p>
                )}
                
                {extras && extras.length > 0  &&(
                    <>
                    <p className="font-Montserrat font-bold text-lg lg:text-xl text-left text-[#34251d] pb-2">Extras</p>
                    <ul>
                        {extras?.map((extra, index) => (
                            <li className="font-Montserrat font-regular text-lg lg:text-xl text-left text-[#34251d] pb-2" key={index}>
                                + {extra.cantidad} {extra.nombre}
                            </li>
                        ))}
                    </ul>
                    </>
                )}

                {/* Total del producto */} 
                <div className="flex justify-end pr-4 pt-2">
                    <p className="font-Montserrat font-bold text-lg lg:text-xl text-[#34251d]">
                        Total: ${calcularTotal(precioBase)}
                    </p>
                </div>
                
            </div>
        </div>
    );
};

const formatearTamano = (tamano: any) => {
    const match = tamano.match(/([a-zA-Z]+)(\d+)/i);
    if (!match) return tamano; // Return original if no match
    const [, unidad, numero] = match;
    return `${numero} ${unidad.toUpperCase()}`; // Return formatted string
};

const calcularTotal = (
    precioBase: number = 0,
    extras?: { precio: number; cantidad: number }[]
) => {
    const totalExtras = extras?.reduce((acc, extra) => acc + (extra.precio * extra.cantidad), 0) || 0;
    return (precioBase + totalExtras).toFixed(2);
};

export default ProductoContenedor;