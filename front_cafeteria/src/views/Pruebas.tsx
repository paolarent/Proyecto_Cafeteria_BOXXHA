import React from 'react';
import { toast, Toaster } from 'react-hot-toast';

const Pruebas = () => {

  const handleToast = () => {
    toast.success('¡Notificación de prueba exitosa!');
  };

  return (
    <div>
      <h1>Prueba de Notificación</h1>
      <button onClick={handleToast}>Mostrar Notificación</button>
      
      {/* Asegúrate de colocar el Toaster en un lugar visible */}
      <Toaster />
    </div>
  );
};

export default Pruebas;



