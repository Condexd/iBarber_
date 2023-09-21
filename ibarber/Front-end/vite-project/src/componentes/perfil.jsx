import React, { useState} from "react";
import { Link } from "react-router-dom";
import { actualizar } from "../Hooks/actualizar";
import PerfilForm from "./PerfilForm";
import PerfilInfo from "./PerfilInfo";
import { mostrarConfirmacion,} from '../modulos/confirms';
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
  
    const confirmacion = await mostrarConfirmacion(
      '¿Actualizar datos?',
      '¿Estás seguro de que deseas actualizar los datos?'
    );
  
    if (confirmacion.isConfirmed) {
        await actualizar(formState);
        localStorage.setItem('userData', JSON.stringify(formState));
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
