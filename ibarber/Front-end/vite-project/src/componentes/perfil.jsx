import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { actualizar } from "../Hooks/actualizar";
import PerfilForm from "./PerfilForm";
import PerfilInfo from "./PerfilInfo";
import Swal from 'sweetalert2';

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
  Swal.fire({
    title: '¿Actualizar datos?',
    text: '¿Estás seguro de que deseas actualizar los datos?',
    icon: 'question',
    showCancelButton: true,
    confirmButtonText: 'Sí',
    cancelButtonText: 'Cancelar',
  }).then(async (result) => {
    if (result.isConfirmed) {
      try {
        const resultados = await actualizar(formState);
        localStorage.setItem('userData', JSON.stringify(formState));
        Swal.fire({
          title: '¡Datos actualizados!',
          text: resultados.message,
          icon: 'success',
        });
      } catch (error) {
        console.error('Error en la solicitud:', error);
        Swal.fire({
          title: 'Error',
          text: 'Ocurrió un error inesperado al actualizar los datos',
          icon: 'error',
        });
      }
    }
  });
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
