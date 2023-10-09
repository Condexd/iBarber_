import React from "react";
import { Route, Routes } from "react-router-dom";
import Inicio from "./inicio";
import Perfil from "./perfil";
import Registrar from "./Registrar";
import IniciarSesion from "./inicioSesion";
import { RecuperarContraseña } from "./RecuperarContraseña";
import { Crearbarberia } from "./crearbarberia";
import { UserProvider } from "./userProvider"; // Asegúrate de importar el UserProvider desde el archivo correcto

function Rutas({ isAuthenticated, setIsAuthenticated }) {
  return (
    <UserProvider> {/* Aquí envuelve tus rutas con el UserProvider */}
      <Routes>
        <Route path="/" element={<Inicio isAuthenticated={isAuthenticated} />} />
        {/* Rutas protegidas */}
        {isAuthenticated ? (
          <>
            {/* Agrega aquí las rutas protegidas que solo deben ser accesibles para usuarios autenticados */}
            <Route path="/perfil" element={<Perfil />} />
          </>
        ) : (
          // Si no está autenticado, redirige a la página de inicio de sesión
          <Route
            path="/iniciarSesion"
            element={<IniciarSesion setIsAuthenticated={setIsAuthenticated} />}
          />
        )}
        <Route path="/registrarse" element={<Registrar />} />
        <Route path="/crear" element={<Crearbarberia />} />
        <Route path="/recuperar-contrasena" element={<RecuperarContraseña />} />
      </Routes>
    </UserProvider>
  );
}

export default Rutas;
