const d = document;

function btn() {
    const coleccion = d.querySelectorAll(".container-imgs img");
    let index = 0;
    d.addEventListener("click", e => {
        if(e.target.matches("#btn-right")) {
            if(coleccion[index] !== undefined){
                coleccion[index].classList.add("hidden");
            }
            if(index < coleccion.length) {
                index++;
            }
            if(index === 4){
                index = 0;
            }
            if(coleccion[index] !== undefined){
                coleccion[index].classList.remove("hidden");
            }
        }
        if(e.target.matches("#btn-left")) {
            if(coleccion[index] !== undefined){
                coleccion[index].classList.add("hidden");
            }
            if(index >= 0) {
                index--;
            }
            if(index === -1){
                index = 3;
            }
            if(coleccion[index] !== undefined){
                coleccion[index].classList.remove("hidden");
            }
        }
    });
}
function abrirMenu() {
    const $btn = d.getElementById("selector-imgs");
    d.addEventListener("click", e => {
        if(e.target.matches("#btn-menu")) {
            d.getElementById("selector-imgs").classList.toggle("hidden");
        }
        if(e.target.matches("img")) {
            d.getElementById("selector-imgs").classList.toggle("hidden");
        }
    });
}
d.addEventListener("DOMContentLoaded", e => {
    btn();
    abrirMenu();
});