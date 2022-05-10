import { Request, Response } from "express";
import { Sequelize } from "sequelize";
import { body } from "express-validator";
import Pruebas from "../models/prueba";

export const postPrueba = async (req: Request, res: Response) => {
  const { nombre, apellido } = req.body;

  try {
    const consulta = await Pruebas.create({
      nombre,
      apellido,
    });
    res.json({
      prueba: consulta,
      rta: "OK",
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      msg: "Hable con el administrador 0001",
    });
  }
};

export const getPrueba = async (req: Request, res: Response) => {
    try {
      let listaPruebas = [];
      const pruebas = await Pruebas.findAll({
        attributes: ["id", "nombre", "apellido"],
        raw: true
      });
      pruebas.forEach((element) => {
        console.log(element["nombre"]);
        listaPruebas.push({
          value: element["id"], label: element["nombre"]
        })
      });
      res.json({
        listaPruebas,
      });
    } catch (error) {
      console.log(error);
      res.status(500).json({
        msg: "Hable con el administrador 0001",
      });
    }
  };
