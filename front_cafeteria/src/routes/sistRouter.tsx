import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence } from 'framer-motion';
import LoginView from "../views/LoginView";
import RegistroView from "../views/RegistroView";
import InicioView from "../views/InicioView";
import MenuBebidasCalView from "../views/Menu_Caliente.tsx";
import MenuBebidasFriasView from "../views/Menu_Frio.tsx";
import MenuPostresView from "../views/Menu_Postres.tsx";
import MenuNuevosView from "../views/Menu_Nuevos.tsx"
import PedidoTamanoView from "../views/Pedido_Tamano.tsx"
import SaboresProducto from "../components/SaboresProds.tsx";
import Decaf_RegularView from "../views/Decaf_RegularView.tsx";
import Tipo_LecheView from "../views/Tipo_LecheView.tsx";
import ExtrasView from "../views/ExtrasView.tsx";
import Rocas_FrappeView from "../views/Rocas_FrappeView.tsx";
import Resumen_CompraView from "../views/Resumen_Compra.tsx";

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
        <Route path="/nuevos_menu" element={<MenuNuevosView />} />
        <Route path="/sabores/:tipo/:nombre" element={<SaboresProducto />} />
        <Route path="/pedido_tamano" element={<PedidoTamanoView />}/>
        <Route path="/decaf_regular" element={<Decaf_RegularView/>}/>
        <Route path="/tipo_leche" element={<Tipo_LecheView/>}/>
        <Route path="/extras" element={<ExtrasView/>} />
        <Route path="/estilo" element={<Rocas_FrappeView/>} />
        <Route path="/resumen" element={<Resumen_CompraView/>}/>
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
