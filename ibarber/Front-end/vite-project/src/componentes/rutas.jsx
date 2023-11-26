import { Navigate, Route, Routes } from "react-router-dom";
import Inicio from "./home/inicio";
import Perfil from "./Perfil/perfil";
import Registrar from "./auth/Registrar";
import IniciarSesion from "./auth/inicioSesion";
import { RecuperarContraseña } from "./auth/RecuperarContraseña";
import { Crearbarberia } from "./Barberia/crearbarberia";
import { MiBarberia } from "./Barberia/miBarberia";
import { MisBarberos } from "./barberos/MisBarberos";
import { CrearBarbero } from "./barberos/CrearBarbero";
import { CitaForm } from "./citas/CitaForm";

// Asegúrate de importar el UserProvider desde el archivo correcto

function Rutas({ isAuthenticated, setIsAuthenticated }) {
  return (
    <Routes>
      <Route
        path="/Home"
        element={<Inicio isAuthenticated={isAuthenticated} />}
      />
      <Route path="/" element={<Navigate to="/Home" />} />
      {/* Rutas protegidas */}
      {isAuthenticated ? (
        <>
          {/* Agrega aquí las rutas protegidas que solo deben ser accesibles para usuarios autenticados */}
          <Route path="/perfil" element={<Perfil />} />
          <Route path="/mi-barberia" element={<MiBarberia />} />
          <Route path="/empleados" element={<MisBarberos />} />
          <Route path="/new-empleado" element={<CrearBarbero />} />
          <Route path="/new-barberia" element={<Crearbarberia />} />
          <Route path="/new-cita" element={<CitaForm />} />
        </>
      ) : (
        // Si no está autenticado, redirige a la página de inicio de sesión
        <Route
          path="/Login"
          element={<IniciarSesion setIsAuthenticated={setIsAuthenticated} />}
        />
      )}
      <Route path="/registrarse" element={<Registrar />} />
      <Route path="/recuperar-contrasena" element={<RecuperarContraseña />} />
    </Routes>
  );
}

export default Rutas;
