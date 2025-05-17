import React from 'react';

interface ModalConfirmProps {
  isOpen: boolean;
  onClose: () => void;
  onConfirm: () => void;
}

const ModalConfirm: React.FC<ModalConfirmProps> = ({ isOpen, onClose, onConfirm }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 flex justify-center items-center bg-black bg-opacity-50 z-50 px-4">
      <div className="bg-white p-6 rounded-md w-full max-w-md">
        <h2 className="text-xl mb-5 font-bold text-left">Espere, aún tiene un pedido sin terminar</h2>
        <p className="mb-6 font-semibold text-left">¿Desea salir y perder su selección?</p>
        <div className="flex justify-end gap-4">
          <button
            onClick={onClose}
            className="px-4 py-2 bg-[#d5c3bd] border border-[#311808] text-lg text-[#311808] rounded hover:bg-[#B0CEAC] font-bold
                    transform transition-transform duration-300 hover:scale-105"
          >
            Cancelar
          </button>
          <button
            onClick={onConfirm}
            className="px-4 py-2 bg-[#311808] text-lg text-white rounded hover:bg-[#716865] font-bold
                    transform transition-transform duration-300 hover:scale-105"
          >
            Salir
          </button>
        </div>
      </div>
    </div>
  );
};

export default ModalConfirm;
