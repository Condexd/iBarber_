import { useForm } from '../../Hooks/useform';
import { RegistrarBarberia } from '../../functions/Registrobarberia';
import { API_URLS } from '../../modulos/urls';
import { UserContext } from '../context/UserContext';
import { Link, useNavigate } from 'react-router-dom';
import { useContext ,useState} from 'react';

export const Crearbarberia = () => {
  const { userData, setUserData } = useContext(UserContext);
  const [usuario, setUsuario] = useState(userData.usuario);

  const { formState, funcion } = useForm({
    nombre_barberia: '',
    direccion_barberia: '',
    nombre_ciudad: '',
  });
  const { nombre_barberia, direccion_barberia, nombre_ciudad } = formState;

  const navigate = useNavigate();
  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(usuario)
    if(nombre_ciudad==="seleccionar")return;
    const result = await RegistrarBarberia(API_URLS.BARBERIA, { nombre_barberia, direccion_barberia, nombre_ciudad,usuario});
    if(result.ok)
    navigate("/mi-barberia")
    setUserData(prevUserData => ({
      ...prevUserData, // Clonar las propiedades existentes
      barberia: true // Cambiar la propiedad "barberia" a false
    }));
  };

  return (
    <>

      <main id="form-barber-container">
        <div className='img-container'>
        <img src="https://github.com/Condexd/iBarber_/blob/develop/ibarber/Front-end/vite-project/src/imgcar/barber.jpg?raw=true" alt="Imagen de la barbería" /> 
        </div>
        <form onSubmit={handleSubmit} id="form-barber">
          <div id="login-title">
            <h3 className='title-barber'>Crear Barbería</h3>
          </div>
          <div id="login-username">
            <input
              type="text"
              name="nombre_barberia"
              placeholder="Nombre de la barbería"
              required
              id="nombre_barberia"
              value={nombre_barberia}
              onChange={funcion}
            />
          </div>
          <div id="login-password">
            <input
              type="text"
              name="direccion_barberia"
              placeholder="Dirección de la barbería"
              required
              id="direccion_barberia"
              value={direccion_barberia}
              onChange={funcion}
            />
          </div>
          <div id="login-username">
            <label>Nombre de la ciudad</label>
            <select
              name="nombre_ciudad"
              value={nombre_ciudad}
              onChange={funcion}
              id="nombre_ciudad"
            >  <option value="seleccionar">Seleccionar</option>
              <option value="Bogotá">Bogotá</option>
              <option value="Medellín">Medellín</option>
              <option value="Cali">Cali</option>
            </select>
          </div>
          <div id="btn-enviar-barbero">
            <button type="submit" id="boton-crear-barberia">
              Enviar
            </button>
          </div>
        </form>
      </main>
    </>
  );
};


