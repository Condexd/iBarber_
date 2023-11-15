import { useContext, useState} from 'react';
import { Link } from 'react-router-dom';
import { useFetch } from '../../Hooks/useFetch';
import { UserContext } from '../context/UserContext';
import { IconButton } from '@mui/material';
import { FiEdit, FiTrash2 } from 'react-icons/fi';
import MUIDataTable from 'mui-datatables';
import { API_URLS } from '../../modulos/urls';
import { deleteBarber } from '../../functions/delete';
import { mostrarMensajeExitoDelete } from '../../modulos/alertas';
import { mostrarConfirmacion } from '../../modulos/confirms';
export const MisBarberos = () => {
  const { userData} = useContext(UserContext);
  const [usuario] = useState(userData.usuario);
  const apiUrl = `${API_URLS.obtenerBarberos}/${usuario}`;
  const { data, isLoading, haserror,setState } = useFetch(apiUrl);

  const handleEdit = (barberoId) => {
    console.log(`Editar barbero con ID ${barberoId}`);

  };

  const handleDelete = async (barberoId,event) => {
    event.preventDefault();
  console.log(barberoId)
    const confirmacion = await mostrarConfirmacion(
      '¿Enviar datos?',
      '¿Estás seguro de Eliminar este Barbero?'
    );
  if(confirmacion.isConfirmed){
    if (await deleteBarber(barberoId)) {
      const updatedData = data.filter((barbero) => barbero.usuario !== barberoId);
      setState({data:updatedData,
                isLoading:false,
                haserror:null
      });
      mostrarMensajeExitoDelete();
    }
  }
  };

  const columns = [
    {
      name: '_id',
      field: '_id',
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
      name: 'biografia_barbero',
      field: 'biografia_barbero',
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
          const barberoId = tableMeta.rowData[1]; // Obtener el ID del barbero desde la primera columna
          return (
            <>
              <IconButton
                variant="contained"
                color="success"
                className="mt-2 fs-6"
                onClick={() => handleEdit(barberoId)}
              >
                <FiEdit />
              </IconButton>
              <IconButton
                variant="contained"
                color="primary"
                className="mt-2 fs-6"
                onClick={(event) => handleDelete(barberoId, event)}
              >
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
        fontSize: '14px',
        fontWeight: 'bold',
      },
    }),
  };

  return (
    <>
      <div className="container mt-5">
        <h2>Mis empleados</h2>
        <Link to="/new-empleado">
          <IconButton variant="contained" color="success" className="mt-2 fs-6">
            <span>
              <FiEdit /> Agregar Barbero
            </span>
          </IconButton>
        </Link>
        <div id="formularioBarberosContainer"></div>

        {isLoading ? (
          <p>Cargando...</p>
        ) : haserror ? (
          <p>Error al cargar datos</p>
        ) : (
          <MUIDataTable title={''} data={data} columns={columns} options={options} />
        )}
      </div>
    </>
  );
};
