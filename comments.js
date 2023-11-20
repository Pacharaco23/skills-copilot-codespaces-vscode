// Create web server
const http = require('http');

// Crear el servidor
const server = http.createServer((req, res) => {
    // Configurar encabezados de respuesta
    res.writeHead(200, { 'Content-Type': 'text/plain' });

    // Enviar una respuesta
    res.end('¡Hola! Este es mi servidor web básico.');
});

// Especificar el puerto en el que el servidor escuchará las solicitudes
const port = 3000;

// Hacer que el servidor escuche en el puerto especificado
server.listen(port, () => {
    console.log(`El servidor está escuchando en el puerto ${port}`);
});
