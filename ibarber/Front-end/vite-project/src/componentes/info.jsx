import React from 'react'

const info = () => {
  return (
    <><><section className="contenedor-sobre-nosotros">
          <h2 className="titulo">Nuestro servicio</h2>
          <div className="sobre-nosotros">
              <img src="../imgcar/cortar.jpg" alt="" className="imagen-nosotros" />
              <div className="contenido-textos">
                  <h3><span>1</span>¿Quiénes Somos?</h3>
                  <p>Somos un sistema de gestión de citas para barberías. Conectamos clientes y barberos para una experiencia conveniente. Simplificamos la reserva de citas, eliminando esperas innecesarias y ofreciendo flexibilidad. Potenciamos a las barberías y barberos con herramientas eficientes. Mejoramos la interacción entre clientes y profesionales de la barbería.</p>
                  <h3><span>2</span>iBarber</h3>
                  <p>El nombre "iBarber" combina el pronombre "i" (yo) y "barber" (barbero) de la profesión, con el objetivo de representar la esencia personal y la pasión por la barbería.</p>
              </div>
          </div>
      </section>
          <section className="porque">
              <h2 className="titulo">¿Por qué iBarber?</h2>
              <div className="cuadrados">
                  <div className="cuadrado">
                      <div className="contenido-texto-cuadrado">
                          <img src="../imgcar/barberia.jpg" alt="" />
                          <p>Reserva citas sin esperas y desde cualquier lugar. Ahorra tiempo y disfruta de comodidad.</p>
                      </div>
                  </div>
                  <div className="cuadrado">
                      <div className="contenido-texto-cuadrado">
                          <img src="../imgcar/hbarbero.jpg" alt="" />
                          <p>Obtén visibilidad y reconocimiento por tu destreza. Simplifica la administración de citas y enfócate en brindar un servicio excepcional.</p>
                      </div>
                  </div>
              </div>
          </section></><section className="ventajas">
              <div className="contenedor">
                  <h2 className="titulo">Ventajas</h2>
                  <div className="ventajas-cont">
                      <div className="ventaja">
                          <img src="../imgcar/Tiempo.jpg" alt="" />
                          <h3><b>Gestión de citas simplificada.</b></h3>
                          <p>Facilitamos la reserva de citas en barberías, ahorrando tiempo y esfuerzo a los clientes.</p>
                      </div>
                      <div className="ventaja">
                          <img src="../imgcar/peinados.jpg" alt="" />
                          <h3>Comodidad y flexibilidad para los clientes.</h3>
                          <p>Ofrecemos la conveniencia de programar citas desde cualquier lugar, adaptándonos a sus necesidades y horarios.</p>
                      </div>
                      <div className="ventaja">
                          <img src="../imgcar/comodidad.png" alt="" />
                          <h3>Reconocimiento y crecimiento profesional.</h3>
                          <p>Impulsamos el reconocimiento de las barberías y barberos, brindándoles mayor visibilidad y oportunidades de crecimiento en su industria.</p>
                      </div>
                  </div>
              </div>
          </section></>
  )
}
export default info;