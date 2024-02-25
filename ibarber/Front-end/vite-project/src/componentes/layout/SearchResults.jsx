import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { enviadorAuth } from "../../functions/usePostAuth";
import { API_URLS } from "../../modulos/urls";
import BarberiaCard from "../home/inicioAuth/BarberiaCard";
import { enviadorAuth2 } from "../../functions/usePostAuth2";

function SearchResults() {
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
          const response = await enviadorAuth2(API_URLS.filtrarBarberiaPorNombre, { termino:searchQuery });
          setResults(response);
        } catch (error) {
          console.error("Error fetching search results:", error);
          setError("Error al buscar. Por favor, inténtalo de nuevo más tarde.");
        } finally {
          setLoading(false);
        }
      }
    };

    fetchData();
  }, [searchQuery]);

  if (loading) {
    return <div>Cargando...</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  return (
    <div>
      <h2>Resultados de búsqueda para: {searchQuery}</h2>
      {results.length === 0 ? (
        <p>No se encontraron resultados para la búsqueda "{searchQuery}".</p>
      ) : (
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
      )}
    </div>
  );
}

export default SearchResults;
