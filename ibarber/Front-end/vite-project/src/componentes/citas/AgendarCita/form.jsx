import React from "react";

export const Form = ({
  handleSubmit,
  barbero,
  handleBarberoChange,
  fecha,
  handleFechaChange,
  hora,
  handleHoraChange,
  fechaActual,
  renderBarberosOptions,
}) => {
  return (
    <form onSubmit={handleSubmit} className="form container">
      <div className="col-12 d-flex flex-column">
        <h3 className="mb-4 text-center fuente">Agenda tu cita</h3>
        <div className="mb-3">
          <label htmlFor="barbero" className="form-label">Barbero</label>
          <select
            value={barbero}
            onChange={handleBarberoChange}
            className="form-select"
            id="barbero"
          >
            <option value="seleccionar">Seleccionar</option>
            {renderBarberosOptions()}
          </select>
        </div>

        <div className="mb-3">
          <label htmlFor="fecha" className="form-label">Día de la cita</label>
          <input
            type="date"
            id="fecha"
            name="fecha"
            value={fecha}
            onChange={handleFechaChange}
            className="form-control"
            min={fechaActual}
          />
        </div>

        <div className="mb-3">
          <label htmlFor="hora" className="form-label">Hora</label>
          <input
            type="time"
            id="hora"
            name="hora"
            value={hora}
            onChange={handleHoraChange}
            className="form-control"
          />
        </div>

        <button type="submit" className="btn btn-primary  agendar-btn">
          Agendar cita
        </button>
      </div>
    </form>
  );
};
