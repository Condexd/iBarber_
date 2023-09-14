
export const enviador = async (email) => {
    try {
      const response = await fetch('http://localhost:3300/api/recuperar', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({email}),
      });
      if (response.ok) {
        const data = await response.json(); 
        alert(data.message)
      } else {
        const errorResponse = await response.json();
        alert(errorResponse.message);
      }
    } catch (error) {
      const data = await response.json();
      alert(data.message);
    }
    }