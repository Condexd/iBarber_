import Swal from 'sweetalert2';

export const mostrarMensajeExito = (mensaje) => {
  Swal.fire({
    title: 'Registro exitoso',
    text: mensaje,
    icon: 'success',
    confirmButtonText: 'Aceptar',
  });
};

export const mostrarMensajeExitoDelete = (mensaje) => {
  Swal.fire({
    title: mensaje ? mensaje : 'Registro Eliminado',
    icon: 'success',
    confirmButtonText: 'Aceptar',
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
