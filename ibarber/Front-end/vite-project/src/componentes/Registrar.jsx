import {useForm} from "../Hooks/useform"
import { FuncionRegistrar } from "../Hooks/funciones";
import { Link } from 'react-router-dom';
import Swal from 'sweetalert2';
function Registrar() {
  const{formState,funcion}=useForm({
        nombres:"",
        apellidos:"",
        usuario:"",
        password:"",
        email:"",

  })  
  const{nombres,apellidos,usuario,password,email}=formState
 
  const manejador = (event) => {
    event.preventDefault();
    
    Swal.fire({
      title: '¿Enviar datos?',
      text: '¿Estás seguro de que deseas enviar los datos?',
      icon: 'question',
      showCancelButton: true,
      confirmButtonText: 'Sí',
      cancelButtonText: 'Cancelar',
      customClass: {
        confirmButton: 'btn btn-success', // Clase de estilo para el botón "Sí"
        cancelButton: 'btn btn-danger',   // Clase de estilo para el botón "Cancelar"
      },
      background: '#f5f5f5', // Color de fondo del cuadro de diálogo
      iconHtml: '<i class="far fa-question-circle"></i>', // Ícono personalizado
    }).then((result) => {
      if (result.isConfirmed) {
        FuncionRegistrar({ nombres, apellidos, usuario, password, email });
      }
    });
  };
  
  

  return (
    <>
    <main id="form-container">
      <form onSubmit={manejador} id="form-register">
          <div id="form-title">
            <h3>Registrate</h3>
          </div>
          <ul id="form-nombres">
            <li>
              <input
                type="text"
                id="nombres"
                name="nombres"
                required
                placeholder="Nombres"
                value={nombres}
                onChange={funcion} />
            </li>
          </ul>
          <ul id="form-apellidos">
            <li>
              <input
                type="text"
                id="apellidos"
                name="apellidos"
                placeholder="Apellidos"
                required
                value={apellidos}
                onChange={funcion} />
            </li>
          </ul>
          <ul id="form-email">
            <li>
              <input
                type="email"
                id="email"
                name="email"
                placeholder="Email"
                required
                value={email}
                onChange={funcion} />
            </li>
          </ul>
          <ul id="form-username">
            <li>
              <input
                type="text"
                id="numeroDocumento"
                autoComplete="username"
                name="usuario"
                placeholder="Username"
                required
                value={usuario}
                onChange={funcion} />
            </li>
          </ul>
          <ul id="form-password">
            <li>
              <input
                type="password"
                id="password"
                autoComplete="email"
                name="password"
                placeholder="Contraseña"
                required
                value={password}
                onChange={funcion} />
            </li>
          </ul>
          <ul id="form-button">
            <li>
              <button type="submit">Registrame</button>
            </li>
          </ul>
          <ul id="form-cuentaCreada">
            <li>
              <span>¿Ya tienes cuenta? </span>
              <Link to="/iniciarSesion">
                  Inicia sesión
                </Link>
            </li>
          </ul>
      </form>
    </main>
   </>
  );
 
}

export default Registrar;
