import { useState ,useContext} from 'react';
import { UserContext } from '../context/UserContext';
import { enviador } from '../../functions/usePost';
import { API_URLS } from '../../modulos/urls';
import { useNavigate } from 'react-router-dom';
export const CrearBarbero = () => {
  const { userData} = useContext(UserContext);
  const [usuarioDueño, setUsuarioDueño] = useState(userData.usuario);
  const [usuario, setUsuario] = useState('');
  const [numero, setNumero] = useState('');
  const [biografia, setBiografia] = useState('');
  const [especialidad, setEspecialidad] = useState('Seleccionar');
  const [ciudad, setCiudad] = useState('Seleccionar');
  const [experiencia, setExperiencia] = useState('');
  const handleUsuarioChange = (event) => {
    setUsuario(event.target.value);
  };
  const handleNumeroChange = (event) =>{
    setNumero(event.target.value);
  };
  const handleBiografiaChange = (event) =>{
    setBiografia(event.target.value);
  } ;
  const handleEspecialidadChange = (event) =>{
    setEspecialidad(event.target.value);
  };
  const handleCiudadChange = (event) => {
    setCiudad(event.target.value);
  };

  const handleExperienciaChange = (event) => {
    setExperiencia(event.target.value);
  };

  const navigate = useNavigate();
  const handleSubmit =async (event) => {
    event.preventDefault();
    const result = await enviador(`${API_URLS.crearBarbero}/${usuarioDueño}`,{ usuario, ciudad, experiencia })
    if(result){
     console.log(result)
     navigate("/empleados") }
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
          <ul id="form-num">
            <li>
              <input 
              type="text" 
              id="numero"
              name="numero"
              value={numero}
              onChange={handleNumeroChange}
              required
              placeholder="Número"
              />
            </li>
          </ul>
          <ul id="form-bio">
            <li>
              <input 
              type="text" 
              id="biografia" 
              name="biografia"
              value={biografia} 
              onChange={handleBiografiaChange}
              required
              placeholder="Biografía"
              />
            </li>
          </ul>
          <ul id="form-esp">
            <select 
            name="especialidad" 
            value={especialidad}
            onChange={handleEspecialidadChange}
            className=""
            >
              <option value="Seleccionar">Selecciona Especialidad</option>
              <option value="Corte de cabello">Corte de cabello</option>
              <option value="Corte para niños">Corte para niños</option>
              <option value="Barba">Barba</option>
              <option value="Coloracion de cabello">Coloración de cabello</option>
            </select>
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
