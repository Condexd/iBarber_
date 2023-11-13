import { Router } from "express";
import { getCita, getCitas, postCita, putCita, deleteCita } from "../controllers/citas.controller.js";

const router = Router();

router.post('/api/citas', postCita);

router.get('/api/citas', getCitas);

router.get('/api/citas/:id', getCita);

router.put('/api/citas/:id', putCita);

router.delete('/api/citas/:id', deleteCita);

export default router;