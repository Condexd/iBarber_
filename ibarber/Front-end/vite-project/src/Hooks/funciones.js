import { mostrarMensajeExito, mostrarMensajeError, mostrarMensajeErrorInesperado } from '../modulos/alertas';

export const FuncionRegistrar = async (usuario) => {
  try {
    const response = await fetch('http://localhost:3300/api/Registrar', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(usuario),
    });

    if (response.ok) {
      // La solicitud se completó correctamente (código de respuesta 200)
      const data = await response.json();
      mostrarMensajeExito(data.message);
    } else {
      const errorResponse = await response.json();
      mostrarMensajeError(errorResponse.message);
      // La solicitud no se completó correctamente (código de respuesta no es 200)
    }
  } catch (error) {
    console.error('Error en la solicitud:', error);
    mostrarMensajeErrorInesperado();
  }
};




export const iniciar = async (usuarios, setIsAuthenticated, setUserData) => {
  try {
    const response = await fetch('http://localhost:3300/api/login', {
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
