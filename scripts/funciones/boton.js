const d = document;
const $img = document.querySelector(".section-garou img");
let transformacion;
export function btnMenu(selector, menu, btnMenu) {
    d.addEventListener("click", e => {
        const $menu = d.querySelector(menu);
        if (e.target.matches(selector)) {
            $menu.classList.toggle("menu-activation");
            console.log(e);
        }
        if(e.target.matches(btnMenu)){
            $menu.classList.toggle("menu-activation");
        }
    });
    d.addEventListener("scroll", e => {
        if(window.scrollY > 500) {
            $img.style.setProperty("transform", "translate(0,0)");
            console.log("hola")
        }
    });
}