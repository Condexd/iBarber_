import React from 'react'
import ScrollAnimation from 'react-animate-on-scroll';
import { API_URLS } from "../../modulos/urls";
export const RecomendacionBarber = () => {
  return (
    <ScrollAnimation
    animateIn="animate__animated animate__fadeIn"
    duration={0.9}
    animateOnce
  >
    <section className="recommendations-section ">
      <div>
      <div className="recommendation-content animate__animated animate__fadeIn">
        <img
          src={`${API_URLS.obtenerImage}/uploads/boceto.jpg`}
          alt="Recomendaciones para abrir una barbería"
        />
        <div className="recommendation-text">
          <p>
            ¡Felicidades por dar el paso para convertirte en propietario de
            una barbería! Aquí tienes algunas recomendaciones para
            asegurarte de que tu nuevo negocio sea un éxito:
          </p>
          <ul>
            <li>
              <strong>Investiga tu mercado:</strong> Analiza la demanda de
              servicios de barbería en tu área y conoce a tu competencia.
            </li>
            <li>
              <strong>Define tu propuesta única:</strong> Diferénciate
              ofreciendo servicios especiales o un ambiente único.
            </li>
            <li>
              <strong>Crea una experiencia memorable:</strong> Haz que cada
              visita a tu barbería sea especial con un servicio excepcional
              y un ambiente acogedor.
            </li>
            <li>
              <strong>Marketing inteligente:</strong> Utiliza las redes
              sociales y otras herramientas de marketing para promocionar tu
              negocio y llegar a más personas.
            </li>
            <li>
              <strong>Planifica tu gestión financiera:</strong> Lleva un
              control de tus gastos e ingresos para mantener la salud
              financiera de tu negocio.
            </li>
          </ul>
          <p>
            Recuerda que abrir una barbería es emocionante, pero también
            requiere esfuerzo y dedicación. ¡Estamos seguros de que tendrás
            mucho éxito en esta nueva aventura!
          </p>
        </div>
      </div>
      </div>
  
    </section>
  </ScrollAnimation>
  )
}
