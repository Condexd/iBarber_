import React, { useState, useEffect } from "react";
import { API_URLS } from "../../modulos/urls";
import { useFetchuno } from "../../Hooks/useFetchintento";
import "../../Estilos/reviews.css";
import { FaStar } from "react-icons/fa";
import { Link } from "react-router-dom";


const SideMenu = ({ logout }) => {
  const apiUrl = `${API_URLS.obtenerResenas}`;
  const { data, hasError } = useFetchuno(apiUrl);

  useEffect(() => {
    if (hasError === "Unauthorized") {
      logout();
    }
  }, [hasError, logout]);
  return (
    <main className="review-section">
      <div className="review-container">
        {data &&
          data.map((item, index) => (
            <>
              <ul className="review-container-child">
                <li key={index} className="review-left-containter">
                  <h5 className="review-title description-title">{item.title}</h5>
                    <span className="review-rating"><FaStar className="estrella" /> {item.rating}</span>
                  <div className="">
                    <span className="review-experience description-text">{item.body}</span>
                  </div>
                </li>
                <li className="review-right-containter">
                  <a className="review-barbershop-image-container">
                    <img className="review-barbershop-image" src="https://www.ftccollege.edu/wp-content/uploads/2023/08/barber-shop-1.jpg"/>
                  </a>
                  <div>
                    <h5 className="review-title">Barbería Olos</h5>
                    <Link className="review-barbery-info">
                      <span className="review-barbershop-name">Barbero</span>
                      <div>
                        <span className="review-barber-name gray-text">Brayan Cortez</span>
                      </div>
                    </Link>
                  </div>
                </li>
              </ul>
            </>
          ))}
      </div>
    </main>
  );
};

export default SideMenu;
