require("dotenv").config();
const AppServer = require("./server");

const appServer = new AppServer();

appServer.listen();
