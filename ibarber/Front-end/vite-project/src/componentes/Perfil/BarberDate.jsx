import React from "react";
import { API_URLS } from "../../modulos/urls";
import ScrollAnimation from "react-animate-on-scroll";
export const BarberDate = ({ barberia }) => {
  return (
    <ScrollAnimation
      animateIn="animate__animated animate__fadeIn"
      duration={0.9}
      animateOnce
    >
      <div className="">
        <h1>Barberia donde trabajo</h1>
        <h2>{barberia.nombre_barberia}</h2>
        <p>
          <strong>Dirección:</strong> {barberia.direccion_barberia}
        </p>
        <p>
          <strong>Ciudad:</strong> {barberia.nombre_ciudad}
        </p>
        <p>
          <strong>Email:</strong> {barberia.email}
        </p>
        <p>
          <strong>Teléfono:</strong> {barberia.telefono}
        </p>
        <img
          src={`${API_URLS.obtenerImage}${barberia.fotoPerfil}`}
          alt={`Foto de ${barberia.nombre_barberia}`}
          width={200}
        />
      </div>
    </ScrollAnimation>
  );
};
