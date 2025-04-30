import logob from "../assets/logo_boxxha.png"; 
import fondoCafe from "../assets/fondo_cafe_mejorada.jpg";
import NavBar from "../components/NavBar"
import { useNavigate } from "react-router-dom";
import { motion } from 'framer-motion';

// Importar el servicio de autenticación y useState
import { registrarUsuario } from "../services/authService";
import { useState } from "react";

const RegistroView = () => {
    const navigate = useNavigate();

    // Estado para manejar los datos del formulario
    const [formaContacto, setFormaContacto] = useState("");
    const [correoTel, setCorreoTel] = useState("");
    const [nombre, setNombre] = useState("");
    const [apellido, setApellido] = useState("");
    const [usuario, setUsuario] = useState("");
    const [contra, setContra] = useState("");
    const [confirmContra, setConfirmContra] = useState("");

    const [errores, setErrores] = useState({
        nombre: "",
        apellido: "",
        usuario: "",
        correoTel: "",
        contra: "",
        confirmContra: "",
    });
    // Cambiar el regex del telefono 
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const telefonoRegex = /^([0-9]{5})+(-)+([0-9]{6})$/;

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        
        const nuevosErrores = {
            nombre: nombre.trim() === "" ? "Campo obligatorio" : "",
            apellido: apellido.trim() === "" ? "Campo obligatorio" : "",
            usuario: usuario.trim() === "" ? "Campo obligatorio" : "",
            contra: contra.trim() === "" ? "Campo obligatorio" : "",
            correoTel:
                formaContacto === "email" && !emailRegex.test(correoTel)
                ? "Formato de correo inválido"
                : formaContacto === "telefono" && !telefonoRegex.test(correoTel)
                ? "Formato de teléfono inválido"
                : "",
            confirmContra: 
                correoTel.trim() === ""
                ? "Campo obligatorio"
                : contra !== confirmContra 
                ? "Las contraseñas no coinciden" 
                : "",
        };

        setErrores(nuevosErrores);

        if (Object.values(nuevosErrores).some((msg) => msg !== "")) {
            alert("Por favor corrige los errores.");
            setErrores(nuevosErrores);
            return;
        }

        const payload = {
            nombre,
            apellido,
            usuario,
            contra,
            ...(formaContacto === "email" && { email: correoTel }),
            ...(formaContacto === "telefono" && { numero_tel: correoTel })
        };

        try {
            await registrarUsuario(payload);
            alert("Registro exitoso");
            navigate("/login");
        } catch (error: any) {
            alert(error.message);
        }
    };

    return (
        <div className="min-h-screen flex flex-col">
            <header className="sticky top-0 z-50">
                <NavBar />
            </header>

            <motion.div
                initial={{ x: '-100%', opacity: 0 }}  // Inicia desde la izquierda
                animate={{ x: 0, opacity: 1 }}        // Se mueve al centro y se vuelve visible
                exit={{ x: '100%', opacity: 0 }}      // Se mueve hacia la derecha y desaparece
                transition={{ duration: 0.3, ease: "easeInOut" }}
                className="flex-grow flex flex-col"
            >
            
                <main className="flex flex-1 bg-[#B0CEAC]">
                    {/* Misma logica, 2 secciones pero inverso */}
                    <section
                        className="w-1/2 flex items-center justify-center relative bg-[#B0CEAC] rounded-r-[100px] overflow-hidden"
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
                        <div className="relative z-10 text-center p-8 rounded-3xl bg-[#B0CEAC] shadow-md opacity-95 w-[420px] h-[410px]">
                            <div className="bg-white rounded-xl px-10 py-2 shadow-md inline-block mb-4">
                                <img src={logob} alt="Logo BOXXHA" className="h-[70px] mx-auto mb-2" />
                            </div>
                            <h2 className="text-2xl font-Montserrat font-bold text-[#000000] mt-6 mb-2">¡Hola! Bienvenid@ a</h2>
                            <h1 className="text-2xl font-Montserrat font-extrabold text-[#000000] mb-12">BOXXHA</h1>
                            <p className="text-xl font-Montserrat font-regular mb-4">¿Ya tienes una cuenta?</p>
                            <button onClick={() => navigate("/login")} className="bg-[#3B2B26] font-Montserrat font-semibold text-lg text-white px-4 py-2 rounded-md hover:bg-[#555655] 
                                                transform transition-transform duration-300 hover:scale-125">
                            Iniciar Sesión
                            </button>
                        </div>
                    </section>

                    <section className="w-1/2 flex items-center justify-center">
                        <div className="bg-white p-6 rounded-xl shadow-md w-[450px] h-[530px]">
                            <h2 className="text-4xl font-Montserrat font-bold text-[#453126] mb-2 text-center">Registrarse</h2>
                            <form className="space-y-4" onSubmit={handleSubmit}>
                                {/* Parte de seleccionar forma de registro y su input-text */}
                                <div className="grid grid-cols-2 gap-4">
                                    <label className="col-span-2 block text-md text-[#453126] text-center">
                                        Elija una forma de identificarse:
                                    </label>
                                    
                                    <div className="text-md">
                                        <select 
                                            value={formaContacto}
                                            onChange={(e) => setFormaContacto(e.target.value)}
                                            className="w-full px-3 py-2 border border-gray-300 rounded-md bg-[#5C48481A] focus:outline-none focus:ring focus:ring-[#3B2B26] font-semibold"
                                        >
                                            <option value="">Seleccionar *</option>
                                            <option value="email">Email</option>
                                            <option value="telefono">Teléfono</option>
                                        </select>
                                    </div>
                                    
                                    <div>
                                        <input
                                        type="text"
                                        value={correoTel}
                                        onChange={(e) => setCorreoTel(e.target.value)}
                                        className={`w-full mt-0 px-3 py-2 text-md border border-gray-300 rounded-md bg-[#5C48481A] focus:outline-none focus:ring focus:ring-[#3B2B26] 
                                        ${errores.contra ? 'border-red-500' : 'border-gray-300'}`}
                                        placeholder={formaContacto === "email" ? "nombre@correo.com" 
                                            : formaContacto === "telefono" ? "### ### ####" : "Email o Teléfono" }
                                        />
                                        {errores.correoTel && <p className="text-red-500 text-xs">{errores.correoTel}</p>}
                                    </div>
                                </div>

                                {/* Nombre y Apellido */}
                                <div>
                                    {/*<label className="block text-md text-[#453126] mb-1">Nombre:  <span className="text-red-500">*</span> </label>*/}
                                    <input
                                        type="text"
                                        value={nombre}
                                        onChange={(e) => setNombre(e.target.value)}
                                        className={`w-full px-3 py-2 border border-gray-300 rounded-md bg-[#5C48481A] focus:outline-none focus:ring focus:ring-[#3B2B26]
                                        ${errores.nombre ? 'border-red-500' : 'border-gray-300'}`}
                                        placeholder="Nombre:"
                                    />
                                </div>

                                <div>
                                    {/*<label className="block text-md text-[#453126] mb-1">Apellido:  <span className="text-red-500">*</span> </label>*/}
                                    <input
                                        type="text"
                                        value={apellido}
                                        onChange={(e) => setApellido(e.target.value)}
                                        className={`w-full px-3 py-2 border border-gray-300 rounded-md bg-[#5C48481A] focus:outline-none focus:ring focus:ring-[#3B2B26]
                                        ${errores.apellido ? 'border-red-500' : 'border-gray-300'}`}
                                        placeholder="Apellido:"
                                    />
                                </div>

                                <div>
                                    {/*<label className="block text-md text-[#453126] mb-1">Nombre de Usuario:  <span className="text-red-500">*</span> </label>*/}
                                    <input
                                    type="text"
                                    value={usuario}
                                    onChange={(e) => setUsuario(e.target.value)}
                                    className={`w-full px-3 py-2 border border-gray-300 rounded-md bg-[#5C48481A] focus:outline-none focus:ring focus:ring-[#3B2B26]"
                                    ${errores.usuario ? 'border-red-500' : 'border-gray-300'}`}
                                    placeholder="Nombre de Usuario:"
                                    />
                                </div>

                                {/* Contraseña y Nombre de Usuario */}
                                <div>
                                    {/*<label className="block text-md text-[#453126] mb-1">Contraseña:  <span className="text-red-500">*</span> </label>*/}
                                    <input
                                    type="password"
                                    value={contra}
                                    onChange={(e) => setContra(e.target.value)}
                                    className={`w-full px-3 py-2 border border-gray-300 rounded-md bg-[#5C48481A] focus:outline-none focus:ring focus:ring-[#3B2B26]
                                    ${errores.contra ? 'border-red-500' : 'border-gray-300'}`}
                                    placeholder="Contraseña:"
                                    />
                                </div>

                                <div>
                                    {/*<label className="block text-md text-[#453126] mb-1">Confirmar contraseña:  <span className="text-red-500">*</span> </label>*/}
                                    <input
                                    type="password"
                                    value={confirmContra}
                                    onChange={(e) => setConfirmContra(e.target.value)}
                                    className={`w-full px-3 py-2 border border-gray-300 rounded-md bg-[#5C48481A] focus:outline-none focus:ring focus:ring-[#3B2B26]
                                    ${errores.confirmContra ? 'border-red-500' : 'border-gray-300'}`}
                                    placeholder="Confirmar contraseña:"
                                    />
                                    {errores.confirmContra && <p className="text-red-500 text-xs">{errores.confirmContra}</p>}
                                    
                                </div>

                                {/* Botón */}
                                <button
                                    type="submit"
                                    className="w-full mt-6 mb-2 px-3 py-3 bg-[#3B2B26] font-Montserrat font-semibold text-white rounded-md hover:bg-[#555655] transition-transform duration-300 hover:scale-105"
                                >
                                    REGISTRARSE
                                </button>
                                    
                            </form>
                        </div>
                    </section>
                </main>
            </motion.div>
        </div>
    );
};


export default RegistroView;