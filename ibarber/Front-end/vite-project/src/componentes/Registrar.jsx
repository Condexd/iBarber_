import {useForm} from "../Hooks/useform"
import { FuncionRegistrar } from "../Hooks/funciones";

function Registrar() {
  const{formState,funcion}=useForm({
        nombres:"",
        apellidos:"",
        usuario:"",
        password:"",
        email:"",

  })  
  const{nombres,apellidos,usuario,password,email}=formState
 
  const manejador = (event) => {
    event.preventDefault();
   const confirmarcion= confirm("¿Enviar datos?")
   if(confirmarcion){
    FuncionRegistrar({nombres,apellidos,usuario,password,email});
   }
    
  };

  return (
    <><form onSubmit={manejador}>
      <div>Registrarse</div>
      <label htmlFor="nombres">Nombres</label>
      <input
        type="text"
        id="nombres"
        name="nombres"
        value={nombres}
        onChange={funcion} />
      <label htmlFor="apellidos">Apellidos</label>
      <input
        type="text"
        id="apellidos"
        name="apellidos"
        value={apellidos}
        onChange={funcion} />
      <label htmlFor="numeroDocumento">Usuario</label>
      <input
        type="text"
        id="numeroDocumento"
        autoComplete="username"
        name="usuario"
        value={usuario}
        onChange={funcion} />
      <label htmlFor="password">Contraseña</label>
      <input
        type="password"
        id="password"
        autoComplete="email"
        name="password"
        value={password}
        onChange={funcion} />

      <label htmlFor="email">email</label>
      <input
        type="email"
        id="email"
        name="email"
        value={email}
        onChange={funcion} />
      <button type="submit">Registrar</button>
    </form>
   </>
  );
 
}

export default Registrar;
