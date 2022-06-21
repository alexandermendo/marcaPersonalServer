import express, { Application } from "express";
import pruebaRoutes from "../routers/prueba.route";

//route dashboard

import cors from "cors";
import db from "../db/connection";
// import { crontabConstructor } from '../helpers/crontab';

class Server {
  private app: Application;
  private port: string;
  private apiPaths = {
    prueba: "/api/pruebaMarca",

    //dashboard route
  };

  constructor() {
    this.app = express();
    this.port = process.env.PORT || "8001";
    this.dbConnection();
    this.middlewares();
    // crontabConstructor();

    //Definir mis rutas
    this.routes();
  }

  async dbConnection() {
    try {
      await db.authenticate();
      console.log("Db online");
    } catch (error) {
      throw new Error();
    }
  }

  middlewares() {
    // CORS
    this.app.use(cors());

    //Lectura Body
    this.app.use(express.json());

    //Carpeta Publica
    this.app.use(express.static("public"));

    // //Carga de archivos
    // this.app.use(
    //   fileUpload({
    //     useTempFiles: true,
    //     tempFileDir: "/tmp/",
    //     createParentPath: true,
    //   })
    // );
  }

  routes() {
    this.app.use(this.apiPaths.prueba, pruebaRoutes);
    //DASHBOARD ROUTE
  }

  listen() {
    this.app.listen(this.port, () => {
      console.log("Servidor corriendo en puertooo" + this.port);
    });
  }
}

export default Server;
