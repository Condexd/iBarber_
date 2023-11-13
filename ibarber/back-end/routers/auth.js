import { loginUsuario, postUsuario, recuperarUsuario } from "../controllers/auth.controller.js";
import { Router } from '../Modulos/barril.js'

const router = Router();

// Ruta para registrar usuarios
router.post('/Registrar', postUsuario);

// Ruta para el inicio de sesión y generación del token JWT
router.post('/login', loginUsuario);

router.post('/recuperar', recuperarUsuario);

export default router;