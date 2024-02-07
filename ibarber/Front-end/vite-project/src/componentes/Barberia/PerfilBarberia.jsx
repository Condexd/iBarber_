import { Link } from "react-router-dom";
import { FaCamera } from "react-icons/fa";

const PerfilBarberia = ({ nombre, descripcion, ciudad,handleFileChange, img }) => {
  return (
    <section className="info-profile">
      <div className="info-profile__container">
        <div className="info-profile_child">
          <div className="info-profile_child__image-container">
            <img
              className="profile-image"
              src={img}
              alt="Imagen de perfil"
            />
          </div>
          <label className="label--upload-image">
            <input
              className="input-image--profile"
              type="file"
              accept="image/*"
              onChange={handleFileChange}
              name="perfil"
            />
            <span className="camera-container">
              <FaCamera className="camera-container__camera-icon" />
            </span>
          </label>
        </div>
        <div className="info-profile__container__data">
          <div className="profile-data">
            {nombre}

            <span>
              {ciudad}
            </span>

            <span className="barberia-description">
              {descripcion}
            </span>
          </div>
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
