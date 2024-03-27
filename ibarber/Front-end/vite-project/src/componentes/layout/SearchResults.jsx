import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { API_URLS } from "../../modulos/urls";
import BarberiaCard from "../home/inicioAuth/BarberiaCard";
import { enviadorAuth2 } from "../../functions/usePostAuth2";
import { NotFoundPage } from "../NotFoundPage";

function SearchResults({ logout }) {
  const location = useLocation();
  const searchQuery = new URLSearchParams(location.search).get("q");
  const [results, setResults] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      setError(null);

      if (searchQuery) {
        try {
          const response = await enviadorAuth2(API_URLS.filtrarBarberiaPorNombre, { termino: searchQuery });
          setResults(response);
        } catch (error) {
          console.error("Error fetching search results:", error);
          if (error.response && error.response.status === 401) {
            logout();
          } else {
            setError("Error al buscar. Por favor, inténtalo de nuevo más tarde.");
          }
        } finally {
          setLoading(false);
        }
      }
    };

    fetchData();
  }, [searchQuery, logout]);

  if (loading) {
    return <div>Cargando...</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  return (
    <div>
      {results.length === 0 ? (
        <NotFoundPage mensaje="No se encontraron resultados" />
      ) : (
        <section>
          <h3 className="subTitle">Resultados encontrados para "{searchQuery}"</h3>
          <div className="cards-container">
            {results.map((barberia) => (
              <BarberiaCard
                key={barberia._id}
                name={barberia.nombre_barberia}
                description={barberia.descripcion_barberia}
                id={barberia._id}
                image={barberia.fotoPerfil}
                city={barberia.nombre_ciudad}
              />
            ))}
          </div>
        </section>
      )}
    </div>
  );
}

export default SearchResults;
