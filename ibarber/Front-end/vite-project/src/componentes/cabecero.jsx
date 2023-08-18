import React from "react";
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Registrar from "./Registrar";
import IniciarSesion from "./inicioSesion";




function Cabecero() {
  return (
    <Router>
      <header>
        <nav>
          <ul>
            <li><Link to="/registrarse">Registrarse</Link></li>
            <li><Link to="/iniciarSesion">iniciar sesion</Link></li>
          </ul>
        </nav>
      </header>
      
      <Routes>
        <Route path="/registrarse" element={<Registrar />} />
        <Route path="/iniciarSesion" element={<IniciarSesion />} />
      </Routes>
    </Router>
  );
}

export default Cabecero;
