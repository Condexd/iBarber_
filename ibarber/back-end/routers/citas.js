import { Router } from "express";
import { getCita, getCitas, postCita, putCita, deleteCita } from "../controllers/citas.controller.js";

const router = Router();

router.post('/citas', postCita);

router.get('/citas', getCitas);

router.get('/citas/:id', getCita);

router.put('/citas/:id', putCita);

router.delete('/citas/:id', deleteCita);

export default router;