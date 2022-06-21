import { Router } from "express";
import { check } from "express-validator";
import { getPrueba, postPrueba } from "../controllers/prueba.controller";
import validarCampos from "../middlewares/validar-campos";
// import validarJWT from "../middlewares/validar-jwt";

const router = Router();

router.post(
  "/insertarPrueba",
  [
    // validarJWT,
    check("nombre", "El nombre es obligatorio").not().isEmpty(),
    check("apellido", "El apellido es obligatorio").not().isEmpty(),
    validarCampos,
  ],
  postPrueba
);

router.get("/getPrueba", getPrueba);

export default router;
  