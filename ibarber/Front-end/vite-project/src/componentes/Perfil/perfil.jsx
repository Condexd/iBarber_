import { useState, useContext, useEffect } from "react";
import { API_URLS } from "../../modulos/urls";
import { UserContext } from "../context/UserContext";
import { actualizar } from "../../functions/usePut";
import PerfilForm from "./PerfilForm";
import PerfilInfo from "./PerfilInfo";
import { mostrarConfirmacion } from "../../modulos/confirms";
import { useFetch } from "../../Hooks/useFetch";
import CambioContrasenaModal from './CambioContrasenaModal';

function Perfil({logout}) {
  const { userData } = useContext(UserContext);
  const apiUrl = `${API_URLS.obtenerInfoUsuario}/${userData.usuario}`;
  const { data } = useFetch(apiUrl);
  const [nombres, setNombres] = useState("");
  const [apellidos, setApellidos] = useState("");
  const [correo, setCorreo] = useState("");
  const [ciudad, setCiudad] = useState("");
  const [telefono, setTelefono] = useState("");
  const [barbero, setBarbero] = useState("");
  const [active, setActive] = useState(false);
  const [showCambioContrasenaModal, setShowCambioContrasenaModal] = useState(false);
  const [fotoPerfil, setFotoPerfil] = useState(null);
  const [imgPreview, setImgPreview] = useState("");
  const [imgVersion, setImgVersion] = useState(Date.now());

  useEffect(() => {
    if (data) {
      setNombres(data.usuario.nombres);
      setApellidos(data.usuario.apellidos);
      setTelefono(data.usuario.telefono || "");
      setCiudad(data.usuario.nombre_ciudad || "");
      setCorreo(data.usuario.correo);
      setBarbero(data.usuario.roles.length);
      setActive(data.usuario.active);
      setFotoPerfil(`${API_URLS.obtenerImage}${data.usuario.fotoPerfil}` || "");
      setImgPreview(`${API_URLS.obtenerImage}${data.usuario.fotoPerfil}?v=${imgVersion}` || "");

    }
  }, [data]);

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    setFotoPerfil(file);
    setImgVersion(Date.now());
    const reader = new FileReader();
    reader.onloadend = () => {
      setImgPreview(reader.result);
    };
    if (file) {
      reader.readAsDataURL(file);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const confirmacion = await mostrarConfirmacion(
      "¿Actualizar datos?",
      "¿Estás seguro de que deseas actualizar los datos?"
    );

    if (confirmacion.isConfirmed) {
        const result=await actualizar(
        {
          nombres,
          telefono,
          nombre_ciudad: ciudad,
          correo,
          apellidos,
          active,
          fotoPerfil,
        },
        `${API_URLS.USUARIO}${userData.usuario}`
      );
    }
  };

  return (
    <main id="main" className="p-2 d-flex mt-5 justify-content-center">
      <div className="d-flex justify-content-evenly flex-wrap">
        <PerfilInfo
          nombres={nombres}
          apellidos={apellidos}
          barbero={barbero}
          active={active}
          setActive={setActive}
          img={imgPreview}
        />
        <PerfilForm
          nombres={nombres}
          setNombres={setNombres}
          apellidos={apellidos}
          setApellidos={setApellidos}
          correo={correo}
          setCorreo={setCorreo}
          handleSubmit={handleSubmit}
          setTelefono={setTelefono}
          setCiudad={setCiudad}
          telefono={telefono}
          ciudad={ciudad}
          handleFileChange={handleFileChange}
          logout={logout}
        />
        <button onClick={() => setShowCambioContrasenaModal(true)}>Cambiar Contraseña</button>
        {showCambioContrasenaModal && (
          <CambioContrasenaModal setVisible={setShowCambioContrasenaModal} />
        )}
      </div>
    </main>
  );
}

export default Perfil;
