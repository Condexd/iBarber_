import { Router,usuarioModel,} from "../Modulos/barril.js";

const router = Router();
//actualizar datos de usuario
router.put('/usuario/:id', async (req, res) => {
    try {
      const id= req.params.id;
      const updateData = req.body;
      const options = { new: true };
      const result = await usuarioModel.findByIdAndUpdate(id, updateData, options);
      res.json({message:"Actualizado Éxitosamente"})
    } catch (error) {
      res.status(400).json({ message: "No se pudo Actualizar" });
    }
  });
  
  export default router;
  