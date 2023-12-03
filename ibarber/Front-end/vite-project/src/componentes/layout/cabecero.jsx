import { useState, useContext, useEffect } from "react";
import { UserContext } from "../context/UserContext";
import { Link } from "react-router-dom";
import Boton from "./boton";

function Cabecero({ isAuthenticated, logout }) {
  const { userData, setUserData } = useContext(UserContext);
  const [visible, setVisible] = useState(userData.barberia);
  const [menuVisible, setMenuVisible] = useState(false);

  useEffect(() => {
    setVisible(userData.barberia);
  }, [userData.barberia]);

  const toggleMenu = () => {
    setMenuVisible(!menuVisible);
  };

  return (
    <header className="cabecero">
      <nav className="navegacion">
        <div className="contenedor1-navegacion">
          <Link className="logo-img-contenedor" to="/">
            <img
              className="logo-img"
              src="https://github.com/Condexd/_iBarber_/blob/main/proyectoweb/index/images/logo-ibarber.png?raw=true"
              width="55px"
              height="auto"
              alt="Logo"
            />
          </Link>
          <div className="icono-menu" onClick={toggleMenu}>
            &#9776;
          </div>
        </div>

        <ul className={`contenedor2-navegacion ${menuVisible ? "visible" : ""}`}>
          {isAuthenticated && (
            <>
              <li>
                <Link to="/new-cita">Agendar cita</Link>
              </li>
              <li>
                <Link to="/citas">Mis citas</Link>
              </li>
              {visible && (
                <>
                  <li>
                    <Link to="/mi-barberia">Mi barbería</Link>
                  </li>
                  <li>
                    <Link to="/empleados">Mis empleados</Link>
                  </li>
                </>
              )}
              <li>
                <Link to="/perfil">
                  <img
                    className="rounded-circle"
                    src="https://i.pinimg.com/474x/f3/16/ce/f316cef6a7a1e732baf48a36808411b4.jpg"
                    height={35}
                    width={35}
                    alt="Perfil"
                  />
                </Link>
              </li>
              <li>
                <Boton logout={logout} />
              </li>
            </>
          )}
          {!isAuthenticated && (
            <>
              <li>
                <Link className="boton-login" to="/Login">
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
