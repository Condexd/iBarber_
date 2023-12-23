import { useState, useEffect, useContext } from 'react';
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import { actualizar } from '../../functions/usePut'; 
import { API_URLS } from '../../modulos/urls';
import { UserContext } from "../context/UserContext";

const CambioContrasenaModal = ({ setVisible }) => {
  const { userData } = useContext(UserContext);
  const [formData, setFormData] = useState({
    contrasenaActual: '',
    nuevaContrasena: '',
    confirmarContrasena: '',
  });

  const [showPassword, setShowPassword] = useState({
    contrasenaActual: false,
    nuevaContrasena: false,
    confirmarContrasena: false,
  });

  const [isModalOpen, setModalOpen] = useState(false);

  useEffect(() => {
    setModalOpen(true);
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleToggleShowPassword = (field) => {
    setShowPassword({
      ...showPassword,
      [field]: !showPassword[field],
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const { contrasenaActual, nuevaContrasena, confirmarContrasena } = formData;

    if (nuevaContrasena !== confirmarContrasena) {
      // Manejar el caso cuando las contraseñas no coinciden
      return;
    }

    // Llamada a la función que actualiza la contraseña
    const result = await actualizar({
      contrasenaActual,
      nuevaContrasena,
    }, `${API_URLS.actualizarContrasena}/${userData.usuario}`);

    // Puedes manejar el resultado, cerrar el modal, etc.
    setModalOpen(false);
    setVisible(false);
  };

  const closeModal = () => {
    setModalOpen(false);
    setVisible(false);
  };

  return (
    <div className={`modal-overlay ${isModalOpen ? 'active' : ''}`}>
      <div className={`modal-content ${isModalOpen ? 'active' : ''}`}>
        <span className="modal-close" onClick={closeModal}>
          &times;
        </span>
        <h2 className='Cambiar-contrasena'>Cambiar Contraseña</h2>
        <form onSubmit={handleSubmit} className='form-content'>
          <div className='contenedorees'>
            <label htmlFor="contrasenaActual">Contraseña Actual</label>
            <input
              type={showPassword.contrasenaActual ? 'text' : 'password'}
              id="contrasenaActual"
              name="contrasenaActual"
              value={formData.contrasenaActual}
              onChange={handleChange}
            />
            <button
              type="button"
              onClick={() => handleToggleShowPassword('contrasenaActual')}
            >
              {showPassword.contrasenaActual ? <FaEye /> : <FaEyeSlash />}
            </button>
          </div>
          <div className='contenedorees'>
            <label htmlFor="nuevaContrasena">Nueva Contraseña</label>
            <input
              type={showPassword.nuevaContrasena ? 'text' : 'password'}
              id="nuevaContrasena"
              name="nuevaContrasena"
              value={formData.nuevaContrasena}
              onChange={handleChange}
            />
            <button
              type="button"
              onClick={() => handleToggleShowPassword('nuevaContrasena')}
            >
              {showPassword.nuevaContrasena ? <FaEye /> : <FaEyeSlash />}
            </button>
          </div>
          <div className='contenedorees'>
            <label htmlFor="confirmarContrasena">Confirmar Contraseña</label>
            <input
              type={showPassword.confirmarContrasena ? 'text' : 'password'}
              id="confirmarContrasena"
              name="confirmarContrasena"
              value={formData.confirmarContrasena}
              onChange={handleChange}
            />
            <button
              type="button"
              onClick={() => handleToggleShowPassword('confirmarContrasena')}
            >
              {showPassword.confirmarContrasena ? <FaEye /> : <FaEyeSlash />}
            </button>
          </div>
          <button className='botonCambiarContrasena' type="submit">Cambiar Contraseña</button>
        </form>
      </div>
    </div>
  );
};

export default CambioContrasenaModal;
