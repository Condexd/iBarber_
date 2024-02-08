import { useParams } from "react-router-dom";
import CitaForm from "./CitaForm";
import { BarberiaInfo } from "./BarberiaInfo";
import { useFetch } from "../../../Hooks/useFetch";
import { API_URLS } from "../../../modulos/urls";

export const MainCita = () => {
  const { id } = useParams();
  const { data } = useFetch(`${API_URLS.obtenerBarberosNombreBarberia}/${id}`);

  return (
    <div className="row mt-5 containerCita d-flex justify-content-center p-0 ">
      <div className="col-lg-4 d-flex justify-content-center align-items-center mb-5 p-0 ">
        <BarberiaInfo barberoInfo={data?.barberos} />
      </div>
      <div className="col-lg-4 d-flex justify-content-center align-items-center p-0 ">
        <CitaForm barberoInfo={data?.barberos} />
      </div>
    </div>
  );
};
