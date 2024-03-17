import { Router } from "../Modulos/barril.js";
import { obtenerUsuario, putUsuario, cambioContrasena, deleteAccount,trabajoEnMiBarberia } from "../controllers/usuarios.controller.js";


const router = Router();

router.put('/usuario', putUsuario);
router.get("/date-user",obtenerUsuario)
router.put('/usuario-password', cambioContrasena);
router.delete('/usuario-delete', deleteAccount);
router.get('/usuario-barberia', trabajoEnMiBarberia);
export default router;
