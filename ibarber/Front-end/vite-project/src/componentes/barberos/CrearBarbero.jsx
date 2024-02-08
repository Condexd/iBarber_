import { useState, useEffect } from 'react';
import { API_URLS } from '../../modulos/urls';
import { enviadorAuth } from '../../functions/usePostAuth';

export const CrearBarbero = ({ isOpen, onRequestClose,agregar }) => {
  const [usuario, setUsuario] = useState('');
  const [especialidad, setEspecialidad] = useState('');
  const [experiencia, setExperiencia] = useState('');
  const [isFormOpen, setIsFormOpen] = useState(false);

  useEffect(() => {
    setIsFormOpen(isOpen);
  }, [isOpen]);

  const handleUsuarioChange = (event) => {
    setUsuario(event.target.value);
  };

  const handleEspecialidadChange = (event) => {
    setEspecialidad(event.target.value);
  };

  const handleExperienciaChange = (event) => {
    setExperiencia(event.target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const result = await enviadorAuth(`${API_URLS.crearBarbero}`, {usuario,especialidad, experiencia });
    if (result) {
      setExperiencia("")
      setEspecialidad("")
      setUsuario("")
    agregar(result)
    }
  };

  const handleCloseModal = () => {
    setIsFormOpen(false);
    setExperiencia("")
      setEspecialidad("")
      setUsuario("")
    onRequestClose();
  };

  const handleOpenModal = () => {
    setIsFormOpen(true);
  };

  return (
    <>
      {isFormOpen && (
        <div className="modal-overlay-create active">
          <div className="modal-content-create">
            <button className="modal-close-create" onClick={handleCloseModal}>
              &times;
            </button>
            <h2 className='crear-barbero-title'>Añadir Empleado</h2>
            <form id="form-content-create" onSubmit={handleSubmit}>
              <div className='contenedor-create'>
                <label htmlFor="usuario">Usuario:</label>
                <input
                  type="text"
                  id="usuario"
                  name="usuario"
                  value={usuario}
                  onChange={handleUsuarioChange}
                  required
                />
              </div>
              <div className='contenedor-create'>
                <label htmlFor="especialidad">Especialidad:</label>
                <input
                  type="text"
                  id="especialidad"
                  name="especialidad"
                  value={especialidad}
                  onChange={handleEspecialidadChange}
                  required
                />
              </div>
              <div className='contenedor-create'>
                <label htmlFor="experiencia">Años de experiencia:</label>
                <input
                  type="number"
                  id="experiencia"
                  name="experiencia"
                  value={experiencia}
                  onChange={handleExperienciaChange}
                  required
                />
              </div>
              <button className='add-barbero-btn' type="submit">Agregar barbero</button>
            </form>
          </div>
        </div>
      )}
    </>
  );
};
