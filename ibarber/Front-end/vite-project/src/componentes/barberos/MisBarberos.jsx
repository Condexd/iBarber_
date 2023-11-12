import { Link } from "react-router-dom";
import { useFetch } from "../../Hooks/useFetch";
import { UserContext } from "../context/UserContext";
import { useState,useContext } from "react";
import {MdDeleteOutline} from "react-icons/md"
import { API_URLS } from "../../modulos/urls";
import {BiEditAlt}from "react-icons/bi"
export const MisBarberos = () => {
  const { userData, setUserData } = useContext(UserContext);
  const [usuario, setUsuario] = useState(userData.usuario);
  const apiUrl = `${API_URLS.obtenerBarberos}/${usuario}`
  const { data, isLoading, haserror } = useFetch(apiUrl);
  return (
    <>
      <div className="container mt-5">
        <h2>Mis empleados</h2>
        <Link to="/new-empleado">
          <button className="btn btn-success mt-2 fs-6">Añadir Barbero</button>
        </Link>
        <div id="formularioBarberosContainer"></div>

        {isLoading ? (
          <p>Cargando...</p>
        ) : haserror ? (
          <p>Error al cargar datos</p>
        ) : (
          <table className="table mt-3">
            <thead>
              <tr>
                 <th scope="col">id</th>
                <th scope="col">Nombre</th>
                <th scope="col">Especialidad</th>
                <th scope="col">Experiencia (años)</th>
                <th scope="col">Acciones</th>
              </tr>
            </thead>
            <tbody>
              {data.map((barbero) => (
                <tr key={barbero.usuario}>
                  <td>{barbero.num_barbero}</td>
                  <td>{barbero.usuario}</td>
                  <td>{barbero.experiencia}</td>
                  <td>
                  </td>
                  <td>
                  <BiEditAlt/>
                  <MdDeleteOutline/>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>
    </>
  );
};
