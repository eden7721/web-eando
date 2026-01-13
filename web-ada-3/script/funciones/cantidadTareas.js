const d = document;
const w = window;
const ls = w.localStorage;
export default function planificarTareas(formCantidad){
    const $formulario = d.getElementById(formCantidad);
    const $numeroTareasFinal = $formulario.cantidadTareasFinal;
    const $numeroTareas = $formulario.cantidadTareas;

    d.addEventListener("click", e => {
        if(e.target.matches(".btn-form-1")){
            e.preventDefault();
            if(Number.parseInt($numeroTareas.value) > 0 ){
                crearTareas("form-2", Number.parseInt($numeroTareas.value));
                $formulario.btnCantidad.disabled = true;
            }
            else {
                alert("Llena los campos correctamente");
            }
        }
    });
}
function crearTareas(formTareas, cantidad){
    const $formTareas = d.getElementById(formTareas);
    const $templateTarea = d.getElementById("template-tarea").content;
    const $templateTareaCreada = d.getElementById("template-tarea-creada").content;
    const $fragmento = d.createDocumentFragment();
    const $tituloForm2 = d.querySelector(".titulo-lista-tareas");
    const $tareasPendientes = d.getElementById("tareas-pendientes");

    $formTareas.innerHTML = `<input class="btn-form-2" name="btnLista"type="submit" value="Confirmar creación">`;

    for(let i = 1; i <= cantidad; i++){
        const $tituloTarea = $templateTarea.querySelector(".tituloTarea");
        const $descripcionTarea = $templateTarea.querySelector(".descripcionTarea");
        $tituloTarea.setAttribute("placeholder", `Titulo tarea ${i}`);
        $tituloTarea.setAttribute("name", `tituloTarea${i}`);
        $descripcionTarea.setAttribute("placeholder", `Descripción tarea ${i}`)
        $descripcionTarea.setAttribute("name", `descTarea${i}`)
        let $clonTarea = d.importNode($templateTarea, true);
        $fragmento.append($clonTarea);
    }
    $formTareas.prepend($fragmento);

    d.addEventListener("submit", e => {
        if(e.target === $formTareas){
            e.preventDefault();
            const $titulos = d.querySelectorAll(".tituloTarea");
            const $descs = d.querySelectorAll(".descripcionTarea");

            for(let i = 0; i < $titulos.length; i++){
                let clonTareaTerminada;
                $templateTareaCreada.querySelector(".titulo-tarea").textContent = $titulos[i].value;
                $templateTareaCreada.querySelector(".descripcion-tarea").textContent = $descs[i].value;
                clonTareaTerminada = d.importNode($templateTareaCreada, true);
                $tareasPendientes.append(clonTareaTerminada);
            }
            let tareasCargadas = $tareasPendientes.innerHTML;
            ls.setItem("cargarTareas", tareasCargadas);
            console.log(ls.getItem("cargarTareas"));
            w.location.reload();
        }
    });
}
export function cargarTareas(form){
    d.addEventListener("DOMContentLoaded", e=> {
        const $tareasForm = d.getElementById(form);
        $tareasForm.innerHTML = ls.getItem("cargarTareas");
    });
};
