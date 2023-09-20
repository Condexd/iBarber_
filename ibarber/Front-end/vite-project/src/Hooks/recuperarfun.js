import Swal from 'sweetalert2'; // Importa SweetAlert si estás usando npm

export const enviador = async (email) => {
  try {
    const response = await fetch('http://localhost:3300/api/recuperar', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ email }),
    });

    if (response.ok) {
      const data = await response.json();
      Swal.fire({
        title: 'Éxito',
        text: data.message,
        icon: 'success',
        confirmButtonText: 'Aceptar',
      });
    } else {
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
