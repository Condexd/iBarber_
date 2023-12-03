import { useContext } from "react";
import { UserContext } from "../context/UserContext";
import { useFetch } from "../../Hooks/useFetch";

import { API_URLS } from "../../modulos/urls";
import "../../Estilos/misCitas.css";
import { mostrarMensajeExitoDelete } from "../../modulos/alertas";
import { mostrarConfirmacion } from "../../modulos/confirms";
import { deleteCita } from "../../functions/deleteCita";

export const MisCitas = () => {
  const { userData } = useContext(UserContext);
  const { data, isLoading, hasError, setState } = useFetch(
    `${API_URLS.obtenerCitasFiltradas}/${userData.usuario}`
  );

  const handleDelete = async (citaId, event) => {
    event.preventDefault();
    const confirmacion = await mostrarConfirmacion(
      "¿Enviar datos?",
      "¿Estás seguro de eliminar esta cita?"
    );
    if (confirmacion.isConfirmed) {
      const { cuerpo } = await deleteCita(`${API_URLS.deleteCita}/${citaId}`);

      let updatedData = {};

      if (data.cliente && data.cliente.length > 0) {
        updatedData.cliente = data.cliente.filter(
          (cita) => cita._id !== cuerpo
        );
      }

      if (data.barbero && data.barbero.length > 0) {
        updatedData.barbero = data.barbero.filter(
          (cita) => cita._id !== cuerpo
        );
      }

      setState({ data: updatedData, isLoading: false, haserror: null });
      mostrarMensajeExitoDelete("Cita eliminada correctamente");
    }
  };

  const renderCitas = (citas, tipo) => {
    return (
      <div className="citas-container" key={tipo}>
        <div
          className={`citas-heading ${
            tipo === "cliente" ? "cliente-heading" : "barbero-heading"
          }`}
        >
          {tipo === "cliente" ? "Citas" : "Citas"}
        </div>
        <ul className="citas-list">
          {citas.map((cita) => (
            <li className="cita-item" key={cita._id}>
              <div>
                <span className="cita-property">Fecha:</span> {cita.fecha}
                <br />
                <span className="cita-property">Cliente:</span> {cita.cliente}
                <br />
                <span className="cita-property">Barbero:</span> {cita.barbero}
              </div>

              <aside>
                <button
                  className="eliminar-cita"
                  onClick={(event) => handleDelete(cita._id, event)}
                >
                  Cancelar cita
                </button>
              </aside>
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

  const citasCliente = data.cliente
    ? data.cliente.filter((cita) => cita.cliente === userData.usuario)
    : [];
  const citasBarbero = data.barbero
    ? data.barbero.filter((cita) => cita.barbero === userData.usuario)
    : [];

  return (
    <div className="mis-citas">
      {citasCliente.length > 0 && renderCitas(citasCliente, "cliente")}
      {citasBarbero.length > 0 && renderCitas(citasBarbero, "barbero")}
    </div>
  );
};
