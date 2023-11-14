import { mostrarMensajeError, mostrarMensajeErrorInesperado } from "../modulos/alertas";
import { API_URLS } from "../modulos/urls";
export const deleteBarber=async(barberoId)=>{
    try {
        // Realiza la petición DELETE al servidor
        const response = await fetch(`${API_URLS.eliminarBarbero}/${barberoId}`, {
          method: 'DELETE',
          headers: {
            'Content-Type': 'application/json',
            // Puedes incluir otros encabezados según sea necesario
          },
        });
    
        if (response.ok) {
          return true
        } else {
          // Maneja el caso en que la petición no fue exitosa
          mostrarMensajeError('Error al borrar el barbero');
        }
      } catch (error) {
        // Maneja errores de red u otros errores relacionados con la petición
        mostrarMensajeErrorInesperado('Error de red:', error);
      }
}
