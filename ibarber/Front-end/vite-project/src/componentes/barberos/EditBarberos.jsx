import React, { useState, useEffect } from 'react';
import { actualizar } from '../../functions/usePut';
import "../../Estilos/edit.css"
import { API_URLS } from '../../modulos/urls';
export const EditBarberos = ({ barbero, funcionEditar, setVisible,usuario }) => {
  const [formData, setFormData] = useState({
    biografia_barbero: '',
    especialidad: '',
    experiencia:"",
    num_barbero:""
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
   const {experiencia,biografia_barbero,especialidad,num_barbero}=formData
 const result = await actualizar({experiencia,biografia_barbero,especialidad,barbero,num_barbero},`${API_URLS.actualizarBarbero}/${usuario}`);
      if (funcionEditar(result)) {
        setModalOpen(false);
        setFormData({
          biografia_barbero: '',
          especialidad: '',
          experiencia:"",
          num_barbero:""
        });
      }
      setVisible(false);

  };

  const closeModal = () => {
    setModalOpen(false);
    setFormData({
      biografia_barbero: '',
    especialidad: '',
    experiencia:"",
    num_barbero:""
    });
    setVisible(false);
  };

  return (
    <div className={`modal-overlay ${isModalOpen ? 'active' : ''}`}>
      <div className={`modal-content ${isModalOpen ? 'active' : ''}`}>
        <span className="modal-close" onClick={closeModal}>
          &times;
        </span>
        <h2 className='Editar-barbero'>Editar Barbero: {barbero}</h2>
        <form onSubmit={handleSubmit} className='form-content'>
          <div className='contenedorees'>
            <label htmlFor="biografia">Biografiabarbero</label>
            <textarea
              type="text"
              id="biografia_barbero"
              name="biografia_barbero"
              value={formData.biografia_barbero}
              onChange={handleChange}
            />
          </div>
          <div className='contenedorees'>
            <label htmlFor="ciudad">especialidad:</label>
            <input
              type="text"
              id="especialidad"
              name="especialidad"
              value={formData.especialidad}
              onChange={handleChange}
            />
          </div>

          <div className='contenedorees'>
            <label htmlFor="experiencia">experiencia:</label>
            <input
              type="number"
              id="experiencia"
              name="experiencia"
              value={formData.experiencia}
              onChange={handleChange}
            />
          </div>
          <div className='contenedorees'>
            <label htmlFor="num_barbero">num_barbero:</label>
            <input
              type="number"
              id="num_barbero"
              name="num_barbero"
              value={formData.num_barbero}
              onChange={handleChange}
            />
          </div>
          <button className='botonEditar' type="submit">Guardar Cambios</button>
        </form>
      </div>
    </div>
  );
};
