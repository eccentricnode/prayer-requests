const jsonServer = require('json-server');
const server = jsonServer.create();
const router = jsonServer.router('server/db.json');
const middlewares = jsonServer.defaults();
const port = 3200;

server.use(middlewares);
server.use(router);
server.use(jsonServer.bodyParser);

server.listen(port, () => console.log('JSON server is running port:', port));