import { nodemailer, dotenv } from "./barril.js";

dotenv.config();

export const enviarCorreo = async (destinatario, asunto, contenido) => {
  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: process.env.CORREO,
      pass: process.env.CONTRASENA,
    },
  });

  const mailOptions = {
    from: process.env.CORREO,
    to: destinatario,
    subject: asunto,
    html: contenido,
  };

  await transporter.sendMail(mailOptions);
}

