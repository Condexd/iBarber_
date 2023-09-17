import React, { useState } from 'react';
import { useForm } from '../Hooks/useform';
import { iniciar } from '../Hooks/funciones';
import { useNavigate } from 'react-router-dom';
import { Link } from "react-router-dom";

const IniciarSesion = ({ setIsAuthenticated, setUserData}) => {
  const { formState, funcion } = useForm({
    password: '',
    usuario: '',
  });

  const { usuario, password } = formState;
  const navigate = useNavigate(); // Obtén la función de navegación

  const manejador = async (event) => {
    event.preventDefault();
    const isAuthenticated = await iniciar({ usuario, password }, setIsAuthenticated, setUserData);
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
          <label>Usuario:</label>
          <input
            type="text"
            autoComplete="username"
            name="usuario"
            id="usuario"
            value={usuario}
            onChange={funcion} />
        </div>
        <div>
          <label>Contraseña:</label>
          <input type="password" name="password" autoComplete="current-password" value={password} onChange={funcion} />
        </div>
        <button type="submit">Iniciar Sesión</button>
      </form>
    </div><Link to="/recuperar-contrasena">Recuperar CUENTA</Link></>
  );
};

export default IniciarSesion;
