import React, { useState } from 'react';
import { useForm } from '../Hooks/useform';
import { iniciar } from '../Hooks/funciones';
import { useNavigate } from 'react-router-dom';
import { Link } from "react-router-dom";

const IniciarSesion = ({ setIsAuthenticated }) => {
  const { formState, funcion } = useForm({
    password: '',
    numeroDocumento: '',
  });

  const { numeroDocumento, password } = formState;
  const navigate = useNavigate(); // Obtén la función de navegación

  const manejador = async (event) => {
    event.preventDefault();
    const isAuthenticated = await iniciar({ numeroDocumento, password }, setIsAuthenticated);
    if (isAuthenticated) {
      navigate('/inicio')
      console.log("yoprima"); // Redirige a la página de inicio usando navigate
    }
  };

  return (
    <><div>
      <h1>Iniciar Sesión</h1>
      <form onSubmit={manejador}>
        <div>
          <label>Documento:</label>
          <input
            type="text"
            name="numeroDocumento"
            id="documento"
            value={numeroDocumento}
            onChange={funcion} />
        </div>
        <div>
          <label>Contraseña:</label>
          <input type="password" name="password" value={password} onChange={funcion} />
        </div>
        <button type="submit">Iniciar Sesión</button>
      </form>
    </div><Link to="/recuperar-contrasena">Recuperar contraseña</Link></>
  );
};

export default IniciarSesion;
