import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { UserContext } from "../context/UserContext";
function PerfilInfo({ nombres,apellidos, img,setActive,active,barbero }) {
  const { userData,  } = useContext(UserContext);
  const [visible] = useState(userData.barberia);

  return (
    <section className="info-profile" >
      <div className="info-profile__container">
        <img
          className="profile-image"
          src={img}
          width={200}
          height={200}
          alt="Perfil"
        />
        <div className="info-profile__container__data">
          <span className="profile-data">
            {nombres}
          </span>
          <span className="profile-data">
            {apellidos}
          </span>
        </div>
        <div>
          {!visible && (
            <Link to="/new-barberia">
              <button className="">
                Crear mi barbería
              </button>
            </Link>
          )}
        </div>
        <div >
          {barbero > 0 && (
            <div className="profile-">
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
