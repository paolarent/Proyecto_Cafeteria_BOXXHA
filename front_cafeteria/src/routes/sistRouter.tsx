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
        <Route path="/pedido_tamano" element={<PedidoTamanoView />}/>
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
