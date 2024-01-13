import { useState, useContext, useEffect } from "react";
import { API_URLS } from "../../modulos/urls";
import { actualizar } from "../../functions/usePut";
import PerfilForm from "./PerfilForm";
import PerfilInfo from "./PerfilInfo";
import { mostrarConfirmacion } from "../../modulos/confirms";
import { useFetchuno } from "../../Hooks/useFetchintento";


function Perfil({ logout }) {
  const apiUrl = `${API_URLS.obtenerInfoUsuario}`;
  const { data } = useFetchuno(apiUrl);
  const [nombres, setNombres] = useState("");
  const [apellidos, setApellidos] = useState("");
  const [correo, setCorreo] = useState("");
  const [ciudad, setCiudad] = useState("");
  const [telefono, setTelefono] = useState("");
  const [barbero, setBarbero] = useState("");
  const [usuario, setUsuario] = useState("");
  const [active, setActive] = useState(false);
  const [biografia, setBiografia] = useState("");
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
      setUsuario(data.usuario.usuario);
      setBiografia(data.usuario.biografia);
      setFotoPerfil(`${API_URLS.obtenerImage}${data.usuario.fotoPerfil}` || "");
      setImgPreview(
        `${API_URLS.obtenerImage}${data.usuario.fotoPerfil}?v=${imgVersion}` ||
          ""
      );
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
    if (ciudad === "seleccionar") return;

    const confirmacion = await mostrarConfirmacion(
      "¿Actualizar datos?",
      "¿Estás seguro de que deseas actualizar los datos?"
    );

    if (confirmacion.isConfirmed) {
      const result = await actualizar(
        {
          nombres,
          telefono,
          nombre_ciudad: ciudad,
          correo,
          apellidos,
          active,
          fotoPerfil,
          biografia,
        },
        `${API_URLS.USUARIO}`
      );
    }
  };

  return (
    <main className="profile">
      <div className="profile__container">
        <PerfilInfo
          nombres={nombres}
          apellidos={apellidos}
          barbero={barbero}
          active={active}
          setActive={setActive}
          img={imgPreview}
          handleFileChange={handleFileChange}
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
          logout={logout}
          user={usuario}
          biografia={biografia}
          setBiografia={setBiografia}
        />
      </div>
    </main>
  );
}

export default Perfil;
