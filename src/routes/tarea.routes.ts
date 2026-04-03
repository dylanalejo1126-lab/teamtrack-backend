import { Router } from "express";
import { crearTarea, obtenerTareas } from "../controllers/tarea.controller";
import { actualizarTarea, eliminarTarea } from "../controllers/tarea.controller";

const router = Router();

router.post("/", crearTarea);
router.get("/", obtenerTareas);
router.put("/:id", actualizarTarea);
router.delete("/:id", eliminarTarea);

export default router;