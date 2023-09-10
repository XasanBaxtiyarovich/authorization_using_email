const swaggerJSDoc = require('swagger-jsdoc');
const swaggerDefinition = {
    openapi: '3.0.0',
    info: {
        title: 'This is the backend documentation for the frontend',
        version: '1.0.0',
        description:
            "This swagger is documentation for auth registration by email",
    },
    servers: [
        {
            url: 'http://localhost:4321',
            description: 'Development server',
        },
    ],
};

const options = {
    swaggerDefinition,
    // Paths to files containing OpenAPI definitions
    apis: ["src/swagger/*.swagger.js"],
};

// const swaggerJSDoc = require('swagger-jsdoc');
const swaggerUi = require('swagger-ui-express');

// ...
const swaggerSpec = swaggerJSDoc(options);

module.exports = {
    swaggerUi,
    swaggerSpec
};