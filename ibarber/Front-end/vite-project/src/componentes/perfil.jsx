import React from "react";

function Perfil() {
  return (
    <main id="main" className="bg-white p-4 d-flex mt-4 justify-content-center">
      <div className="d-flex justify-content-around flex-wrap">
        <section>
          <div className="d-flex flex-column gap-1">
            <img id="img-perfil" className="rounded-circle" src="https://i.pinimg.com/474x/f3/16/ce/f316cef6a7a1e732baf48a36808411b4.jpg" width={200} height={200}/>
            <div>
              <span className="text-start lh-lg fw-semibold fs-4">Nombre Apellido</span>
            </div>
            <div>
            <button className="btn btn-lg btn-warning mt-2">Crear mi barbería</button>
            </div>
          </div>
        </section>
        <form className="w-50">
          <ul className="row gap-2" id="datos-personales">
            <h2>Mis datos</h2>
            <li className="col-5">
              <label>Nombres</label>
              <input type="text" defaultValue="flui" />
            </li>
            <li className="col-5">
              <label>Apellidos</label>
              <input type="text" defaultValue="orduz" />
            </li>
            <li className="col-5">
              <label>Email</label>
              <input type="email" defaultValue="nopetard@gmail.com" />
            </li>
            <li className="col-5">
              <label>Teléfono<span>(+57)</span></label>
              <input type="text" defaultValue="3216702257" placeholder="Tu número"/>
            </li>
            <li className="col-5">
              <label>Ciudad</label>
              <select name="select-ciudad">
                <option defaultValue="Seleccionar" selected>Seleccionar</option>
                <option defaultValue="Bogotá">Bogotá</option>
                <option defaultValue="Medellín">Medellín</option>
                <option defaultValue="Ciudad3">Ciudad3</option>
              </select>
            </li>
            <li className="row">
              <div className="mt-3 d-flex align-content-center">
                <input type="submit" className="btn btn-primary" value="Guardar cambios"/>
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
