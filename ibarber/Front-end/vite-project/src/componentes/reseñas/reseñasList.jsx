import React, { useState } from 'react';
import { API_URLS } from '../../modulos/urls';
import { useFetchuno } from '../../Hooks/useFetchintento';

const SideMenu = () => {
  const apiUrl = `${API_URLS.obtenerResenas}`;
  const { data, hasError } = useFetchuno(apiUrl);

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
