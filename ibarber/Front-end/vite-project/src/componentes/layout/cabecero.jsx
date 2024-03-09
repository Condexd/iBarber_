import { useState, useContext, useEffect } from "react";
import { UserContext } from "../context/UserContext";
import { Link } from "react-router-dom";
import { FaCalendarAlt, FaStar, FaBuilding, FaUser, FaSignInAlt, FaUserPlus } from 'react-icons/fa'; // Importar iconos de Font Awesome
import Boton from "./boton";
import { API_URLS } from "../../modulos/urls";
import SearchForm from "./Search";

function Cabecero({ isAuthenticated, logout }) {
  const { userData } = useContext(UserContext);
  const [visible, setVisible] = useState(userData.barberia);
  const [menuVisible, setMenuVisible] = useState(false);

  useEffect(() => {
    setVisible(userData.barberia);
  }, [userData.barberia]);

  const toggleMenu = () => {
    setMenuVisible(!menuVisible);
  };

  const closeMenu = () => {
    setMenuVisible(false);
  };

  return (
    <header className="cabecero">
      <nav className="navegacion">
        <div className="contenedor1-navegacion">
          <Link className="logo-img-contenedor" to="/" onClick={closeMenu}>
            <img
              className="logo-img"
              src={`${API_URLS.obtenerImage}/uploads/logo-ibarber.png`}
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
               <SearchForm/>
              <li>
                <Link to="/citas" onClick={closeMenu}>
                  <FaCalendarAlt /> 
                </Link>
              </li>

              <li>
                <Link to="/reviews" onClick={closeMenu}>
                  <FaStar /> 
                </Link>
              </li>
              {visible && (
                <>
                  <li>
                    <Link to="/mi-barberia" onClick={closeMenu}>
                      <FaBuilding />
                    </Link>
                  </li>
                  <li>
                    <Link to="/empleados" onClick={closeMenu}>
                      <FaUser />
                    </Link>
                  </li>
                </>
              )}
              <li className="header-profile-image-container">
                <Link to="/perfil" onClick={closeMenu}>
                  <img
                    className="header-profile-image"
                    src={`${API_URLS.obtenerImage}/uploads/imagen_${userData.usuario}.jpg`}
                    alt="Perfil"
                  />
                </Link>
              </li>
              <li>
                <Boton logout={logout} onClick={closeMenu} />
              </li>
            </>
          )}
          {!isAuthenticated && (
            <>
              <li>
                <Link className="boton-login" to="/Login" onClick={closeMenu}>
                  <FaSignInAlt /> Iniciar sesión
                </Link>
              </li>
              <li>
                <Link
                  className="boton-registrarse"
                  to="/registrarse"
                  onClick={closeMenu}
                >
                  <FaUserPlus /> Registrarse
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
