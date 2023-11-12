import React, { useContext,useState } from 'react';
import { Link } from 'react-router-dom';
import { useFetch } from '../../Hooks/useFetch';
import { UserContext } from '../context/UserContext';
import { IconButton } from '@mui/material';
import { FiEdit, FiTrash2 } from 'react-icons/fi';
import MUIDataTable from 'mui-datatables';
import { API_URLS } from '../../modulos/urls';

export const MisBarberos = () => {
  const { userData, setUserData } = useContext(UserContext);
  const [usuario, setUsuario] = useState(userData.usuario);
  const apiUrl = `${API_URLS.obtenerBarberos}/${usuario}`;
  const { data, isLoading, haserror } = useFetch(apiUrl);
console.log(data)


  const columns = [
    {
      name:"_id",
      field:"_id",
    },
    {
      name: 'usuario',
      field: 'usuario',
    },
    {
      name: 'num_barbero',
      field: 'num_barbero',
    },
    {
      name:"biografia_barbero",
       field:"biografia_barbero"
      },
    {
      name: 'especialidad',
      field: 'especialidad',
    },
    {
      name: 'experiencia',
      field: 'experiencia',
    },
    {
      name: 'Acciones',
      options: {
        customBodyRender: (value, tableMeta, updateValue) => {
          console.log("value:", value);
          console.log("tableMeta:", tableMeta);
          return (
            <>
              <IconButton variant="contained" color="success" className="mt-2 fs-6">
                <FiEdit />
              </IconButton>
              <IconButton variant="contained" color="primary" className="mt-2 fs-6">
                <FiTrash2 />
              </IconButton>
            </>
          );
        },
      },
    },
  ];
  const options = {
    filterType: 'textField',
    responsive: 'standard',
    selectableRows: 'none',
    rowsPerPageOptions: [5, 10, 20],
    elevation: 0,
    download: true,
    print: true,
    setCellProps: () => ({
      style: {
        fontSize: '14px', // Tamaño de la letra
        fontWeight: 'bold', // Peso de la letra
        // Otros estilos de letra que deseas aplicar
      },
    }),
  };

  return (
    <>
      <div className="container mt-5">
        <h2>Mis empleados</h2>
        <Link to="/new-empleado">
          <IconButton variant="contained" color="success" className="mt-2 fs-6">
           <span><FiEdit /> Agregar Barbero </span> 
          </IconButton>
        </Link>
        <div id="formularioBarberosContainer"></div>

        {isLoading ? (
          <p>Cargando...</p>
        ) : haserror ? (
          <p>Error al cargar datos</p>
        ) : (
          <MUIDataTable
            title={""}
            data={data}
            columns={columns}
            options={options}
          />
        )}
      </div>
    </>
  );
};