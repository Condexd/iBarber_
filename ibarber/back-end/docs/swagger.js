import swaggerJsdoc from 'swagger-jsdoc';

const options = {
    swaggerDefinition: {
        info: {
            title: 'ibarber API',
            version: '1.0.0',
            description: 'Documentación de la API de ibarber'
        },
    },
    apis: ['../routers/citas.js']
};

const specs = swaggerJsdoc(options);

export default specs;