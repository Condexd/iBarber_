import React from "react";
import { Route, Routes } from "react-router-dom";
import Inicio from "./inicio";
import Perfil from "./perfil";
import Registrar from "./Registrar";
import IniciarSesion from "./inicioSesion";
import { RecuperarContraseña } from "./RecuperarContraseña";
import { useState } from "react";

function Rutas({ isAuthenticated, setIsAuthenticated }) {
  const [userData, setUserData] = useState({});
  return (
    <Routes>
      <Route path="/inicio" element={<Inicio />} />
      {/* Rutas protegidas */}
      {isAuthenticated ? (
        <>
          {/* Agrega aquí las rutas protegidas que solo deben ser accesibles para usuarios autenticados */}
          <Route path="/perfil" element={<Perfil datausuario={userData} />} />
        </>
      ) : (
        // Si no está autenticado, redirige a la página de inicio de sesión
        <Route
          path="/iniciarSesion"
          element={<IniciarSesion setIsAuthenticated={setIsAuthenticated} setUserData={ setUserData} />}
        />
      )}
      <Route path="/registrarse" element={<Registrar />} />
      <Route path="/recuperar-contrasena" element={<RecuperarContraseña />} />
    </Routes>
  );
}

export default Rutas;
