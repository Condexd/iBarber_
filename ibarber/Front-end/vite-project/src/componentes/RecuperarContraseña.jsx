import React from 'react'
import {useForm} from "../Hooks/useform"
import { enviador } from '../Hooks/funciones';
export const RecuperarContraseña = () => {
    const{formState,funcion}=useForm({
        email:"",

  })  
  const{email}=formState
 
  const manejador = (event) => {
    event.preventDefault();
    enviador(email);
  };
  return (
    <><div>RecuperarContraseña</div>
    <form onSubmit={manejador} >
        <input type="email" 
        id="email"
        name="email"
        value={email}
        onChange={funcion}
        />
            <button type="submit">enviar</button>
        </form></>
  )
}
