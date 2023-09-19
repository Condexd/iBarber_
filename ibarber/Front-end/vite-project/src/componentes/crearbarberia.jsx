import React from 'react';
import { useForm } from '../Hooks/useform';
import { barberiafun } from '../Hooks/barberiafun'; // Asegúrate de importar el custom hook

export const Crearbarberia= () => {
  const { formState, funcion } = useForm({
    nombre_barberia: '',
    direccion_barberia: '',
    nombre_ciudad: '',
  });
  const{nombre_barberia , direccion_barberia,nombre_ciudad}=formState
  const handleSubmit = async(e) => {
    e.preventDefault();
    const result= await barberiafun(formState)
  };


  return (
    <div className="container mt-5">
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Nombre de la barbería</label>
          <input
            type="text"
            name="nombre_barberia"
            value={nombre_barberia}
            onChange={funcion}
            className="form-control"
          />
        </div>

        <div className="form-group">
          <label>Dirección de la barbería</label>
          <input
            type="text"
            name="direccion_barberia"
            value={direccion_barberia}
            onChange={funcion}
            className="form-control"
          />
        </div>

        <div className="form-group">
          <label>Nombre de la ciudad</label>
          <select
            name="nombre_ciudad"
            value={nombre_ciudad}
            onChange={funcion}
            className="form-control"
          >
            <option value="Bogotá">Bogotá</option>
            <option value="Medellín">Medellín</option>
            <option value="Cali">Cali</option>
          </select>
        </div>
        <button type="submit" className="btn btn-primary">
          Enviar
        </button>
      </form>
    </div>
  );
};



