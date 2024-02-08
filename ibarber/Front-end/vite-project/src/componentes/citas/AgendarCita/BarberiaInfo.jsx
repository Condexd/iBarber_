import React from "react";
import { API_URLS } from "../../../modulos/urls";
import { FaStar } from "react-icons/fa";

export const BarberiaInfo = ({ barberoInfo }) => {
  return (
    <div className="row d-flex justify-content-end">
      <div className="col-md-12">
        <div className="card shadow-lg animate__animated animate__fadeInLeft">
          <picture className="d-flex justify-content-center">
            <img
              src={`${API_URLS.obtenerImage}${barberoInfo?.fotoPerfil}`}
              alt=""
              className="card-img-top grayscale-filter w-100"
              style={{ maxHeight: "250px", objectFit: "cover" }}
            />
          </picture>

          <div className="card-body">
            <div className="d-flex justify-content-center">
              <h4 className="card-title text-center mb-0">
                Información de la Barberia
              </h4>
              <span className="mt-1 ms-2">
                5.0 <FaStar className="estrella" />
              </span>
            </div>
            <ul className="list-group list-group-flush">
              <li className="list-group-item">
                <b>Nombre:</b> {barberoInfo?.nombre_barberia}
              </li>
              <li className="list-group-item">
                <b>Descripción:</b> {barberoInfo?.descripcion_barberia}
              </li>
              <li className="list-group-item">
                <b>Telefono:</b> {barberoInfo?.telefono}
              </li>
              <li className="list-group-item">
                <b>Ciudad:</b> {barberoInfo?.nombre_ciudad}
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};
