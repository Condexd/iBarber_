import { useParams } from "react-router-dom";
import CitaForm from "./CitaForm";
import { BarberiaInfo } from "./BarberiaInfo";
import { API_URLS } from "../../../modulos/urls";
import { useFetchuno } from "../../../Hooks/useFetchintento";
import { useEffect } from "react";

export const MainCita = ({logout}) => {
  const { id } = useParams();
  const { data,hasError } = useFetchuno(`${API_URLS.obtenerBarberosNombreBarberia}/${id}`);
  useEffect(() => {
    if (hasError === 'Unauthorized') {
      logout();
    }
  }, [hasError, logout]);
  return (
    <div className="row mt-5 containerCita d-flex justify-content-center p-0 ">
      <div className="col-lg-4 d-flex justify-content-center align-items-center  px-5 ">
        <BarberiaInfo barberoInfo={data?.barberos} />
      </div>
      <div className="col-lg-5 d-flex justify-content-center align-items-center mt-1 ">
        <CitaForm barberoInfo={data?.barberos} />
      </div>
    </div>
  );
};
