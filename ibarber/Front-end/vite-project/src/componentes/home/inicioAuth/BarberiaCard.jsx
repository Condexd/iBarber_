// BarberiaCard.js
import { Link } from "react-router-dom";
import { BsShop } from "react-icons/bs";
const BarberiaCard = ({ name, description,id }) => {

  
  return (
    <div className="carta barberia">
      <div className="titulos">
        <h3>{name}</h3>
      </div>
      <div className="imagen">
        <BsShop />
      </div>
      <p>{description}</p>
          <Link  className="agendar-btn" to={`/new-cita/${id}`} >Agendar</Link>
    </div>
  );
};

export default BarberiaCard;
