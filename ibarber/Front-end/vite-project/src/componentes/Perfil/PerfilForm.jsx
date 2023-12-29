import { FaCamera } from "react-icons/fa";

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
    <form className="form--profile" onSubmit={handleSubmit} >
      <ul className="form__container" id="datos-personales">
        <h2 className="form__container__heading col-3">Mis datos</h2>
        <li className="form__container__group">
          <label className="label--profile" >Nombres</label>
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
          <label className="label--profile" >Apellidos</label>
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
          <label className="label--profile" >Usuario</label>
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
          <label className="label--profile" >Email</label>
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
          <label className="label--profile" >Teléfono<span>(+57)</span></label>
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
          <label className="label--profile" >Ciudad</label>
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
            <option value="Ciudad3">Ciudad3</option>
          </select>
        </li>
        <li className="form__container__group col-3">
          <label className="label--profile" >Biografia</label>
          <textarea
            className="textarea--description"
            type="text"
            name="usuario"
            required
            rows="4"
            // value={apellidos}
            // onChange={(e) => setApellidos(e.target.value)}
          >
          </textarea>
        </li>
        <li className="form__container__group">
          <label className="label--upload-image" >
            <input
              className="input-image--profile"
              type="file"
              accept="image/*"
              onChange={handleFileChange}
              name="perfil"
            />
            <span className="camera-container">
              <FaCamera className="camera-container__camera-icon"/>
            </span>
          </label>
        </li>
        <li className="form__container__group col-3">
          <div className="form__container__group__element">
            <input
              className="button button-green"
              type="submit"
              value="Guardar cambios"
            />
            <button className="button button-red">Eliminar cuenta</button>
          </div>
        </li>
      </ul>
    </form>
  );
}

export default PerfilForm;
