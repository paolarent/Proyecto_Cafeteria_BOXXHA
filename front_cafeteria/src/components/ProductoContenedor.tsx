const ProductoContenedor = ({ nombre, sabor, tamano, leche, extras }) => {
    return (
        <div className="flex flex-col w-96 min-h-max bg-[#E2E2E2] justify-left rounded-2xl p-4">
            <p className="font-Montserrat font-semibold text-xl text-left text-[#34251d] pb-2">{nombre}</p>
            <p className="font-Montserrat font-regular text-xl text-left text-[#34251d] pb-2"> 
                <span className="font-semibold">Sabor: </span>{sabor}
            </p>
            <p className="font-Montserrat font-regular text-xl text-left text-[#34251d] pb-2">
                <span className="font-semibold">Tamaño: </span>{tamano}
            </p>
            <p className="font-Montserrat font-regular text-xl text-left text-[#34251d] pb-2">
                <span className="font-semibold">Leche: </span>{leche}
            </p>
            <p className="font-Montserrat font-semibold text-xl text-left text-[#34251d] pb-2">Extras</p>
            <ul>
                {extras.map((extra, index) => (
                    <li className="font-Montserrat font-regular text-xl text-left text-[#34251d] pb-2" key={index}>
                        {extra}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default ProductoContenedor;