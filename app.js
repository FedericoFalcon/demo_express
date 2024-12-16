require('dotenv').config();

const Server = require('../demo_express/models/server');

const startServer = new Server();

startServer.listen();