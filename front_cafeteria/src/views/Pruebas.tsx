import React from 'react';
import { toast, Toaster } from 'react-hot-toast';

const Pruebas = () => {

  const handleToast = () => {
    toast.error('¡Notificación de prueba exitosa!');
  };

  return (
    <div>
      <h1>Prueba de Notificación</h1>
      <button onClick={handleToast}>Mostrar Notificación</button>
      
       <Toaster    //ESTILOS DE LAS NOTIFICACIONES
                position="top-right"
                reverseOrder={false}
                toastOptions={{
                duration: 3000,  //Duración de la notificación
                style: {
                background: '#3B2B26',
                color: '#fff',
                fontFamily: 'Montserrat',
                },
            }}
        />
    </div>
  );
};

export default Pruebas;



