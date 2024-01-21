import { useParams } from "react-router-dom";
import CitaForm from "./CitaForm";
import { BarberiaInfo } from "./BarberiaInfo";
import { useFetch } from "../../../Hooks/useFetch";
import { API_URLS } from "../../../modulos/urls";

export const MainCita = () => {
  const { id } = useParams();
  const { data } = useFetch(`${API_URLS.obtenerBarberosNombreBarberia}/${id}`);

  return (
    <div className="row mt-5 containerCita d-flex justify-content-center">
      <div className="col-lg-4 d-flex justify-content-center align-items-center">
        <BarberiaInfo barberoInfo={data?.barberos} />
      </div>
      <div className="col-lg-4 d-flex justify-content-center align-items-center ">
        <CitaForm barberoInfo={data?.barberos} />
      </div>
    </div>
  );
};
