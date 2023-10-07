import { Router,BarberiaModel } from "../Modulos/barril.js";
const router = Router();
//registro de barberia
router.post('/barberia', async (req, res) => {
    try {
      const {nombre_barberia,direccion_barberia,nombre_ciudad } = req.body;
      
      const data = new BarberiaModel({
        nombre_barberia: nombre_barberia,
        direccion_barberia:direccion_barberia,
        ciudad: {
          nombre_ciudad:nombre_ciudad,
        }
      });
  
      const result = await data.save();
      res.status(200).json({message:"Registro exítoso"});
    } catch (error) {
      console.error('Error al registrar barberoa:', error);
      res.status(500).json({ message: 'Error interno del servidor' });
    }
  });
  
  export default router;