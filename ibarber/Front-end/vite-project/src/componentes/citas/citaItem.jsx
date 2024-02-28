import { useState } from "react";
import AddReviewModal from "../reseñas/reseñasForm";

const CitaItem = ({ cita, tipo, onAccept, onCancel }) => {
  const [estado, setEstado] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedCitaId, setSelectedCitaId] = useState(null);
  const [selectedBarberiaId, setSelectedBarberiaId] = useState(null); 
  const [selectedBarbero, setSelectedBarbero] = useState(null); 
  const handleOpenModal = (citaId,barberiaId,barbero) => {
    setIsModalOpen(true);
    setSelectedBarberiaId(barberiaId)
    setSelectedCitaId(citaId);
    setSelectedBarbero(barbero) 
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedCitaId(null);
    setSelectedBarberiaId(null)
    setSelectedBarbero(null) 
  };

  const handleAccept = async (cita, event) => {
    const result = await onAccept(cita);
    if (result) setEstado(true);
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
            <button  className="agendar-btn mx-3" onClick={()=>handleOpenModal(cita._id,cita.barberiaId,cita.barbero)}>Agregar Nueva Reseña</button>
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
                onClick={(event) => handleAccept(cita, event)}
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
      
      {/* Agregar el modal dentro del componente solo para tipo === "cliente" */}
      {tipo === "cliente" && (
        <AddReviewModal isOpen={isModalOpen} onClose={handleCloseModal} citaId={selectedCitaId}  barberiaId={selectedBarberiaId} barbero={selectedBarbero} />
      )}
    </li>
  );
};

export default CitaItem;
