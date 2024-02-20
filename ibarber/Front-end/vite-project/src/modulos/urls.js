
const API_BASE_URL = 'http://localhost:3300/api';
const API_BASE=`http://localhost:3300`
export const API_URLS = {
  BARBERIA: `${API_BASE_URL}/barberia`,//se necesita
  USUARIO: `${API_BASE_URL}/usuario`,//autenticada,
  Registrar: `${API_BASE_URL}/Registrar`,//no
  LOGIN: `${API_BASE_URL}/login`,//no
  RECUPERAR: `${API_BASE_URL}/recuperar`,//no
  ActualizarBarberia:`${API_BASE_URL}/barberia/actualizado`,//autenticado
  obtenerBarberos:`${API_BASE_URL}/barberia/barberos`,//autenticado
  crearBarbero:`${API_BASE_URL}/barberia/new-barber`,//autenticado
  eliminarBarbero:`${API_BASE_URL}/barberia/delete-barber`,//necesita
  obtenerDatosBarberia:`${API_BASE_URL}/barberia/info`,//autenticado
  obtenerBarberias:`${API_BASE_URL}/barberias`,//autenticado
  obtenerBarberosAll:`${API_BASE_URL}/barberos`,//autenticado
  agendar_cita: `${API_BASE_URL}/citas`,//autenticado
  obtenerBarberosNombreBarberia: `${API_BASE_URL}/barberos`,
  obtenerInfoUsuario:`${API_BASE_URL}/date-user`,//autenticada
  actualizarBarbero:`${API_BASE_URL}/barberia/edit-barber`,//necesita
  obtenerCitasFiltradas: `${API_BASE_URL}/citas/misCitas`,//autenticado
  actualizarContrasena:`${API_BASE_URL}/usuario-password`,//autenticada
  obtenerImage:`${API_BASE}`,
  deleteCita: `${API_BASE_URL}/citas`,//pendiente
  deleteCuenta:`${API_BASE_URL}/usuario-delete`,//autenticada
  updateCita:`${API_BASE_URL}/citas/updateCita`//pendiente
};
