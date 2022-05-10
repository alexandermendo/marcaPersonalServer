"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getPrueba = exports.postPrueba = void 0;
const prueba_1 = __importDefault(require("../models/prueba"));
const postPrueba = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { nombre, apellido } = req.body;
    try {
        const consulta = yield prueba_1.default.create({
            nombre,
            apellido,
        });
        res.json({
            prueba: consulta,
            rta: "OK",
        });
    }
    catch (error) {
        console.log(error);
        res.status(500).json({
            msg: "Hable con el administrador 0001",
        });
    }
});
exports.postPrueba = postPrueba;
const getPrueba = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        let listaPruebas = [];
        const pruebas = yield prueba_1.default.findAll({
            attributes: ["id", "nombre", "apellido"],
            raw: true
        });
        pruebas.forEach((element) => {
            console.log(element["nombre"]);
            listaPruebas.push({
                value: element["id"], label: element["nombre"]
            });
        });
        res.json({
            listaPruebas,
        });
    }
    catch (error) {
        console.log(error);
        res.status(500).json({
            msg: "Hable con el administrador 0001",
        });
    }
});
exports.getPrueba = getPrueba;
//# sourceMappingURL=prueba.controller.js.map