import {useForm} from "../Hooks/useform"
import {instanceador} from "../Hooks/funciones"
function Registrar() {
  const{formState,funcion}=useForm({
        nombres:"",
        apellidos:"",
        numeroDocumento:"",
        password:"",

  })  
  const{nombres,apellidos,numeroDocumento,password}=formState
  
  const manejador = (event) => {
    event.preventDefault();
    instanceador({nombres,apellidos,numeroDocumento,password});
  };

  return (
    <form onSubmit={manejador}>
      <div>Registrarse</div>
      <label htmlFor="nombres">Nombres</label>
      <input
        type="text"
        id="nombres"
        name="nombres"
        value={nombres}
        onChange={funcion}
      />
      <label htmlFor="apellidos">Apellidos</label>
      <input
        type="text"
        id="apellidos"
        name="apellidos"
        value={apellidos}
        onChange={funcion}
      />
      <label htmlFor="numeroDocumento">Número de Documento</label>
      <input
        type="text"
        id="numeroDocumento"
        name="numeroDocumento"
        value={numeroDocumento}
        onChange={funcion}
      />
      <label htmlFor="password">Contraseña</label>
      <input
        type="password"
        id="password"
        name="password"
        value={password}
        onChange={funcion}
      />
      <button type="submit">Registrar</button>
    </form>
  );
}

export default Registrar;
