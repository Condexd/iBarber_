import React, { useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { API_URLS } from "../../modulos/urls";

export function MultipleItems({ barberosData }) {
 

  const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: true, // Mostrar flechas de navegación
    prevArrow: <CustomPrevArrow />, // Componente personalizado para la flecha previa
    nextArrow: <CustomNextArrow />, // Componente personalizado para la flecha siguiente
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };

  // Componente personalizado para la flecha previa
  function CustomPrevArrow(props) {
    const { className, onClick } = props;
    return <div className={className} onClick={onClick} />;
  }

  // Componente personalizado para la flecha siguiente
  function CustomNextArrow(props) {
    const { className, onClick } = props;
    return <div className={className} onClick={onClick} />;
  }

  return (
    <div className="slider-container">
      <h2 className="text-center p-3">Barberos Recomendados</h2>
      <div
        className="slider-wrapper"
      >
        <Slider {...settings}>
          {barberosData.map((barbero, index) => (
            <div key={index} className="slick-slide d-flex justify-content-center">
              <div className="barbero-card d-flex justify-content-center flex-column border border-primary w-50">
                <img
                  src={`${API_URLS.obtenerImage}${barbero.fotoPerfil}`}
                  alt={barbero.name}
                  className="barbero-image w-50"
                />
                <h3 className="barbero-name text-center">{barbero.nombres}</h3>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
}
