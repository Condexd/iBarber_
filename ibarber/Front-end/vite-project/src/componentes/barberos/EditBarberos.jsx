import { useState, useEffect } from 'react';
import { actualizar } from '../../functions/usePut';
import { API_URLS } from '../../modulos/urls';

export const EditBarberos = ({ barbero, funcionEditar, setVisible, usuario, barberoExperiencia, barberoEspecialidad}) => {
  const [formData, setFormData] = useState({
    especialidad: barberoEspecialidad || '',
    experiencia: barberoExperiencia || '',
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
    const { experiencia, especialidad} = formData;
    const result = await actualizar(
      { experiencia, especialidad, barbero},
      `${API_URLS.actualizarBarbero}/${usuario}`
    );
    if (funcionEditar(result)) {
      setModalOpen(false);
      setFormData({
        especialidad: '',
        experiencia: '',
      });
    }
    setVisible(false);
  };

  const closeModal = () => {
    setModalOpen(false);
    setFormData({
      especialidad: '',
      experiencia: '',
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
          <button className="change-info-btn" onClick={handleSubmit}>
            Guardar Cambios
          </button>
        </div>
      </div>
    </div>
  );
};
