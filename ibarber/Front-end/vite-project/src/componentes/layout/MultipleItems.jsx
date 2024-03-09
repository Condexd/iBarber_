import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { API_URLS } from "../../modulos/urls";
import { Link } from "react-router-dom";

export function MultipleItems({ barberosData }) {
  
  const settings = {
    infinite: true,
    speed: 500, // Ajusta la velocidad de la transición entre slides
    autoplaySpeed: 3000, // Ajusta el intervalo de tiempo entre transiciones automáticas
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay: true,
    swipeToSlide: true,
    arrows:true,
    adaptiveHeight: true,
    lazyLoad: 'ondemand',
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

  return (
    <div className="container mt-3">
        <Slider {...settings}>
          {barberosData.map((barbero, index) => (
           <Link className="barbero-name" to={`/new-cita/${barbero.barberia}`} key={index}>
            <div  style={{ margin: "0 10px" }}>
              <div className="barbero-card d-flex flex-column align-items-center">
              <img
                  src={`${API_URLS.obtenerImage}${barbero.fotoPerfil}`}
                  alt={barbero.name}
                  className="barbero-image rounded cardBarber"
                  style={{ width: "200px", height: "200px", objectFit: "cover"}}
                />
                <div className="barbero-details text-center mt-2">
                  <p className="barbero-name">{barbero.usuario}</p>
                </div>
              </div>
            </div>
            </Link>
          ))}
        </Slider>
    </div>
  );
}
