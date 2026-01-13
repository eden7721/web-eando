import planificarTareas, { cargarTareas } from "./funciones/cantidadTareas.js";

const d = document;

d.addEventListener("DOMContentLoaded", e => {
    planificarTareas("form-1");
});
cargarTareas("tareas-pendientes");