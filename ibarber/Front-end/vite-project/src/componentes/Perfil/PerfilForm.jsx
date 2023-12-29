import { mostrarConfirmacion } from "../../modulos/confirms";
import { deleteFun } from "../../functions/deleteFun";
import { API_URLS } from "../../modulos/urls";
import { UserContext } from "../context/UserContext";
import { useContext } from "react";
import { useState } from "react";
import CambioContrasenaModal from "./CambioContrasenaModal";
import { FaRegEdit } from "react-icons/fa";

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
  logout,
}) {
  const [showCambioContrasenaModal, setShowCambioContrasenaModal] =
    useState(false);

  const handlePassword = (boolean, event) => {
    event.preventDefault();
    setShowCambioContrasenaModal(boolean);
  };

  const deleteAccount = async (event) => {
    event.preventDefault();
    const confirmacion = await mostrarConfirmacion(
      "¿Eliminar?",
      "¿Estás seguro de Eliminar esta cuenta?"
    );
    if (confirmacion.isConfirmed) {
      const result = await deleteFun(
        `${API_URLS.deleteCuenta}`
      );
      if (result) {
        logout();
      }
    }
  };
  return (
    <form className="form--profile" onSubmit={handleSubmit}>
      <ul className="form__container" id="datos-personales">
        <h2 className="form__container__heading col-3">Mis datos</h2>
        <li className="form__container__group">
          <label className="label--profile">Nombres</label>
          <input
            className="input--profile"
            type="text"
            name="nombres"
            required
            value={nombres}
            onChange={(e) => setNombres(e.target.value)}
          />
        </li>
        <li className="form__container__group">
          <label className="label--profile">Apellidos</label>
          <input
            className="input--profile"
            type="text"
            name="apellidos"
            required
            value={apellidos}
            onChange={(e) => setApellidos(e.target.value)}
          />
        </li>
        <li className="form__container__group">
          <label className="label--profile">Usuario</label>
          <input
            className="input--profile"
            type="text"
            name="usuario"
            required
            disabled
            // value={apellidos}
            // onChange={(e) => setApellidos(e.target.value)}
          />
        </li>
        <li className="form__container__group">
          <label className="label--profile">Email</label>
          <input
            className="input--profile"
            type="email"
            name="email"
            required
            value={correo}
            onChange={(e) => setCorreo(e.target.value)}
          />
        </li>
        <li className="form__container__group">
          <div className="form__container__group__element--pasword">
            <label className="label--profile">Contraseña</label>
            <button
              onClick={(event) => handlePassword(true, event)}
              className="button-link"
            >
              Cambiar clave <FaRegEdit />
            </button>
            {showCambioContrasenaModal && (
              <CambioContrasenaModal
                setVisible={setShowCambioContrasenaModal}
              />
            )}
          </div>
          <input
            className="input--profile"
            type="text"
            name="password"
            placeholder="●●●●●●"
            disabled
          />
        </li>
        <li className="form__container__group">
          <label className="label--profile">
            Teléfono<span>(+57)</span>
          </label>
          <input
            className="input--profile"
            type="text"
            name="telefono"
            required
            value={telefono}
            onChange={(e) => setTelefono(e.target.value)}
            placeholder="Tu número"
          />
        </li>
        <li className="form__container__group">
          <label className="label--profile">Ciudad</label>
          <select
            className="select--profile"
            name="ciudad"
            required
            value={ciudad}
            onChange={(e) => setCiudad(e.target.value)}
          >
            <option>Seleccionar</option>
            <option value="Bogotá">Bogotá</option>
            <option value="Medellín">Medellín</option>
            <option value="Cali">Cali</option>
          </select>
        </li>
        <li className="form__container__group col-3">
          <label className="label--profile">Biografia</label>
          <textarea
            className="textarea--description"
            type="text"
            name="usuario"
            required
            rows="4"
            // value={apellidos}
            // onChange={(e) => setApellidos(e.target.value)}
          ></textarea>
        </li>
        <li className="form__container__group col-3">
          <div className="form__container__group__element">
            <input
              className="button button-green"
              type="submit"
              value="Guardar cambios"
            />
            <button className="button button-red" onClick={deleteAccount}>
              Eliminar cuenta
            </button>
          </div>
        </li>
      </ul>
    </form>
    
  );
}

export default PerfilForm;
