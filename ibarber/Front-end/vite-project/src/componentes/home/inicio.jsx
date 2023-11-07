import Carousel from "./carousel"
import Info from './info';

const Inicio = ({ isAuthenticated }) => {
  return (
    isAuthenticated ? (
      <div>
        <p>Hola, usuario autenticado</p>
      </div>
    ) : (
      <>
        <Carousel />
        <Info />
      </>
    )
  );
}

export default Inicio;
