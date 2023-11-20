import { useState, useContext } from "react";
import { enviador } from "../../functions/usePost";
import { mostrarConfirmacion } from "../../modulos/confirms";
import { API_URLS } from "../../modulos/urls";
import { useFetch } from "../../Hooks/useFetch";
import { UserContext } from "../context/UserContext";
import moment from 'moment'

export const CitaForm = () => {
  const { userData } = useContext(UserContext);
  const { data } = useFetch(
    `${API_URLS.obtenerBarberosNombreBarberia}/${userData.name}`
  );
  const [barbero, setBarbero] = useState("");
  const [fecha, setFecha] = useState("");
  const [hora, setHora] = useState("");

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
    if(barbero==="seleccionar" || barbero==="" )return;
    if (confirmacion.isConfirmed) {
      // Formatear la fecha y hora utilizando Moment.js
      const fechaHora = moment(`${fecha}T${hora}`).toISOString();
      enviador(API_URLS.agendar_cita, {
        fecha: fechaHora,
        barbero,
        cliente: userData.usuario,
      });
    }
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
    <form onSubmit={handleSubmit}>
      <div className="container">
        <div className="text-container">
          <h4>Agenda tu cita</h4>

          <h4>Barbero</h4>
          <select
            value={barbero}
            onChange={handleBarberoChange}
            className="select-barbero"
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
            className="fecha-input"
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
            className="hora-input"
          />

          <button type="submit" className="agendar-btn">
            Agendar cita
          </button>
        </div>
      </div>
    </form>
  );
};
