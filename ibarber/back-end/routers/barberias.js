import { Router } from '../Modulos/barril.js'
import { deleteBarberia, getBarberia, getBarberias, getBarberos, registroBarberia, updateBarberia,postBarber,deleteBarber, getBarberosall, obtenerBarberosPorNombreBarberia, actualizarBarbero,filtrarBarberia } from '../controllers/barberia.controller.js';
const router = Router();

//registro de barberia
router.post("/barberia", registroBarberia);
router.post("/barberia/new-barber",postBarber);

router.post("/filtrarBarberiaPorNombre", filtrarBarberia);

router.get('/barberias', getBarberias);

router.get('/barberia/info', getBarberia);

router.get('/barberia/barberos', getBarberos);

router.get('/barberos', getBarberosall);
router.get('/barberos/:id', obtenerBarberosPorNombreBarberia);

router.put('/barberia/actualizado', updateBarberia);

router.delete('/deleteBarberia', deleteBarberia);
router.delete('/barberia/delete-barber/:id',deleteBarber)
router.put("/barberia/edit-barber/:id",actualizarBarbero)

export default router;
