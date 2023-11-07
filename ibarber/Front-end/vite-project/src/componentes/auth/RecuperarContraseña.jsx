import React from 'react'
import {useForm} from "../../Hooks/useform"
import { API_URLS } from '../../modulos/urls';
import { mostrarConfirmacion } from '../../modulos/confirms';
import { enviador } from '../../functions/usePost';

export const RecuperarContraseña = () => {
    const{formState,funcion}=useForm({
        email:"",

  })  
  const{email}=formState
 

 

  const manejador = async (event) => {
    event.preventDefault();
  
    const confirmacion = await mostrarConfirmacion(
      '¿Enviar datos?',
      '¿Estás seguro de que deseas enviar los datos?'
    );
  
    if (confirmacion.isConfirmed) {
        await enviador(API_URLS.RECUPERAR,{email});
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
