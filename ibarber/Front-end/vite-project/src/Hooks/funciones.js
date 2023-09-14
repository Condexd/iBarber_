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
      alert(data.message)// Puedes procesar la respuesta aquí
    } else {
      const errorResponse = await response.json();
      alert(errorResponse.message);
      // La solicitud no se completó correctamente (código de respuesta no es 200)
    }
  } catch (error) {
    console.error('Error en la solicitud:', error);
  }
};
export const iniciar = async (usuarios, setIsAuthenticated) => {
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
      console.log(data);
      localStorage.setItem('token', data.token);
      // Cambiar el estado de autenticación aquí
      setIsAuthenticated(true);

      // Devolver true para indicar autenticación exitosa
      return true;
    } else {
        const errorResponse = await response.json();
        alert(errorResponse.message);
        // La solicitud no se completó correctamente (código de respuesta no es 200)
      return false; // Devolver false para indicar autenticación fallida
    }
  } catch (error) {
    return false; // Devolver false en caso de error
  }
};
