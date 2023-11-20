// BarberiaCard.js

import { BsShop } from "react-icons/bs";
import { UserContext } from "../../context/UserContext";
import { useNavigate } from "react-router-dom";
import { useContext } from "react";

const BarberiaCard = ({ name, description }) => {

  const { userData, setUserData } = useContext(UserContext);
  const navigate = useNavigate()

  const handleAgendarClick = () => {
    const newData = { ...userData };

    if ('name' in newData) {
      newData.name = name;
    } else {
      newData.name = name;
    }

    setUserData(newData);
    localStorage.setItem('userData', JSON.stringify(newData));

    // Navegar a la ruta deseada después de la actualización
    navigate("/new-cita");
  };

  return (
    <div className="carta barberia">
      <div className="titulos">
        <h3>{name}</h3>
      </div>
      <div className="imagen">
        <BsShop />
      </div>
      <p>{description}</p>
      <button className="agendar-btn" onClick={handleAgendarClick}>Agendar</button>
    </div>
  );
};

export default BarberiaCard;
