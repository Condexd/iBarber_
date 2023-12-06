import{ useState, useContext, useEffect } from 'react';
import PerfilBarberia from './PerfilBarberia';
import FormularioBarberia from './FormularioBarberia';
import { mostrarConfirmacion } from "../../modulos/confirms";
import { API_URLS } from '../../modulos/urls';
import { UserContext } from '../context/UserContext';
import { actualizar } from '../../functions/usePut';
import { useFetch } from '../../Hooks/useFetch';
import { update } from '../../functions/updateBarber';

export const MiBarberia = () => {
  const { userData } = useContext(UserContext);
  const [visible] = useState(userData.usuario);
  const apiUrl = `${API_URLS.obtenerDatosBarberia}/${visible}`;
  const { data} = useFetch(apiUrl);

  const [nombre, setNombre] = useState('');
  const [descripcion, setDescripcion] = useState('');
  const [email, setEmail] = useState('');
  const [telefono, setTelefono] = useState('');
  const [ciudad, setCiudad] = useState('');
console.log(ciudad)

  useEffect(() => {
    if (data) {
      setNombre(data.nombre_barberia);
      setDescripcion(data.descripcion_barberia);
      setEmail(data.email);
      setTelefono(data.telefono);
      setCiudad(data.nombre_ciudad);
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
        _id: visible,
        nombre,
        descripcion,
        email,
        telefono,
        ciudad,
      };
      await update(formData, API_URLS.ActualizarBarberia);
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
            handleSubmit={handleSubmit}
          />
        </div>
      </main>
    </>
  );
};
