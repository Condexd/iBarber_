import { useState, useEffect } from 'react';
import { actualizar } from '../../functions/usePut';
import { API_URLS } from '../../modulos/urls';

export const EditBarberos = ({ barbero, funcionEditar, setVisible, usuario }) => {
  const [formData, setFormData] = useState({
    biografia_barbero: '',
    especialidad: '',
    experiencia: '',
    num_barbero: '',
  });

  const [isModalOpen, setModalOpen] = useState(false);

  useEffect(() => {
    setModalOpen(true);
  }, [setVisible]);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { experiencia, biografia_barbero, especialidad, num_barbero } = formData;
    const result = await actualizar(
      { experiencia, biografia_barbero, especialidad, barbero, num_barbero },
      `${API_URLS.actualizarBarbero}/${usuario}`
    );
    if (funcionEditar(result)) {
      setModalOpen(false);
      setFormData({
        biografia_barbero: '',
        especialidad: '',
        experiencia: '',
        num_barbero: '',
      });
    }
    setVisible(false);
  };

  const closeModal = () => {
    setModalOpen(false);
    setFormData({
      biografia_barbero: '',
      especialidad: '',
      experiencia: '',
      num_barbero: '',
    });
    setVisible(false);
  };

  return (
    <div className={`modal-overlay ${isModalOpen ? 'active' : ''}`}>
      <div className={`modal-content ${isModalOpen ? 'active' : ''}`}>
        <span className="modal-close" onClick={closeModal}>
          &times;
        </span>
        <h2 className="edit">{barbero}</h2>
        <div className="form-content">
          <div className="contenedor-password">
            <label htmlFor="biografia_barbero">Biografía barbero:</label>
            <textarea
              className="biografia-input" // Añadido para el estilo
              type="text"
              id="biografia_barbero"
              name="biografia_barbero"
              value={formData.biografia_barbero}
              onChange={handleChange}
              rows="10" // Ajusta el número de filas
            />
          </div>
          <div className="contenedor-edit">
            <label htmlFor="especialidad">Especialidad:</label>
            <input
              type="text"
              id="especialidad"
              name="especialidad"
              value={formData.especialidad}
              onChange={handleChange}
            />
          </div>

          <div className="contenedor-edit">
            <label htmlFor="experiencia">Experiencia:</label>
            <input
              type="number"
              id="experiencia"
              name="experiencia"
              value={formData.experiencia}
              onChange={handleChange}
            />
          </div>
          <div className="contenedor-edit">
            <label htmlFor="num_barbero">Número barbero:</label>
            <input
              type="number"
              id="num_barbero"
              name="num_barbero"
              value={formData.num_barbero}
              onChange={handleChange}
            />
          </div>
          <button className="change-password-btn" onClick={handleSubmit}>
            Guardar Cambios
          </button>
        </div>
      </div>
    </div>
  );
};
