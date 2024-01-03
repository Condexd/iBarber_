export function correoelectronicoConfirmacion(destinatario, detallesCita) {
  let correo = `
    <html>
      <head>
        <style>
          body {
            font-family: 'Arial', sans-serif;
            background-color: #f5f5f5;
            margin: 0;
            padding: 0;
          }

          .container {
            max-width: 600px;
            margin: 20px auto;
            background-color: #fff;
            border-radius: 5px;
            overflow: hidden;
            box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
          }

          .header {
            background-color: #655CC9;
            color: #fff;
            padding: 20px;
            text-align: center;
          }

          .content {
            padding: 20px;
          }

          .content p {
            line-height: 1.6;
            margin-bottom: 10px;
          }

          .content strong {
            color: #655CC9;
          }

          .footer {
            text-align: center;
            padding: 10px;
            background-color: #f5f5f5;
            color: #555;
          }
        </style>
      </head>
      <body>
      <div class="container">
        <div class="header">
          <h1>Confirmación de Cita</h1>
        </div>
        <div class="content">
          <p>Hola, ${destinatario}.</p>
          <p>Te confirmamos que tu cita ha sido agendada con éxito.</p>
          <p>A continuación, te proporcionamos los detalles de la cita:</p>
          <ul>
            <li><strong>Fecha:</strong> ${detallesCita.fecha}</li>
            <li><strong>Hora:</strong> ${detallesCita.hora}</li>
            <li><strong>Nombre de la Barbería:</strong> ${detallesCita.nombreBarberia}</li>
            <li><strong>Dirección de la Barbería:</strong> ${detallesCita.direccionBarberia}</li>
            <li><strong>Teléfono de la Barbería:</strong> ${detallesCita.telefonoBarberia}</li>
            <li><strong>Correo de la Barbería:</strong> ${detallesCita.correoBarberia}</li>
            <li><strong>Nombre del Barbero:</strong> ${detallesCita.nombreDeBarbero}</li>
            <li><strong>Teléfono del Barbero:</strong> ${detallesCita.telefonoBarbero}</li>
          </ul>
          <p>¡Estamos emocionados de recibirte en nuestro establecimiento!</p>
          <p>Si tienes alguna pregunta o necesitas realizar cambios en tu cita, por favor, contáctanos a través del correo ${detallesCita.correoBarberia} o llamando al ${detallesCita.telefonoBarberia}.</p>
          <br>
          <p>Gracias por confiar en iBarber,</p>
          <p>Equipo de Soporte de iBarber</p>
        </div>
        <div class="footer">
          © ${new Date().getFullYear()} iBarber
        </div>
      </div>
    </body>
    </html>
  `;

  return correo;
}
