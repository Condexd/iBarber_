import { useState, useEffect } from 'react';
import { API_URLS } from '../../modulos/urls';
import { useNavigate } from 'react-router-dom';
import { enviadorAuth } from '../../functions/usePostAuth';
import "../../Estilos/edit.css";

export const CrearBarbero = ({ isOpen, onRequestClose }) => {
  const [usuario, setUsuario] = useState('');
  const [numero, setNumero] = useState('');
  const [biografia, setBiografia] = useState('');
  const [especialidad, setEspecialidad] = useState('Seleccionar');
  const [experiencia, setExperiencia] = useState('');
  const navigate = useNavigate();
  const [isFormOpen, setIsFormOpen] = useState(false);

  useEffect(() => {
    if (isOpen) {
      setIsFormOpen(true);
    }
  }, [isOpen]);

  const handleUsuarioChange = (event) => {
    setUsuario(event.target.value);
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
    const result = await enviadorAuth(`${API_URLS.crearBarbero}`, { usuario, numero, biografia, especialidad, experiencia });
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
      <div className={`modal-overlay ${isFormOpen ? 'active' : ''}`}>
        <div className={`modal-content ${isFormOpen ? 'active' : ''}`}>
          <span className="modal-close" onClick={handleCloseModal}>
            &times;
          </span>
          <h2 className='Cambiar-contrasena'>Añadir Empleado</h2>
          <form id="form-content" onSubmit={handleSubmit}>
            <div className='contenedorees'>
                  <label htmlFor="usuario">Usuario:</label>
                  <input
                    type="text"
                    id="biografia_barbero"
                    name="biografia_barbero"
                    value={usuario}
                    onChange={handleUsuarioChange}
                    required
                    placeholder="Usuario"
                  /> 
            </div>
            <div className='contenedorees'>
                <label htmlFor="numero">Número:</label>
                <input 
                  type="text" 
                  id="num_barbero"
                  name="num_barbero"
                  value={numero}
                  onChange={handleNumeroChange}
                  required
                  placeholder="Número"
                />
              </div>
            <div className='contenedorees'>
                <label htmlFor="biografia">Biografía:</label>
                <input 
                  type="text" 
                  id="biografia_barbero" 
                  name="biografia_barbero"
                  value={biografia} 
                  onChange={handleBiografiaChange}
                  required
                  placeholder="Biografía"
                />
            </div>
            <div className='contenedorees'>
                <label htmlFor="especialidad">Especialidad:</label>
                <select 
                  name="especialidad" 
                  value={especialidad}
                  onChange={handleEspecialidadChange}
                  id='biografia_barbero'
                  className="biografia_barbero"
                >
                  <option value="Seleccionar">Selecciona Especialidad</option>
                  <option value="Corte de cabello">Corte de cabello</option>
                  <option value="Corte para niños">Corte para niños</option>
                  <option value="Barba">Barba</option>
                  <option value="Coloracion de cabello">Coloración de cabello</option>
                </select>
              </div>
            <div className='contenedorees'>
                <label htmlFor="experiencia">Años de experiencia:</label>
                <input
                  type="number"
                  id="experiencia"
                  autoComplete="experiencia"
                  name="experiencia"
                  value={experiencia}
                  onChange={handleExperienciaChange}
                  placeholder="Años de experiencia"
                  required
                />
            </div>
              <button  className='botonEditar' type="submit">Agregar barbero</button>
          </form>
        </div>
      </div>
    </>
  );
};
