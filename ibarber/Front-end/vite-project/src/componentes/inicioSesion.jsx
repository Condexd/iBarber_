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
    <>
    <main id="form-login-container">
      <form onSubmit={manejador} id='form-login'>
        <div id='login-title'>
          <h3>Iniciar Sesión</h3>
        </div>
        <div id='login-username'>
          <input
            type="text"
            autoComplete="username"
            name="usuario"
            placeholder='Usuario'
            required
            id="usuario"
            value={usuario}
            onChange={funcion} />
        </div>
        <div id='login-password'>
          <input
            type="password"
            name="password"
            placeholder='Contraseña'
            required
            autoComplete="current-password"
            value={password}
            onChange={funcion} />
        </div>
        <div id='login-submit'>
          <button type="submit">Iniciar Sesión</button>
        </div>
        <div id='login-problemas'>
          <div>
            <span>¿Tienes problemas? </span>
            <Link to="/recuperar-contrasena">Recupera tu cuenta</Link>
          </div>
        </div>
      </form>
    </main>
    </>
  );
};

export default IniciarSesion;
