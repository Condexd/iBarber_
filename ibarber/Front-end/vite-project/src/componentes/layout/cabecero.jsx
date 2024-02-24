import { useState, useContext, useEffect } from "react";
import { UserContext } from "../context/UserContext";
import { Link } from "react-router-dom";
import Boton from "./boton";
import { API_URLS } from "../../modulos/urls";
import SearchForm from "./Search";
function Cabecero({ isAuthenticated, logout }) {
  const { userData} = useContext(UserContext);
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
                  Mis citas
                </Link>
              </li>

              <li>
                <Link to="/reviews" onClick={closeMenu}>
                 reseñas
                </Link>
              </li>
              {visible && (
                <>
                  <li>
                    <Link to="/mi-barberia" onClick={closeMenu}>
                      Mi barbería
                    </Link>
                  </li>
                  <li>
                    <Link to="/empleados" onClick={closeMenu}>
                      Mis empleados
                    </Link>
                  </li>
                </>
              )}
              <li>
                <Link to="/perfil" onClick={closeMenu}>
                  <img
                    className="rounded-circle"
                    src={`${API_URLS.obtenerImage}/uploads/imagen_${userData.usuario}.jpg`}
                    height={35}
                    width={35}
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
                  Iniciar sesión
                </Link>
              </li>
              <li>
                <Link
                  className="boton-registrarse"
                  to="/registrarse"
                  onClick={closeMenu}
                >
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
