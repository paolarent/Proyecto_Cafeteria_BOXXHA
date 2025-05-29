import icon_usuario from "../assets/Iconos/usuario.png";
import { useState, useEffect} from "react";
import { useNavigate } from "react-router-dom";
import { verificarTipoUsuario } from "../services/authService";
import { toast, Toaster } from 'react-hot-toast'; //Importar react-hot-toast para las notificaciones
import { getImagenCarrito } from "../data/imagenesCarrito.ts"; 

// Importación de graficos/modales
import GraficoVentas  from '../components/Graficos';
import ModalConfirmCRUD from '../components/ModalConfirmCRUD.tsx';
import GraficoBarras_CategoriaVentas  from '../components/GraficoBarrasInv.tsx';
import TablaRendimiento from "../components/TablaRendimiento.tsx";

// Importación de los servicios
import { actualizarStatus, actualizarEmpleado, obtenerPedidos, TotalPedidosHoy, TotalVentasHoy, TotalProductosHoy, obtenerEmpleados } from "../services/dashServices";
import { ProductoEstrella, Ventas_Categoria } from "../services/statsService.ts";

import { registrarUsuario_test } from "../services/authService"; //Función para realziar el registro
import { useAuth } from "../contexts/AuthContext"; // Usamos el hook para acceder a la autenticación 

//Importacion de ICONS
import dashboard from "../assets/Iconos/dashboard.png";
import empleadosicon from "../assets/Iconos/empleados.png";
import estadisticas from "../assets/Iconos/estadisticas.png";
import cerrar_sesion from "../assets/Iconos/cerrarsesion.png";
import control1 from "../assets/Iconos/retroceso.png";
import control2 from "../assets/Iconos/retroceso2.png";
import control3 from "../assets/Iconos/avanzar_rapido.png";
import control4 from "../assets/Iconos/avanzar_rapido2.png";

/*
    To do list
    - Adaptar el modal de la andrea para confirmar si se desea editar, agregar, eliminar dicho usuario
    - Buscar y meter las estadisticas
        - Bedida / postre más vendido *traerme la img
        - Ventas por categoria pastel
        - Clientes mas frecuentes tabla
        - 
*/
const data_tabla_ejemplo: TablaRend[] =[
    { nombre: "Jorge", apellido: "Aguilar", ventas: 55},
    { nombre: "María", apellido: "López", ventas: 45 },
    { nombre: "Juan", apellido: "Pérez", ventas: 30 },
    { nombre: "Lucía", apellido: "Martínez", ventas: 27 },
    { nombre: "Lucía", apellido: "Martínez", ventas: 27 },
]

const data_barras_ejemplo: VentasCategorias[] = [
  { categoria: "Frappes", cant: 5000 },
  { categoria: "Beb. Calientes", cant: 3500 },
  { categoria: "Beb. Frías", cant: 4200 },
  { categoria: "Postres", cant: 6000 },
];
interface TablaRend {
    nombre: string,
    apellido: string,
    ventas: number,
};
const meses = [
  "Ene", "Feb", "Mar", "Abr",
  "May", "Jun", "Jul", "Ago",
  "Sep", "Oct", "Nov", "Dic"
];

interface VentasCategorias {
    categoria: string,
    cant: number,
}
interface Pedido {
    id_pedido: number;
    fecha: string;
    total: number;
    status: string;
    usuario: {
        nombre: string;
    }   
}
interface ProductoEstrella {
  tipo: string;
  nombre: string;
  sabor: string;
  imagen?: string;
}
interface Empleado {
  id_usuario: number;
  nombre: string;
  apellido: string;
  usuario: string;
  numero_tel?: string;
  email?: string;
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

    // Estados para manejar el modal
    const [showConfirmModal, setShowConfirmModal] = useState(false);

    // Estado para manejar los datos del formulario
    const [formaContacto, setFormaContacto] = useState("");
    const [id_usuario, setId_Usuario] = useState(0);
    const [correoTel, setCorreoTel] = useState("");
    const [nombre, setNombre] = useState("");
    const [apellido, setApellido] = useState("");
    const [usuario, setUsuario] = useState("");
    const [contra, setContra] = useState("");
    const { clearTipoUsuario } = useAuth();

    // Estados exclusivos del dashboard
    const [modo, setModo] = useState("consulta"); // valores: "agregar", "editar", "consulta", "eliminar" 
    const [empleados, setEmpleados] = useState<Empleado[]>([]);
    const [indiceActual, setIndiceActual] = useState(0);

    // Estados de estadisitcas
    const [productoEstrella, setProductoEstrella] = useState<ProductoEstrella | null>(null);
    const [VentasCategoria, setVentasCategorias] = useState<VentasCategorias[]>([]);
    const [anio, setAnio] = useState(2025);
    const [trimestre, setTrimestre] = useState(0);
    const [mes, setMes] = useState(0);

