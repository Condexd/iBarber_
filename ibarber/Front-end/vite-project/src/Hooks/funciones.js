
import Swal from 'sweetalert2'; // Importa SweetAlert si estás usando npm

export const FuncionRegistrar = async (usuario) => {
  try {
    const response = await fetch('http://localhost:3300/api/usuarios', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(usuario),
    });

    if (response.ok) {
      // La solicitud se completó correctamente (código de respuesta 200)
      const data = await response.json();
      Swal.fire({
        title: 'Registro exitoso',
        text: data.message, // Puedes personalizar el mensaje aquí
        icon: 'success',
        confirmButtonText: 'Aceptar',
      });
    } else {
      const errorResponse = await response.json();
      Swal.fire({
        title: 'Error al registrar',
        text: errorResponse.message,
        icon: 'error',
        confirmButtonText: 'Aceptar',
      });
      // La solicitud no se completó correctamente (código de respuesta no es 200)
    }
  } catch (error) {
    console.error('Error en la solicitud:', error);
    Swal.fire({
      title: 'Error',
      text: 'Ocurrió un error inesperado',
      icon: 'error',
      confirmButtonText: 'Aceptar',
    });
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
      
      Swal.fire({
        title: 'Inicio de sesión exitoso',
        text: '¡Bienvenido!',
        icon: 'success',
        confirmButtonText: 'Aceptar',
      });

      return true;
    } else {
      const errorResponse = await response.json();
      
      Swal.fire({
        title: 'Error al iniciar sesión',
        text: errorResponse.message,
        icon: 'error',
        confirmButtonText: 'Aceptar',
      });

      return false;
    }
  } catch (error) {
    console.error('Error en la solicitud:', error);
    
    Swal.fire({
      title: 'Error',
      text: 'Ocurrió un error inesperado',
      icon: 'error',
      confirmButtonText: 'Aceptar',
    });

    return false;
  }
};
