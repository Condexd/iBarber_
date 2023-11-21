
const API_BASE_URL = 'http://localhost:3300/api';

export const API_URLS = {
  BARBERIA: `${API_BASE_URL}/barberia`,
  USUARIO: `${API_BASE_URL}/usuario/`,
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
  obtenerInfoUsuario:`${API_BASE_URL}/date-user`
};
