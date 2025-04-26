import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence } from 'framer-motion';
import LoginView from "../views/LoginView";
import RegistroView from "../views/RegistroView";
import InicioView from "../views/InicioView";
import MenuBebidasCalView from "../views/Menu_Caliente.tsx";
import MenuBebidasFriasView from "../views/Menu_Frio.tsx";
import MenuPostresView from "../views/Menu_Postres.tsx";
import MenuFrappesView from "../views/Menu_Frappes.tsx"
import PedidoTamanoView from "../views/Pedido_Tamano.tsx"
import SaboresProducto from "../components/SaboresProds.tsx";
import Decaf_RegularView from "../views/Decaf_RegularView.tsx";
import Tipo_LecheView from "../views/Tipo_LecheView.tsx";
import ExtrasView from "../views/ExtrasView.tsx";
import Rocas_FrappeView from "../views/Rocas_FrappeView.tsx";
import Resumen_CompraView from "../views/Resumen_Compra.tsx";
import Menu_General from "../views/Menu_general.tsx";
import Admin_Inicio from "../views/Admin_Inicio.tsx";
import No_Autorizado from "../views/NoAutorizado.tsx";
import PrivateRoute from "./privateRoute";
import Prueba from "../views/Pruebas.tsx";

const RouterWithAnimation = () => {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<InicioView />} />
        <Route path="/login" element={<LoginView />} />
        <Route path="/registro" element={<RegistroView />} />
        <Route path="/bebidas_calientes" element={<MenuBebidasCalView />} />
        <Route path="/bebidas_frias" element={<MenuBebidasFriasView />} />
        <Route path="/postres" element={<MenuPostresView />} />
        <Route path="/frappes" element={<MenuFrappesView />} />
        <Route path="/sabores/:tipo/:nombre" element={<SaboresProducto />} />
        <Route path="/pedido_tamano" element={<PrivateRoute> <PedidoTamanoView /> </PrivateRoute> }/>  
        <Route path="/decaf_regular" element={<PrivateRoute><Decaf_RegularView/></PrivateRoute>}/>
        <Route path="/tipo_leche" element={<PrivateRoute><Tipo_LecheView/></PrivateRoute>}/>
        <Route path="/extras" element={<PrivateRoute><ExtrasView/></PrivateRoute>} />
        <Route path="/estilo" element={<PrivateRoute><Rocas_FrappeView/></PrivateRoute>} />
        <Route path="/resumen" element={<PrivateRoute> <Resumen_CompraView/> </PrivateRoute>}/>
        <Route path="/nuestro_menu" element={<Menu_General/>}/>
        <Route path="/admin_inicio" element={<Admin_Inicio/>}/>
        <Route path="/401Error" element={<No_Autorizado/>}/>
        <Route path="/prueba" element={<Prueba />}/>
      </Routes>
    </AnimatePresence>
  );
};

const SistRouter = () => {
  return (
    <BrowserRouter>
      <RouterWithAnimation />
    </BrowserRouter>
  );
};

export default SistRouter;
