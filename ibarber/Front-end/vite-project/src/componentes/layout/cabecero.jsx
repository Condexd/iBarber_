import  { useState, useContext, useEffect } from "react";
import { UserContext } from "../context/UserContext";
import CabeceroMenu from "./cabeceroMenu";
import { API_URLS } from "../../modulos/urls";

function Cabecero({ isAuthenticated, logout }) {
  const { userData } = useContext(UserContext);
  const [visible, setVisible] = useState(userData.barberia);
  const [menuVisible, setMenuVisible] = useState(false);
  const [hasProfileImage, setHasProfileImage] = useState(false);

  useEffect(() => {
    setVisible(userData.barberia);
  }, [userData.barberia]);

  useEffect(() => {
    const checkProfileImage = async () => {
      try {
        const response = await fetch(`${API_URLS.obtenerImage}/uploads/imagen_${userData.usuario}.jpg`);
        setHasProfileImage(response.ok);
      } catch (error) {
        console.error('Error al verificar la existencia de la imagen de perfil:', error);
      }
    };

    if (isAuthenticated) {
      checkProfileImage();
    }
  }, [isAuthenticated, userData.usuario]);

  const toggleMenu = () => {
    setMenuVisible(!menuVisible);
  };

  const closeMenu = () => {
    setMenuVisible(false);
  };

  return (
    <header className="cabecero">
      <CabeceroMenu 
        isAuthenticated={isAuthenticated} 
        userData={userData} 
        visible={visible} 
        hasProfileImage={hasProfileImage} 
        toggleMenu={toggleMenu} 
        closeMenu={closeMenu} 
        logout={logout} 
        menuVisible={menuVisible}
      />
    </header>
  );
}

export default Cabecero;
