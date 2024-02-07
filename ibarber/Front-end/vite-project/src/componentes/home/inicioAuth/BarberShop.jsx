
import { useContext } from "react";
import "../../../Estilos/inicio.css";
import { useFetch } from "../../../Hooks/useFetch";
import { API_URLS } from "../../../modulos/urls";
import { UserContext } from "../../context/UserContext";
import BarberoCard from "./BarberosCard";
import BarberiaCard from "./BarberiaCard";

const BarberShop = () => {
  const { userData } = useContext(UserContext);
  const apiUrlBarberias = API_URLS.obtenerBarberias;
  const { data: barberiasData, hasError: hasErrorBarberias, isLoading: isLoadingBarberias } = useFetch(apiUrlBarberias);

  const apiUrlBarberos = API_URLS.obtenerBarberosAll;
  const { data: barberosData, hasError: hasErrorBarberos, isLoading: isLoadingBarberos } = useFetch(apiUrlBarberos);

  if (isLoadingBarberias || isLoadingBarberos) {
    return <p>Loading...</p>;
  }

  if (hasErrorBarberias || hasErrorBarberos) {
    return <p>Please try again later.</p>;
  }
 console.log(barberosData)
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
          <div className="ver-mas">
            <button className="ver-btn">Ver más</button>
          </div>
        </div>

        {/* Barberos Section */}
        <div className="barberos">
          <h2>Barberos:</h2>
          <div className="cartas-barbero">
            {barberosData.map((grupo, index) => (
              <div key={index}>
                  <BarberoCard
                    key={index}
                    name={grupo.usuario}
                    biography={grupo.biografia_barbero}
                  />
              </div>
            ))}
          </div>
          <div className="ver-mas">
            <button className="ver-btn">Ver más</button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default BarberShop;
