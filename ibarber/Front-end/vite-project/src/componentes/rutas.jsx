import { Navigate, Route, Routes } from "react-router-dom";
import Inicio from "./home/inicio";
import Perfil from "./Perfil/perfil";
import Registrar from "./auth/Registrar";
import IniciarSesion from "./auth/inicioSesion";
import { RecuperarContraseña } from "./auth/RecuperarContraseña";
import { Crearbarberia } from "./Barberia/crearbarberia";
import { UserProvider } from "./context/userProvider"; // Asegúrate de importar el UserProvider desde el archivo correcto

function Rutas({ isAuthenticated, setIsAuthenticated }) {
  return (
    <UserProvider> {/* Aquí envuelve tus rutas con el UserProvider */}
      <Routes>
        <Route path="/Home" element={<Inicio isAuthenticated={isAuthenticated} />} />
        <Route path="/" element={<Navigate to= "/Home"/>} />
        {/* Rutas protegidas */}
        {isAuthenticated ? (
          <>
            {/* Agrega aquí las rutas protegidas que solo deben ser accesibles para usuarios autenticados */}
            <Route path="/perfil" element={<Perfil />} />
          </>
        ) : (
          // Si no está autenticado, redirige a la página de inicio de sesión
          <Route
            path="/Login"
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
