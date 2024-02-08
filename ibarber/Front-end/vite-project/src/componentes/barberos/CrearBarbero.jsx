import { useState, useEffect } from 'react';
import { API_URLS } from '../../modulos/urls';
import { useNavigate } from 'react-router-dom';
import { enviadorAuth } from '../../functions/usePostAuth';

export const CrearBarbero = ({ isOpen, onRequestClose }) => {
  const [usuario, setUsuario] = useState('');
  const [nombres, setNombres] = useState('');
  const [apellidos, setApellidos] = useState('');
  const [correo, setCorreo] = useState('');
  const [numero, setNumero] = useState('');
  const [biografia, setBiografia] = useState('');
  const [especialidad, setEspecialidad] = useState('');
  const [experiencia, setExperiencia] = useState('');
  const navigate = useNavigate();
  const [isFormOpen, setIsFormOpen] = useState(false);

  useEffect(() => {
    setIsFormOpen(isOpen);
  }, [isOpen]);

  const handleUsuarioChange = (event) => {
    setUsuario(event.target.value);
  };

  const handleNombresChange = (event) => {
    setNombres(event.target.value);
  };

  const handleApellidosChange = (event) => {
    setApellidos(event.target.value);
  };

  const handleCorreoChange = (event) => {
    setCorreo(event.target.value);
  };

  const handleNumeroChange = (event) => {
    setNumero(event.target.value);
  };

  const handleBiografiaChange = (event) => {
    setBiografia(event.target.value);
  };

  const handleEspecialidadChange = (event) => {
    setEspecialidad(event.target.value);
  };

  const handleExperienciaChange = (event) => {
    setExperiencia(event.target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const result = await enviadorAuth(`${API_URLS.crearBarbero}`, { usuario, nombres, apellidos, correo, numero, biografia, especialidad, experiencia });
    if (result) {
      navigate("/empleados");
    }
  };

  const handleCloseModal = () => {
    setIsFormOpen(false);
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
                <label htmlFor="nombres">Nombres:</label>
                <input
                  type="text"
                  id="nombres"
                  name="nombres"
                  value={nombres}
                  onChange={handleNombresChange}
                  required
                />
              </div>
              <div className='contenedor-create'>
                <label htmlFor="apellidos">Apellidos:</label>
                <input
                  type="text"
                  id="apellidos"
                  name="apellidos"
                  value={apellidos}
                  onChange={handleApellidosChange}
                  required
                />
              </div>
              <div className='contenedor-create'>
                <label htmlFor="correo">Correo:</label>
                <input
                  type="text"
                  id="correo"
                  name="correo"
                  value={correo}
                  onChange={handleCorreoChange}
                  required
                />
              </div>
              <div className='contenedor-create'>
                <label htmlFor="numero">Número:</label>
                <input
                  type="text"
                  id="numero"
                  name="numero"
                  value={numero}
                  onChange={handleNumeroChange}
                  required
                />
              </div>
              <div className='contenedor-create'>
                <label htmlFor="biografia">Biografía:</label>
                <textarea
                  type="text"
                  id="biografia_barbero"
                  name="biografia_barbero"
                  value={biografia}
                  onChange={handleBiografiaChange}
                  required
                  rows="6" 
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
