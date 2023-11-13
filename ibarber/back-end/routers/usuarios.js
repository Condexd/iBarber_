import { Router } from "../Modulos/barril.js";
import { putUsuario } from "../controllers/usuarios.controller.js";

const router = Router();

router.put('/usuario/:id', putUsuario);

export default router;
