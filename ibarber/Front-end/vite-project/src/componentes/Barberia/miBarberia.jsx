import { useForm } from '../../Hooks/useform'; import React from 'react';
import PerfilBarberia from './PerfilBarberia';
import FormularioBarberia from './FormularioBarberia';
import { mostrarConfirmacion } from "../../modulos/confirms";
import { API_URLS } from '../../modulos/urls';
import { useState,useContext } from 'react';
import { UserContext } from '../context/UserContext';
import { actualizar } from '../../functions/usePut';
export const MiBarberia = () => {
  const { userData, setUserData } = useContext(UserContext);
  const [visible, setVisible] = useState(userData.usuario);

  const { formState, funcion } = useForm({
    _id:visible,
    nombre: '',
    descripcion: '',
    email: '',
    telefono: '',
    ciudad: '',
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    if(formState.ciudad==="seleccionar")return;
    const confirmacion = await mostrarConfirmacion(
      "¿Actualizar datos?",
      "¿Estás seguro de que deseas actualizar los datos?"
    );

    if (confirmacion.isConfirmed) {
      console.log(visible)
      await actualizar(formState,API_URLS.ActualizarBarberia);
    }
  };

  return (
    <>
      <main id="main" className="p-2 d-flex mt-4 justify-content-center">
        <div className="d-flex justify-content-evenly flex-wrap">
          <PerfilBarberia
            nombre={formState.nombre}
            descripcion={formState.descripcion}
            ciudad={formState.ciudad}
          />
          <FormularioBarberia formState={formState} funcion={funcion} handleSubmit={handleSubmit} />
        </div>
      </main>
    </>
  );
};
