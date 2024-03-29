import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Route, Routes } from "react-router-dom";
import Rutas from "./componentes/rutas";
import Registrar from "./componentes/auth/Registrar";
import IniciarSesion from "./componentes/auth/inicioSesion";
import { RecuperarContraseña } from "./componentes/auth/RecuperarContraseña";

function App() {
  const navigate = useNavigate();
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      setIsAuthenticated(true);
    }
  }, []);
  // Función para cerrar sesión
  const logout = () => {
    // Eliminar el token al cerrar sesión
    localStorage.removeItem("token");
    localStorage.removeItem("userData");
    setIsAuthenticated(false);
    navigate("/");
  };

  return (
    <>
      <Routes>
        <Route path="/registrarse" element={<Registrar />} />
        <Route path="/recuperar-contrasena" element={<RecuperarContraseña />} />
        <Route
          path="/Login"
          element={<IniciarSesion setIsAuthenticated={setIsAuthenticated} />}
        />
        <Route
          path="/*"
          element={
            <Rutas
              isAuthenticated={isAuthenticated}
              setIsAuthenticated={setIsAuthenticated}
              logout={logout}
            />
          }
        />
      </Routes>
    </>
  );
}

export default App;
