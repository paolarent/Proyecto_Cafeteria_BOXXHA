import { BrowserRouter, Routes, Route } from "react-router-dom";
import LoginView from "../views/LoginView";

const sistRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<LoginView />} />
      </Routes>
    </BrowserRouter>
  );
};

export default sistRouter;