import React, { useState } from "react";

function Registrar() {
  const [nombres, setNombres] = useState("");
  const [apellidos, setApellidos] = useState("");
  const [numeroDocumento, setNumeroDocumento] = useState("");
  const [password, setPassword] = useState("");

  const instanceador = async(e) => {
    e.preventDefault();
    const usuario = {
      nombre: nombres,
      apellido: apellidos,
      documento:numeroDocumento,
      password:password
    };

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

  return (
    <form onSubmit={instanceador}>
      <div>Registrarse</div>
      <label htmlFor="nombres">Nombres</label>
      <input
        type="text"
        id="nombres"
        value={nombres}
        onChange={(e) => setNombres(e.target.value)}
      />
      <label htmlFor="apellidos">Apellidos</label>
      <input
        type="text"
        id="apellidos"
        value={apellidos}
        onChange={(e) => setApellidos(e.target.value)}
      />
      <label htmlFor="numeroDocumento">Número de Documento</label>
      <input
        type="text"
        id="numeroDocumento"
        value={numeroDocumento}
        onChange={(e) => setNumeroDocumento(e.target.value)}
      />
      <label htmlFor="password">Contraseña</label>
      <input
        type="password"
        id="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button type="submit">Registrar</button>
    </form>
  );
}

export default Registrar;
