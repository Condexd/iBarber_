export function correoelectronicoConfirmacion(destinatario, detallesCita) {
    let correo = `
      <html>
        <head>
          <!-- Estilos y encabezado del correo -->
        </head>
        <body>
          <div class="container">
            <div class="header">
              <h1>Confirmación de Cita</h1>
            </div>
            <div class="content">
              <p>Hola,</p>
              <p>Te confirmamos que tu cita ha sido agendada con éxito.</p>
              <p>Detalles de la cita:</p>
              <p>Barbero: <strong>${detallesCita.barbero}</strong></p>
              <p>Fecha: <strong>${detallesCita.fecha}</strong></p>
              <p>Hora: <strong>${detallesCita.hora}</strong></p>
              <!-- Otros detalles de la cita -->
              <p>Gracias por elegir nuestros servicios,</p>
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
  