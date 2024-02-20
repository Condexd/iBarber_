import { useEffect, useState } from "react";
export const useFetchuno = (url) => {
  const [state, setState] = useState({
    data: null,
    isLoading: true,
    hasError: null,
  });

  const getFetch = async (token) => {
    setState({
      ...state,
      isLoading: true,
    });

    try {
      const response = await fetch(url, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      if (!response.ok) {
        throw new Error(response.statusText);
      }

      const data = await response.json();

      setState({
        data: data,
        isLoading: false,
        hasError: null,
      });
    } catch (error) {

      setState({
        data: null,
        isLoading: false,
        hasError: error.message || "Error en la solicitud",
      });
    }
  };

  useEffect(() => {
    const token = localStorage.getItem("token");

    if (token) {
      getFetch(token);
    }
  }, [url]);

  return {
    data: state.data,
    isLoading: state.isLoading,
    hasError: state.hasError,
  };
};
