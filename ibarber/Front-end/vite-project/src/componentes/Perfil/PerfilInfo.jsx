import {useContext,useState} from "react";
import { Link } from "react-router-dom";
import { UserContext } from "../context/UserContext";
function PerfilInfo({ formState }) {
  const { userData, setUserData } = useContext(UserContext);
  const [visible, setVisible] = useState(userData.barberia);
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
            {formState.nombres} {formState.apellidos}
          </span>
        </div>
        <div>
         {!visible &&(
         <Link to="/Create-barber">
        <button className="btn btn-success mt-2 fs-6">
        Crear mi barbería
        </button>
         </Link>
         )
         }
        </div>
      </div>
    </section>
  );
}

export default PerfilInfo;
