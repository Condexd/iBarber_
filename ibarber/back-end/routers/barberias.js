import { Router } from '../Modulos/barril.js'
import { deleteBarberia, getBarberia, getBarberias, getBarberos, registroBarberia, updateBarberia,postBarber,deleteBarber } from '../controllers/barberia.controller.js';
const router = Router();

//registro de barberia
router.post("/barberia", registroBarberia);
router.post("/barberia/new-barber/:id",postBarber);

router.get('/barberias', getBarberias);

router.get('/barberia/:id', getBarberia);

router.get('/barberia/barberos/:id', getBarberos);

router.put('/barberia/:id', updateBarberia);

router.delete('/barberia/:id', deleteBarberia);
router.delete('/barberia/delete-barber/:id',deleteBarber)


export default router;