    const [errores, setErrores] = useState({
        nombre: "",
        apellido: "",
        usuario: "",
        correoTel: "",
        contra: "",
    });
    // Cambiar el regex del telefono 
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const telefonoRegex = /^([0-9]{3})+( )+([0-9]{3})+( )+([0-9]{4})$/;

    

    const handleSubmit = async (e?: React.FormEvent) => {
        if (e) e.preventDefault();
        const nuevosErrores = {
            nombre: nombre.trim() === "" ? "Campo obligatorio" : "",
            apellido: apellido.trim() === "" ? "Campo obligatorio" : "",
            usuario: usuario.trim() === "" ? "Campo obligatorio" : "",
            contra:
            modo === "agregar" && contra.trim() === ""
                ? "Campo obligatorio"
                : "",
            correoTel: correoTel.trim() === ""
                ? "Campo obligatorio"
                : formaContacto === "email" && !emailRegex.test(correoTel)
                ? "Formato de correo inválido"
                : formaContacto === "telefono" && !telefonoRegex.test(correoTel)
                ? "Formato de teléfono inválido"
                : "",
        };

        console.log(errores);
        console.log("modo:", modo);
        console.log("1:", nombre, " 2:", apellido, " 3:", usuario, " 4:", contra, " 5:", correoTel )
        setErrores(nuevosErrores);
        if (Object.values(nuevosErrores).some((msg) => msg !== "")) {
            toast.error("Por favor corrige los errores.");
            setErrores(nuevosErrores);
            return;
        }
        setShowConfirmModal(true);

    };

    // Función para que se cierre solo el modal cuando se realiza el submit
    const accionPendiente = async () => {
        setShowConfirmModal(false);
            
        if (modo === "agregar") {
            const tpo_usuario = "empleado"
            const payload = {
                nombre,
                apellido,
                usuario,
                ...(contra && { contra }), // Solo incluir contra si tiene valor
                ...(formaContacto === "email" && { email: correoTel }),
                ...(formaContacto === "telefono" && { numero_tel: correoTel.replace(/\s+/g, '')}),
                ...(modo === "agregar" && { tpo_usuario }),
            };
            try {
                await registrarUsuario_test(payload);
                const datosActualizados = await obtenerEmpleados();
                setEmpleados(datosActualizados);
                toast.success("Registro exitoso");
                limpiarInputs();
                
            } catch (error: any) {
                toast.error(error.message);
                limpiarInputs();
            }        
            return;
        
        // EDITAR
        } else if (modo === "editar") {
                const payload = {
                    nombre,
                    apellido,
                    usuario,
                    correoTel,
                };
                const id = id_usuario;
                console.log("Editando....", "id", id, "payload", payload)
                
                try {
                    await actualizarEmpleado(id, payload);
                    const datosActualizados = await obtenerEmpleados();
                    setEmpleados(datosActualizados);
                    toast.success("Actualización exitosa");
                    limpiarInputs();
                    
                } catch (error: any) {
                    toast.error(error.message);
                    limpiarInputs();
                }   
                return;
        // ELMINAR
        } else if (modo === "eliminar") {
            try{
                    await actualizarStatus(id_usuario, 'B');
                    const datosActualizados = await obtenerEmpleados();
                    setEmpleados(datosActualizados);
                    toast.success("Se elimino correctamente");
                    limpiarInputs();
                } catch (error: any){
                    toast.error(error.message);
                    limpiarInputs();
                }
                return;
                
            } else if (modo === "consulta") {
                buscarEmpleadoPorId(id_usuario);
                return;
        // CONSULTA
        } else if (modo === "consulta") {
            RellenarDatosEmpleado();
            return;
        }
    };

    // Esta función regresa el telefono con el formato ### ### ####
    const formatearTelefono = (numero: string) => {
        const limpio = numero.replace(/\D/g, "");
        return limpio.replace(/(\d{3})(\d{3})(\d{4})/, "$1 $2 $3");
    };

    // Funciónes de navegación
    const limpiarInputs = () => {
        setId_Usuario(0);
        setFormaContacto("");
        setCorreoTel("");
        setNombre("");
        setApellido("");
        setUsuario("");
        setContra("");
    };
    const irAlPrimero = () => {
        setIndiceActual(0);
    };

    const irAlAnterior = () => {
        setIndiceActual((prev) => (prev > 0 ? prev - 1 : empleados.length - 1));
    };

    const irAlSiguiente = () => {
        setIndiceActual((prev) => (prev < empleados.length - 1 ? prev + 1 : 0));
    };

    const irAlUltimo = () => {
        setIndiceActual(empleados.length -1);
    };
    // Función para rellenar los datos de los empleados al consultar
    const RellenarDatosEmpleado = () => {
        const empleado = empleados[indiceActual];
        if (!empleado) return;
        setId_Usuario(empleado.id_usuario || 1);
        setNombre(empleado.nombre || "");
        setApellido(empleado.apellido || "");
        setUsuario(empleado.usuario || "");
        if (empleado.email) {
            setFormaContacto("email");
            setCorreoTel(empleado.email);
        } else if (empleado.numero_tel) {
            setFormaContacto("telefono");
            setCorreoTel(formatearTelefono(empleado.numero_tel));
        } else {
            setFormaContacto("");
            setCorreoTel("");
        }
    };
    
