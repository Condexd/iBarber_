import { Router } from "../Modulos/barril.js";
import { obtenerUsuario, putUsuario } from "../controllers/usuarios.controller.js";


const router = Router();

router.put('/usuario/:id', putUsuario);
router.get("/date-user/:id",obtenerUsuario)



export default router;
