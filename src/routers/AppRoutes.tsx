import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import PerfilAssis from "../pages/PerfilAssis";
import PerfilDavid from "../pages/PerfilDavid";
import PerfilVitor from "../pages/PerfilVitor";
import PerfilPablo from "../pages/PerfilPablo";

const AppRoutes: React.FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/perfil-Assis" element={<PerfilAssis />} />
        <Route path="/perfil-David" element={<PerfilDavid />} />
        <Route path="/perfil-Vitor" element={<PerfilVitor />} />
        <Route path="/perfil-Pablo" element={<PerfilPablo />} />
      </Routes>
    </BrowserRouter>
  );
};

export default AppRoutes;
