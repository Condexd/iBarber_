import { useContext, useState } from 'react';
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import { useForm } from '../../Hooks/useform';
import { iniciar } from '../../functions/funciones';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { UserContext } from '../context/UserContext';
import PropTypes from 'prop-types';

const IniciarSesion = ({ setIsAuthenticated }) => {
  const { formState, funcion } = useForm({
    password: '',
    usuario: '',
  });

  const { usuario, password } = formState;
  const navigate = useNavigate();
  const { setUserData } = useContext(UserContext);
  const [showPassword, setShowPassword] = useState(false);

  const toggleShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const manejador = async (event) => {
    event.preventDefault();
    const isAuthenticated = await iniciar(
      { usuario, password },
      setIsAuthenticated,
      setUserData
    );
    if (isAuthenticated) {
      navigate('/');
    }
  };

  return (
    <>
      <main id="form-login-container">
        <form onSubmit={manejador} id="form-login">
          <div id="login-title">
            <h3>Iniciar Sesión</h3>
          </div>
          <div id="login-username">
            <input
              type="text"
              autoComplete="username"
              name="usuario"
              placeholder="Usuario"
              required
              id="usuario"
              value={usuario}
              onChange={funcion}
            />
          </div>
          <div id="login-password">
            <div id="form-login-password">
              <input
                type={showPassword ? 'text' : 'password'}
                name="password"
                placeholder="Contraseña"
                required
                autoComplete="current-password"
                value={password}
                onChange={funcion}
              />
              <button type="button" onClick={toggleShowPassword}>
                {showPassword ? <FaEye /> : <FaEyeSlash />}
              </button>
            </div>
          </div>
          <div id="login-submit">
            <button type="submit">Iniciar Sesión</button>
          </div>
          <div id="login-problemas">
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

IniciarSesion.propTypes = {
  setIsAuthenticated: PropTypes.func.isRequired,
};

export default IniciarSesion;
