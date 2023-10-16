import {mostrarMensajeError, mostrarMensajeErrorInesperado } from '../modulos/alertas';
import {API_URLS } from '../modulos/urls';
export const iniciar = async (usuarios, setIsAuthenticated, setUserData) => {
  try {
    const response = await fetch(API_URLS.LOGIN, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(usuarios),
    });

    if (response.ok) {
      const data = await response.json();
      localStorage.setItem('token', data.token);
      setIsAuthenticated(true);
      setUserData(data.user);

      return true;
    } else {
      const errorResponse = await response.json();
      mostrarMensajeError('Error al iniciar sesión', errorResponse.message);
      return false;
    }
  } catch (error) {
    console.error('Error en la solicitud:', error);
    mostrarMensajeErrorInesperado();
    return false;
  }
};
