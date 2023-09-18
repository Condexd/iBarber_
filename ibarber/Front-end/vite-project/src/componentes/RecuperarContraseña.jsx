import React from 'react'
import {useForm} from "../Hooks/useform"
import { enviador } from '../Hooks/recuperarfun';
export const RecuperarContraseña = () => {
    const{formState,funcion}=useForm({
        email:"",

  })  
  const{email}=formState
 
  const manejador = (event) => {
    event.preventDefault();
    const confirmarcion= confirm("¿Enviar datos?")
    if(confirmarcion){
      enviador(email);
    }
   
  };
  return (
    <>
    <main id='form-recuperar-container'>
      <form onSubmit={manejador} id='form-recuperar'>
        <div>
          <h5>Olvidé mis datos de acceso</h5>
        </div>
        <div>
          <input type="email"
            id="email"
            name="email"
            placeholder='Email'
            required
            value={email}
            onChange={funcion}
            />
        </div>
        <div>
          <button type="submit">Enviar</button>
        </div>
        <div id='mensaje-recuperar'>
          <span>Te enviaremos una nueva contraseña y tu nombre de usuario</span>
        </div>
      </form>
    </main>
        </>
  )
}
