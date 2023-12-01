import { mostrarMensajeExito, mostrarMensajeError, mostrarMensajeErrorInesperado } from '../modulos/alertas';

export const actualizar = async (usuario,url) => {
  consol
  try {
    const response = await fetch(`${url}`,{
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: usuario,
    });

    if (response.ok) {
      const resultados = await response.json();
      mostrarMensajeExito(resultados.message);
      return resultados;
    } else {
      const errorResponse = await response.json();
      mostrarMensajeError(errorResponse.message);
    }
  } catch (error) {
    console.error('Error en la solicitud:', error);
    mostrarMensajeErrorInesperado();
  }
};