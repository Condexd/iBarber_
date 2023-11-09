const FormularioBarberia = ({ formState, funcion ,handleSubmit}) => {
  const { nombre, descripcion, email, telefono, ciudad } = formState;

  return (
    <form className="w-50 p-3" onSubmit={handleSubmit}>
      <ul className="row gap-3" id="datos-personales">
        <h2>Mi barbería</h2>
        <li className="col-5 row">
          <label>Nombre</label>
          <input type="text" name="nombre" required value={nombre} onChange={funcion} />
        </li>
        <li className="col-5 row">
          <label>Descripción</label>
          <input type="text" name="descripcion" required value={descripcion} onChange={funcion} />
        </li>
        <li className="col-5 row">
          <label>Email</label>
          <input type="email" name="email" required value={email} onChange={funcion} />
        </li>
        <li className="col-5 row">
          <label>Teléfono (+57)</label>
          <input
            type="text"
            name="telefono"
            required
            placeholder="Número de la barbería"
            value={telefono}
            onChange={funcion}
          />
        </li>
        <li className="col-5 row">
          <label>Ciudad</label>
          <select name="ciudad" required value={ciudad} onChange={funcion}>
            <option>Seleccionar</option>
            <option value="Bogotá">Bogotá</option>
            <option value="Medellín">Medellín</option>
            <option value="Ciudad3">Ciudad3</option>
          </select>
        </li>
        <li className="row">
          <div className="mt-5 d-flex align-content-center">
            <input type="submit" className="btn btn-success" value="Guardar cambios" />
            <button className="btn btn-link">Cancelar</button>
          </div>
        </li>
      </ul>
    </form>
  );
};

export default FormularioBarberia;
