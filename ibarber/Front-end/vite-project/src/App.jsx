import { Route, Routes } from "react-router-dom";
import Rutas from "./componentes/rutas";
import Registrar from "./componentes/auth/Registrar";
import IniciarSesion from "./componentes/auth/inicioSesion";
import { RecuperarContraseña } from "./componentes/auth/RecuperarContraseña";
import { useAuthentication } from "./Hooks/useAuthentication";

function App() {
  const { isAuthenticated, setIsAuthenticated, logout } = useAuthentication();

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
