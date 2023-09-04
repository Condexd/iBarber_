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
          <img src="https://www.google.com/url?sa=i&url=https%3A%2F%2Fmeme.fandom.com%2Fes%2Fwiki%2FPadoru&psig=AOvVaw2q454BzQDv0Af2EN6Gu7xm&ust=1693582970124000&source=images&cd=vfe&opi=89978449&ved=0CBAQjRxqFwoTCICRh62eh4EDFQAAAAAdAAAAABAI" className="d-block w-100 d-img" alt="..." />
          <div className="carousel-caption top-0 mt-5">
            <p className="mt-5 fs-3 text-uppercase">Descubre TU ESTILO</p>
            <h1 className="display-1 fw-folder tex-capitalize">iBarber</h1>
            <a href="../login/login.html" className="btn btn-primary px-4 py-9 fs-5 mt-5">Entrar</a>
          </div>
        </div>
        <div className="carousel-item d-item">
          <img src="https://www.google.com/url?sa=i&url=https%3A%2F%2Fmeme.fandom.com%2Fes%2Fwiki%2FPadoru&psig=AOvVaw2q454BzQDv0Af2EN6Gu7xm&ust=1693582970124000&source=images&cd=vfe&opi=89978449&ved=0CBAQjRxqFwoTCICRh62eh4EDFQAAAAAdAAAAABAI" className="d-block w-100 d-img" alt="..." />
          <div className="carousel-caption top-0 mt-5 ">
            <p className="mt-5 fs-3 text-uppercase">Descubre TU ESTILO</p>
            <h1 className="display-1 fw-folder tex-capitalize">iBarber</h1>
            <a href="../login/login.html" className="btn btn-primary px-4 py-9 fs-5 mt-5">Entrar</a>
          </div>
        </div>
        <div className="carousel-item d-item">
          <img src="https://www.google.com/url?sa=i&url=https%3A%2F%2Fmeme.fandom.com%2Fes%2Fwiki%2FPadoru&psig=AOvVaw2q454BzQDv0Af2EN6Gu7xm&ust=1693582970124000&source=images&cd=vfe&opi=89978449&ved=0CBAQjRxqFwoTCICRh62eh4EDFQAAAAAdAAAAABAI" className="d-block w-100 d-img" alt="..." />
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
