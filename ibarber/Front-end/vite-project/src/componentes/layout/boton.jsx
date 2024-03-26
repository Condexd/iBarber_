import React from 'react';
import { ToastContainer, toast } from 'react-toastify';
import { IoLogOutOutline } from "react-icons/io5";
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
      <IoLogOutOutline className='logout-logo' /> Cerrar sesión
      </button>
      <ToastContainer />
    </div>
  );
};

export default Boton;
