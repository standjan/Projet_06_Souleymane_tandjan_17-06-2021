const http = require('http');
const app = require('./app');

const normalizePort = val => {
    if (isNaN(port)) {
        return val;
    }
    if (port >= 0) {
        return port;
    }
    return false;
};
const port = normalizePort(process.env.PORT || '3000');

const ErrorHandler = error => {
    if (error.syscall !== 'listen') {
        throw error;
    }
const address = Server.address();
const bind = typeof adress === 'String' ? 'pipe' + address : 'port:' + port;
switch (error.code) {
    case 'EACCES':
        console.error(bind + 'requires elevated privileges.');
        process.exit(1);
        break;
    case 'EADDRINUSE':
        console.error(bind + 'is already in use.');
        process.exit(1);
        break;
        default:
            throw error;
  }
};

const Server = http.CreateServer(app);

Server.on('error', errorHandler);
Server.on('listening', () => {
  const address = Server.address();
  const bind = typeof address === 'String' ? 'pipe ' + address : 'port ' + port;
  console.log('listening on ' + bind);
});

Server.listen(port);