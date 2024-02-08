import React from "react";

const BarberoCard = ({ name, biography, image }) => {
  return (
    <div>
      <img src={image} alt={name} />
      <div>
        <h3>{name}</h3>
        <p>{biography}</p>
        <button>Agendar</button>
      </div>
    </div>
  );
};

export default BarberoCard;
