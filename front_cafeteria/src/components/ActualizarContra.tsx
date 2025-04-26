import { useState } from "react";
import { updatePassword } from "../services/userService";

interface CambiarContraProps {
    onClose: ()=> void;
}

export function CambiarContraModal ({ onClose }: CambiarContraProps) {
    const [actual, setActual] = useState("");
    const [nueva, setNueva] = useState("");
    const [confirmar, setConfirmar] = useState("");
    const [error, setError] = useState("");
    const [exito, setExito] = useState("");

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setError("");
        setExito("");
    
        if (!actual || !nueva || !confirmar) {
          setError("Todos los campos son obligatorios.");
          return;
        }
    
        if (nueva !== confirmar) {
          setError("La nueva contraseña no coincide con la confirmación.");
          return;
        }
    
        try {    
          await updatePassword({
            antiguaContra: actual,
            contra: nueva,
          });
    
          setExito("Contraseña actualizada exitosamente.");
          setActual("");
          setNueva("");
          setConfirmar("");
    
          setTimeout(() => {
            onClose();
          }, 1500);
        } catch (err: any) {
          setError(err?.response?.data?.message || "Error al actualizar la contraseña.");
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
                <h2 className="text-3xl font-bold mb-6 mt-6 text-center">Actualizar Contraseña</h2>

                <form onSubmit={handleSubmit} className="space-y-4">
                {error && <p className="text-red-600 text-center font-semibold">{error}</p>}
                {exito && <p className="text-green-600 text-center font-semibold">{exito}</p>}

                    <div>
                        <label className="block mb-1 text-lg font-medium">Contraseña Actual</label>
                        <input
                            type="password"
                            value={actual}
                            onChange={(e) => setActual(e.target.value)}
                            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring bg-[#5C48481A]
                            border-gray-300 focus:ring-[#3B2B26]"
                            placeholder="Ingresa tu contraseña actual"
                        />
                    </div>
                    <div>
                        <label className="block mb-1 text-lg font-medium">Nueva Contraseña</label>
                        <input
                            type="password"
                            value={nueva}
                            onChange={(e) => setNueva(e.target.value)}
                            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring bg-[#5C48481A]
                            border-gray-300 focus:ring-[#3B2B26]"
                            placeholder="Nueva contraseña"
                        />
                    </div>
                    <div>
                        <label className="block mb-1 text-lg font-medium">Confirmar Nueva Contraseña</label>
                        <input
                            type="password"
                            value={confirmar}
                            onChange={(e) => setConfirmar(e.target.value)}
                            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring bg-[#5C48481A]
                            border-gray-300 focus:ring-[#3B2B26]"
                            placeholder="Confirma tu nueva contraseña"
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
        </div>
    )
}