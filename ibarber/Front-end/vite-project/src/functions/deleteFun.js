import { mostrarMensajeError, mostrarMensajeErrorInesperado } from "../modulos/alertas";

export const deleteFun=async(url)=>{

  const token = localStorage.getItem("token"); 
    try {
        const response = await fetch(url, {
          method: 'DELETE',
          headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`
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