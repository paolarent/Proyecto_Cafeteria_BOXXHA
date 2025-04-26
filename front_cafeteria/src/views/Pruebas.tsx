import React from "react";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Pruebas = ()=> { 

    const notify = () => toast('Wow so easy !');

    return (
        <div className="grid place-items-center h-dvh bg-zinc-900/15">
        <button onClick={notify}>Notify !</button>
        <ToastContainer aria-label={undefined} />
        </div>
    );
}

export default Pruebas;

