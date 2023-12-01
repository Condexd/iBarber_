import { useContext } from "react";
import { UserContext } from "../context/UserContext";
import { useFetch } from "../../Hooks/useFetch";
import { API_URLS } from '../../modulos/urls';
import '../../Estilos/misCitas.css'

export const MisCitas = () => {
  const { userData } = useContext(UserContext);
  const { data, isLoading, hasError, setState } = useFetch(`${API_URLS.obtenerCitasFiltradas}/${userData.usuario}`);

  const renderCitas = (citas, tipo) => {
    return (
      <div className="citas-container" key={tipo}>
        <div className={`citas-heading ${tipo === 'cliente' ? 'cliente-heading' : 'barbero-heading'}`}>
          {tipo === 'cliente' ? 'Citas' : 'Citas'}
        </div>
        <ul className="citas-list">
          {citas.map(cita => (
            <li className="cita-item" key={cita._id}>
              <span className="cita-property">Fecha:</span> {cita.fecha}<br />
              <span className="cita-property">Cliente:</span> {cita.cliente}<br />
              <span className="cita-property">Barbero:</span> {cita.barbero}
            </li>
          ))}
        </ul>
      </div>
    );
  };

  if (isLoading) {
    return <div>Cargando...</div>;
  }

  if (hasError) {
    return <div>Error al cargar las citas</div>;
  }

  if (!data || (!data.cliente && !data.barbero)) {
    return <div>No hay citas para mostrar.</div>;
  }

  const citasCliente = data.cliente ? data.cliente.filter(cita => cita.cliente === userData.usuario) : [];
  const citasBarbero = data.barbero ? data.barbero.filter(cita => cita.barbero === userData.usuario) : [];

  return (
    <div className="mis-citas">
      {citasCliente.length > 0 && renderCitas(citasCliente, 'cliente')}
      {citasBarbero.length > 0 && renderCitas(citasBarbero, 'barbero')}
    </div>
  );
};
