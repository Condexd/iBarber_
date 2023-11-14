import Swal from 'sweetalert2';

export const mostrarMensajeExito = (mensaje) => {
  Swal.fire({
    title: 'Registro exitoso',
    text: mensaje,
    icon: 'success',
    confirmButtonText: 'Aceptar',
  });
};

export const mostrarMensajeExitoDelete = () => {
  Swal.fire({
    title: 'Registro Eliminado',
    icon: 'success',
    confirmButtonText: 'Aceptar',
    iconHtml: '<i class="fas fa-trash-alt"></i>'
  });
};


export const mostrarMensajeError = (mensaje) => {
  Swal.fire({
    title: 'Error al registrar',
    text: mensaje,
    icon: 'error',
    confirmButtonText: 'Aceptar',
  });
};

export const mostrarMensajeErrorInesperado = () => {
  Swal.fire({
    title: 'Error',
    text: 'Ocurrió un error inesperado',
    icon: 'error',
    confirmButtonText: 'Aceptar',
  });
};
