import { Link } from "react-router-dom";
import { FaCalendarAlt, FaStar, FaBuilding, FaUser, FaSignInAlt, FaUserPlus } from 'react-icons/fa';
import { FiMenu } from "react-icons/fi";
import Boton from "./boton";
import SearchForm from "./Search";
import { API_URLS } from "../../modulos/urls";

function CabeceroMenu({ isAuthenticated, userData, visible, hasProfileImage, toggleMenu, closeMenu, logout,menuVisible }) {
  return (
    <nav className="navegacion">
      <div className="contenedor1-navegacion">
        <div className="icono-menu" onClick={toggleMenu}>
          <FiMenu className="icono-hamburguesa" />
        </div>
        <Link className="logo-img-contenedor" to="/" onClick={closeMenu}>
          <img
            className="logo-img"
            src={`${API_URLS.obtenerImage}/uploads/logo-ibarber.png`}
            width="55px"
            height="auto"
            alt="Logo"
          />
        </Link>
      </div>

      <ul className={`contenedor2-navegacion ${menuVisible ? "visible" : ""}`}>
        {isAuthenticated && (
          <>
            <SearchForm className="buscador" />
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
              {hasProfileImage ? (
                <Link to="/perfil" onClick={closeMenu}>
                  <img
                    className="header-profile-image"
                    src={`${API_URLS.obtenerImage}/uploads/imagen_${userData.usuario}.jpg`}
                    alt="Perfil"
                  />
                </Link>
              ) : (
                <Link to="/perfil" onClick={closeMenu}>
                  <img
                    className="header-profile-image"
                    src={`${API_URLS.obtenerImage}/uploads/Usuario.png`}
                    alt="Perfil"
                  />
                </Link>
              )}
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
  );
}

export default CabeceroMenu;
