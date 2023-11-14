import { useState ,useContext} from 'react';
import { UserContext } from '../context/UserContext';
import { enviador } from '../../functions/usePost';
import { API_URLS } from '../../modulos/urls';
export const CrearBarbero = () => {
  const { userData} = useContext(UserContext);
  const [usuarioDueño, setUsuarioDueño] = useState(userData.usuario);
  const [usuario, setUsuario] = useState('');
  const [ciudad, setCiudad] = useState('Seleccionar');
  const [experiencia, setExperiencia] = useState('');
  const handleUsuarioChange = (event) => {
    setUsuario(event.target.value);
  };

  const handleCiudadChange = (event) => {
    setCiudad(event.target.value);
  };

  const handleExperienciaChange = (event) => {
    setExperiencia(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(`${API_URLS.crearBarbero}/${usuarioDueño}`)
        enviador(`${API_URLS.crearBarbero}/${usuarioDueño}`,{ usuario, ciudad, experiencia })
  };

  return (
    <>
      <main id="form-container">
        <form id="form-register" onSubmit={handleSubmit}>
          <div id="form-title">
            <h3>Añadir empleado</h3>
          </div>
          <ul id="form-email">
            <li>
              <input
                type="text"
                id="usuario"
                name="usuario"
                value={usuario}
                onChange={handleUsuarioChange}
                required
                placeholder="Usuario"
              />
            </li>
          </ul>
          <ul className="form-group">
            <select
              name="nombre_ciudad"
              value={ciudad}
              onChange={handleCiudadChange}
              className="form-control"
            >
              <option value="Seleccionar">Selecciona ciudad</option>
              <option value="Bogotá">Bogotá</option>
              <option value="Medellín">Medellín</option>
              <option value="Cali">Cali</option>
            </select>
          </ul>
          <ul id="form-username">
            <li>
              <input
                type="number"
                id="experiencia"
                autoComplete="experiencia"
                name="experiencia"
                value={experiencia}
                onChange={handleExperienciaChange}
                placeholder="Años de experiencia"
                required
              />
            </li>
          </ul>
          <ul id="form-button">
            <li>
              <button type="submit">Agregar barbero</button>
            </li>
          </ul>
        </form>
      </main>
    </>
  );
};
