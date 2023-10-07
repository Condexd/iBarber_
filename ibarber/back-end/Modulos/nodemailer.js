import { nodemailer,dotenv } from "../Modulos/barril.js";

dotenv.config();

export async function enviarCorreo(destinatario, asunto, contenido) {
  const transporter = nodemailer.createTransport({
    service: 'Gmail',
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

