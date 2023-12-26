import {
    mostrarMensajeExito,
    mostrarMensajeError,
    mostrarMensajeErrorInesperado,
  } from '../modulos/alertas';
  
  export const updateLittle = async (url,content) => {
  console.log('Enviando solicitud a:', url);
  console.log('Contenido de la solicitud:', JSON.stringify(content));
    try {
      const response = await fetch(url, {
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(content),
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