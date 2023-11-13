import { Router } from '../Modulos/barril.js'
import { deleteBarberia, getBarberia, getBarberias, getBarberos, registroBarberia, updateBarberia } from '../controllers/barberia.controller.js';
const router = Router();

//registro de barberia
router.post("/barberia", registroBarberia);

router.get('/barberias', getBarberias);

router.get('/barberia/:id', getBarberia);

router.get('/barberia/barberos/:id', getBarberos);

router.put('/barberia/:id', updateBarberia);

router.delete('/barberia/:id', deleteBarberia);


export default router;
