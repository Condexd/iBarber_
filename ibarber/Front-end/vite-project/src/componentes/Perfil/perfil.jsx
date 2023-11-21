import React, { useState, useContext, useEffect } from "react";
import { API_URLS } from "../../modulos/urls";
import { UserContext } from "../context/UserContext";
import { actualizar } from "../../functions/usePut";
import PerfilForm from "./PerfilForm";
import PerfilInfo from "./PerfilInfo";
import { mostrarConfirmacion } from "../../modulos/confirms";
import { useFetch } from "../../Hooks/useFetch";

function Perfil() {
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

  useEffect(() => {
    if (data) {
      setNombres(data.usuario.nombres);
      setApellidos(data.usuario.apellidos);
      setTelefono(data.usuario.telefono || "");
      setCiudad(data.usuario.nombre_ciudad|| "");
      setCorreo(data.usuario.correo);
      setBarbero(data.usuario.roles.length);
     setActive(data.usuario.active)
    }
  }, [data]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const confirmacion = await mostrarConfirmacion(
      "¿Actualizar datos?",
      "¿Estás seguro de que deseas actualizar los datos?"
    );

    if (confirmacion.isConfirmed) {
      await actualizar(
        {
          nombres,
          telefono,
          nombre_ciudad: ciudad,
          correo,
          apellidos,
          active
        },
        `${API_URLS.USUARIO}${userData.usuario}`
      );
    }
  };

  return (
    <main id="main" className="p-2 d-flex mt-4 justify-content-center">
      { barbero> 0  && (
        active ? (
          <button onClick={() => setActive(false)}>Inactivar</button>
        ) : (
          <>
            <h3>barbero</h3>
            <button onClick={() => setActive(true)}>Activar</button>
          </>
        )
      )}
      <div className="d-flex justify-content-evenly flex-wrap">
        <PerfilInfo
          nombres={nombres}
          apellidos={apellidos}
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
        />
      </div>
    </main>
  );
}

export default Perfil;
