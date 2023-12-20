import { Router } from "../Modulos/barril.js";
import { obtenerUsuario, putUsuario, cambioContrasena } from "../controllers/usuarios.controller.js";

const router = Router();

router.put('/usuario/:id', putUsuario);
router.get("/date-user/:id",obtenerUsuario)
router.put('/usuario-password/:id', cambioContrasena);
export default router;
