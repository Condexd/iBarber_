export const instanceador = async(usuario) => {
    try {
      const response = await fetch(`http://localhost:3300/api/usuarios`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(usuario)
      });
    } catch (error) {
      console.error('Error en la solicitud:', error);
      alert(error)
    }
  };