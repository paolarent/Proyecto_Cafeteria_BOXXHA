import icon_usuario from "../assets/Iconos/usuario.png";
import { useState, useEffect} from "react";
import { useNavigate } from "react-router-dom";
import { obtenerPedidos, TotalPedidosHoy, TotalVentasHoy, TotalProductosHoy } from "../services/dashServices"
import { verificarTipoUsuario } from "../services/authService";
import { toast, Toaster } from 'react-hot-toast'; //Importar react-hot-toast para las notificaciones

import { registrarUsuario } from "../services/authService"; //Función para realziar el registro
import { useAuth } from "../contexts/AuthContext"; // Usamos el hook para acceder a la autenticación    

/*
    To do list
    - Logica del registro (llamada correcta a la función, editar o crear una función que ingrese el tipo de usuario 'Empleado')
    - Instalar Recharts (Meter Gráficos)
    - Escoger graficos
        1.Grafico de pastel tipo de productos vendidos (bebFria 24%, bebCal 30%, Frappes 27%, Postres restante%)
        2.Producto más vendido
        
*/
interface Pedido {
    id_pedido: number;
    fecha: string;
    total: number;
    status: string;
    usuario: {
        nombre: string;
    }   
}

// Ruta /admin_inicio
const Admin_Inicio = () => {
    const [TotalPedidos, setTotalPedidos] = useState<number>(0); 
    const [Ventas, setVentas] = useState<number>(0);
    const [Productos, setProductos] = useState<number>(0);
    const [pedidos, setPedidos] = useState<Pedido[]>([]);
    const [Opcion, setOpcion] = useState('Dashboard');
    const rawUser = localStorage.getItem("usuario"); 
    const Usuario = rawUser?.replace(/^"(.*)"$/, '$1'); // Retirar la comillas del usuario
    const navigate = useNavigate();

    // Estado para manejar los datos del formulario
    const [formaContacto, setFormaContacto] = useState("");
    const [correoTel, setCorreoTel] = useState("");
    const [nombre, setNombre] = useState("");
    const [apellido, setApellido] = useState("");
    const [usuario, setUsuario] = useState("");
    const [contra, setContra] = useState("");
    const [confirmContra, setConfirmContra] = useState("");
    const { clearTipoUsuario } = useAuth();

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
    const telefonoRegex = /^([0-9]{3})+( )+([0-9]{3})+( )+([0-9]{4})$/;

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
            toast.error("Por favor corrige los errores.");
            setErrores(nuevosErrores);
            return;
        }

        const payload = {
            nombre,
            apellido,
            usuario,
            contra,
            ...(formaContacto === "email" && { email: correoTel }),
            // Aqui se eliminan los espacios dentro del numero
            ...(formaContacto === "telefono" && { numero_tel: correoTel.replace(/\s+/g, '')})
        };

        try {
            await registrarUsuario(payload);
            toast.success("Registro exitoso");
            navigate("/login");
        } catch (error: any) {
            toast.error(error.message);
        }
    };

    useEffect(() => {
        const verificarUsuario = async () => {
            try {
                const data = await verificarTipoUsuario();
                const tipoUsuario = data.user.tipo_usuario;
                if (tipoUsuario !== "admin") {
                    navigate("/");
                }
            } catch (error) {
                navigate("/login");
            }
        };

        verificarUsuario();
    }, [navigate]);

    // Datos estaticos para ver el diseño
    const totalProductos = 234;

    useEffect(() => {
        const fetchTotal = async () => {
            try {
                const result = await TotalProductosHoy();
                setProductos(result);
            } catch (error) {
                console.error("Error al cargar el total no. de ventas", error);
            }
        };
        fetchTotal();
    }, []); 

    // Función para obtener el total de ventas del día de hoy
    useEffect(() => {
        const fetchTotal = async () => {
            try {
                const result = await TotalVentasHoy();
                setVentas(result);
            } catch (error) {
                console.error("Error al cargar el total no. de ventas", error);
            }
        };
        fetchTotal();
    }, []); 
    // Función para obtener el total de pedidos del día de hoy
    useEffect(() => {
        const fetchTotal = async () => {
            try {
                const resul = await TotalPedidosHoy();
                setTotalPedidos(resul);
            } catch (error) {
            console.error("Error al cargar el total no. de Pedidos", error)
            }
        }
        fetchTotal();
    }, []);

    // Función para obtener la información de los pedidos recientes en la BD
    useEffect(() => {
        const fetchPedidos = async () => {
        try {
            const data = await obtenerPedidos();
            setPedidos(data);
        } catch (error) {
            console.error("Error al cargar pedidos:", error);
        }
        };

        fetchPedidos();
    }, []);

    const handleLogout= () => {
            localStorage.removeItem("token");
            localStorage.removeItem("usuario");
            clearTipoUsuario();
            navigate('/'); // No hay pedido incompleto, va directo
    };      
    
    return(
    // Fondo Cafe
    <div className="flex flex-col h-screen w-full bg-[#9C6644] opacity-95 overflow-hidden">
        <main className="flex flex-row h-full w-full gap-10 p-8">
            {/*Sección izquierda de las herramientas */}
            <div className="flex flex-col gap-2 w-1/4 h-auto  items-left ">
                <div className="flex flex-row p-6 gap-2 bg-white shadow-md items-center">
                    <img
                        src={icon_usuario}
                        className="w-12 h-12 p-1 rounded-full border border-gray-200"
                    />
                    <p className="font-Montserrat font-bold text-xl text-[#34251d] "> {Usuario} </p>  
                </div>
                
                
                {/*Contenedor de las Opciones aplicando interpolación de clases*/}
                <div className="font-Montserrat flex flex-col p-4 w-full h-full items-left justify-between shadow-2xl bg-white justify-left text-left gap-4 ">
                    <div className="flex flex-col gap-4">
                        {/*Boton Dashboard */}
                    { Opcion === 'Dashboard' ? (
                        // Elemento al ser seleccionado
                        <div className="flex flex-row items-left gap-2 p-4 shadow-md bg-[#c49475] border-l-4 border-l-[#814721]">
                            <div className="w-10 h-10 bg-gray-500"></div>
                            <button
                            onClick={() => setOpcion('Dashboard')} 
                            className="w-full h-full text-left font-bold text-[#34251d]"> Dashboard 
                            </button>
                        </div>
                    ) : (
                        // Elemento al no ser seleccionado
                        <div className="flex flex-row items-left gap-2 p-4 shadow-md bg-white hover:bg-[#c49475] group focus-within:bg-[#a3968c] focus-within:border-l-4 focus-within:border-l-[#814721] border-l-4 border-l-transparent">
                            <div className="w-10 h-10 bg-gray-500"></div>
                            <button
                            onClick={() => setOpcion('Dashboard')} 
                            className="w-full h-full text-left font-bold text-[#34251d]"> Dashboard 
                            </button>
                        </div>
                    )}
                    

                    {/*Boton Productos */}
                    { Opcion === 'Empleados' ? (
                        // Elemento al ser seleccionado     
                        <div className="flex flex-row items-left gap-2 p-4 shadow-md bg-[#c49475] border-l-4 border-l-[#814721]">
                            <div className="w-10 h-10 bg-gray-500"></div>
                            <button
                            onClick={() => setOpcion('Empleados')} 
                            className="w-full h-full text-left font-bold text-[#34251d]"> Empleados 
                            </button>
                        </div>
                    ) : (
                        // Elemento al no ser seleccionado
                        <div className="flex flex-row items-left gap-2 p-4 shadow-md bg-white hover:bg-[#c49475] group focus-within:bg-[#a3968c] focus-within:border-l-4 focus-within:border-l-[#814721] border-l-4 border-l-transparent">
                            <div className="w-10 h-10 bg-gray-500"></div>
                            <button
                            onClick={() => setOpcion('Empleados')} 
                            className="w-full h-full text-left font-bold text-[#34251d]"> Empleados 
                            </button>
                        </div>
                    )}
                     
                    {/*Boton clientes para checar nuestro clientes */}
                    { Opcion === 'Estadisticas' ? (
                        // Elemento al ser seleccionado
                        <div className="flex flex-row items-left gap-2 p-4 shadow-md bg-[#c49475] border-l-[#814721] border-l-4 ">
                            <div className="w-10 h-10 bg-gray-500"></div>
                            <button
                            onClick={() => setOpcion('Estadisticas')} 
                            className="w-full h-full text-left font-bold text-[#34251d]"> Estadisticas 
                            </button>
                        </div>
                    ) : (
                        // Elemento al no ser seleccionado      
                        <div className="flex flex-row items-left gap-2 p-4 shadow-md bg-white hover:bg-[#c49475] group focus-within:bg-[#a3968c] focus-within:border-l-4 focus-within:border-l-[#814721] border-l-4 border-l-transparent">
                            <div className="w-10 h-10 bg-gray-500"></div>
                            <button
                            onClick={() => setOpcion('Estadisticas')} 
                            className="w-full h-full text-left font-bold text-[#34251d]"> Estadisticas 
                            </button>
                        </div>
                    )}
                    
                    </div>
                    <div>
                        {/*Boton cerrar sesión*/} 
                        <div className="flex flex-row items-left gap-2 p-4 bottom-0 shadow-md bg-white hover:bg-[#c49475] group focus-within:bg-[#a3968c] focus-within:border-l-4 focus-within:border-l-[#814721] border-l-4 border-l-transparent">
                        <div className="w-10 h-10 bg-gray-500"></div>
                        <button
                        onClick={handleLogout} 
                        className="w-full h-full text-left font-bold text-[#34251d]"> Cerrar sesión
                        </button>
                        </div>
                    </div>
                    
                </div>
            </div>
            
            {/*Sección derecha, se encontrarán los form*/}
            <div className="font-Montserrat flex flex-col w-3/4 h-auto items-center shadow-xl bg-white p-10 ">
                { Opcion === 'Dashboard' && (
                    <div className="flex flex-col w-full h-full">
                        <div className="flex flex-col w-full h-1/3 gap-6"> 
                            <div className="flex flex-col">
                                <p className="font-bold text-3xl text-[#34251d]">Dashboard</p>
                            </div>
                            <div className="flex flex-col gap-2">
                                <p className="font-bold text-md text-[#34251d] opacity-90"> En las ultimas 24 horas </p>
                                <div className="flex flex-row gap-2">
                                    <div className="flex flex-row w-1/3 h-auto shadow-xl bg-[#7F5539] rounded-2xl text-left p-6">
                                        <div className="flex flex-row min-w-full w-1/2 h-full gap-4 font-semibold">
                                            <div className="flex flex-col text-left gap-1">
                                                <p className="text-md text-white"> Total ventas </p>
                                                <p className="text-2xl text-white font-bold"> {Ventas?.toLocaleString("es-MX", { style: "currency", currency: "MXN" })} </p>
                                            </div> 
                                        </div>                           
                                    </div>


                                    <div className="flex flex-row w-1/3 h-auto shadow-xl bg-[#7F5539] rounded-2xl text-left p-6">
                                        <div className="flex flex-row min-w-full w-1/2 h-full gap-4 font-semibold">
                                            <div className="flex flex-col text-left gap-1">
                                                <p className="text-md text-white"> Total pedidos </p>
                                                <p className="text-2xl text-white font-bold"> {TotalPedidos} </p>
                                            </div> 

                                        </div>                           
                                    </div>

                                    <div className="flex flex-row w-1/3 h-auto shadow-xl bg-[#7F5539] rounded-2xl text-left p-6">
                                        <div className="flex flex-row min-w-full w-1/2 h-full gap-4 font-semibold">
                                            <div className="flex flex-col text-left gap-1">
                                                <p className="text-md text-white"> Productos vendidos </p>
                                                <p className="text-2xl text-white font-bold"> {Productos} </p>
                                            </div> 

                                        </div>                           
                                    </div>
                                </div>    
                            </div>{/*Fin de la fila de datos */}
                        </div>
                        <div className="flex flex-col min-w-full h-full pt-6 gap-2">
                            <p className="font-bold text-md text-[#34251d] opacity-90"> Ultimas ordenes </p>
                            <div className="flex flex-col overflow-x-auto h-2/3 min-w-full shadow-xl bg-white">
                                <table className="min-w-full bg-white shadow-md rounded-lg overflow-hidden">
                                <thead className="bg-[#7F5539] text-white sticky top-0">
                                    <tr>
                                    <th className="py-2 px-4 text-left">No. Pedido</th>
                                    <th className="py-2 px-4 text-left">Cliente</th>
                                    <th className="py-2 px-4 text-left">Total</th>
                                    <th className="py-2 px-4 text-left">Fecha</th>
                                    <th className="py-2 px-4 text-left">Estado</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {pedidos.map((pedido) => (
                                    <tr key={pedido.id_pedido} className="border-b hover:bg-gray-100">
                                        <td className="py-2 px-4">{pedido.id_pedido}</td>
                                        <td className="py-2 px-4">{pedido.usuario.nombre}</td>
                                        <td className="py-2 px-4">{pedido.total?.toLocaleString("es-MX", { style: "currency", currency: "MXN" })}</td>
                                        <td className="py-2 px-4">{pedido.fecha}</td>
                                        <td className="py-2 px-4">
                                        <span className={`
                                            px-2 py-1 rounded-full text-xs font-semibold
                                            ${pedido.status === "completado" ? "bg-green-200 text-green-800" : ""}
                                            ${pedido.status === "pendiente" ? "bg-yellow-200 text-yellow-800" : ""}
                                        `}>
                                            {pedido.status}
                                        </span>
                                        </td>
                                    </tr>
                                    ))}
                                </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                )}

                {Opcion === 'Empleados' && (
                    <div className="font-Montserrat flex flex-col w-full h-auto bg-[#dde5b6] shadow-xl">
                        <div className="w-full h-10 bg-[#6c584c] p-2 font-bold text-white text-center ">
                            <p>PANEL ADMINISTRADOR EMPLEADOS</p>
                        </div>
                        {/*Tipo navbar */}
                        <header className="flex flex-row w-full h-auto bg-gray-300">
                            <div className="w-1/2 h-auto text-left">
                                <button className="w-1/4 h-10 bg-[#a98467] font-bold text-white hover:bg-[#8a5a44]">
                                    Nuevo
                                </button>
                                <button className="w-1/4 h-10 bg-[#a98467] font-bold text-white hover:bg-[#8a5a44]">
                                    Editar
                                </button>
                                <button className="w-1/4 h-10 bg-[#a98467] font-bold text-white hover:bg-[#8a5a44]">
                                    Eliminar
                                </button>
                                <button className="w-1/4 h-10 bg-[#a98467] font-bold text-white hover:bg-[#8a5a44]">
                                    Consultar
                                </button>
                            </div>
                            <div className="w-1/2 h-auto text-right">
                                <button className="w-1/4 h-10 bg-[#adc178] font-bold text-white hover:bg-[#94a764]">
                                    Guardar
                                </button>
                                <button className="w-1/4 h-10 bg-[#972d07] font-bold text-white hover:bg-[#852908]">
                                    Cancelar
                                </button>
                            </div>
                        </header>
                        {/* Resto de la pantalla */}   
                        <div className="flex flex-col font-semibold w-full h-full text-left items-center min-h-full min-w-full p-8">
                            <div className="grid grid-cols-2 gap-x-8 gap-y-4">

                                {/* No° Empleado (columna completa) */}
                                <div className="col-span-2">
                                    <label className="block mb-1">No° Empleado</label>
                                    <input
                                        type="text"
                                        placeholder="123"
                                        className="w-full px-3 py-2 rounded-sm focus:outline-none focus:ring focus:ring-[#3B2B26]"
                                    />
                                </div>

                                {/* Nombre */}
                                <div className="">
                                    <label className="block mb-1">Nombre</label>
                                    <input
                                        type="text"
                                        placeholder="Nombre:"
                                        className="w-full px-3 py-2 rounded-sm focus:outline-none focus:ring focus:ring-[#3B2B26]"
                                    />
                                </div>

                                {/* Apellido */}
                                <div className="">
                                    <label className="block mb-1">Apellido</label>
                                    <input
                                        type="text"
                                        placeholder="Apellido:"
                                        className="w-full px-3 py-2 rounded-sm focus:outline-none focus:ring focus:ring-[#3B2B26]"
                                    />
                                </div>
                                
                                {/* Usuario */}
                                <div className="">
                                    <label className="block mb-1">Usuario</label>
                                    <input
                                        type="text"
                                        placeholder="Usuario:"
                                        className="w-full px-3 py-2 rounded-sm focus:outline-none focus:ring focus:ring-[#3B2B26]"
                                    />
                                </div>

                                {/* Contraseña */}
                                <div className="">
                                    <label className="block mb-1">Contraseña</label>
                                    <input
                                        type="password"
                                        placeholder="Contraseña"
                                        className="w-full px-3 py-2 rounded-sm focus:outline-none focus:ring focus:ring-[#3B2B26]"
                                    />
                                </div>

                                {/* Contacto correo - telefono */}
                                <div className="col-span-2">
                                    <label className="block mb-1">Contacto</label>
                                    <div className="grid grid-cols-2 gap-4">
                                        <select className="px-3 py-2 rounded-md w-full focus:outline-none focus:ring focus:ring-[#3B2B26]">
                                        <option value="">Seleccione...</option>
                                        <option value="telefono">Teléfono</option>
                                        <option value="correo">Correo</option>
                                        </select>
                                        <input
                                        type="text"
                                        placeholder="ejemplo@correo.com"
                                        className="w-full px-3 py-2 rounded-sm focus:outline-none focus:ring focus:ring-[#3B2B26]"
                                        />
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>
                )}

                {Opcion === 'Estadisticas' && (
                    <div className="flex flex-col w-full h-full bg-red-200">
                        
                    </div>
                )}
            </div>

        </main>
    </div>
    );
};

export default Admin_Inicio;