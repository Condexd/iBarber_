import React from "react";
import { useForm } from "../Hooks/useform"; 

 function Perfil({datausuario}) {
  const { formState, funcion } = useForm({
    nombres: datausuario.nombre,
    apellidos: datausuario.apellido,
    email: datausuario.correo,
    telefono: "3216702257",
    ciudad: "Seleccionar",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(datausuario.nombre)
  };

  return (
    <main id="main" className="p-2 d-flex mt-4 justify-content-center">
      <div className="d-flex justify-content-evenly flex-wrap">
        <section className="p-3">
          <div className="d-flex flex-column gap-1">
            <img
              id="img-perfil"
              className="rounded-circle"
              src="https://i.pinimg.com/474x/f3/16/ce/f316cef6a7a1e732baf48a36808411b4.jpg"
              width={200}
              height={200}
              alt="Perfil"
            />
            <div>
              <span className="text-start lh-lg fw-semibold fs-4">
                Nombre Apellido
              </span>
            </div>
            <div>
              <button className="btn btn-warning mt-2 fs-6">
                Crear mi barbería
              </button>
            </div>
          </div>
        </section>
        <form className="w-50 p-3" onSubmit={handleSubmit}>
          <ul className="row gap-3" id="datos-personales">
            <h2>Mis datos</h2>
            <li className="col-5 row">
              <label>Nombres</label>
              <input
                type="text"
                name="nombres"
                value={formState.nombres}
                onChange={funcion}
              />
            </li>
            <li className="col-5 row">
              <label>Apellidos</label>
              <input
                type="text"
                name="apellidos"
                value={formState.apellidos}
                onChange={funcion}
              />
            </li>
            <li className="col-5 row">
              <label>Email</label>
              <input
                type="email"
                name="email"
                value={formState.email}
                onChange={funcion}
              />
            </li>
            <li className="col-5 row">
              <label>Teléfono<span>(+57)</span></label>
              <input
                type="text"
                name="telefono"
                value={formState.telefono}
                onChange={funcion}
                placeholder="Tu número"
              />
            </li>
            <li className="col-5 row">
              <label>Ciudad</label>
              <select
                name="ciudad"
                value={formState.ciudad}
                onChange={funcion}
              >
                <option value="Seleccionar">Seleccionar</option>
                <option value="Bogotá">Bogotá</option>
                <option value="Medellín">Medellín</option>
                <option value="Ciudad3">Ciudad3</option>
              </select>
            </li>
            <li className="row">
              <div className="mt-5 d-flex align-content-center">
                <input
                  type="submit"
                  className="btn btn-primary"
                  value="Guardar cambios"
                />
                <button className="btn btn-link">Cancelar</button>
              </div>
            </li>
          </ul>
        </form>
      </div>
    </main>
  );
}

export default Perfil;
