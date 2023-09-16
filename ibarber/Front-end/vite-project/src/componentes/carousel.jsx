import React from 'react';
import { Link } from 'react-router-dom';
const Carousel = () => {
  return (
    <div id="carrusel/indicador" className="carousel slide carousel-fade" data-bs-ride="carousel" data-bs-interval="3000">
      <div className="carousel-indicators">
        <button type="button" data-bs-target="#carrusel/indicador" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
        <button type="button" data-bs-target="#carrusel/indicador" data-bs-slide-to="1" aria-label="Slide 2"></button>
        <button type="button" data-bs-target="#carrusel/indicador" data-bs-slide-to="2" aria-label="Slide 3"></button>
      </div>
      <div className="carousel-inner">
        <div className="carousel-item active d-item">
          <img src="https://github.com/Condexd/_iBarber_/blob/main/ibarber/Front-end/vite-project/src/imgcar/barberia-la-antigua-viruta5.jpg?raw=true" className="d-block w-100 d-img" alt="..." />
          <div className="carousel-caption top-0 mt-5">
            <p className="mt-5 fs-3 text-uppercase">Descubre TU ESTILO</p>
            <h1 className="display-1 fw-folder tex-capitalize">iBarber</h1>
            <Link to="/registrarse" className="btn btn-primary px-4 py-9 fs-5 mt-5">Entrar</Link>
          </div>
        </div>
        <div className="carousel-item d-item">
          <img src="https://github.com/Condexd/_iBarber_/blob/main/ibarber/Front-end/vite-project/src/imgcar/descarga.jpg?raw=true" className="d-block w-100 d-img" alt="..." />
          <div className="carousel-caption top-0 mt-5 ">
            <p className="mt-5 fs-3 text-uppercase">Descubre TU ESTILO</p>
            <h1 className="display-1 fw-folder tex-capitalize">iBarber</h1>
            <Link to="/registrarse" className="btn btn-primary px-4 py-9 fs-5 mt-5">Entrar</Link>
          </div>
        </div>
        <div className="carousel-item d-item">
          <img src="https://raw.githubusercontent.com/Condexd/_iBarber_/main/ibarber/Front-end/vite-project/src/imgcar/mejores_barberias_espana_cuidado_facial__173247837.webp" className="d-block w-100 d-img" alt="..." />
          <div className="carousel-caption top-0 mt-5">
            <p className="mt-5 fs-3 text-uppercase">Descubre TU ESTILO</p>
            <h1 className="display-1 fw-folder tex-capitalize">iBarber</h1>
            <Link to="/registrarse" className="btn btn-primary px-4 py-9 fs-5 mt-5">Entrar</Link>
          </div>
        </div>
      </div>
      <button className="carousel-control-prev" type="button" data-bs-target="#carrusel/indicador" data-bs-slide="prev">
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Previous</span>
      </button>
      <button className="carousel-control-next" type="button" data-bs-target="#carrusel/indicador" data-bs-slide="next">
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Next</span>
      </button>
    </div>
  );
}

export default Carousel;
