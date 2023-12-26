import { useState } from "react";
const CitaItem = ({ cita, tipo, onAccept, onCancel }) => {
  const [estado, setestado] = useState(false);
  const handleAccept = async (cita, event) => {
    const result = await onAccept(cita);
    if (result) setestado(true);
  };

  return (
    <li className="cita-item" key={cita._id}>
      <div>
        <span className="cita-property">Fecha:</span> {cita.fecha}
        <br />
        <span className="cita-property">Cliente:</span> {cita.cliente}
        <br />
        <span className="cita-property">Barbero:</span> {cita.barbero}
        <br />
        {tipo === "cliente" && cita.confirmacion_barbero && (
          <>
            <span className="cita-property">Confirmación:</span>{" "}
            {cita.confirmacion_barbero.estadoCita}
          </>
        )}
      </div>

      <aside>
        {tipo === "barbero" && cita.confirmacion_barbero && (
          <div>
            {cita.confirmacion_barbero.estadoCita === "aceptado" || estado ? (
              <button className="estado_cita" disabled>
                Aceptado
              </button>
            ) : (
              <button
                className="estado_cita"
                onClick={(event) => handleAccept(cita._id, event)}
              >
                {cita.confirmacion_barbero.estadoCita}
              </button>
            )}
          </div>
        )}

        <button
          className="eliminar-cita"
          onClick={(event) => onCancel(cita._id, event)}
        >
          Cancelar cita
        </button>
      </aside>
    </li>
  );
};

export default CitaItem;
