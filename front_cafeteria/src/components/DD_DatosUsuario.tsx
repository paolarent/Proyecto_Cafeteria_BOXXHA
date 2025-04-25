import icon_usuario from "../assets/Iconos/usuario.png";
import icon_contra from "../assets/Iconos/contrasena.png";
import icon_logout from "../assets/Iconos/cerrarsesion.png"

interface UserMenuProps {
    onClose: () => void;
    username: string;
    onLogout: () => void;
}

export function UserMenu({ onClose, username, onLogout }: UserMenuProps) {
    
    return (
        <div className="absolute right-0 mt-2 w-80 font-Montserrat bg-white border rounded-lg shadow-lg z-50 border border-black border-2">
            <div className="flex justify-between items-center px-4 pt-3 pb-2 border-b">
            <span className="font-regular text-xl">Hola,  <span className="font-bold">{username}</span></span>
            
            <button
                onClick={onClose}
                className="text-3xl font-extrabold text-black hover:text-red-600 transition-transform hover:scale-110 focus:outline-none 
                            focus:ring-2 focus:ring-red-400 rounded pb-2"
                aria-label="Cerrar"
                title="Cerrar"
            >
            &times;
            </button>

            </div>
    
            <ul className="p-2 space-y-2 text-lg">
            <li className="flex items-center gap-2 cursor-pointer hover:bg-[#f1e6df] p-2 rounded">
                <img src={icon_usuario} alt="Usuario" className="w-6 h-6" />
                <span className="pl-2">Actualizar Usuario</span>
            </li>
            <li className="flex items-center gap-2 cursor-pointer hover:bg-[#f1e6df] p-2 rounded">
                <img src={icon_contra} alt="Contraseña" className="w-6 h-6" />
                <span className="pl-2">Actualizar Contraseña</span>
            </li>
            </ul>
    
            <div className="border-t text-lg bg-[#d5c3bd] rounded-b-lg overflow-hidden">
                <button onClick={onLogout} className="w-full flex items-center gap-2 p-2 font-bold text-[#311808] hover:bg-[#B0CEAC] pl-4">
                    <img src={icon_logout} alt="Cerrar sesión" className="w-6 h-6" />
                    <span className="pl-2">Cerrar sesión</span>
                </button>
            </div>

        </div>
    );
};

