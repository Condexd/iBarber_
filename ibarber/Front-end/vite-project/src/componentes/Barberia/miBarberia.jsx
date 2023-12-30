import { useState, useContext, useEffect } from "react";
import PerfilBarberia from "./PerfilBarberia";
import FormularioBarberia from "./FormularioBarberia";
import { mostrarConfirmacion } from "../../modulos/confirms";
import { API_URLS } from "../../modulos/urls";
import { useFetchuno } from "../../Hooks/useFetchintento";
import { actualizar } from "../../functions/usePut";

export const MiBarberia = () => {
  const apiUrl = `${API_URLS.obtenerDatosBarberia}`;
  const { data } = useFetchuno(apiUrl);

  const [nombre, setNombre] = useState("");
  const [descripcion, setDescripcion] = useState("");
  const [email, setEmail] = useState("");
  const [telefono, setTelefono] = useState("");
  const [ciudad, setCiudad] = useState("");
  const [direccion, setDireccion] = useState("");
  const [fotoPerfil, setFotoPerfil] = useState(null);
  const [imgPreview, setImgPreview] = useState("");
  const [imgVersion, setImgVersion] = useState(Date.now());

  useEffect(() => {
    if (data) {
      setNombre(data.nombre_barberia);
      setDescripcion(data.descripcion_barberia);
      setEmail(data.email);
      setTelefono(data.telefono);
      setCiudad(data.nombre_ciudad);
      setDireccion(data.direccion);
      setFotoPerfil(`${API_URLS.obtenerImage}${data.fotoPerfil}` || "");
      setImgPreview(
        `${API_URLS.obtenerImage}${data.fotoPerfil}?v=${imgVersion}` || ""
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
      const formData = {
        nombre,
        descripcion,
        email,
        telefono,
        ciudad,
        direccion,
        fotoPerfil,
      };
      await actualizar(formData, API_URLS.ActualizarBarberia);
    }
  };

  return (
    <>
      <main className="profile">
        <div className="profile__container">
          <PerfilBarberia
            nombre={nombre}
            descripcion={descripcion}
            ciudad={ciudad}
            img={imgPreview}
            handleFileChange={handleFileChange}
          />
          <FormularioBarberia
            nombre={nombre}
            setNombre={setNombre}
            descripcion={descripcion}
            setDescripcion={setDescripcion}
            email={email}
            setEmail={setEmail}
            telefono={telefono}
            setTelefono={setTelefono}
            ciudad={ciudad}
            setCiudad={setCiudad}
            direccion={direccion}
            setDireccion={setDireccion}
            handleSubmit={handleSubmit}
          />
        </div>
      </main>
    </>
  );
};