    // Función para el rellenado automatico del form
    useEffect(() => {
        if (empleados.length > 0 && modo === 'consulta') {
            RellenarDatosEmpleado();
        }
    }, [indiceActual, empleados]);

    //función para obtener el producto estrella
    const obtenerProductoEstrellaConImagen = async (): Promise<ProductoEstrella | null> => {
        console.log("Entrando a obtener producto estrella")
        try {
            const producto = await ProductoEstrella(); // backend
            if (!producto.tipo || !producto.nombre) return null;
            const imagen = getImagenCarrito(producto.tipo, producto.nombre);
            console.log(producto)
            return { ...producto, imagen };
        } catch (error) {
            console.error("Error al obtener producto estrella:", error);
            return null;
        }
    };

    // Función para obtener los datos de las vetnas por categoria
    useEffect(() => {
        const VentasCategoria= async () => {
            const resultado = await Ventas_Categoria();
            if (resultado) setVentasCategorias(resultado);
        };
        VentasCategoria();
    }, []);

    useEffect(() => {
        const obtenerProducto = async () => {
            const resultado = await obtenerProductoEstrellaConImagen();
            if (resultado) setProductoEstrella(resultado);
        };
        obtenerProducto();
    }, []);

    const buscarEmpleadoPorId = (id: number) => {

        const indice = empleados.findIndex(emp => emp.id_usuario === id);

        if (indice !== -1) {
            setIndiceActual(indice);
            const empleado = empleados[indice];

            setNombre(empleado.nombre);
            setApellido(empleado.apellido);
            setUsuario(empleado.usuario);
            if (empleado.email) {
                setFormaContacto("email");
                setCorreoTel(empleado.email);
            } else if (empleado.numero_tel) {
                setFormaContacto("telefono");
                setCorreoTel(formatearTelefono(empleado.numero_tel));
            } else {
                setCorreoTel("");
            }

            toast.success("Empleado encontrado");
        } else {
            toast.error("Empleado no encontrado");
        }
    };
    // Función para obtener los empleados
    useEffect(() => {
        const obtenerDatos = async () => {
            try{
                const datos = await obtenerEmpleados();
                setEmpleados(datos);
            } catch (error){
                console.error("Error al cargar los empleados", error);
            }
            
        };

        obtenerDatos();
    }, []);

    // Función para verificar que el usuario si sea el admin
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
    
