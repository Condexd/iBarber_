export function correoelectronico(usuario,nuevacontraseña) {
 let correo=`
     <html>
      <head>
        <style>
          /* Estilos generales */
          body {
            font-family: 'Arial', sans-serif;
            background-color: #f4f4f4;
            margin: 0;
            padding: 0;
          }
          .container {
            max-width: 600px;
            margin: 0 auto;
            padding: 20px;
            background-color: #fff;
            border-radius: 10px;
            box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
          }
          p {
            font-size: 16px;
            color: #333;
            line-height: 1.5;
          }
          strong {
            color: #655CC9;
          }

          /* Encabezado */
          .header {
            background-color: #655CC9;
            color: #fff;
            padding: 20px;
            text-align: center;
            border-radius: 10px 10px 0 0;
          }
          .header h1 {
            font-size: 24px;
            margin: 0;
          }

          /* Contenido principal */
          .content {
            padding: 20px;
          }

          /* Pie de página */
          .footer {
            background-color: #655CC9;
            color: #fff;
            text-align: center;
            padding: 10px 0;
            border-radius: 0 0 10px 10px;
          }
        </style>
      </head>
      <body>
        <div class="container">
          <div class="header">
            <h1>Recuperación de Cuenta</h1>
          </div>
          <div class="content">
            <p>Hola,</p>
            <p>Recibiste este correo electrónico porque solicitaste recuperar tu cuenta</p>
            <p>Tu usuario es: <strong>${usuario}</strong></p>
            <p>Tu nueva contraseña es: <strong>${nuevacontraseña}</strong></p>
            <p>Te recomendamos cambiar esta contraseña después de iniciar sesión.</p>
            <p>Gracias,</p>
            <p>Equipo de Soporte de iBarber</p>
          </div>
          <div class="footer">
            © ${new Date().getFullYear()} iBarber
          </div>
        </div>
      </body>
    </html>
      `
      return correo;
}
