export const instanceador = async (usuario) => {
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
      const data = await response.json(); // Puedes procesar la respuesta aquí
      console.log('Respuesta exitosa:', data);
    } else {
      // La solicitud no se completó correctamente (código de respuesta no es 200)
      console.error('Error en la solicitud:', response.status);
    }
  } catch (error) {
    console.error('Error en la solicitud:', error);
    alert(error);
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
      console.error('Error en la solicitud:', response.status);
      alert("papiado")
      return false; // Devolver false para indicar autenticación fallida
    }
  } catch (error) {
    console.error('Error en la solicitud:', error);
    alert(error);
    return false; // Devolver false en caso de error
  }
};
