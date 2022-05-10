"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const express_validator_1 = require("express-validator");
const prueba_controller_1 = require("../controllers/prueba.controller");
const validar_campos_1 = __importDefault(require("../middlewares/validar-campos"));
// import validarJWT from "../middlewares/validar-jwt";
const router = (0, express_1.Router)();
router.post("/insertarPrueba", [
    // validarJWT,
    (0, express_validator_1.check)("nombre", "El nombre es obligatorio").not().isEmpty(),
    (0, express_validator_1.check)("apellido", "El apellido es obligatorio").not().isEmpty(),
    validar_campos_1.default,
], prueba_controller_1.postPrueba);
router.get("/getPrueba", prueba_controller_1.getPrueba);
exports.default = router;
//# sourceMappingURL=prueba.route.js.map