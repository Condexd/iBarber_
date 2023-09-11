import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Cabecero from "./componentes/cabecero";
import Footer from "./componentes/footer";
import Registrar from "./componentes/registrar";
import IniciarSesion from "./componentes/inicioSesion";
import Inicio from "./componentes/inicio";
import Perfil from "./componentes/perfil";
import { RecuperarContraseña } from "./componentes/RecuperarContraseña";

function App() {
  // Estado para verificar si el usuario está autenticado
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  // Efecto para verificar la autenticación al cargar la página
  useEffect(() => {
    // Verificar si hay un token almacenado en localStorage (puedes personalizar esto)
    const token = localStorage.getItem('token');
    if (token) {
      setIsAuthenticated(true);
    }
  }, []);

  // Función para cerrar sesión
  const logout = () => {
    // Eliminar el token al cerrar sesión
    localStorage.removeItem('token');
    setIsAuthenticated(false);
  };

  return (
    <Router>
      <Cabecero isAuthenticated={isAuthenticated} logout={logout} />
      <Routes>
        <Route path="/inicio" element={<Inicio />} />
        {/* Rutas protegidas */}
        {isAuthenticated ? (
          <>
            {/* Agrega aquí las rutas protegidas que solo deben ser accesibles para usuarios autenticados */}
            <Route path="/perfil" element={<Perfil />} />
          </>
        ) : (
          // Si no está autenticado, redirige a la página de inicio de sesión
          <Route path="/iniciarSesion" element={<IniciarSesion setIsAuthenticated={setIsAuthenticated} />} />
        )}
        <Route path="/registrarse" element={<Registrar />} />
        <Route path="/recuperar-contrasena" element={<RecuperarContraseña />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;

