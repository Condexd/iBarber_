import Swal from 'sweetalert2';

export const mostrarConfirmacion = (titulo, mensaje) => {
  return Swal.fire({
    title: titulo,
    text: mensaje,
    icon: 'question',
    showCancelButton: true,
    confirmButtonText: 'Sí',
    cancelButtonText: 'Cancelar',
    customClass: {
      confirmButton: 'btn btn-success', // Clase de estilo para el botón "Sí"
      cancelButton: 'btn btn-danger',   // Clase de estilo para el botón "Cancelar"
    },
    background: '#f5f5f5', // Color de fondo del cuadro de diálogo

  });
};
