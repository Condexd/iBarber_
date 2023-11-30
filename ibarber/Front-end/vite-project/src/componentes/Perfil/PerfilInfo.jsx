import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { UserContext } from "../context/UserContext";

function PerfilInfo({ nombres, apellidos, barbero, active, setActive }) {
  const { userData } = useContext(UserContext);
  const [visible] = useState(userData.barberia);

  return (
    <section className="p-3 w-25">
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
          <span className="text-start lh-lg semibold fs-5">
            {nombres} {apellidos}
          </span>
        </div>
        <div>
          {!visible && (
            <Link to="/new-barberia">
              <button className="btn btn-success mt-2 fs-6">
                Crear mi barbería
              </button>
            </Link>
          )}
        </div>
        <div >
          {barbero > 0 && (
            <div className="contenedorbtn">
              <label className="switch">
                <input
                  type="checkbox"
                  checked={active}
                  onChange={() => setActive(!active)}
                />
                <span className="slider round"></span>
              </label>
              <h3 className="titulobarbero">Barbero</h3>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}

export default PerfilInfo;
