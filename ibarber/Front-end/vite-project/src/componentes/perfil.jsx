import React, { useState, useContext } from "react";
import { API_URLS } from "../modulos/urls";
import { UserContext } from "./UserContext";
import { actualizar } from "../functions/usePut";
import PerfilForm from "./PerfilForm";
import PerfilInfo from "./PerfilInfo";
import { mostrarConfirmacion } from "../modulos/confirms";

function Perfil() {
  const { userData, setUserData } = useContext(UserContext);
  const [formState, setFormState] = useState(userData);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const confirmacion = await mostrarConfirmacion(
      "¿Actualizar datos?",
      "¿Estás seguro de que deseas actualizar los datos?"
    );

    if (confirmacion.isConfirmed) {
      await actualizar(formState,API_URLS.USUARIO);
      setUserData(formState);
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
