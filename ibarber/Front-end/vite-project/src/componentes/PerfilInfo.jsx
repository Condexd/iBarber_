import React from "react";
import { Link } from "react-router-dom";

function PerfilInfo({ formState }) {
  return (
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
            {formState.nombres} {formState.apellidos}
          </span>
        </div>
        <div>
          <Link to="/Crear">
            <button className="btn btn-warning mt-2 fs-6">
              Crear mi barbería
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
}

export default PerfilInfo;
