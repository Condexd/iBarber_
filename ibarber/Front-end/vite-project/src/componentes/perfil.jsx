import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { actualizar } from "../Hooks/actualizar";
import PerfilForm from "./PerfilForm";
import PerfilInfo from "./PerfilInfo";

function Perfil({ datausuario }) {
  const storedUserData = JSON.parse(localStorage.getItem("userData")) || {};

  const [formState, setFormState] = useState({
    _id: storedUserData._id || datausuario._id || "",
    nombres: storedUserData.nombres || datausuario.nombre || "",
    apellidos: storedUserData.apellidos || datausuario.apellido || "",
    email: storedUserData.email || datausuario.correo || "",
    telefono: storedUserData.telefono || "",
    ciudad: storedUserData.ciudad || "",
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    const confirmarcion = window.confirm("¿Actualizar datos?");
    if (confirmarcion) {
      const resultados = await actualizar(formState);
      localStorage.setItem("userData", JSON.stringify(formState));
    }
  };

  return (
    <main id="main" className="p-2 d-flex mt-4 justify-content-center">
      <div className="d-flex justify-content-evenly flex-wrap">
        <PerfilInfo formState={formState} />
        <PerfilForm
          formState={formState}
          handleSubmit={handleSubmit}
          setFormState={setFormState}
        />
      </div>
    </main>
  );
}

export default Perfil;
