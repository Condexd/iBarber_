import { usuarioModel } from "../Modulos/barril.js";
import jwt from "jsonwebtoken";

export const verificarTokenYObtenerUsuario = async (token) => {
  try {
    // Verificar la existencia del token
    if (!token) {
      throw new Error("Token de autenticación no proporcionado");
    }

    // Extraer el token de la cabecera (Bearer token)
    const tokenParts = token.split(" ");

    if (tokenParts.length !== 2 || tokenParts[0] !== "Bearer") {
      throw new Error("Formato de token inválido");
    }

    const tokenBearer = tokenParts[1];

    // Verificar y decodificar el token
    try {
      const decodedToken = jwt.verify(tokenBearer, "tu_secreto_secreto");

      const usuarioId = decodedToken.usuarioId;
      // Buscar el usuario en la base de datos
      const usuario = await usuarioModel.findOne({ usuario: usuarioId });

      if (!usuario) {
        throw new Error("Usuario no encontrado");
      }

      return usuario;
    } catch (error) {
      if (error.name === "TokenExpiredError") {
        throw new Error("Token expirado");
      } else {
        throw error;
      }
    }
  } catch (error) {
    throw error;
  }
};

