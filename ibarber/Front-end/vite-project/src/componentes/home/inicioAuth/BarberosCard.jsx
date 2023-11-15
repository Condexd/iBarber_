
import React from "react";
import { CiUser } from "react-icons/ci";

const BarberoCard = ({ name, biography }) => {
  return (
    <div className="carta barbero">
      <div className="titulos">
        <h3>{name}</h3>
      </div>
      <div className="imagen">
        <CiUser />
      </div>
      <p>{biography}</p>
      <button className="agendar-btn">Agendar</button>
    </div>
  );
};

export default BarberoCard;
