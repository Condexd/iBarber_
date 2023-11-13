import "../../../Estilos/inicio.css"
const BarberShop = () => {
    const barberias = [
        { name: 'Barberia1', imageSrc: 'https://cdn-icons-png.flaticon.com/512/6673/6673402.png' },
        // Add other barberias as needed
    ];

    const barberos = [
        { name: 'Barbero1', imageSrc: 'https://cdn-icons-png.flaticon.com/512/54/54647.png' },
        // Add other barberos as needed
    ];

    return (
        <div className="cuerpo">
            <h1 className="titleUser">Hola, Usuario8789</h1>
            <section className="cont-cartas">
                <h2>Barberias:</h2>
                <div className="cartas-barberia">
                    {barberias.map((barberia, index) => (
                        <div className="carta" key={index}>
                            <div className="titulos"><h3>{barberia.name}</h3></div>
                            <div className="imagen"><img src={barberia.imageSrc} alt="" /></div>
                            <button className="agendar-btn">Agendar</button>
                        </div>
                    ))}
                </div>
                <div className="ver-mas">
                    <button className="ver-btn">Ver más</button>
                </div>

                <h2>Barberos:</h2>
                <div className="cartas-barbero">
                    {barberos.map((barbero, index) => (
                        <div className="carta-b" key={index}>
                            <div className="titulos"><h3>{barbero.name}</h3></div>
                            <div className="imagen"><img src={barbero.imageSrc} alt="" /></div>
                            <button className="agendar-btn">Agendar</button>
                        </div>
                    ))}
                </div>
                <div className="ver-mas">
                    <button className="ver-btn">Ver más</button>
                </div>
            </section>
        </div>
    );
};

export default BarberShop;
