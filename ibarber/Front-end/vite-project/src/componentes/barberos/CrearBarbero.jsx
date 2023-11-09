export const CrearBarbero = () => {
  return (
    <>
      <main id="form-container">
        <form id="form-register">
          <div id="form-title">
            <h3>Añadir empleado</h3>
          </div>
          <ul id="form-email">
            <li>
              <input
                type="text"
                id="usuario"
                name="usuario"
                required
                placeholder="Usuario"
              />
            </li>
          </ul>
          <ul className="form-group">
            <select name="nombre_ciudad" className="form-control">
              <option value="Seleccionar">Selecciona ciudad</option>
              <option value="Bogotá">Bogotá</option>
              <option value="Medellín">Medellín</option>
              <option value="Cali">Cali</option>
            </select>
          </ul>
          <ul id="form-username">
            <li>
              <input
                type="number"
                id="experiencia"
                autoComplete="experiencia"
                name="experiencia"
                placeholder="Años de experiencia"
                required
              />
            </li>
          </ul>
          <ul id="form-button">
            <li>
              <button type="submit">Agregar barbero</button>
            </li>
          </ul>
        </form>
      </main>
    </>
  );
};
