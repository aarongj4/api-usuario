import swaggerAutogen from "swagger-autogen";


const outputFile = './swagger.json';
const endPointFiles = ['./app.js'];


const doc = {
    info: {
        title: 'API de Usuarios',
        descripcion: 'Esta API permite gestionar Usuarios y Login'
    },
    host: 'localhost:3000',
    schemes: ['http']
}

swaggerAutogen()(outputFile, endPointFiles, doc);