// BarberiaCard.js

import React from "react";
import { BsShop } from "react-icons/bs";

const BarberiaCard = ({ name, description }) => {
  return (
    <div className="carta barberia">
      <div className="titulos">
        <h3>{name}</h3>
      </div>
      <div className="imagen">
        <BsShop />
      </div>
      <p>{description}</p>
      <button className="agendar-btn">Agendar</button>
    </div>
  );
};

export default BarberiaCard;
