const FormularioBarberia = ({
  nombre,
  setNombre,
  descripcion,
  setDescripcion,
  email,
  setEmail,
  telefono,
  setTelefono,
  ciudad,
  setCiudad,
  direccion,
  setDireccion,
  handleSubmit,
}) => {
  return (
    <form className="form--profile" onSubmit={handleSubmit}>
      <ul className="form__container" id="datos-personales">
        <h2 className="form__container__heading col-3">Mi barbería</h2>
        <li className="form__container__group">
          <label className="label--profile">Nombre</label>
          <input
            className="input--profile"
            type="text"
            name="nombre"
            required
            value={nombre}
            onChange={(e) => setNombre(e.target.value)}
          />
        </li>
        <li className="form__container__group">
          <label className="label--profile">Email</label>
          <input
            className="input--profile"
            type="email"
            name="email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </li>
        <li className="form__container__group">
          <label className="label--profile">Teléfono (+57)</label>
          <input
            className="input--profile"
            type="text"
            name="telefono"
            required
            placeholder="Número de la barbería"
            value={telefono}
            onChange={(e) => setTelefono(e.target.value)}
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
            <option value="seleccionar">Seleccionar</option>
            <option value="Bogotá">Bogotá</option>
            <option value="Medellín">Medellín</option>
            <option value="Cali">Cali</option>
          </select>
        </li>
        <li className="form__container__group">
          <label className="label--profile">Dirección</label>
          <input
            className="input--profile"
            type="text"
            name="direccion"
            required
            placeholder="Dirección"
            value={direccion}
            onChange={(e) => setDireccion(e.target.value)}
          />
        </li>
        <li className="form__container__group col-3">
          <label className="label--profile">Descripción</label>
          <textarea
            className="textarea--description"
            type="text"
            name="descripcion"
            required
            value={descripcion}
            onChange={(e) => setDescripcion(e.target.value)}
          ></textarea>
        </li>
        <li className="form__container__group col-3">
          <div className="form__container__group__element">
            <input
              className="button button-green"
              type="submit"
              value="Guardar cambios"
            />
            <button className="button button-red">Cancelar</button>
          </div>
        </li>
      </ul>
    </form>
  );
};

export default FormularioBarberia;
