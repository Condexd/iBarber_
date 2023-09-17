export const actualizar = async (usuario) => {
    try {
        // Envía la solicitud al servidor
        const response = await fetch(`http://localhost:3300/api/usuario/${usuario._id}`, {
          method: 'put',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(usuario)
        });
  
        if (response.ok) {
            const resultados = await response.json();
            alert(resultados.message);
        } else {
          // La solicitud no fue exitosa
          const errorResponse = await response.json();
          alert(errorResponse.message);
        }
      } catch (error) {
        console.error('Error en la solicitud:', error);
      }
  };