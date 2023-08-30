import React from 'react';

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
          <img src="https://fotografias.lasexta.com/clipping/cmsimages02/2022/12/09/BF6BD1E9-43E0-4A7B-BD72-B2AE36D1F83D/fondo-color-morado_69.jpg?crop=2309,1299,x0,y0&width=1280&height=720&optimize=low&format=webply" className="d-block w-100 d-img" alt="..." />
          <div className="carousel-caption top-0 mt-5">
            <p className="mt-5 fs-3 text-uppercase">Descubre TU ESTILO</p>
            <h1 className="display-1 fw-folder tex-capitalize">iBarber</h1>
            <a href="../login/login.html" className="btn btn-primary px-4 py-9 fs-5 mt-5">Entrar</a>
          </div>
        </div>
        <div className="carousel-item d-item">
          <img src="https://media.istockphoto.com/id/1413790486/es/foto/fondo-abstracto-azul-oscuro-sat%C3%A9n-de-seda-color-azul-marino-fondo-elegante.jpg?s=612x612&w=0&k=20&c=YLVaBJOXnjFmH6IYGQa2h_Rj2wcTj4TiiGlLA9tInOc=" className="d-block w-100 d-img" alt="..." />
          <div className="carousel-caption top-0 mt-5 ">
            <p className="mt-5 fs-3 text-uppercase">Descubre TU ESTILO</p>
            <h1 className="display-1 fw-folder tex-capitalize">iBarber</h1>
            <a href="../login/login.html" className="btn btn-primary px-4 py-9 fs-5 mt-5">Entrar</a>
          </div>
        </div>
        <div className="carousel-item d-item">
          <img src="https://gallosmarmol.com.pe/wp-content/uploads/2019/09/Verde-botella-600x400.jpg" className="d-block w-100 d-img" alt="..." />
          <div className="carousel-caption top-0 mt-5">
            <p className="mt-5 fs-3 text-uppercase">Descubre TU ESTILO</p>
            <h1 className="display-1 fw-folder tex-capitalize">iBarber</h1>
            <a href="../login/login.html" className="btn btn-primary px-4 py-9 fs-5 mt-5">Entrar</a>
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
