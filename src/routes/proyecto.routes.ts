import { Router } from "express";
import { crearProyecto, obtenerProyectos } from "../controllers/proyecto.controller";

const router = Router();

router.post("/", crearProyecto);
router.get("/", obtenerProyectos);

export default router;