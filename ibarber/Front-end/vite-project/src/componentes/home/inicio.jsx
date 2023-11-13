import Carousel from "./carousel"
import Info from './info';
import { InicioAuth } from "./inicioAuth/InicioAuth";
const Inicio = ({ isAuthenticated }) => {
  return (
    isAuthenticated ? (
      <InicioAuth/>
          ) : (
      <>
        <Carousel />
        <Info />
      </>
    )
  );
}

export default Inicio;
