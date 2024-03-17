import "../Estilos/notFound.css"
import { API_URLS } from "../modulos/urls"
import { ButtonGoBack } from "./botones/ButtonGoBack"

export const NotFoundPage = () => {
  return (
    <main className="contenedor-not-found animate__animated animate__fadeIn">
      <div className="columnas-not-found">
        <div>
          <img className="image-not-found" src={`${API_URLS.obtenerImage}${"/uploads/astronauta-corazon.webp"}`}/>
        </div>
        <div className="oops-container">
          <span className="oops">
            Oops!
          </span>
          <span>
            Esta página no está disponible.
          </span>
          <ButtonGoBack/>
        </div>
      </div>
    </main>
  )
}
