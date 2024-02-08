import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { API_URLS } from "../../modulos/urls";
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';



function SampleNextArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{ ...style, display: "block", background: "red", zIndex: 1 }}
        onClick={onClick}
      >
        <FaArrowRight />
      </div>
    );
  }
  
  function SamplePrevArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{ ...style, display: "block", background: "green", zIndex: 1 }}
        onClick={onClick}
      >
        <FaArrowLeft />
      </div>
    );
  }

export function MultipleItems({ barberosData }) {
  const settings = {
    dots: true,
    infinite: true,
    speed: 2000,
    autoplaySpeed: 5000,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    swipeToSlide: true,
    arrows:true,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
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
    <div className="slider-container mt-3">
      <h2 className="text-center p-3">Barberos Recomendados</h2>
      <div className="slider-wrappers sombra ">
        <Slider {...settings}>
          {barberosData.map((barbero, index) => (
            <div key={index} className="slick-slide d-flex justify-content-center  p-3 ">
              <div className="barbero-card d-flex flex-column align-items-center">
                <img
                  src={`${API_URLS.obtenerImage}${barbero.fotoPerfil}`}
                  alt={barbero.name}
                  className="barbero-image rounded"
                  style={{ maxHeight: "250px", objectFit: "cover" }}
                />
                <div className="barbero-details text-center mt-2">
                  <p className="barbero-name">{barbero.nombres} {barbero.apellidos}</p>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
}
