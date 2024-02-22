import { Router } from "express";
import { crearResena,obtenerResenas } from "../controllers/resenas.controller.js";

const router = Router();

router.post('/resena', crearResena);
router.get('/obtenerResenas', obtenerResenas);
export default router;