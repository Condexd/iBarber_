import{ useState, useContext, useEffect } from 'react';
import PerfilBarberia from './PerfilBarberia';
import FormularioBarberia from './FormularioBarberia';
import { mostrarConfirmacion } from "../../modulos/confirms";
import { API_URLS } from '../../modulos/urls';
import { useFetchuno } from '../../Hooks/useFetchintento';
import { actualizar } from '../../functions/usePut';

export const MiBarberia = () => {
  const apiUrl = `${API_URLS.obtenerDatosBarberia}`;
  const { data} = useFetchuno(apiUrl);

  const [nombre, setNombre] = useState('');
  const [descripcion, setDescripcion] = useState('');
  const [email, setEmail] = useState('');
  const [telefono, setTelefono] = useState('');
  const [ciudad, setCiudad] = useState('');
  const [direccion, setDireccion] = useState('');


  useEffect(() => {
    if (data) {
      setNombre(data.nombre_barberia);
      setDescripcion(data.descripcion_barberia);
      setEmail(data.email);
      setTelefono(data.telefono);
      setCiudad(data.nombre_ciudad);
      setDireccion(data.direccion);
    }
  }, [data]);
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
      };
      await actualizar(formData, API_URLS.ActualizarBarberia);
    }
  };

  return (
    <>
      <main id="main" className="p-2 d-flex mt-5 justify-content-center align-items-center">
        <div className="d-flex justify-content-evenly flex-wrap">
          <PerfilBarberia
            nombre={nombre}
            descripcion={descripcion}
            ciudad={ciudad}
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
