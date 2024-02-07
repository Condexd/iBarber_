import {useForm} from "../../Hooks/useform"
import { enviador } from "../../functions/usePost";
import { Link } from 'react-router-dom';
import { mostrarConfirmacion } from '../../modulos/confirms';
import { API_URLS } from "../../modulos/urls";
import { useNavigate } from "react-router-dom";
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import { useState } from 'react';

function Registrar() {
  const{formState,funcion}=useForm({
        nombres:"",
        apellidos:"",
        usuario:"",
        password:"",
        email:"",

  })
  const{nombres,apellidos,usuario,password,email}=formState
const navigate=useNavigate();
const [showPassword, setShowPassword] = useState(false);

const toggleShowPassword = () => {
  setShowPassword(!showPassword);
};

  const manejador = async (event) => {
    event.preventDefault();
    const confirmacion = await mostrarConfirmacion('¿Enviar datos?', '¿Estás seguro de que deseas enviar los datos?')
        if (confirmacion.isConfirmed) {
           const resultado =await enviador(API_URLS.Registrar,{ nombres, apellidos, usuario, password, email });
           if(resultado)navigate("/Login")
        }
  };
  return (
    <>
    <main id="form-container">
      <form onSubmit={manejador} id="form-register">
          <div id="form-title">
            <h3>Registrate</h3>
          </div>
          <ul id="form-nombres">
            <li>
              <input
                type="text"
                id="nombres"
                name="nombres"
                required
                pattern="^[A-Za-zÀ-ÿ\s']+$"
                placeholder="Nombres"
                value={nombres}
                onChange={funcion} />
            </li>
          </ul>
          <ul id="form-apellidos">
            <li>
              <input
                type="text"
                id="apellidos"
                name="apellidos"
                pattern="^[A-Za-zÀ-ÿ\s']+$"
                placeholder="Apellidos"
                required
                value={apellidos}
                onChange={funcion} />
            </li>
          </ul>
          <ul id="form-email">
            <li>
              <input
                type="email"
                id="email"
                name="email"
                placeholder="Email"
                required
                value={email}
                onChange={funcion} />
            </li>
          </ul>
          <ul id="form-username">
            <li>
              <input
                type="text"
                id="numeroDocumento"
                autoComplete="username"
                name="usuario"
                placeholder="Username"
                required
                value={usuario}
                onChange={funcion} />
            </li>
          </ul>
          <ul id="form-password">
            <li>
              <div id="form-register-password">
                <input
                  type={showPassword ? 'text' : 'password'}
                  id="password"
                  autoComplete="new-password"
                  name="password"
                  placeholder="Contraseña"
                  required
                  value={password}
                  onChange={funcion}
                />
                <button type="button" onClick={toggleShowPassword}>
                  {showPassword ? <FaEye /> : <FaEyeSlash />}
                </button>
              </div>
            </li>
          </ul>
          <ul id="form-button">
            <li>
              <button type="submit">Registrame</button>
            </li>
          </ul>
          <ul id="form-cuentaCreada">
            <li>
              <span>¿Ya tienes cuenta? </span>
              <Link to="/Login">
                  Inicia sesión
                </Link>
            </li>
          </ul>
      </form>
    </main>
   </>
  );

}

export default Registrar;
