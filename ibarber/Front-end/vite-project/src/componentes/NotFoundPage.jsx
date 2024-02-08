import "../Estilos/notFound.css"
import { ButtonGoBack } from "./botones/ButtonGoBack"

export const NotFoundPage = () => {
  return (
    <main className="contenedor-not-found">
      <div className="columnas-not-found">
        <div>
          <img className="image-not-found" src="https://raw.githubusercontent.com/Condexd/iBarber_/develop/ibarber/back-end/uploads/astronauta-corazon.webp" />
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
