import React from 'react';
import { Link } from 'react-router-dom';
import { useForm } from '../../Hooks/useform'; // Asegúrate de que la ruta del archivo sea correcta

export const MiBarberia = () => {
  const { formState, funcion } = useForm({
    nombres: '',
    apellidos: '',
    email: '',
    telefono: '',
    ciudad: 'Seleccionar',
  });

  const { nombres, apellidos, email, telefono, ciudad } = formState;

  return (
    <>
      <main id="main" className="p-2 d-flex mt-4 justify-content-center">
        <div className="d-flex justify-content-evenly flex-wrap">
          <section className="p-3 w-25">
            <div className="d-flex flex-column gap-1">
              <img
                id="img-perfil"
                className="rounded-circle"
                src="https://static.vecteezy.com/system/resources/previews/015/025/551/non_2x/barber-shop-building-with-mustache-icon-cartoon-icon-illustration-barber-shop-building-icon-concept-isolated-premium-flat-cartoon-style-vector.jpg"
                width={200}
                height={200}
                alt="Perfil"
              />
              <div>
                <span className="text-start lh-lg semibold fs-5">
                  {nombres} {apellidos} Empleados: 5 {ciudad}
                </span>
              </div>
              <div>
                <Link to="/empleados">
                  <button className="btn btn-success mt-2 fs-6">Mis empleados</button>
                </Link>
              </div>
            </div>
          </section>

          <form className="w-50 p-3">
            <ul className="row gap-3" id="datos-personales">
              <h2>Mi barbería</h2>
              <li className="col-5 row">
                <label>Nombre</label>
                <input type="text" name="nombres" required value={nombres} onChange={funcion} />
              </li>
              <li className="col-5 row">
                <label>Descripción</label>
                <input type="text" name="apellidos" required value={apellidos} onChange={funcion} />
              </li>
              <li className="col-5 row">
                <label>Email</label>
                <input type="email" name="email" required value={email} onChange={funcion} />
              </li>
              <li className="col-5 row">
                <label>Teléfono (+57)</label>
                <input type="text" name="telefono" required placeholder="Número de la barbería" value={telefono} onChange={funcion} />
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
        </div>
      </main>
    </>
  );
};