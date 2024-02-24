import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import SearchBar from "material-ui-search-bar";
import { makeStyles } from "@material-ui/core/styles"; // Importa makeStyles para definir los estilos

// Define los estilos para el SearchBar
const useStyles = makeStyles({
  root: {
    boxShadow: "none", // Quita el sombreado
  },
});

function SearchForm() {
  const [searchQuery, setSearchQuery] = useState("");
  const navigate = useNavigate();
  const classes = useStyles(); // Obtiene las clases de estilos

  const handleSearch = () => {
    if (searchQuery.trim() !== "") {
      navigate(`/search?q=${encodeURIComponent(searchQuery.trim())}`);
    }
  };

  return (
    <SearchBar
      value={searchQuery}
      onChange={(newValue) => setSearchQuery(newValue)}
      onRequestSearch={handleSearch}
      placeholder="Buscar..."
      classes={{ root: classes.root }} // Aplica los estilos al SearchBar
    />
  );
}

export default SearchForm;
