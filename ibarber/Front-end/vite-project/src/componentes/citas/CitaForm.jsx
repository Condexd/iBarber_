import { useState} from "react";
import { mostrarConfirmacion } from "../../modulos/confirms";
import { API_URLS } from "../../modulos/urls";
import { useFetch } from "../../Hooks/useFetch";
import { useParams } from "react-router-dom";
import { mostrarMensajeError } from "../../modulos/alertas";
import { enviadorAuth } from "../../functions/usePostAuth";

export const CitaForm = () => {
  const { id } = useParams();
  const { data } = useFetch(
    `${API_URLS.obtenerBarberosNombreBarberia}/${id}`
  );

  const [barbero, setBarbero] = useState("");
  const [fecha, setFecha] = useState("");
  const [hora, setHora] = useState("");

  // Obtener la fecha actual en formato 'YYYY-MM-DD' para usar como fecha mínima
  const fechaActual = new Date().toISOString().split('T')[0];

  // Función para renderizar las opciones del select
  const renderBarberosOptions = () => {
    if (data && data.barberos && data.barberos.length > 0) {
      return data.barberos.map((barbero) => (
        <option key={barbero._id} value={barbero.usuario}>
          {barbero.usuario}
        </option>
      ));
    } else {
      return <option value="">No hay barberos disponibles</option>;
    }
  };
  const handleSubmit = async (event) => {
    event.preventDefault();
    const confirmacion = await mostrarConfirmacion(
      "¿Enviar datos?",
      "¿Estás seguro de agendar cita?"
    );

    if (
      barbero === "seleccionar" ||
      barbero === "" ||
      !fecha ||
      !hora ||
      !confirmacion.isConfirmed
    ) {
      return;
    }

    // Crear un objeto Date con la fecha y hora seleccionadas
    const fechaHoraSeleccionada = new Date(`${fecha}T${hora}`);

    // Obtener la fecha y hora actuales
    const fechaHoraActual = new Date();

    // Verificar si la fecha y hora seleccionadas son futuras
    if (fechaHoraSeleccionada <= fechaHoraActual) {
      mostrarMensajeError(
        "Por favor escoja una hora válida."
      );
      return;
    }

    // Formatear la fecha y hora como una cadena en el formato deseado
    const fechaHoraFormateada = fechaHoraSeleccionada.toLocaleString();

    // Enviar los datos
    enviadorAuth(API_URLS.agendar_cita, {fecha: fechaHoraFormateada,barbero,
    });
  };
  

  const handleBarberoChange = (event) => {
    setBarbero(event.target.value);
  };

  const handleFechaChange = (event) => {
    setFecha(event.target.value);
  };

  const handleHoraChange = (event) => {
    setHora(event.target.value);
  };

  return (
    <form onSubmit={handleSubmit} className="containerCita">
  <div className="container-cita-barberia">
    <div className="text-container">
      <h3>Agenda tu cita</h3>

      <h4>Barbero</h4>
      <select
        value={barbero}
        onChange={handleBarberoChange}
        className="form-select select-barbero "
      >
        <option value='seleccionar'>Seleccionar</option>
        {/* Llamada a la función para renderizar las opciones */}
        {renderBarberosOptions()}
      </select>

      <h4>Día de la cita</h4>
      <label htmlFor="fecha" className="fecha-label">
        Selecciona una fecha:
      </label>
      <input
        type="date"
        id="fecha"
        name="fecha"
        value={fecha}
        onChange={handleFechaChange}
        className="form-control fecha-input"
        min={fechaActual}
      />

      <h4>Hora</h4>
      <label htmlFor="hora" className="hora-label">
        Selecciona una hora:
      </label>
      <input
        type="time"
        id="hora"
        name="hora"
        value={hora}
        onChange={handleHoraChange}
        className="form-control hora-input"
      />

      <button type="submit" className="btn btn-primary agendar-btn">
        Agendar cita
      </button>
    </div>
  </div>
</form>

  );
};