
import Swal from 'sweetalert2';


export const actualizar = async (usuario) => {
  try {
    // Envía la solicitud al servidor
    const response = await fetch(`http://localhost:3300/api/usuario/${usuario._id}`, {
      method: 'put',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(usuario),
    });

    if (response.ok) {
      const resultados = await response.json();
      Swal.fire({
        title: '¡Éxito!',
        text: resultados.message,
        icon: 'success',
        confirmButtonText: 'Aceptar',
      });
      return resultados;
    } else {
      // La solicitud no fue exitosa
      const errorResponse = await response.json();
      Swal.fire({
        title: 'Error',
        text: errorResponse.message,
        icon: 'error',
        confirmButtonText: 'Aceptar',
      });
    }
  } catch (error) {
    console.error('Error en la solicitud:', error);
    Swal.fire({
      title: 'Error',
      text: 'Ocurrió un error inesperado',
      icon: 'error',
      confirmButtonText: 'Aceptar',
    });
  }
};
