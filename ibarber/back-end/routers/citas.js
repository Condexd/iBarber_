import { Router } from "express";
import { getCita, getCitas, postCita, putCita, deleteCita,patchCita } from "../controllers/citas.controller.js";

const router = Router();

router.get('/:usuario', getCitas);

router.get('/:id', getCita);

router.post('/', postCita);

router.put('/:id', putCita);

router.delete('/:id', deleteCita);
router.patch("/updateCita/:id",patchCita)

export default router;