import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence } from 'framer-motion';
import LoginView from "../views/LoginView";
import RegistroView from "../views/RegistroView";
import InicioView from "../views/InicioView"

const RouterWithAnimation = () => {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<InicioView />} />
        <Route path="/login" element={<LoginView />} />
        <Route path="/registro" element={<RegistroView />} />
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
