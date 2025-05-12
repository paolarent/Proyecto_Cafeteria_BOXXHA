import { useState } from "react";
import { updateUser } from "../services/userService";
import { toast, Toaster } from 'react-hot-toast'; //Importar react-hot-toast para las notificaciones

interface CambiarDatosProps {
    onClose: ()=> void;
}

export function CambiarDatosModal ({ onClose }: CambiarDatosProps) {
    const [nombre, setNombre] = useState("");
    const [apellido, setApellido] = useState("");
    const [user, setUser] = useState("");
    //const [error, setError] = useState("");       REEMPLAZE A LOS TOAST CON NOTIFICACIONES
    //const [exito, setExito] = useState("");

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        //setError("");
        //setExito("");
    
        if (!nombre || !apellido || !user) {
            toast.error("Todos los campos son obligatorios.");
            return;
        }
    
        try {    
            const response = await updateUser({
            nombre: nombre,
            apellido: apellido,
            usuario: user,
            });
    
            localStorage.setItem("usuario", JSON.stringify(response.usuarioActualizado));

            toast.success("Usuario actualizado exitosamente.");
            setNombre("");
            setApellido("");
            setUser("");
        
            setTimeout(() => {
                onClose();
            }, 1500);
        } catch (err: any) {
            //setError(err?.response?.data?.message || "Error al actualizar usuario.");
            toast.error(err?.response?.data?.message || "Error al actualizar usuario.");
        }
    }; 
        
    return(
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
            <div className="bg-white border border-black border-2 rounded-xl p-6 w-[450px] shadow-xl font-Montserrat relative">
                <button
                    onClick={onClose}
                    className="absolute top-3 right-4 text-2xl font-bold text-black hover:text-red-600 focus:outline-none"
                >
                    &times;
                </button>

                <h2 className="text-3xl font-bold mb-6 mt-6 text-center">Actualizar Datos de Usuario</h2>

                <form onSubmit={handleSubmit} className="space-y-4">
                    {/*{error && <p className="text-red-600 text-center font-semibold">{error}</p>}*/}
                    {/*{exito && <p className="text-green-600 text-center font-semibold">{exito}</p>}*/}
                    {/*Nombre*/}
                    <div>
                        <label className="block mb-1 text-lg font-medium">Nombre</label>
                        <input 
                            type="text"
                            value={nombre}
                            onChange={(e) => setNombre(e.target.value)}
                            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring bg-[#5C48481A]
                            border-gray-300 focus:ring-[#3B2B26]"
                            placeholder="Ingrese su Nombre"
                        />
                    </div>

                    {/*Apellido*/}
                    <div>
                        <label className="block mb-1 text-lg font-medium">Apellido</label>
                        <input 
                            type="text"
                            value={apellido}
                            onChange={(e) => setApellido(e.target.value)}
                            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring bg-[#5C48481A]
                            border-gray-300 focus:ring-[#3B2B26]"
                            placeholder="Ingrese su Apellido"
                        />
                    </div>

                    {/*Nombre de Usuario*/}
                    <div>
                        <label className="block mb-1 text-lg font-medium">Usuario</label>
                        <input 
                            type="text"
                            value={user}
                            onChange={(e) => setUser(e.target.value)}
                            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring bg-[#5C48481A]
                            border-gray-300 focus:ring-[#3B2B26]"
                            placeholder="Ingrese su Nombre de Usuario"
                        />
                    </div>

                    <div className="flex justify-end gap-4 pt-4">
                        <button
                            type="button"
                            onClick={onClose}
                            className="px-6 py-3 bg-[#d5c3bd] border border-[#311808] text-lg text-[#311808] rounded hover:bg-[#B0CEAC] font-bold
                            transform transition-transform duration-300 hover:scale-105"
                        >
                            Cancelar
                        </button>
                        <button
                            type="submit"
                            className="px-6 py-3 bg-[#311808] text-lg text-white rounded hover:bg-[#716865] font-bold
                            transform transition-transform duration-300 hover:scale-105"
                        >
                            Guardar
                        </button>
                    </div>

                </form>
            </div>

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
    )
}
