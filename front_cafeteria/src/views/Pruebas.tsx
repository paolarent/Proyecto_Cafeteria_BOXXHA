import React from 'react';
import { toast, Toaster } from 'react-hot-toast';
import QRCode from "react-qr-code";
import NavBarEmpleado from '../components/NavBarEmp';

const Pruebas = () => {

  const handleToast = () => {
    toast.success('HOLA, se logró');
  };

  return (
    <div>
      <NavBarEmpleado />

      <h1>PRUEBAS DE FRONT</h1>
      <button className="bg-[#ee1e79] text-[#000000] rounded-xl p-2 m-8 font-bold" onClick={handleToast}>Mostrar Notificación</button>
      <br />

      <div style={{ background: '#f9f9f9', padding: '20px', borderRadius: '1rem' }}>
        <QRCode
          value="PAOLA :)"
          size={256}
          bgColor="#ffffff"
          fgColor="#000000"
          level="H"
        />
      </div>

      
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



