
type ProductoContenedorProps = {
    nombre?: string;
    tipo?: string;
    sabor?: string;
    regular? : string;
    tamano?: string;
    leche?: string;
    extras?: { id: number; nombre: string; cantidad: number }[];
};

const ProductoContenedor: React.FC<ProductoContenedorProps> = ({ nombre, tipo, sabor, regular, tamano, leche, extras }) => {
    return (
        <div className="flex flex-row w-full min-h-max bg-[#e1e1e2] justify-left gap-2 rounded-2xl p-4">
            {/*Contenedor de la imagen */}
            <div className="flex flex-col pr-2">
                <div className="flex flex-col w-40 h-40 text-center items-center bg-gray-600 rounded-2xl">
                    <p>Imagen</p>
                </div>
            </div>
            {/*Contenedor del detalle */}
            <div className="flex flex-col">
                <p className="font-Montserrat font-bold text-xl text-left text-[#34251d] pb-2">{nombre?.toUpperCase()}</p>
                <p className="font-Montserrat font-regular text-xl text-left text-[#34251d] pb-2"> 
                    <span className="font-semibold">Tipo: </span>{tipo?.toUpperCase()}
                </p>
                <p className="font-Montserrat font-regular text-xl text-left text-[#34251d] pb-2"> 
                    <span className="font-semibold">Sabor: </span>{sabor}
                </p>

                {/*Condicionales para que solo se impriman los campos utilizados */}
                {regular !== "No definido" &&(
                    <p className="font-Montserrat font-regular text-xl text-left text-[#34251d] pb-2">
                    <span className="font-semibold">Grano: </span>{regular} 
                    </p>
                )}

                {tamano !== "No definido" &&(
                    <p className="font-Montserrat font-regular text-xl text-left text-[#34251d] pb-2">
                    <span className="font-semibold">Tamaño: </span>{formatearTamano(tamano)} 
                    </p>
                )}
                
                {leche !== "No definido" &&(
                    <p className="font-Montserrat font-regular text-xl text-left text-[#34251d] pb-2">
                    <span className="font-semibold">Leche: </span>{leche}
                    </p>
                )}
                
                {extras && extras.length > 0  &&(
                    <>
                    <p className="font-Montserrat font-semibold text-xl text-left text-[#34251d] pb-2">Extras</p>
                    <ul>
                        {extras?.map((extra, index) => (
                            <li className="font-Montserrat font-regular text-xl text-left text-[#34251d] pb-2" key={index}>
                                + {extra.cantidad} {extra.nombre}
                            </li>
                        ))}
                    </ul>
                    </>
                )}
                
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

export default ProductoContenedor;