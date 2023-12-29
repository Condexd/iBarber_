
const API_BASE_URL = 'http://localhost:3300/api';
const API_BASE=`http://localhost:3300`
export const API_URLS = {
  BARBERIA: `${API_BASE_URL}/barberia`,
  USUARIO: `${API_BASE_URL}/usuario`,//autenticada,
  Registrar: `${API_BASE_URL}/Registrar`,
  LOGIN: `${API_BASE_URL}/login`,
  RECUPERAR: `${API_BASE_URL}/recuperar`,
  ActualizarBarberia:`${API_BASE_URL}/barberia/`,
  obtenerBarberos:`${API_BASE_URL}/barberia/barberos`,
  crearBarbero:`${API_BASE_URL}/barberia/new-barber`,
  eliminarBarbero:`${API_BASE_URL}/barberia/delete-barber`,
  obtenerDatosBarberia:`${API_BASE_URL}/barberia`,
  obtenerBarberias:`${API_BASE_URL}/barberias`,
  obtenerBarberosAll:`${API_BASE_URL}/barberos`,
  agendar_cita: `${API_BASE_URL}/citas`,
  obtenerBarberosNombreBarberia: `${API_BASE_URL}/barberos`,
  obtenerInfoUsuario:`${API_BASE_URL}/date-user`,//autenticada
  actualizarBarbero:`${API_BASE_URL}/barberia/edit-barber`,
  obtenerCitasFiltradas: `${API_BASE_URL}/citas`,
  actualizarContrasena:`${API_BASE_URL}/usuario-password`,
  obtenerImage:`${API_BASE}`,
  deleteCita: `${API_BASE_URL}/citas`,
  deleteCuenta:`${API_BASE_URL}/usuario-delete`,
  updateCita:`${API_BASE_URL}/citas/updateCita`
};
