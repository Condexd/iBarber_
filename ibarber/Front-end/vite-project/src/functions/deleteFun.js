import { mostrarMensajeError, mostrarMensajeErrorInesperado } from "../modulos/alertas";

export const deleteFun=async(url)=>{
    try {
        const response = await fetch(url, {
          method: 'DELETE',
          headers: {
            'Content-Type': 'application/json',
          },
        });
        if (response.ok) {
          const respuesta = await response.json();
          return respuesta;
        } else {
          console.log(response)
          mostrarMensajeError('Error al borrar');
        }
      } catch (error) {
        mostrarMensajeErrorInesperado('Error de red:', error);
      }
}