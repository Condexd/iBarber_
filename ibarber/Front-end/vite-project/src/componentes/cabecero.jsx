import React from 'react';
import { Link } from 'react-router-dom';

function Cabecero({ isAuthenticated, logout }) {
  return (
    <header className="cabecero">
      <nav className="navegacion">
        <ul className="contenedor1-navegacion">
          <li>
            <Link className="logo-img-contenedor" to="/inicio">
              <img
                className="logo-img"
                src="https://github.com/Condexd/_iBarber_/blob/main/proyectoweb/index/images/logo-ibarber.png?raw=true"
                width="55px"
                height="auto"
                alt="Logo"
              />
            </Link>
          </li>
          <li>
            <Link to="/inicio">Inicio</Link>
          </li>
          <li>
            <Link to="/barberos">Barberos</Link>
          </li>
          <li>
            <Link to="/barberias">Barberías</Link>
          </li>
          <li>
            <Link to="/contacto">Contáctanos</Link>
          </li>
        </ul>
        <ul className="contenedor2-navegacion">
          <li>
            <img
              className="buscador-img"
              src="https://github.com/Condexd/_iBarber_/blob/main/proyectoweb/index/images/buscador.png?raw=true"
              width="20px"
              alt="Buscar"
            />
          </li>
          {isAuthenticated ? (
            // Si el usuario está autenticado, muestra el botón de cerrar sesión
            <>
              <li>
               <Link to="/perfil"><img className='rounded-circle' src='https://i.pinimg.com/474x/f3/16/ce/f316cef6a7a1e732baf48a36808411b4.jpg' height={35} width={35}></img></Link>
              </li>
              <li>
                <button className="boton-logout" onClick={logout}>
                  Cerrar sesión
                </button>
              </li>
              {/* Agrega aquí otros enlaces de navegación para usuarios autenticados si es necesario */}
            </>
          ) : (
            // Si el usuario no está autenticado, muestra los enlaces de inicio de sesión y registro
            <>
              <li>
                <Link className="boton-login" to="/iniciarSesion">
                  Iniciar sesión
                </Link>
              </li>
              <li>
                <Link className="boton-registrarse" to="/registrarse">
                  Registrarse
                </Link>
              </li>
            </>
          )}
        </ul>
      </nav>
    </header>
  );
}

export default Cabecero;
