import React from 'react';

interface ModalConfirmProps {
  isOpen: boolean;
  onClose: () => void;
  onConfirm: () => void;
}

const ModalConfirm: React.FC<ModalConfirmProps> = ({ isOpen, onClose, onConfirm }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 flex justify-center items-center bg-black bg-opacity-50">
      <div className="bg-white p-6 rounded-md w-1/3">
        <h2 className="text-xl mb-5 font-semibold">Tienes un pedido sin terminar</h2>
        <p className="mb-4">¿Deseas salir y perder tu selección?</p>
        <div className="flex justify-end gap-4">
          <button onClick={onClose} className="px-4 py-2 bg-gray-400 rounded-md hover:bg-gray-500">
            Cancelar
          </button>
          <button onClick={onConfirm} className="px-4 py-2 bg-[#a38d7f] rounded-md hover:bg-[#8e7f6b] ">
            Salir
          </button>
        </div>
      </div>
    </div>
  );
};

export default ModalConfirm;