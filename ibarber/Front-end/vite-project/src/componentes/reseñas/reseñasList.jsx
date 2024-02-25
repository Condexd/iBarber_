import React, { useState,useEffect } from 'react';
import { API_URLS } from '../../modulos/urls';
import { useFetchuno } from '../../Hooks/useFetchintento';

const SideMenu = ({logout}) => {
  const apiUrl = `${API_URLS.obtenerResenas}`;
  const { data, hasError } = useFetchuno(apiUrl);

  useEffect(() => {
    if (hasError === 'Unauthorized') {
      logout();
    }
  }, [hasError, logout]);
  return (
    <div>
      <ul>
        { data &&data.map((item, index) => (
          <li key={index}>
            <h3>{item.title}</h3>
            <p>{item.body}</p>
            <p>Rating: {item.rating}</p>
            <p>Usuario: {item.usuario}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SideMenu;
