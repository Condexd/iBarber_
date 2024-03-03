
import { useContext,useEffect } from "react";
import { API_URLS } from "../../../modulos/urls";
import { UserContext } from "../../context/UserContext";
import { MultipleItems } from "../../layout/MultipleItems";
import BarberiaCard from "./BarberiaCard";
import { useFetchuno } from "../../../Hooks/useFetchintento";

const BarberShop = ({logout}) => {
  const { userData } = useContext(UserContext);
  const apiUrlBarberias = API_URLS.obtenerBarberias;
  const { data: barberiasData, hasError: hasErrorBarberias, isLoading: isLoadingBarberias } = useFetchuno(apiUrlBarberias);

  const apiUrlBarberos = API_URLS.obtenerBarberosAll;
  const { data: barberosData, hasError: hasErrorBarberos, isLoading: isLoadingBarberos } = useFetchuno(apiUrlBarberos);

  useEffect(() => {
    if (hasErrorBarberias === 'Unauthorized' && hasErrorBarberos=== 'Unauthorized') {
      logout();
    }
  }, [hasErrorBarberias, logout,hasErrorBarberos]);

  if (isLoadingBarberias || isLoadingBarberos) {
    return <p>Loading...</p>;
  }

  if (hasErrorBarberias || hasErrorBarberos) {
    return <p>Please try again later.</p>;
  }

  return (
    <div className="cuerpo">
      <h1 className="titleUser">Hola, {userData.usuario}</h1>
      <section className="cont-cartas">
        {/* Barberias Section */}
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
        <MultipleItems barberosData ={barberosData} />
        </section>
  
    </div>
  );
};

export default BarberShop;
