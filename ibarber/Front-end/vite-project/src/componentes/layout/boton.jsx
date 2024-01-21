import React from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import "../../Estilos/boton.css"
const Boton = ({ logout }) => {
  const notify = () =>
    toast.info(
      <div>
        <p>¿Quieres cerrar sesión?</p>
        <button onClick={logout}>Sí, cerrar sesión</button>
      </div>,
      {
        position: toast.POSITION.TOP_RIGHT,
        autoClose: false,
        closeOnClick: false,
        duration: 3000,
      }
    );

  return (
    <div>
      <button className="boton-logout" onClick={notify}>
        Cerrar sesión
      </button>
      <ToastContainer />
    </div>
  );
};

export default Boton;
