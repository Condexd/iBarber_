import { useContext, useState,useEffect } from 'react';
import { UserContext } from '../context/UserContext';
import { IconButton } from '@mui/material';
import { FiEdit, FiTrash2 } from 'react-icons/fi';
import MUIDataTable from 'mui-datatables';
import { API_URLS } from '../../modulos/urls';
import { deleteBarber } from '../../functions/delete';
import { mostrarMensajeExitoDelete } from '../../modulos/alertas';
import { mostrarConfirmacion } from '../../modulos/confirms';
import { EditBarberos } from './EditBarberos';
import { useFetchuno } from '../../Hooks/useFetchintento';
import { CrearBarbero } from './CrearBarbero';

export const MisBarberos = ({logout}) => {
  const { userData } = useContext(UserContext);
  const [usuario] = useState(userData.usuario);
  const [barbero, setBarbero] = useState('');
  const [visible, setVisible] = useState(false);
  const [crearBarberoModalOpen, setCrearBarberoModalOpen] = useState(false);

  const apiUrl = `${API_URLS.obtenerBarberos}`;
  const { data, isLoading, hasError, setState } = useFetchuno(apiUrl);

  useEffect(() => {
    if (hasError === 'Unauthorized') {
      logout();
    }
  }, [hasError, logout]);
  const handleEdit = (barber, event) => {
    event.preventDefault();
    setBarbero(barber);
    setVisible(true);
  };


  const funcionEditar = (contenido) => {
    let result = data.map((barberia) => {
      if (barberia.usuario === contenido.usuario) {
        barberia.nombres = contenido.nombres;
        barberia.apellidos = contenido.apellidos;
        barberia.correo = contenido.correo;
        barberia.num_barbero = contenido.num_barbero;
        barberia.biografia_barbero = contenido.biografia_barbero;
        barberia.especialidad = contenido.especialidad;
        barberia.experiencia = contenido.experiencia;
      }
      return barberia;
    });
    setState({
      data: result,
      isLoading: false,
      hasError: null,
    });
    return true;
  };

  const agregar = (nuevoBarbero) => {
    setState(prevState => ({
      ...prevState,
      data: [...prevState.data, nuevoBarbero],
      isLoading: false,
      hasError: null,
    }));
    handleCloseCrearBarberoModal()
  };
  

  const handleDelete = async (barberoId, event) => {
    event.preventDefault();
    const confirmacion = await mostrarConfirmacion(
      '¿Enviar datos?',
      '¿Estás seguro de Eliminar este Barbero?'
    );
    if (confirmacion.isConfirmed) {
      if (await deleteBarber(`${API_URLS.eliminarBarbero}/${barberoId}`)) {
        const updatedData = data.filter((barbero) => barbero._id !== barberoId);
        setState({
          data: updatedData,
          isLoading: false,
          haserror: null,
        });
        mostrarMensajeExitoDelete();
      }
    }
  };


  const handleOpenCrearBarberoModal = () => {
    setCrearBarberoModalOpen(true);
  };

  const handleCloseCrearBarberoModal = () => {
    setCrearBarberoModalOpen(false);
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
      name: 'nombres',
      field: 'nombres',
    },
    {
      name: 'apellidos',
      field: 'apellidos',
    },
    {
      name: 'correo',
      field: 'correo',
    },
    {
      name: 'telefono',
      field: 'telefono',
    },
    {
      name: 'biografia',
      field: 'biografia',
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
          const barberoUser = tableMeta.rowData[1];
          const barberoId = tableMeta.rowData[0];
          return (
            <>
              <IconButton
                variant="contained"
                color="success"
                className="mt-2 fs-6"
                onClick={(event) => handleEdit(barberoUser, event)}
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
        <IconButton
          variant="contained"
          color="success"
          className="mt-2 fs-6"
          onClick={handleOpenCrearBarberoModal}
        >
          <span>
            <FiEdit /> Agregar Barbero
          </span>
        </IconButton>
        <CrearBarbero
          isOpen={crearBarberoModalOpen}
          onRequestClose={handleCloseCrearBarberoModal}
          agregar={agregar}
        />
        {visible && (
          <EditBarberos
            setVisible={setVisible}
            funcionEditar={funcionEditar}
            barbero={barbero}
            usuario={usuario}
          />
        )}
        {isLoading ? (
          <p>Cargando...</p>
          ) : hasError ? (
          <p>Error al cargar datos</p>
        ) : (
          <MUIDataTable title={''} data={data} columns={columns} options={options} />
        )}
      </div>
    </>
  );
};
