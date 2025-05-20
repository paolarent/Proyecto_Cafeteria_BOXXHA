import { useEffect, useState } from 'react';
import socket from "../utils/socket";
import { toast, Toaster } from 'react-hot-toast';

const Notis = () => {
    const [notis, setNotis] = useState<string[]>([]);

    useEffect(() => {
        const handleConnect = () => {
            console.log('Conectado al socket');
        };

        const handleNotificacion = (data: { mensaje: string }) => {
            toast.success('Nuevo pedido recibido');
            setNotis((prev) => [data.mensaje, ...prev]);
        };

        socket.on('connect', handleConnect);
        socket.on('notificacion', handleNotificacion);

        // Cleanup
        return () => {
            socket.off('connect', handleConnect);
            socket.off('notificacion', handleNotificacion);
        };
    }, []);

    return (
        <div>
            <h1>Notificaciones</h1>
            <ul>
                {notis.map((noti, index) => (
                    <li key={index}>{noti}</li>
                ))}
            </ul>
            <Toaster
                position="top-center"
                reverseOrder={false}
                toastOptions={{
                    duration: 3000,
                    style: {
                        background: '#3B2B26',
                        color: '#fff',
                        fontFamily: 'Montserrat',
                        fontWeight: 600,
                    },
                }}
            />
        </div>
    );
};

export default Notis;
