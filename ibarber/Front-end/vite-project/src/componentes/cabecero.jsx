import React from "react";
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Registrar from "./Registrar";
import IniciarSesion from "./inicioSesion";
import Carousel from "./inicio";


function Cabecero() {
  return (
    <Router>
      <header className="cabecero">
        <nav className="navegacion">
          <ul className="contenedor1-navegacion">
            <li>
              <Link className="logo-img-contenedor" to="/inicio">
                <img
                  className="logo-img"
                  src="https://github.com/Condexd/_iBarber_/blob/main/proyectoweb/index/images/logo-ibarber.png?raw=true"
                  width="55px"
                  height="auto"
                  alt="Logo"
                />
              </Link>
            </li>
            <li>
              <Link to="/inicio">Inicio</Link>
            </li>
            <li>
              <Link to="/barberos">Barberos</Link>
            </li>
            <li>
              <Link to="/barberias">Barberías</Link>
            </li>
            <li>
              <Link to="/contacto">Contáctanos</Link>
            </li>
          </ul>
          <ul className="contenedor2-navegacion">
            <li>
              <img
                className="buscador-img"
                src="https://github.com/Condexd/_iBarber_/blob/main/proyectoweb/index/images/buscador.png?raw=true"
                width="20px"
                alt="Buscar"
              />
            </li>
            <li>
              <Link className="boton-login" to="/iniciarSesion">
                Iniciar sesión
              </Link>
            </li>
            <li>
              <Link className="boton-registrarse" to="/registrarse">
                Registrarse
              </Link>
            </li>
          </ul>
        </nav>
      </header>

      <Routes>
        <Route path="/inicio" element={<Carousel />} />
        <Route path="/registrarse" element={<Registrar />} />
        <Route path="/iniciarSesion" element={<IniciarSesion />} />
      </Routes>
    </Router>
  );
}

function Home() {
  return <h1>Página de inicio</h1>;
}



export default Cabecero;
