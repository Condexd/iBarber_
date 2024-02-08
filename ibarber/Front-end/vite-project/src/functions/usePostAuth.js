import { mostrarMensajeExito, mostrarMensajeError, mostrarMensajeErrorInesperado } from '../modulos/alertas';

export const enviadorAuth = async (url, valor) => {
  try {
    const token = localStorage.getItem("token"); 
    const response = await fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`,
      },
      body: JSON.stringify(valor),
    });

    if (response.ok) {
      const data = await response.json();
      mostrarMensajeExito(data.message);
      return data;
    } else {
      const errorResponse = await response.json();
      mostrarMensajeError(errorResponse.message);
    }
  } catch (error) {
    console.error('Error en la solicitud:', error);
    mostrarMensajeErrorInesperado();
  }
};
