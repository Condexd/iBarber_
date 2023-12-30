import { Link } from "react-router-dom";
import { FaCamera } from "react-icons/fa";

const PerfilBarberia = ({ nombre, descripcion, ciudad }) => {
  return (
    <section className="info-profile">
      <div className="info-profile__container">
        <div>
          <img
            className="profile-image"
            src="https://static.vecteezy.com/system/resources/previews/015/025/551/non_2x/barber-shop-building-with-mustache-icon-cartoon-icon-illustration-barber-shop-building-icon-concept-isolated-premium-flat-cartoon-style-vector.jpg"
            alt="Imagen de perfil"
          />
          <label className="label--upload-image">
            <input
              className="input-image--profile"
              type="file"
              accept="image/*"
              // onChange={handleFileChange}
              name="perfil"
            />
            <span className="camera-container">
              <FaCamera className="camera-container__camera-icon" />
            </span>
          </label>
        </div>
        <div className="info-profile__container__data">
          <span className="profile-data">
            {nombre} {descripcion} {ciudad}
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
