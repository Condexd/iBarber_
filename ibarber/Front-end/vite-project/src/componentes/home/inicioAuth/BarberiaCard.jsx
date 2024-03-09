// BarberiaCard.js
import "../../../Estilos/cards.css";
import { Link } from "react-router-dom";
import { API_URLS } from "../../../modulos/urls";
import { FaStar } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";

const BarberiaCard = ({ name, description, id, image, city }) => {
  return (
    <Link className="link-sin-estilos" to={`/new-cita/${id}`}>
      <article className="card-barberia">
      <section className="card-barberia__header">
        <img
          className="card-barberia__header__image animate__animated animate__fadeIn"
          src={`${API_URLS.obtenerImage}${image}`}
        />
      </section>
      <section className="card-barberia__footer">
        <div className="card-barberia__footer__heading">
          <h3 className="card-barberia__footer__heading__nombre">{name}</h3>
        </div>
        <div className="card-barberia__footer__heading__location">
          <span className="card-barberia__footer__heading__location__city"> <FaLocationDot /> {city}
          </span>
          <span>
            5.0 <FaStar className="estrella" />
          </span>
        </div>
        <p className="description-text">{description}</p>
      </section>
    </article>
    </Link>
  );
};

export default BarberiaCard;
