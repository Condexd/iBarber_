import { Navigate, Route, Routes } from "react-router-dom";
import Inicio from "./home/inicio";
import Perfil from "./Perfil/perfil";
import { Crearbarberia } from "./Barberia/crearbarberia";
import { MiBarberia } from "./Barberia/miBarberia";
import { MisBarberos } from "./barberos/MisBarberos";
import { CrearBarbero } from "./barberos/CrearBarbero";
import { MainCita } from "./citas/AgendarCita/MainCita";
import { MisCitas } from "./citas/MisCitas";

import Cabecero from "./layout/cabecero";
import { NotFoundPage } from "./NotFoundPage";

function Rutas({ isAuthenticated, logout }) {
  return (
    <>
      <Cabecero isAuthenticated={isAuthenticated} logout={logout} />
      <Routes>
        <Route path="/Home" element={<Inicio isAuthenticated={isAuthenticated} />} />
        <Route path="/" element={<Navigate to="/Home" />} />
        <Route path="*" element={<NotFoundPage />} />
        {isAuthenticated && (
          <>
            <Route path="/perfil" element={<Perfil logout={logout} />} />
            <Route path="/mi-barberia" element={<MiBarberia />} />
            <Route path="/empleados" element={<MisBarberos />} />
            <Route path="/new-empleado" element={<CrearBarbero />} />
            <Route path="/new-barberia" element={<Crearbarberia />} />
            <Route path="/new-cita/:id" element={<MainCita />} />
            <Route path="/citas" element={<MisCitas />} />
          </>
        )}
      </Routes>
    </>
  );
}

export default Rutas;