    // Función para obtener el total de productos vendidos del día de hoy
    useEffect(() => {
        const fetchTotal = async () => {
            try {
                const result = await TotalProductosHoy();
                setProductos(result);
            } catch (error) {
                console.error("Error al cargar el total no. de productos", error);
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
    <div className="flex flex-col h-screen w-full bg-[#B0CEAC] opacity-95 overflow-hidden">
        <main className="flex flex-row h-full w-full gap-10 p-8">
            {/*Sección izquierda de las herramientas */}
            <div className="flex flex-col gap-2 w-1/4 h-auto  items-left">
                <div className="flex flex-row p-6 gap-2 bg-white space-x-2 shadow-md items-center rounded-xl">
                    <img
                        src={icon_usuario}
                        className="w-12 h-12 p-1 rounded-full border-2 border-[#311808]"
                    />
                    <p className="font-Montserrat font-black text-3xl text-[#311808]">{Usuario}</p>  
                </div>
                
                
                {/*Contenedor de las Opciones aplicando interpolación de clases*/}
                <div className="font-Montserrat flex flex-col p-4 w-full h-full items-left justify-between shadow-2xl bg-white justify-left text-left gap-4 rounded-xl">
                    <div className="flex flex-col gap-4">
                        {/*Boton Dashboard */}
                    { Opcion === 'Dashboard' ? (
                        // Elemento al ser seleccionado
                        <div className="flex flex-row items-left gap-2 p-4 shadow-md bg-[#B0CEAC] border-l-8 border-l-[#311808] rounded-xl">
                            {/**Esto de aqui simulaba el futuro icono */}
                            <img 
                                src={dashboard}
                                className="w-10 h-10 p-1" 
                            />
                            <button
                            onClick={() => setOpcion('Dashboard')} 
                            className="w-full h-full text-left text-xl font-bold text-black">Dashboard 
                            </button>
                        </div>
                    ) : (
                        // Elemento al no ser seleccionado
                        <div className="flex flex-row items-left gap-2 p-4 shadow-md bg-[#f4eae3] hover:bg-[#B0CEAC] group focus-within:bg-[#a3968c] 
                        focus-within:border-l-4 focus-within:border-l-[#814721] border-l-4 border-l-transparent rounded-xl">
                            <img 
                                src={dashboard}
                                className="w-10 h-10 p-1" 
                            />
                            <button
                            onClick={() => setOpcion('Dashboard')} 
                            className="w-full h-full text-left text-lg font-bold text-black">Dashboard 
                            </button>
                        </div>
                    )}
                    

                    {/*Boton Empleados */}
                    { Opcion === 'Empleados' ? (
                        // Elemento al ser seleccionado     
                        <div className="flex flex-row items-left gap-2 p-4 shadow-md bg-[#B0CEAC] border-l-8 border-l-[#311808] rounded-xl">
                            <img 
                                src={empleadosicon}
                                className="w-10 h-10 p-1" 
                            />
                            <button
                            onClick={() => setOpcion('Empleados')} 
                            className="w-full h-full text-left text-xl font-bold text-black">Empleados 
                            </button>
                        </div>
                    ) : (
                        // Elemento al no ser seleccionado
                        <div className="flex flex-row items-left gap-2 p-4 shadow-md bg-[#f4eae3] hover:bg-[#B0CEAC] group focus-within:bg-[#a3968c]
                        focus-within:border-l-4 focus-within:border-l-[#814721] border-l-4 border-l-transparent rounded-xl">
                            <img 
                                src={empleadosicon}
                                className="w-10 h-10 p-1" 
                            />
                            <button
                            onClick={() => setOpcion('Empleados')} 
                            className="w-full h-full text-left text-lg font-bold text-black">Empleados 
                            </button>
                        </div>
                    )}
                    
                    {/*Boton clientes para checar nuestro clientes */}
                    { Opcion === 'Estadisticas' ? (
                        // Elemento al ser seleccionado
                        <div className="flex flex-row items-left gap-2 p-4 shadow-md bg-[#B0CEAC] border-l-8 border-l-[#311808] rounded-xl">
                            <img 
                                src={estadisticas}
                                className="w-10 h-10 p-1" 
                            />
                            <button
                            onClick={() => setOpcion('Estadisticas')} 
                            className="w-full h-full text-left text-xl font-bold text-black">Estadisticas 
                            </button>
                        </div>
                    ) : (
                        // Elemento al no ser seleccionado      
                        <div className="flex flex-row items-left gap-2 p-4 shadow-md bg-[#f4eae3] hover:bg-[#B0CEAC] group focus-within:bg-[#a3968c] 
                        focus-within:border-l-4 focus-within:border-l-[#814721] border-l-4 border-l-transparent rounded-xl">
                            <img 
                                src={estadisticas}
                                className="w-10 h-10 p-1" 
                            />
                            <button
                            onClick={() => setOpcion('Estadisticas')} 
                            className="w-full h-full text-left text-lg font-bold text-black">Estadisticas 
                            </button>
                        </div>
                    )}
                    
                    </div>
                    <div>
                        {/* Botón cerrar sesión */}
                        <div onClick={handleLogout} className="flex items-center gap-2 p-4 bottom-0 shadow-md bg-[#f4eae3] hover:bg-[#B0CEAC] group 
                            focus-within:bg-[#a3968c] focus-within:border-l-4 focus-within:border-l-[#814721] border-l-4 border-l-transparent rounded-xl">
                            <img 
                                src={cerrar_sesion}
                                className="w-10 h-10 p-1" 
                            />
                            <button 
                                className="text-xl font-bold text-black flex items-center">
                                Cerrar sesión
                            </button>
                        </div>
                    </div>
                    
                </div>
            </div>
            
            {/* SECCION DE DASHBOARD ////////////////////////////////////////////////////////////////////////////////////////////////////////// */}
            
            <div className="font-Montserrat flex flex-col w-3/4 h-full overflow-y-auto items-center shadow-xl bg-[#f4eae3] p-10 py-8 pb-8 rounded-xl">
                { Opcion === 'Dashboard' && (
                    <div className="flex flex-col w-full h-full">
                        <div className="flex flex-col w-full h-1/3 gap-6"> 
                            <div className="flex flex-col">
                                <p className="font-bold text-4xl text-[#311808]">DASHBOARD</p>
                            </div>

                            <div className="flex flex-col gap-2">
                                <p className="font-bold text-lg text-black ml-2">En las ultimas 24 horas</p>
                                <div className="flex flex-row gap-2">

                                    <div className="flex flex-row w-1/3 h-auto shadow-xl bg-[#311808] rounded-2xl text-left p-6">
                                        <div className="flex flex-row min-w-full w-1/2 h-full gap-4 font-semibold">
                                            <div className="flex flex-col text-left gap-1">
                                                <p className="text-2xl font-bold text-white">Total de ventas</p>
                                                <p className="text-2xl text-white font-bold"> {Ventas?.toLocaleString("es-MX", { style: "currency", currency: "MXN" })} </p>
                                            </div> 
                                        </div>                           
                                    </div>


                                    <div className="flex flex-row w-1/3 h-auto shadow-xl bg-[#311808] rounded-2xl text-left p-6">
                                        <div className="flex flex-row min-w-full w-1/2 h-full gap-4 font-semibold">
                                            <div className="flex flex-col text-left gap-1">
                                                <p className="text-2xl font-bold text-white">Total de pedidos</p>
                                                <p className="text-2xl text-white font-bold">{TotalPedidos}</p>
                                            </div> 

                                        </div>                           
                                    </div>

                                    <div className="flex flex-row w-1/3 h-auto shadow-xl bg-[#311808] rounded-2xl text-left p-6">
                                        <div className="flex flex-row min-w-full w-1/2 h-full gap-4 font-semibold">
                                            <div className="flex flex-col text-left gap-1">
                                                <p className="text-2xl font-bold text-white">Productos vendidos</p>
                                                <p className="text-2xl text-white font-bold">{Productos}</p>
                                            </div> 

                                        </div>                           
                                    </div>
                                </div>   
                                
                            </div>{/*Fin de la fila de datos */}
                        </div>
                        
                        <div className="flex flex-col min-w-full h-full pt-6 gap-2 mt-14 mb-8">
                            <p className="font-bold text-lg text-black ml-2">Ultimas ordenes</p>
                            
                            <div className="flex flex-col flex-grow min-w-full shadow-xl bg-white max-h-[calc(100%-2rem)]">
                                <table className="min-w-full bg-white shadow-md rounded-lg overflow-hidden">
                                    <thead className="bg-[#311808] text-white sticky top-0 z-10">
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
                                                <td className="py-2 font-semibold px-4">{pedido.id_pedido}</td>
                                                <td className="py-2 font-semibold px-4">{pedido.usuario.nombre}</td>
                                                <td className="py-2 font-semibold px-4">{pedido.total?.toLocaleString("es-MX", { style: "currency", currency: "MXN" })}</td>
                                                <td className="py-2 font-semibold px-4">{pedido.fecha}</td>
                                                <td className="py-2 px-4">
                                                    <span className={`
                                                        px-2 py-1 rounded-full text-sm font-semibold
                                                        ${pedido.status === "entregado" ? "bg-green-200 text-green-800" : ""}
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

                {/* SECCION DE EMPLEADOS ////////////////////////////////////////////////////////////////////////////////////////////////////////// */}

                {Opcion === 'Empleados' && (
                    <div className="font-Montserrat flex flex-col w-full h-auto bg-[#B0CEAC] shadow-xl rounded-xl">
                        <div className="w-full h-14 bg-[#311808] p-4 font-bold text-white text-xl text-center rounded-t-xl">
                            <p>PANEL ADMINISTRADOR EMPLEADOS</p>
                        </div>
                        {/*Tipo navbar */}
                        <header className="flex flex-row w-full h-auto bg-[#f0ead2] justify-between gap-4">
                            {/*Seccion inzquierda */}
                            <div className="w-1/2 h-auto text-left">
                                {/*AGREGAR*/}
                                <button 
                                onClick={() => {
                                    if(modo !== "agregar"){
                                        limpiarInputs();
                                    }
                                    setModo("agregar");
                                }}
                                className={`w-1/4 h-10 font-bold text-white text-lg 
                                ${modo === "agregar" ? "bg-[#8a5a44]" : "bg-[#927c6e] hover:bg-[#8a5a44]"}`}>
                                    Nuevo
                                </button>

                                {/*EDITAR*/}
                                <button 
                                onClick={() => {
                                    if(modo !== "editar"){
                                        limpiarInputs();
                                    }
                                    setModo("editar");
                                }}
                                className={`w-1/4 h-10 font-bold text-white text-lg 
                                ${modo === "editar" ? "bg-[#8a5a44]" : "bg-[#927c6e] hover:bg-[#8a5a44]"}`}>
                                    Editar
                                </button>

                                {/*ELIMINAR*/}
                                <button 
                                onClick={() => {
                                    if(modo !== "eliminar"){
                                        limpiarInputs();
                                    }
                                    setModo("eliminar");
                                }}
                                className={`w-1/4 h-10 font-bold text-white text-lg 
                                ${modo === "eliminar" ? "bg-[#8a5a44]" :"bg-[#927c6e] hover:bg-[#8a5a44]"}`}>
                                    Eliminar
                                </button>
                                
                                {/*CONSULTARS*/}
                                <button onClick={() => {
                                    if(modo !== "consulta"){
                                        limpiarInputs();
                                        setIndiceActual(0);
                                        RellenarDatosEmpleado();
                                    }
                                    setModo("consulta");
                                }}
                                className={`w-1/4 h-10 font-bold text-white text-lg 
                                ${modo === "consulta" ? "bg-[#8a5a44]" : "bg-[#927c6e] hover:bg-[#8a5a44]"}`}>
                                    Consultar
                                </button>
                            </div>
                            
                            {/*Seccion central */}
                            {/*Los botones de navegación solo estan disponibles en modo consulta */}
                            <div className="flex w-1/4 h-10 items-center">
                                
                                <button disabled={modo !== "consulta"} 
                                    onClick={() => {
                                        irAlPrimero();
                                    }}
                                    className="flex-1 h-full bg-[#f0ead2] transform transition-transform duration-300 hover:scale-105">

                                    <img src={control4} alt="ir a primero" className="h-full mx-auto" />
                                </button>

                                <button disabled={modo !== "consulta"} 
                                    onClick={() => {
                                        irAlAnterior();
                                    }}
                                    className="flex-1 h-full bg-[#f0ead2] transform transition-transform duration-300 hover:scale-105">

                                    <img src={control1} alt="ir a anterior" className="h-6 mx-auto" />
                                </button>

                                <button disabled={modo !== "consulta"} 
                                    onClick={() => {
                                        irAlSiguiente();
                                    }}
                                    className="flex-1 h-full bg-[#f0ead2] transform transition-transform duration-300 hover:scale-105">

                                    <img src={control2} alt="ir a siguiente" className="h-6 mx-auto" />
                                </button>

                                <button disabled={modo !== "consulta"} 
                                    onClick={() => {
                                        irAlUltimo();
                                    }}
                                    className="flex-1 h-full bg-[#f0ead2] transform transition-transform duration-300 hover:scale-105">

                                    <img src={control3} alt="ir al ultimo" className="h-full mx-auto" />
                                </button>
                                    
                            </div>

                            {/*Seccion derecha */}
                            <div className="w-1/4 h-auto text-right">
                                <button 
                                form="formulario"
                                type="submit"
                                className="w-1/2 h-10 bg-[#3f5a3b] font-bold text-white text-lg hover:bg-[#94a764]">
                                    Realizar
                                </button>
                                <button 
                                disabled={modo === "consulta"}
                                onClick={() => {
                                    limpiarInputs();
                                }}
                                className="w-1/2 h-10 bg-[#671212] font-bold text-white text-lg hover:bg-[#c96a6a]">
                                    Cancelar
                                </button>
                            </div>
                        </header>

                        {/* PANTALLA CON EL FORMULARIO //////////////////////////////////////////////////////////////////*/}   
                        <div className="flex flex-col font-semibold w-full text-left items-start p-8">
                            <form  id="formulario" onSubmit={handleSubmit} className="grid grid-cols-2 gap-x-8 gap-y-4">
                                {/* No. Empleado este elemento se escondera o no dependiendo de la opción seleccionada*/}
                                {modo !== 'agregar' && (
                                <div className="col-span-2">
                                    <label className="block mb-1 text-lg font-bold">No° Empleado</label>
                                    <input
                                        type="text" 
                                        placeholder="123"
                                        value={id_usuario === 0 ? "" : id_usuario}
                                        onChange={(e) => {
                                            const value = e.target.value;
                                            if (value === "") {
                                            setId_Usuario(0);
                                            } else {
                                            const parsed = parseInt(value, 10);
                                            if (!isNaN(parsed)) {
                                                setId_Usuario(parsed);
                                            }
                                            }
                                        }}
                                        onKeyDown={(e) => {
                                            if (e.key === 'Enter') {
                                            e.preventDefault(); 
                                            buscarEmpleadoPorId(id_usuario);
                                            }
                                        }}
                                        className="w-1/3 px-3 py-2 focus:outline-none focus:ring focus:ring-[#3B2B26] rounded-lg"
                                    />
                                </div>
                                )}  
                                

                                {/* Nombre */}
                                <div className="">
                                    <label className="block mb-1 text-lg font-bold">Nombre</label>
                                    <input
                                        type="text"
                                        placeholder="Nombre:"
                                        value={nombre}
                                        disabled={modo === "consulta" || modo === "eliminar"}
                                        onChange={(e) => setNombre(e.target.value)}
                                        className={`w-full px-3 py-2 rounded-lg focus:outline-none focus:ring focus:ring-[#3B2B26]
                                            ${modo === 'consulta' ? 'bg-gray-100 text-gray-500 cursor-not-allowed' : ''}
                                            ${modo === 'eliminar' ? 'bg-gray-100 text-gray-500 cursor-not-allowed' : ''}
                                            ${errores.nombre ? 'border-red-500' : 'border-gray-300'}`}
                                    />
                                    {errores.nombre && <p className="text-red-500 text-xs">{errores.nombre}</p>}
                                </div>

                                {/* Apellido */}
                                <div className="">
                                    <label className="block mb-1 text-lg font-bold">Apellido</label>
                                    <input
                                        type="text"
                                        placeholder="Apellido:"
                                        value={apellido}
                                        disabled={modo === "consulta" || modo === "eliminar"}
                                        onChange={(e) => setApellido(e.target.value)}
                                        className={`w-full px-3 py-2 rounded-lg focus:outline-none focus:ring focus:ring-[#3B2B26]
                                            ${modo === 'consulta' ? 'bg-gray-100 text-gray-500 cursor-not-allowed' : ''}
                                            ${modo === 'eliminar' ? 'bg-gray-100 text-gray-500 cursor-not-allowed' : ''}
                                            ${errores.nombre ? 'border-red-500' : 'border-gray-300'}`}
                                    />
                                    {errores.apellido && <p className="text-red-500 text-xs">{errores.apellido}</p>}
                                </div>
                                
                                {/* Usuario */}
                                <div className="">
                                    <label className="block mb-1 text-lg font-bold">Usuario</label>
                                    <input
                                        type="text"
                                        placeholder="Usuario:"
                                        value={usuario}
                                        disabled={modo === "consulta " || modo === "eliminar"}
                                        onChange={(e) => setUsuario(e.target.value)}
                                        className={`w-full px-3 py-2 rounded-lg focus:outline-none focus:ring focus:ring-[#3B2B26]
                                            ${modo === 'consulta' ? 'bg-gray-100 text-gray-500 cursor-not-allowed' : ''}
                                            ${modo === 'eliminar' ? 'bg-gray-100 text-gray-500 cursor-not-allowed' : ''}
                                            ${errores.nombre ? 'border-red-500' : 'border-gray-300'}`}
                                    />
                                    {errores.usuario && <p className="text-red-500 text-xs">{errores.usuario}</p>}
                                </div>
                                {/* Contraseña */}
                                {modo === 'agregar' && (
                                <div >
                                    <label className="block mb-1 text-lg font-bold">Contraseña</label>
                                    <input
                                        type="password"
                                        placeholder="Contraseña"
                                        value={contra}
                                        onChange={(e) => setContra(e.target.value)}
                                        className={`w-full px-3 py-2 rounded-lg focus:outline-none focus:ring focus:ring-[#3B2B26]
                                        ${errores.contra ? 'border-red-500' : 'border-gray-300'}`}
                                    />
                                </div>
                                    
                                )} 
                                

                                {/* Contacto correo - telefono */}
                                <div className="col-span-2">
                                    <label className="block mb-1 text-lg font-bold">Contacto</label>
                                    <div className="grid grid-cols-2 gap-8">
                                    {modo !== 'consulta'  && (
                                    <select 
                                        value={formaContacto}
                                        disabled={modo === "consulta" || modo === "eliminar"}
                                        onChange={(e) => setFormaContacto(e.target.value)}
                                        className={`px-3 py-2 rounded-md w-full focus:outline-none focus:ring focus:ring-[#3B2B26] rounded-lg
                                        ${modo === 'eliminar' ? 'bg-gray-100 text-gray-500 cursor-not-allowed' : ''}`}>
                                        <option value="">Seleccione...</option>
                                        <option value="telefono">Teléfono</option>
                                        <option value="email">Correo</option>
                                    </select> )}
                                        <input
                                        type="text"
                                        placeholder={formaContacto === "email" ? "nombre@correo.com" 
                                                    : formaContacto === "telefono" ? "### ### ####" : "Email o Teléfono" }                                    
                                        value={correoTel}
                                        disabled={modo === "consulta" || modo === "eliminar"}
                                        onChange={(e) => setCorreoTel(e.target.value)}
                                                className={`w-full px-3 py-2 rounded-lg focus:outline-none focus:ring focus:ring-[#3B2B26]
                                                ${modo === 'consulta' ? 'bg-gray-100 text-gray-500 cursor-not-allowed' : ''}
                                                ${modo === 'eliminar' ? 'bg-gray-100 text-gray-500 cursor-not-allowed' : ''}
                                                ${errores.correoTel ? 'border-red-500' : 'border-gray-300'}`}
                                        />
                                    </div>
                                </div>

                            </form>
                        </div>
                    </div>
                )}

                {/* SELECCION DE ESTADISTICAS ////////////////////////////////////////////////////////////////////////// */}

                {Opcion === 'Estadisticas' && (
                    <div className="flex flex-row w-full h-full min-h-screen rounded-xl gap-4">
                        {/*Sección izquierda  Filtros*/}
                        <div className="flex flex-col w-auto h-screen min-w-1/4 gap-4 bg-white rounded-xl p-6 shadow-md">
                            <p className="text-2xl mb-2 font-bold">FILTRAR CONTENIDO</p>
                            <div>
                                <p className="text-lg mb-2 border-b-2 border-gray-200 font-bold">Año</p>
                                <div className="grid grid-cols-2 gap-2 font-bold"> 
                                    <button 
                                    onClick={() => {
                                        setAnio(2024);
                                    }}
                                    className={`rounded-md border-black border-2
                                    ${anio === 2024 ? "bg-[#9ab796]" : "hover:bg-[#9ab796]"}`}>
                                        
                                        2024
                                    </button>
                                    <button 
                                    onClick={() => {
                                        setAnio(2025);
                                    }}
                                    className={`rounded-md border-black border-2
                                    ${anio === 2025 ? "bg-[#9ab796]" : "hover:bg-[#9ab796]"}`}>                                    
                                    2025
                                    </button>
                                </div>
                            </div>
                            
                            <div>
                                <p className="text-lg mb-2 border-b-2 border-gray-200 font-bold">Trimestre</p>
                                <div className="grid grid-cols-2 gap-2 font-bold"> 
                                    <button 
                                    onClick={() => {
                                        setTrimestre(1)
                                        setMes(0);
                                    }}
                                    className={`rounded-md border-black border-2
                                    ${trimestre === 1 ? "bg-[#9ab796]" : "hover:bg-[#9ab796]"}`}>
                                        
                                        TR1
                                    </button>
                                    <button 
                                    onClick={() => {
                                        setTrimestre(2)
                                        setMes(0);
                                    }}
                                    className={`rounded-md border-black border-2
                                    ${trimestre === 2 ? "bg-[#9ab796]" : "hover:bg-[#9ab796]"}`}>
                                        
                                        TR2
                                    </button>
                                    <button 
                                    onClick={() => {
                                        setTrimestre(3)
                                        setMes(0);
                                    }}
                                    className={`rounded-md border-black border-2
                                    ${trimestre === 3 ? "bg-[#9ab796]" : "hover:bg-[#9ab796]"}`}>
                                        
                                        TR3
                                    </button>
                                    <button 
                                    onClick={() => {
                                        setTrimestre(4)
                                        setMes(0);
                                    }}
                                    className={`rounded-md border-black border-2
                                    ${trimestre === 4 ? "bg-[#9ab796]" : "hover:bg-[#9ab796]"}`}>
                                        
                                        TR4
                                    </button>
                                </div>
                            </div>
                        
                            <div>
                                <p className="text-lg mb-2 border-b-2 border-gray-200 font-bold"> Mes </p>
                                <div className="grid grid-cols-2 gap-2 font-bold">
                                    {meses.map((nombre, index) => (
                                        <button
                                        key={index}
                                        onClick={() => {
                                            setMes(index + 1)
                                            setTrimestre(0) 
                                            }
                                        }
                                        className={`rounded-md border-black border-2
                                            ${mes === index + 1 ? "bg-[#9ab796]" : "hover:bg-[#9ab796]"}`}
                                        >
                                        {nombre}
                                        </button>
                                    ))}
                                </div>
                            </div>

                        </div>
                        {/*Sección derecha Graficos y tablas*/}
                        <div className="flex flex-col w-auto h-auto gap-4">       
                            {/*Graficos primera fila */}
                            <div className="flex flex-row w-full h-[316px] gap-4 text-center">
                                <div className="w-full h-full bg-white rounded-xl shadow-lg p-6 font-semibold">
                                    <h2 className="text-2xl mb-6 border-b-2 border-gray-200 pb-2 font-bold">Producto más vendido</h2>
                                    <div className="flex flex-row items-center gap-6">
                                        <img 
                                        className="w-38 h-36 object-cover rounded-lg shadow-md" 
                                        src={productoEstrella?.imagen} 
                                        alt={productoEstrella?.nombre} 
                                        />
                                        <div className="flex flex-col justify-center">
                                            <p className="text-xl text-gray-800">{productoEstrella?.nombre}</p>
                                            <p className="text-gray-500 mt-2 italic">{productoEstrella?.sabor}</p>
                                        </div>
                                    </div>
                                </div>
                                
                                <div className="w-full h-full bg-white rounded-xl shadow-lg p-6">
                                    <h2 className="text-2xl mb-6 border-b-2 border-gray-200 pb-2 font-bold">Distribución de Ventas</h2>
                                    <GraficoVentas data={VentasCategoria}/>
                                </div>
                                
                            </div>
                            {/*Graficos segunda fila */}
                            <div className="flex flex-row w-full h-auto text-center items-center gap-4">
                                <div className="bg-white h-full w-auto rounded-xl shadow-lg px-4 pb-20 pt-6">
                                    <h2 className="text-2xl mb-6 border-b-2 border-gray-200 font-bold">Distribución de Ventas</h2>
                                    <GraficoBarras_CategoriaVentas data={data_barras_ejemplo}/>
                                </div>
                                
                                <div className="bg-white h-full w-1/2 rounded-xl shadow-lg p-6">
                                    <h2 className="text-2xl mb-6 border-b-2 border-gray-200 font-bold">Rendimiento</h2>
                                    <TablaRendimiento data={data_tabla_ejemplo}/>
                                </div>
                            </div>
                        </div>
                    {/*Div padre */}
                    </div> 
                )}
            </div>

        </main>
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
        <ModalConfirmCRUD
            isOpen={showConfirmModal}
            onClose={() => setShowConfirmModal(false)}
            onConfirm={accionPendiente}
            accion={modo}
        />
    </div>
    );
};

export default Admin_Inicio;