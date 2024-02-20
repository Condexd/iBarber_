import Footer from "../layout/footer";
import Carousel from "./carousel"
import Info from './info';
import { InicioAuth } from "./inicioAuth/InicioAuth";

const Inicio = ({ isAuthenticated, logout}) => {
  return (
    isAuthenticated ? (
      <InicioAuth logout={logout} />
          ) : (
      <><>
          <Carousel />
          <Info />
        </><Footer />
        </>
    )
  );
}

export default Inicio;
