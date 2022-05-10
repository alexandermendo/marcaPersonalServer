import { DataTypes } from "sequelize";
import db from "../db/connection";

const Pruebas = db.define("Pruebas", {
  nombre: {
    type: DataTypes.STRING,
  },
  apellido: {
    type: DataTypes.STRING,
  },
});

export default Pruebas;
