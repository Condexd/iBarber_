export const enviadorAuth2 = async (url, valor) => {
  try {
    const token = localStorage.getItem("token");
    const response = await fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`,
      },
      body: JSON.stringify(valor),
    });

    if (response.ok) {
      const data = await response.json();
      return data;
    } else {
      const errorResponse = await response.json();
      throw new Error(errorResponse.message); // Lanza un error con el mensaje del servidor
    }
  } catch (error) {
    console.error('Error en la solicitud:', error);
    mostrarMensajeErrorInesperado();
    throw error; // Propaga el error para que pueda ser manejado en el componente que llama a enviadorAuth2
  }
};
