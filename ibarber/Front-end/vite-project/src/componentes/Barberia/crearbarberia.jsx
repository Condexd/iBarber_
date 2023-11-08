import { useForm } from '../../Hooks/useform';
import { enviador } from '../../functions/usePost'; // Asegúrate de importar el custom hook
import { API_URLS } from '../../modulos/urls';
import { Link } from 'react-router-dom'; // Asegúrate de importar Link si no lo has hecho
export const Crearbarberia = () => {
  const { formState, funcion } = useForm({
    nombre_barberia: '',
    direccion_barberia: '',
    nombre_ciudad: '',
  });
  const { nombre_barberia, direccion_barberia, nombre_ciudad } = formState;

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(formState);
    const result = await enviador(API_URLS.BARBERIA, formState);
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
            >
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


