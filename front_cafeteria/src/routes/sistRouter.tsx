import { BrowserRouter, Routes, Route } from "react-router-dom";
import LoginView from "../views/LoginView";
import RegistroView from "../views/RegistroView";

const sistRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<LoginView />} />
        <Route path="/registro" element={<RegistroView />} />
      </Routes>
    </BrowserRouter>
  );
};

export default sistRouter;