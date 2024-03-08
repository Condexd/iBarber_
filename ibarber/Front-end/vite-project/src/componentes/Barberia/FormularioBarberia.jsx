import { mostrarConfirmacion } from "../../modulos/confirms";
import { deleteFun } from "../../functions/deleteFun";
import { API_URLS } from "../../modulos/urls";
import { UserContext } from "../context/UserContext";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";

const FormularioBarberia = ({ nombre, setNombre, descripcion, setDescripcion, email,setEmail,telefono,setTelefono,ciudad,setCiudad,direccion,setDireccion,
  handleSubmit,
}) => {
  const { userData, setUserData } = useContext(UserContext);
const navigate= useNavigate();
  const deleteAccount = async (event) => {
    event.preventDefault();
    const confirmacion = await mostrarConfirmacion(
      "¿Eliminar?",
      "¿Estás seguro de Eliminar esta Barberia?"
    );
    if (confirmacion.isConfirmed) {
      const result = await deleteFun(
        `${API_URLS.deleteBarberia}`
      );
      if(result) {
        setUserData(prevUserData => ({
        ...prevUserData,
        barberia: false
      }));
      navigate("/home")
    }
    }
  };
  return (
    <form className="form--profile" onSubmit={handleSubmit}>
      <ul className="form__container" id="datos-personales">
        <h2 className="form__container__heading col-3">Mi barbería</h2>
        <li className="form__container__group">
          <label className="label--profile">Nombre</label>
          <input
            className="input--profile"
            type="text"
            name="nombre"
            required
            value={nombre}
            onChange={(e) => setNombre(e.target.value)}
          />
        </li>
        <li className="form__container__group">
          <label className="label--profile">Email</label>
          <input
            className="input--profile"
            type="email"
            name="email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </li>
        <li className="form__container__group">
          <label className="label--profile">Teléfono (+57)</label>
          <input
            className="input--profile"
            type="text"
            name="telefono"
            required
            placeholder="Número de la barbería"
            value={telefono}
            onChange={(e) => setTelefono(e.target.value)}
          />
        </li>
        <li className="form__container__group">
          <label className="label--profile">Ciudad</label>
          <select
            className="select--profile"
            name="ciudad"
            required
            value={ciudad}
            onChange={(e) => setCiudad(e.target.value)}
          >
            <option value="seleccionar">Seleccionar</option>
            <option value="Bogotá">Bogotá</option>
            <option value="Medellín">Medellín</option>
            <option value="Cali">Cali</option>
          </select>
        </li>
        <li className="form__container__group">
          <label className="label--profile">Dirección</label>
          <input
            className="input--profile"
            type="text"
            name="direccion"
            required
            placeholder="Dirección"
            value={direccion}
            onChange={(e) => setDireccion(e.target.value)}
          />
        </li>
        <li className="form__container__group col-3">
          <label className="label--profile">Descripción</label>
          <textarea
            className="textarea--description"
            type="text"
            name="descripcion"
            rows="6"
            value={descripcion}
            onChange={(e) => setDescripcion(e.target.value)}
          ></textarea>
        </li>
        <li className="form__container__group col-3">
          <div className="form__container__group__element">
            <input
              className="button button-green"
              type="submit"
              value="Guardar cambios"
            />
             <button className="button button-red" onClick={deleteAccount}>
              Eliminar Barberia
            </button>
          </div>
        </li>
      </ul>
    </form>
  );
};

export default FormularioBarberia;
