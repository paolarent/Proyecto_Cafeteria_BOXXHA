import { useEffect, useState } from "react";
import NavBar from "../components/NavBar";
import NavBarEmp from "../components/NavBarEmp";
import { verificarTipoUsuario } from "../services/authService"; // Asegúrate de exportar esa función
import { useCatalagos } from "../contexts/CatalagosContext"; // Usamos el hook para acceder a los catálogos

type Props = {
    children?: React.ReactNode;
};


const LayoutConNavbar = ({ children }: Props) => {
    // const [tipoUsuario, setTipoUsuario] = useState<string | null>(null);
    const { tipoUsuario } = useCatalagos(); // Obtenemos el tipo de usuario desde el contexto
    console.log("Tipo de usuario desde el contexto:", tipoUsuario);
    // useEffect(() => {
    //     const obtenerTipo = async () => {
    //         const data = await verificarTipoUsuario();
    //         if (!data.error && data.user.tipo_usuario) {
    //             setTipoUsuario(data.user.tipo_usuario); // "cliente", "empleado", ADMIN (NO TIENE NAVBAR)
    //         } else if (tipoUsuario === null){
    //             return null; // o un loader si prefieres

    //         } else {
    //             setTipoUsuario("cliente"); // Por defecto dejamos la navbar del cliente
    //         }
    //     };
    //     obtenerTipo();
    // }, []);

    return (
        <header className="sticky top-0 z-50">
            {tipoUsuario === "empleado" ? <NavBarEmp /> : <NavBar />}
        </header>
    );
};


export default LayoutConNavbar;
