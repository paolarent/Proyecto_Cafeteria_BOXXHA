import React from 'react';

interface ModalAUProps {
    isOpen: boolean;
    onClose: () => void;
}

const ModalAU: React.FC<ModalAUProps> = ({ isOpen, onClose }) => {
    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 w-[600px] h-[400px]">
            <div className="bg-white p-6 rounded-lg max-w-md w-full shadow-lg relative">
                <button
                onClick={onClose}
                className="absolute top-2 right-2 text-[#000000] hover:text-brown text-3xl"
                >
                ×
                </button>
                <h2 className="text-2xl font-bold mb-4">Sobre Nosotros</h2>
                <p className="text-gray-700">
                Somos una cafetería comprometida con la calidad y el sabor, ofreciendo una experiencia única en cada taza.
                </p>
            </div>
        </div>
    );
};

export default ModalAU;
