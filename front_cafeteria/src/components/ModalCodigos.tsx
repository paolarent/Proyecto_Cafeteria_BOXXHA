import QRCode from "react-qr-code";
import { useNavigate } from "react-router-dom";
import { useMenuContext } from '../contexts/ScrollContexto';

interface ModalCodigo {
    isOpen: boolean;
    onClose: () => void;
}

const ModalQR: React.FC<ModalCodigo> = ({ isOpen, onClose }) => {

    if (!isOpen) return null;

    const navigate = useNavigate();
    const { scrollToMenu } = useMenuContext();

    //Obtener datos del localStorage
    const pedidosConfirmados = JSON.parse(localStorage.getItem("pedidos_confirmados") || "[]");

    // Si no hay datos en el localStorage, mostrar un mensaje
    if (!pedidosConfirmados.length) return (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50 p-2">
            <div className="relative bg-white rounded-xl shadow-lg flex flex-col md:flex-row w-[90vw] h-auto md:w-[450px] md:h-auto overflow-y-auto">
                <button
                    onClick={onClose}
                    className="absolute top-1 right-4 text-4xl font-bold text-black hover:text-gray-600"
                    aria-label="Cerrar"
                >
                    &times;
                </button>
                <div className="flex flex-col items-center justify-center p-8 space-y-4">
                    
                    <div className="bg-[#B0CEAC] text-black max-w-md m-2 p-6 rounded-xl text-center font-bold text-lg lg:text-2xl shadow-lg">
                        <p>Aún no se ha realizado ningún pedido.</p>

                        <button
                            type="button"
                            onClick={() => {
                                        navigate('/');
                                        setTimeout(scrollToMenu, 300);
                                        onClose();
                                    }}  
                            className="px-4 py-2 lg:px-6 lg:py-3 bg-[#311808] text-lg text-white rounded hover:bg-[#716865] font-bold
                            transform transition-transform duration-300 hover:scale-105 mt-8 shadow-lg"
                        >
                            Comenzar a Pedir
                        </button>
                    </div>

                </div>
            </div>
        </div>
    );


    return (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50 p-2">
            <div className="relative bg-white rounded-xl shadow-lg w-[90vw] max-h-[95vh] md:w-auto overflow-y-auto">
        
                <button
                    onClick={onClose}
                    className="absolute top-1 right-4 text-4xl font-bold text-black hover:text-gray-600"
                    aria-label="Cerrar"
                >
                    &times;
                </button>
                <div className="flex flex-col items-center justify-center p-8 space-y-6">
                    <label className="font-Montserrat text-2xl lg:text-3xl font-bold text-center text-[#f1e6df] bg-[#311808] p-4 rounded-2xl">
                        Escanea tus códigos QR
                    </label>

                    <p className="text-black w-full max-w-xs text-center font-semibold text-base lg:text-lg px-2">
                        Escanea cada QR al llegar a tienda para identificarte y llevarte tus pedidos. <br />
                        <span className="font-bold text-center">
                            Tus pedidos podrían estar listos dentro de 10 a 15 minutos
                        </span>.
                    </p>


                    {pedidosConfirmados.map((pedido: any, index: number) => {
                        const qrValue = `ID del Pedido: ${pedido.id_pqr}
                        Cliente: ${pedido.nombreCliente}
                        Código: ${pedido.codigo}`;
                        return (
                            <div>
                                <div key={index} className="bg-[#B0CEAC] p-6 rounded-3xl flex flex-col items-center space-y-2">
                                    <div className="w-60 h-60 sm:w-40 sm:h-40 md:w-48 md:h-48">
                                        <QRCode
                                            value={qrValue}
                                            bgColor="#ffffff"
                                            fgColor="#000000"
                                            level="H"
                                            style={{ width: "100%", height: "100%" }}
                                        />
                                    </div>
                                </div>
                                
                                <div className="flex justify-center mt-2">
                                    <label className="text-black font-bold text-center text-lg lg:text-xl">
                                        Código: {pedido.codigo}
                                    </label>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </div>
    );
};

export default ModalQR;