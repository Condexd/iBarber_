import {
  mostrarMensajeExito,
  mostrarMensajeError,
  mostrarMensajeErrorInesperado,
} from '../modulos/alertas';

export const actualizar = async (usuario, url) => {
  try {
    // Verificar si el usuario está definido y tiene un archivo adjunto
    if (usuario && usuario.fotoPerfil instanceof Blob) {
      // Convertir el archivo a base64
      const archivoBase64 = await convertirArchivoABase64(usuario.fotoPerfil);

      // Agregar la propiedad al objeto usuario
      usuario.fotoPerfil = archivoBase64;
    }
    
    const token = localStorage.getItem("token"); 

    const response = await fetch(`${url}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`, 
      },
      body: JSON.stringify(usuario),
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

const convertirArchivoABase64 = async (archivo) => {
  try {
    return new Promise((resolve, reject) => {
      const lector = new FileReader();

      lector.onload = () => {
        // El resultado contiene la base64 del archivo
        resolve(lector.result.split(',')[1]);
      };

      lector.onerror = (error) => {
        reject(error);
      };

      // Leer el archivo como base64
      lector.readAsDataURL(archivo);
    });
  } catch (error) {
    console.error('Error durante la conversión a base64:', error);
    throw error;
  }
};
