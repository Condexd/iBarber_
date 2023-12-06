import React, { useState } from "react";

function PerfilForm({
  nombres,
  apellidos,
  correo,
  telefono,
  ciudad,
  handleSubmit,
  setNombres,
  setApellidos,
  setCorreo,
  setTelefono,
  setCiudad,
  handleFileChange,
}) {

  return (
    <form className="w-50 p-3" onSubmit={handleSubmit} >
      <ul className="row gap-3" id="datos-personales">
        <h2>Mis datos</h2>
        <li className="col-5 row">
          <label>Nombres</label>
          <input
            type="text"
            name="nombres"
            required
            value={nombres}
            onChange={(e) => setNombres(e.target.value)}
          />
        </li>
        <li className="col-5 row">
          <label>Apellidos</label>
          <input
            type="text"
            name="apellidos"
            required
            value={apellidos}
            onChange={(e) => setApellidos(e.target.value)}
          />
        </li>
        <li className="col-5 row">
          <label>Email</label>
          <input
            type="email"
            name="email"
            required
            value={correo}
            onChange={(e) => setCorreo(e.target.value)}
          />
        </li>
        <li className="col-5 row">
          <label>Teléfono<span>(+57)</span></label>
          <input
            type="text"
            name="telefono"
            required
            value={telefono}
            onChange={(e) => setTelefono(e.target.value)}
            placeholder="Tu número"
          />
        </li>
        <li className="col-5 row">
          <label>Ciudad</label>
          <select
            name="ciudad"
            required
            value={ciudad}
            onChange={(e) => setCiudad(e.target.value)}
          >
            <option>Seleccionar</option>
            <option value="Bogotá">Bogotá</option>
            <option value="Medellín">Medellín</option>
            <option value="Ciudad3">Ciudad3</option>
          </select>
        </li>
        <li className="row">
          <label>Foto de Perfil</label>
          <input
            type="file"
            accept="image/*"
            onChange={handleFileChange}
            name="perfil"
          />
        </li>
        <li className="row">
          <div className="mt-5 d-flex align-content-center">
            <input
              type="submit"
              className="btn btn-success"
              value="Guardar cambios"
            />
            <button className="btn btn-link">Cancelar</button>
          </div>
        </li>
      </ul>
    </form>
  );
}

export default PerfilForm;
