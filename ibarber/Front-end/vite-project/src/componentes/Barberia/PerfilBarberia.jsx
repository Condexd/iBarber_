import React from 'react';
import { Link } from 'react-router-dom';

const PerfilBarberia = ({ nombres, apellidos, ciudad }) => {
  return (
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
  );
};

export default PerfilBarberia;
