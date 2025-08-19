const mongoose = require("mongoose");

class Database {
  constructor() {
    this.connection = process.env.MONGO_CONNECTION_DEV;
  }
  async dbConnection() {
    try {
      await mongoose.connect(this.connection, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      });
      console.log("Conectado a la base de datos");
    } catch (error) {
      throw new Error("Error a la hora de conectarse a la base de datos");
    }
  }
}

module.exports = Database;
