const swaggerJsdoc = require("swagger-jsdoc");

const swaggerAutogen = require('swagger-autogen')();

const swaggerOptions = {
  definition: {
    openapi: "3.0.0",
    info: {
      title: "uber  APIs",
      version: "1.0.0",
      description: "API documentation for my uber project",
    },
    host: "localhost:9000",
    servers: [{ url: "http://localhost:9000" }], // URL of your server
    tags: [
        {
            name: "User",
            description: "User-related endpoints",
        },
        {
            name: "Rider",
            description: "Rider-related endpoints",
        },
    ],
  
  },
  info: {
    title: "Uber APIs",
    version: "1.0.0",
    description: "API documentation for my Uber project",
},
host: "localhost:9000", // Correct host and port
schemes: ["http"], // Use 'https' if deployed securely

  
  apis: ["./swagger/*.js"], // This is where your API routes are documented
};

const outputFile = '../swagger-output.json';

const routes = ['app.js']

swaggerAutogen(outputFile,routes,swaggerOptions)
const swaggerDocs = swaggerJsdoc(swaggerOptions);
// swaggerAutogen(outputFile,routes,swaggerOptions)
module.exports = swaggerDocs;
