import "../../Estilos/boton.css"
import { useNavigate } from 'react-router-dom';

export const ButtonGoBack = () => {

  const navigate = useNavigate();

  const handleGoBack = () => {
    navigate(-1);
  }

  return (
    <button className="goback" onClick={handleGoBack} >Regresar</button>
  )
}