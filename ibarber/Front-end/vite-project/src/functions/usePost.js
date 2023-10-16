import { mostrarMensajeExito, mostrarMensajeError, mostrarMensajeErrorInesperado } from '../modulos/alertas';

export const enviador = async (url, valor) => {
  try {
    const response = await fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(valor),
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
