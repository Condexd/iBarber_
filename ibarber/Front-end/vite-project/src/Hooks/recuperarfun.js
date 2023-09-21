import { mostrarMensajeExito, mostrarMensajeError, mostrarMensajeErrorInesperado } from '../modulos/alertas';

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
      mostrarMensajeExito(data.message);
    } else {
      const errorResponse = await response.json();
      mostrarMensajeError(errorResponse.message);
    }
  } catch (error) {
    console.error('Error en la solicitud:', error);
    mostrarMensajeErrorInesperado();
  }
};
