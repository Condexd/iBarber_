import React from "react";

function PerfilForm({ formState, handleSubmit, setFormState }) {
  return (
    <form className="w-50 p-3" onSubmit={handleSubmit}>
      <ul className="row gap-3" id="datos-personales">
        <h2>Mis datos</h2>
        <li className="col-5 row">
          <label>Nombres</label>
          <input
            type="text"
            name="nombres"
            required
            value={formState.nombres}
            onChange={(e) =>
              setFormState({ ...formState, nombres: e.target.value })
            }
          />
        </li>
        <li className="col-5 row">
          <label>Apellidos</label>
          <input
            type="text"
            name="apellidos"
            required
            value={formState.apellidos}
            onChange={(e) =>
              setFormState({ ...formState, apellidos: e.target.value })
            }
          />
        </li>
        <li className="col-5 row">
          <label>Email</label>
          <input
            type="email"
            name="email"
            required
            value={formState.email}
            onChange={(e) =>
              setFormState({ ...formState, email: e.target.value })
            }
          />
        </li>
        <li className="col-5 row">
          <label>Teléfono<span>(+57)</span></label>
          <input
            type="text"
            name="telefono"
            required
            value={formState.telefono}
            onChange={(e) =>
              setFormState({ ...formState, telefono: e.target.value })
            }
            placeholder="Tu número"
          />
        </li>
        <li className="col-5 row">
          <label>Ciudad</label>
          <select
            name="ciudad"
            required
            value={formState.ciudad}
            onChange={(e) =>
              setFormState({ ...formState, ciudad: e.target.value })
            }
          >
            <option>Seleccionar</option>
            <option value="Bogotá">Bogotá</option>
            <option value="Medellín">Medellín</option>
            <option value="Ciudad3">Ciudad3</option>
          </select>
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
