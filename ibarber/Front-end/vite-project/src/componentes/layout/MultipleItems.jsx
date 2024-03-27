import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { API_URLS } from "../../modulos/urls";
import { Link } from "react-router-dom";
import ScrollAnimation from "react-animate-on-scroll";

export function MultipleItems({ barberosData }) {
  
  const settings = {
    infinite: true,
    speed: 500,
    autoplaySpeed: 3000,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    swipeToSlide: true,
    arrows: true,
    adaptiveHeight: true,
    lazyLoad: 'ondemand',
    pauseOnHover: true,
    pauseOnFocus: true,
    centerMode: true,
    centerPadding: '10px',
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          centerPadding: '0px',
          arrows: false 
        }
      },
    ]
  };

  const isMobile = window.innerWidth <= 600; // Define el ancho máximo para dispositivos móviles

  return (
    <div className="container mt-3 ">
      {isMobile && ( // Renderiza ScrollAnimation solo en dispositivos móviles
        <ScrollAnimation animateIn="animate__animated animate__fadeIn" duration={0.6} animateOnce>
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
        </ScrollAnimation>
      )}
      {!isMobile && ( // Renderiza Slider directamente en otros dispositivos
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
      )}
    </div>
  );
}
