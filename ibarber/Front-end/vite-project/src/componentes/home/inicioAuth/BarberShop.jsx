import React, { useContext, useEffect } from "react";
import { API_URLS } from "../../../modulos/urls";
import { UserContext } from "../../context/UserContext";
import { useFetchuno } from "../../../Hooks/useFetchintento";
import BarberiaCard from "./BarberiaCard";
import { MultipleItems } from "../../layout/MultipleItems";
import { Reviews } from "./reviews";

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
      {/* <h1 className="titleUser">Hola, {userData.usuario}</h1> */}
      <section className="cont-cartas">
        <div className="barberias mt-3">
          <h3>Barberias</h3>
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
      <section className="animate__animated animate__fadeIn">
        <h3 className="text mt-5 ">Barberos Recomendados</h3>
        <MultipleItems barberosData={barberosData} />
      </section>
      <section>
      <h3 className="text mt-5">Mejores Reseñas</h3>
      <Reviews reviewsData={reviewsData} />
      </section>
    </div>
  );
};

export default BarberShop;
