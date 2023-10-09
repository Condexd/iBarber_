import React, { useState, useEffect } from 'react';
import { UserContext } from './UserContext';

export const UserProvider = ({ children }) => {
  const storedUserData = JSON.parse(localStorage.getItem('userData')) || {}; // Obtiene los datos del localStorage
  const [userData, setUserData] = useState(storedUserData);

  // Actualizar el localStorage cuando userData cambie
  useEffect(() => {
    localStorage.setItem('userData', JSON.stringify(userData));
  }, [userData]);

  return (
    <UserContext.Provider value={{ userData, setUserData }}>
      {children}
    </UserContext.Provider>
  );
};
