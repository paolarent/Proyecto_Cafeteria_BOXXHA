import logob from "../assets/logo_boxxha.png"; 
import fondoCafe from "../assets/fondo_cafe_mejorada.jpg";
import NavBar from "../components/NavBar"
import { useNavigate } from "react-router-dom";
import { motion } from 'framer-motion';
import { toast, Toaster } from 'react-hot-toast'; //Importar react-hot-toast para las notificaciones

import { useState, useEffect } from "react";
import { loginUser } from "../services/authService";
import { useAuth } from "../contexts/AuthContext"; // Usamos el hook para acceder a la autenticación    

const LoginView = () => {
    const navigate = useNavigate();

    const [identificador, setIdentificador] = useState("");
    const [contra, setContra] = useState("");
    const [error, setError] = useState("");
    const [mensaje, setMensaje] = useState("");
    // const [tipoUsuario, setTipoUsuario] = useState("");

    const { tipoUsuario, setTipoUsuario } = useAuth(); // Usamos el hook para acceder a la autenticación

    const [errores, setErrores] = useState({
        identificador: false,
        contra: false,
    });

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setError("");
        setMensaje("");

    const nuevosErrores = {
        identificador: identificador.trim() === "", //Si alguno de los campos esta vacio salta un error
        contra: contra.trim() === "",
    };

    setErrores(nuevosErrores);

    if (nuevosErrores.identificador || nuevosErrores.contra) {
        //setError("Por favor llena todos los campos");
        toast.error("Por favor llena todos los campos");
        return;
    }

    try {
        const data = await loginUser(identificador, contra);
        //setMensaje(data.message);
        toast.success(data.message);

        // Guarda el token en localStorage para mantener al usuario logueado, el usuario para mostrarlo en el dropdown menu
        localStorage.setItem("token", data.token);
        localStorage.setItem("usuario", JSON.stringify(data.user.usuario));
        const tipoUser = data.user.tipo_usuario;
        setTipoUsuario(tipoUser);
    }   catch (err: any) {
            //setError(err.message);
            toast.error(err.message);
        }
    };

    useEffect(() => {
    if (tipoUsuario === "empleado") {
        setTimeout(() =>{
            navigate("/empleado");
        }, 1000); 
    } else if (tipoUsuario === "admin") {
        setTimeout(() =>{
            navigate("/Admin_Inicio");
        }, 1000);
    } else if (tipoUsuario === "cliente") {
        setTimeout(() => {
            navigate("/");
        }, 1000);
    }
    }, [tipoUsuario, navigate]);

    return (
        <div className="min-h-screen flex flex-col">
            <header className="sticky top-0 z-50">
                <NavBar />
            </header>

            <motion.div
                initial={{ x: '100%', opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                exit={{ x: '-100%', opacity: 0 }}
                transition={{ duration: 0.3, ease: "easeInOut" }}
                className="flex-grow flex flex-col"
            >
                
                {/*<main className="flex flex-1 bg-[#B0CEAC]">*/}
                <main className="flex flex-1 flex-col md:flex-row bg-[#B0CEAC]">

                    {/* Sección izquierda: Formulario */}
                    {/*<section className="w-1/2 flex items-center justify-center">*/}
                    <section className="w-full md:w-1/2 flex items-center justify-center">
                        <div className="bg-white p-8 rounded-xl shadow-md w-[90%] max-w-md my-6 md:my-0">
                            <h2 className="text-4xl font-Montserrat font-bold text-[#453126] mb-6 text-center">Iniciar sesión</h2>
                            <form className="space-y-4" onSubmit={handleSubmit}>
                                <div>
                                    <label className="block text-lg text-[#453126] mb-1">Email, Télefono o Usuario</label>
                                    <input
                                    type="text"
                                    value={identificador}
                                    onChange={(e) => {
                                    setIdentificador(e.target.value);
                                    // Manejo de errores en frontend
                                    if (errores.identificador && e.target.value.trim() !== "") {
                                        setErrores((prev) => ({ ...prev, identificador: false }));
                                    }
                                    }}
                                    className={`w-full px-4 py-2 border rounded-md focus:outline-none focus:ring bg-[#5C48481A] ${
                                        errores.identificador ? "border-red-400 focus:ring-red-500" : "border-gray-300 focus:ring-[#3B2B26]"
                                    }`}
                                    />
                                </div>

                                <div>
                                    <label className="block text-lg text-[#453126] mb-1">Contraseña</label>
                                    <input
                                    type="password"
                                    value={contra}
                                    onChange={(e) => {
                                    setContra(e.target.value);
                                    // Manejo de errores en frontend
                                    if (errores.identificador && e.target.value.trim() !== "") {
                                        setErrores((prev) => ({ ...prev, identificador: false }));
                                    }  
                                    }}
                                    className={`w-full px-4 py-2 border rounded-md focus:outline-none focus:ring bg-[#5C48481A] mb-1 ${
                                    errores.contra ? "border-red-400 focus:ring-red-500" : "border-gray-300 focus:ring-[#3B2B26]"
                                    }`}
                                    />
                                </div>

                                <button
                                    type="submit"
                                    className="w-full bg-[#3B2B26] font-Montserrat font-semibold text-xl text-white py-2 rounded-md hover:bg-[#555655]
                                    transform transition-transform duration-300 hover:scale-105"
                                >
                                    Iniciar Sesión
                                </button>
                                {mensaje && <p style={{ color: "green" }}>{mensaje}</p>} {/* Esto se lo puedes quitar o lo puedes poner como notif mas bonita */}
                                {error && <p style={{ color: "red" }}>{error}</p>} {/* Esto se lo puedes quitar o lo puedes poner como notif mas bonita */}
                            </form>
                        </div>
                    </section>
                
                    <section
                        className="w-full md:w-1/2 flex items-center justify-center relative bg-[#B0CEAC] rounded-none md:rounded-l-[100px] overflow-hidden"
                        style={{
                            backgroundImage: `url(${fondoCafe})`,
                            backgroundSize: "cover", 
                            backgroundPosition: "center",
                            backgroundRepeat: "no-repeat",
                        }}
                        >
                        {/* Capa de color con algo de opacidad encima, opcional */}
                        <div
                            className="absolute inset-0"
                            style={{ backgroundColor: "white", opacity: 0.50 }}
                        />

                        {/* Contenido por encima de la capa del patron */}
                        {/*<div className="relative z-10 text-center p-8 rounded-3xl bg-[#B0CEAC] shadow-md opacity-95 w-[420px] h-[410px]">*/}
                        <div className="relative z-10 text-center p-8 rounded-3xl bg-[#B0CEAC] shadow-md opacity-95 w-420px md:w-full max-w-[420px] max-h-[410px] aspect-[4/5] my-6 md:my-0">

                            <div className="bg-white rounded-xl px-10 py-2 shadow-md inline-block mb-4">
                                <img src={logob} alt="Logo BOXXHA" className="h-[70px] mx-auto mb-2" />
                            </div>
                            <h2 className="text-2xl font-Montserrat font-bold text-[#000000] mt-6 mb-2">¡Hola! Bienvenid@ a</h2>
                            <h1 className="text-2xl font-Montserrat font-extrabold text-[#000000] mb-12">BOXXHA</h1>
                            <p className="text-xl font-Montserrat font-regular mb-4">¿Aún no tienes una cuenta?</p>
                            <button onClick={() => navigate("/registro")} className="bg-[#3B2B26] font-Montserrat font-semibold text-xl text-white px-4 py-2 rounded-md hover:bg-[#555655] 
                                                transform transition-transform duration-300 hover:scale-125">
                            Registrarse
                            </button>
                        </div>
                    </section>
                </main>
            </motion.div>
            
            <Toaster    //ESTILOS DE LAS NOTIFICACIONES
                position="top-center"
                reverseOrder={false}
                toastOptions={{
                duration: 3000,  //Duración de la notificación
                style: {
                    background: '#3B2B26',
                    color: '#fff',
                    fontFamily: 'Montserrat',
                    fontWeight: 600
                },
                }}
            />
        </div>
    );
};

export default LoginView;