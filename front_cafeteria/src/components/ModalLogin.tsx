import React from "react";

interface ModLog {
    isOpen: boolean;
    onClose: () => void;
}

const ModalLogin: React.FC<ModLog> = ({ isOpen, onClose }) => {
    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
            <div className="bg-[#B0CEAC] w-[50%] h-[80%] flex items-center justify-center rounded-xl relative">

                <button onClick={onClose}
                    className="absolute top-4 right-6 text-[#3B2B26] hover:text-[#8e1919] text-3xl font-bold z-10"
                    aria-label="Cerrar modal"
                >
                    &times;
                </button>

                <div className="relative bg-white p-8 rounded-xl shadow-md w-[90%] max-w-md my-6 md:my-0">
                    <h2 className="text-5xl font-Montserrat font-bold text-[#453126] mb-6 text-center">
                        Iniciar sesión
                    </h2>

                    <form className="space-y-4">
                        <div>
                            <label className="block text-lg text-[#453126] mb-1">
                                Usuario
                            </label>
                            <input
                                type="text"
                                className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring bg-[#5C48481A] border-gray-300 focus:ring-[#3B2B26]"
                            />
                        </div>

                        <div>
                            <label className="block text-lg text-[#453126] mb-1">
                                Contraseña
                            </label>
                            <input
                                type="password"
                                className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring bg-[#5C48481A] border-gray-300 focus:ring-[#3B2B26] mb-1"
                            />
                        </div>

                        <button
                            type="button"
                            className="w-full bg-[#3B2B26] font-Montserrat font-semibold text-xl text-white py-3 rounded-md hover:bg-[#555655]
                            transform transition-transform duration-300 hover:scale-105"
                        >
                            Iniciar Sesión
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default ModalLogin;

