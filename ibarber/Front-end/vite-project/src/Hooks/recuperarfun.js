
export const enviador = async (email) => {
    try {
      const response = await fetch('http://localhost:3300/api/recuperar', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({email}),
      });
    } catch (error) {
      console.error('Error en la solicitud:', error);
      alert(error);
    }
    }