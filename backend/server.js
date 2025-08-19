const express = require("express");
const cors = require("cors");
const Database = require("./databases/config");
const userAPI = require("./APIS/userAPI");
const examAnglaisAPI = require("./APIS/examAnglaisAPI");

class MiServidor {
  constructor() {
    this.app = express();
    this.port = process.env.PORT || 3001;

    // Middlewares
    this.middlewares();

    // connection a la base de datos
    this.database = new Database();
    this.dbConnection();

    // Rutas
    this.routes();
  }

  async dbConnection() {
    await this.database.dbConnection();
  }

  middlewares() {
    this.app.use(cors());
    // ESte middleware sirve para recibir datos
    this.app.use(express.json());
    this.app.use(express.urlencoded({ extended: false }));
    // Mostrar en el navegador el html (index.html) que se encuentra en public
    this.app.use(express.static("public"));
  }

  listen() {
    this.app.listen(this.port, () => {
      console.log(`Esta aplicación corre en el puert ${this.port}`);
    });
  }

  routes() {
    userAPI(this.app);
    examAnglaisAPI(this.app);

    // this.app.use(
    //   this.userPath,
    //   require("./views/routes/users.routes"),
    //   errors()
    // );

    // this.app.get("/", (req, res) => {
    //   res.json({ mensaje: "Servidor funcionando" });
    // });
  }
}

module.exports = MiServidor;
