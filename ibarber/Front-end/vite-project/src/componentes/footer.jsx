import React from 'react';
import '../Estilos/Footer.css'; 

const Footer = () => {
  return (
    <footer className="pie-pagina">
      <div className="grupo-1">
        <div className="box">
          <figure>
            <a href="#">
              <img src="https://github.com/Condexd/_iBarber_/blob/main/proyectoweb/index/images/logo-ibarber.png?raw=true" alt="Logo iBarber" />
            </a>
          </figure>
        </div>
        <div className="box">
          <h2> Sobre nosotros</h2>
          <p>Agenda con nosotros tu cita de corte de cabello.</p>
          <p>&quot;Un corte de cabello, un estilo que deslumbra.&quot;</p>
        </div>
        <div className="box">
          <h2> Siguenos:</h2>
          <div className="red-social">
            <a href="https://www.facebook.com/profile.php?id=100091729057741" rel="noreferrer" target="_blank" className="fa fa-facebook"></a>
            <a href="#" className="fa fa-instagram"></a>
            <a href="#" className="fa fa-twitter"></a>
          </div>
        </div>
      </div>
      <div className="grupo-2">
        <small>&copy; 2023 <b>iBarber</b> - Todos los Derechos reservados </small>
      </div>
    </footer>
  );
};

export default Footer;
