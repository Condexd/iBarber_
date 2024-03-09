import React, { useContext, useEffect } from "react";
import { API_URLS } from "../../../modulos/urls";
import { UserContext } from "../../context/UserContext";
import { FaStar } from 'react-icons/fa';
import { useFetchuno } from "../../../Hooks/useFetchintento";
import BarberiaCard from "./BarberiaCard";
import { MultipleItems } from "../../layout/MultipleItems";

const BarberShop = ({ logout }) => {
  const { userData } = useContext(UserContext);
  const apiUrlBarberias = API_URLS.obtenerBarberias;
  const { data: barberiasData, hasError: hasErrorBarberias, isLoading: isLoadingBarberias } = useFetchuno(apiUrlBarberias);

  const apiUrlBarberos = API_URLS.obtenerBarberosAll;
  const { data: barberosData, hasError: hasErrorBarberos, isLoading: isLoadingBarberos } = useFetchuno(apiUrlBarberos);

  const apiUrlResenas = API_URLS.obtenerMejoresResenas;
  const { data: reviewsData, hasError: hasErrorResenas, isLoading: isLoadingResenas } = useFetchuno(apiUrlResenas);

  useEffect(() => {
    if (hasErrorBarberias === 'Unauthorized' && hasErrorBarberos === 'Unauthorized') {
      logout();
    }
  }, [hasErrorBarberias, hasErrorBarberos, logout]);

  if (isLoadingBarberias || isLoadingBarberos || isLoadingResenas) {
    return <p>Loading...</p>;
  }

  if (hasErrorBarberias || hasErrorBarberos || hasErrorResenas) {
    return <p>Please try again later.</p>;
  }

  return (
    <div className="cuerpo">
      <h1 className="titleUser">Hola, {userData.usuario}</h1>
      <section className="cont-cartas">
        <div className="barberias">
          <h2>Barberias:</h2>
          <div className="cards-container">
            {barberiasData.map((barberia, index) => (
              <BarberiaCard
                id={barberia._id}
                image={barberia.fotoPerfil}
                key={index}
                name={barberia.nombre_barberia}
                description={barberia.descripcion_barberia}
                city={barberia.nombre_ciudad}
              />
            ))}
          </div>
        </div>
      </section>
      <section>
        <h3 className="text">Barberos Recomendados</h3>
        <MultipleItems barberosData={barberosData} />
      </section>
      <section>
        <h3 className="text">Mejores Reseñas</h3>
        <div className="reviews-container" style={{ maxWidth: '800px', margin: '0 auto' }}>
          {reviewsData.map((review, index) => (
            <div key={index} style={{ backgroundColor: '#f9f9f9', padding: '20px', marginBottom: '20px', borderRadius: '5px', border: '1px solid #ccc', boxShadow: '0px 2px 4px rgba(0, 0, 0, 0.1)' }}>
              <div>
                <h5>{review.title}</h5>
                <div>
                  <FaStar style={{ color: 'gold', marginRight: '5px' }} /> 
                  <span>{review.rating}</span>
                </div>
                <p style={{ wordWrap: 'break-word' }}>{review.body}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default BarberShop;
