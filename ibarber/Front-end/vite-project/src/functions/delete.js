import { mostrarMensajeError, mostrarMensajeErrorInesperado } from "../modulos/alertas";
import { API_URLS } from "../modulos/urls";
export const deleteBarber=async(barberoId)=>{
  console.log(`${API_URLS.eliminarBarbero}/${barberoId}`)
    try {
        const response = await fetch(`${API_URLS.eliminarBarbero}/${barberoId}`, {
          method: 'DELETE',
          headers: {
            'Content-Type': 'application/json',
          },
        });
        if (response.ok) {
          return true
        } else {
          console.log(response)
          mostrarMensajeError('Error al borrar el barbero');
        }
      } catch (error) {
        mostrarMensajeErrorInesperado('Error de red:', error);
      }
}
