import { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Routes,useNavigate, Navigate, } from 'react-router-dom'; // Asegúrate de importar useNavigate
import Cabecero from "./componentes/layout/cabecero";
import Footer from "./componentes/layout/footer";
import Rutas from "./componentes/rutas";

function App() {
  const navigate=useNavigate();
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
    localStorage.removeItem("userData");
    setIsAuthenticated(false);
    navigate("/");
  };

  return (
      <><Cabecero isAuthenticated={isAuthenticated} logout={logout} /><Rutas isAuthenticated={isAuthenticated}
       setIsAuthenticated={setIsAuthenticated}
       logout={logout}
        /></>

  );
}

export default App;

