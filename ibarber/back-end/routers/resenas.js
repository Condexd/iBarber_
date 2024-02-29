import { Router } from "express";
import { crearResena,obtenerResenas, obtenerResenasTodos } from "../controllers/resenas.controller.js";

const router = Router();

router.post('/resena', crearResena);
router.get('/obtenerResenas', obtenerResenas);
router.get('/ResenasAll', obtenerResenasTodos);
export default router;