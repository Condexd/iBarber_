import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

export function useAuthentication() {
  const navigate = useNavigate();
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      setIsAuthenticated(true);
    }
  }, []);

  const logout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("userData");
    setIsAuthenticated(false);
    navigate("/");
  };

  return { isAuthenticated, setIsAuthenticated, logout };
}
