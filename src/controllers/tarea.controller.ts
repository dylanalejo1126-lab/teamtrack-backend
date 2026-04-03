import { Request, Response } from "express";
import prisma from "../prisma/client";

// CREAR TAREA
export const crearTarea = async (req: Request, res: Response) => {
  try {
    const tarea = await prisma.tarea.create({
      data: req.body
    });
    res.json(tarea);
  } catch (error) {
    res.status(500).json({ error: "Error al crear tarea" });
  }
};

// OBTENER TODAS LAS TAREAS
export const obtenerTareas = async (req: Request, res: Response) => {
  try {
    const tareas = await prisma.tarea.findMany({
      include: {
        usuario: true,
        proyecto: true
      }
    });
    res.json(tareas);
  } catch (error) {
    res.status(500).json({ error: "Error al obtener tareas" });
  }
};
// ACTUALIZAR TAREA
export const actualizarTarea = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;

    const tarea = await prisma.tarea.update({
      where: { id: Number(id) },
      data: req.body
    });

    res.json(tarea);
  } catch (error) {
    res.status(500).json({ error: "Error al actualizar tarea" });
  }
};
// ELIMINAR TAREA
export const eliminarTarea = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;

    await prisma.tarea.delete({
      where: { id: Number(id) }
    });

    res.json({ message: "Tarea eliminada" });
  } catch (error) {
    res.status(500).json({ error: "Error al eliminar tarea" });
  }
};