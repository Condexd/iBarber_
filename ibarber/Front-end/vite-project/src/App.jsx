import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Cabecero from "./componentes/cabecero";
import Footer from "./componentes/footer";
import Rutas from "./componentes/rutas";

function App() {
  // Estado para verificar si el usuario está autenticado
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  // Efecto para verificar la autenticación al cargar la página
  useEffect(() => { 
    const token = localStorage.getItem('token');  
// Verificar si hay un token almacenado en localStorage (puedes personalizar esto)
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
    <Rutas isAuthenticated={isAuthenticated} setIsAuthenticated={setIsAuthenticated} />
    <Footer />
  </Router>
  );
}

export default App;

