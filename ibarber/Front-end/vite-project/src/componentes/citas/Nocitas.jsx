
import { API_URLS } from "../../modulos/urls";
import { useNavigate } from "react-router-dom";

export const Nocitas = () => {
  const navigate = useNavigate();

  function nocitasre() {
    navigate("/Home");
  }

  return (
    <section className='d-flex justify-content-center containerCita align-items-center animate__animated animate__fadeIn'>
      <div className='text-center'>
        <img className="mx-auto" src={`${API_URLS.obtenerImage}/uploads/nocitas.png`} alt="No hay citas agendadas" style={{ maxWidth: '250px' }} /> {/* La imagen con un ancho máximo de 250px */}
        <div><strong style={{ fontSize: '1.5rem' }}>¡Aún no tienes una cita agendada!</strong></div> {/* El texto debajo de la imagen con negrilla y un tamaño de fuente de 1.5rem */}
        <button onClick={nocitasre} className="boton-logout"><strong>Agendar cita</strong></button> {/* Botón para agendar una cita con el color especificado y el texto en negrilla */}
      </div>
    </section>
  );
};
