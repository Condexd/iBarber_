import { Link } from "react-router-dom";

export const MisBarberos = () => {
  return (
    <>
      <div className="container mt-5">
        <h2>Mis empleados</h2>
        <Link to="/new-empleado">
        <button className="btn btn-success mt-2 fs-6">Añadir Barbero</button>
        </Link>
        <div id="formularioBarberosContainer"></div>

        <table className="table mt-3">
          <thead>
            <tr>
              <th scope="col">Nombre</th>
              <th scope="col">Especialidad</th>
              <th scope="col">Experiencia (años)</th>
              <th scope="col">Acciones</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Barbero 1</td>
              <td>Corte de cabello</td>
              <td>5</td>
              <td>
                <button className="btn btn-success mt-2 fs-6">Editar</button>
                <button className="btn btn-danger mt-2 fs-6">Eliminar</button>
              </td>
            </tr>
            <tr>
              <td>Barbero 2</td>
              <td>Afeitado de barba</td>
              <td>8</td>
              <td>
                <button className="btn btn-success mt-2 fs-6">Editar</button>
                <button className="btn btn-danger mt-2 fs-6">Eliminar</button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </>
  );
};
