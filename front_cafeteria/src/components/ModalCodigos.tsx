import QRCode from "react-qr-code";

interface ModalCodigo {
    isOpen: boolean;
    onClose: () => void;
}

const ModalQR: React.FC<ModalCodigo> = ({ isOpen, onClose }) => {

    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50 p-2">
            <div className="relative bg-white rounded-xl shadow-lg flex flex-col md:flex-row w-[90vw] h-auto md:w-[450px] md:h-auto overflow-y-auto">
                {/* Botón para cerrar el modal*/}
                    <button
                        onClick={onClose}
                        className="absolute top-1 right-4 text-4xl font-bold text-black hover:text-gray-600"
                        aria-label="Cerrar Carrito"
                    >
                        &times;
                    </button>

                    <div className="flex flex-col items-center justify-center p-8 space-y-4">
                        {/* Título arriba */}
                        <label className="font-Montserrat text-2xl lg:text-3xl font-bold text-center text-[#f1e6df] bg-[#311808] p-4 rounded-2xl">
                            Escanea este código QR
                        </label>

                        {/* Texto breve */}
                        <p className="text-black max-w-md m-10 text-center font-semibold text-sm lg:text-base">
                            Escanea este QR al llegar a tienda para identificarte y llevarte tu pedido. <br /> <br />
                            <span className="font-bold text-center">Tu pedido podría estar listo dentro de 10 a 15 minutos</span>.
                        </p>

                        {/* QR con fondo */}
                        <div className="bg-[#B0CEAC] p-8 rounded-3xl flex justify-center items-center">
                            <div className="w-60 h-60 sm:w-40 sm:h-40 md:w-48 md:h-48">
                                <QRCode
                                value="PAOLA :)"
                                bgColor="#ffffff"
                                fgColor="#000000"
                                level="H"
                                style={{ width: "100%", height: "100%" }} // hace que escale al tamaño del div
                                />
                            </div>
                        </div>

                        <label className="text-black font-bold text-center text-xl lg:text-2xl">
                            Código: 374-263                            
                        </label>

                    </div>


            </div>
        </div>
    );
};

export default ModalQR;