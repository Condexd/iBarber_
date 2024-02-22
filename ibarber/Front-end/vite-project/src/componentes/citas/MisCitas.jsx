import { useContext,useEffect,useState} from "react";
import { UserContext } from "../context/UserContext";
import { API_URLS } from "../../modulos/urls";
import "../../Estilos/misCitas.css";
import { mostrarMensajeExitoDelete } from "../../modulos/alertas";
import { mostrarConfirmacion } from "../../modulos/confirms";
import { deleteFun } from "../../functions/deleteFun";
import { updateLittle } from "../../functions/Patch";
import CitaItem from "./citaItem";
import { useFetchuno } from "../../Hooks/useFetchintento";
import { Nocitas } from "./Nocitas";
export const MisCitas = ({logout}) => {
  const { userData } = useContext(UserContext);
  const { data, isLoading, hasError, setState } = useFetchuno(`${API_URLS.obtenerCitasFiltradas}`);

  useEffect(() => {
    if (hasError === 'Unauthorized') {
      logout();
    }
  }, [hasError, logout]);

  const ChangeCita = async (citaId, event) => {
    const confirmacion = await mostrarConfirmacion(
      "¿Enviar datos?",
      "¿Estás seguro de aceptar la cita?"
    );

    if (confirmacion.isConfirmed) {
      const result = await updateLittle(`${API_URLS.updateCita}/${citaId}`, {
        estadoCita: "aceptado",
      });
      return result;
    }
  };
  const handleDelete = async (citaId, event) => {
    event.preventDefault();
    const confirmacion = await mostrarConfirmacion(
      "¿Enviar datos?",
      "¿Estás seguro de cancelar esta cita?"
    );
    if (confirmacion.isConfirmed) {
      const { cuerpo } = await deleteFun(`${API_URLS.deleteCita}/${citaId}`);

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
      mostrarMensajeExitoDelete("Cita Cancelada");
    }
  };

  function renderCitas(citas, tipo) {
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
            <CitaItem
              key={cita._id}
              cita={cita}
              tipo={tipo}
              onAccept={ChangeCita}
              onCancel={handleDelete}
            />
          ))}
        </ul>
      </div>
    );
  }

  if (isLoading) {
    return <div>Cargando...</div>; 
  }

  if (!data || (!data.cliente && !data.barbero)) {
    return <Nocitas/>
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
