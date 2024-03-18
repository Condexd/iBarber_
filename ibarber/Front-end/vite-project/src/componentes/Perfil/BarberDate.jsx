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
      <div
        style={{
          textAlign: "center",
          marginBottom: "20px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <div
          style={{
            padding: "20px",
            backgroundColor: "#f0f0f0",
            borderRadius: "8px",
            boxShadow: "0 0 10px rgba(0, 0, 0, 0.1)",
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
          }}
        >
          <img
            style={{
              width: "200px",
              borderRadius: "8px",
              marginRight: "20px",
            }}
            src={`${API_URLS.obtenerImage}${barberia.fotoPerfil}`}
            alt={`Foto de ${barberia.nombre_barberia}`}
          />
          <div style={{ textAlign: "left" }}>
            <h1 style={{ fontSize: "24px", marginBottom: "10px" }}>
              Informacion de la barberia
            </h1>
            <h2 style={{ fontSize: "20px", marginBottom: "10px" }}>
              {barberia.nombre_barberia}
            </h2>
            <p style={{ fontSize: "16px", marginBottom: "5px" }}>
              <strong>Dirección:</strong> {barberia.direccion_barberia}
            </p>
            <p style={{ fontSize: "16px", marginBottom: "5px" }}>
              <strong>Ciudad:</strong> {barberia.nombre_ciudad}
            </p>
            <p style={{ fontSize: "16px", marginBottom: "5px" }}>
              <strong>Email:</strong> {barberia.email}
            </p>
            <p style={{ fontSize: "16px", marginBottom: "5px" }}>
              <strong>Teléfono:</strong> {barberia.telefono}
            </p>
          </div>
        </div>
      </div>
    </ScrollAnimation>
  );
};
