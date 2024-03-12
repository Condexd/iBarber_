import { BarberiaModel, Review, citaModel, usuarioModel,verificarTokenYObtenerUsuario } from "../Modulos/barril.js";
export const crearResena = async (req, res) => {
    try {
      const token = req.headers.authorization;
      const { usuario } = await verificarTokenYObtenerUsuario(token); // Cambiado a usuarioId
      // Extraer los datos de la reseña del cuerpo de la solicitud
      const { title, body, rating, citaId,barberiaId,barbero } = req.body; // Añadido citaId aquí
  
      // Verificar si la cita existe
      const citaExistente = await citaModel.findById(citaId);
      
      // Verificar si la cita y el usuario existen
      if (!citaExistente || !usuario) { // Cambiado a citaExistente y usuario
        return res.status(404).json({ message: 'La cita o el usuario no existen en nuestra base de datos' });
      }
  
      // Crear una nueva instancia de reseña con los datos proporcionados
      const newReview = new Review({
        title,
        body,
        rating,
        cita: citaId,
        usuario,
        barberiaId,
        barbero

      });
  
      // Guardar la nueva reseña en la base de datos
      await newReview.save();
  
      // Responder con la nueva reseña creada
      res.status(201).json(newReview);
    } catch (error) {
      // Manejar cualquier error que ocurra durante el proceso
      console.error('Error en la solicitud:', error);
      res.status(500).json({ message: 'Hubo un error al procesar tu solicitud' });
    }
  }

  export const obtenerResenas = async (req, res) => {
    try {
        const token = req.headers.authorization;
        const { usuario } = await verificarTokenYObtenerUsuario(token);

        // Filtrar las reseñas por el usuario obtenido
        const reviews = await Review.find({ usuario: usuario });

        // Responder con las reseñas encontradas
        res.status(200).json(reviews);
    } catch (error) {
      if (error.message === "Token expirado") {
        return res.status(401).json({ message: "Token expirado" });
      }
        res.status(500).json({ message: 'Hubo un error al procesar tu solicitud' });
    }
}
export const obtenerResenasTodos = async (req, res) => {
    try {
        const token = req.headers.authorization;
        const { usuario } = await verificarTokenYObtenerUsuario(token);
        const reviews = await Review.find().sort({ rating: -1 }).limit(5);
        res.status(200).json(reviews);
    } catch (error) {
        if (error.message === "Token expirado") {
            console.log("Token expirado");
            return res.status(401).json({ message: "Token expirado" });
        }
        console.error('Hubo un error al procesar la solicitud:', error);
        res.status(500).json({ message: 'Hubo un error al procesar tu solicitud' });
    }
  }