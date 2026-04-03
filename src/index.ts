import express from "express";
import cors from "cors";
import authRoutes from "./routes/auth.routes";
import proyectoRoutes from "./routes/proyecto.routes";
import tareaRoutes from "./routes/tarea.routes";

const app = express();

app.use(cors());
app.use(express.json());
app.use("/auth", authRoutes);
app.use("/proyectos", proyectoRoutes);
app.use("/tareas", tareaRoutes);

app.get("/", (req, res) => {
  res.send("TeamTrack API funcionando 🚀");
});

app.listen(3000, () => {
  console.log("Servidor corriendo en http://localhost:3000");
});