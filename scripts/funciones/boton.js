const d = document;
const $imgs = document.querySelectorAll(".section-garou img");
const $imgs2 = document.querySelectorAll(".section-saitama img");
const $imgs3 = document.querySelector(".section-punpun img");
const $imgs4 = document.querySelectorAll(".section-wukong img");
let imagen = 0;
let imagen2 = 0;
let imagen4 = 0;
let transformacion;
export function btnMenu(selector, menu, btnMenu) {
    d.addEventListener("click", e => {
        const $menu = d.querySelector(menu);
        if (e.target.matches(selector)) {
            $menu.classList.toggle("menu-activation");
            console.log(e);
        }
        if(e.target.matches(btnMenu) || e.target.matches(".menu img")){
            $menu.classList.toggle("menu-activation");
        }

        //Funciones complementarias
        function seleccionarBoton(target, clase, index, selector) {
            target = d.querySelectorAll(selector);
            target.forEach(i => {
                i.classList.remove(clase);
            });
            target[index].classList.add(clase);
        }
        function reemplazarDesc(target, selector, index, text){
            target = d.getElementById(selector);
            text.textContent = target.content.querySelectorAll("p")[index].textContent;
        }

        // Botones garou
        const $btns = [];
        const $descs = [];
        if(e.target.matches(".section-garou .btn-web")){
            if($imgs[imagen].getAttribute("style")){
                $imgs[imagen].setAttribute("style", null);
            }
            imagen = 0;
            reemplazarDesc($descs, "template-text-garou", imagen, d.querySelector(".descripcion-garou"));
            seleccionarBoton($btns, "estado-hover", imagen, ".section-garou button");
            
            $imgs[imagen].style.setProperty("transform", "translate(0,0)");
        }
        if(e.target.matches(".section-garou .btn-manga")){
            if($imgs[imagen].getAttribute("style")){
                $imgs[imagen].setAttribute("style", null);
            }
            imagen = 1;
            reemplazarDesc($descs, "template-text-garou", imagen, d.querySelector(".descripcion-garou"));
            seleccionarBoton($btns, "estado-hover", imagen, ".section-garou button");
            $imgs[imagen].style.setProperty("transform", "translate(0,0)");
        }
        if(e.target.matches(".section-garou .btn-anime")){
            if($imgs[imagen].getAttribute("style")){
                $imgs[imagen].setAttribute("style", null);
            }
            imagen = 2;
            reemplazarDesc($descs, "template-text-garou", imagen, d.querySelector(".descripcion-garou"));
            seleccionarBoton($btns, "estado-hover", imagen, ".section-garou button");
            $imgs[imagen].style.setProperty("transform", "translate(0,0)");
        }

        //Botones Saitama
        if(e.target.matches(".section-saitama .btn-web")){
            if($imgs2[imagen2].getAttribute("style")){
                $imgs2[imagen2].setAttribute("style", null);
            }
            imagen2 = 0;
            reemplazarDesc($descs, "template-text-saitama", imagen2, d.querySelector(".descripcion-saitama"));
            seleccionarBoton($btns, "estado-hover", imagen2, ".section-saitama button");
            $imgs2[imagen2].style.setProperty("transform", "translate(0,0)");
        }
        if(e.target.matches(".section-saitama .btn-manga")){
            if($imgs2[imagen2].getAttribute("style")){
                $imgs2[imagen2].setAttribute("style", null);
            }
            imagen2 = 1;
            reemplazarDesc($descs, "template-text-saitama", imagen2, d.querySelector(".descripcion-saitama"));
            seleccionarBoton($btns, "estado-hover", imagen2, ".section-saitama button");
            $imgs2[imagen2].style.setProperty("transform", "translate(0,0)");
        }
        if(e.target.matches(".section-saitama .btn-anime")){
            if($imgs2[imagen2].getAttribute("style")){
                $imgs2[imagen2].setAttribute("style", null);
            }
            imagen2 = 2;
            reemplazarDesc($descs, "template-text-saitama", imagen2, d.querySelector(".descripcion-saitama"));
            seleccionarBoton($btns, "estado-hover", imagen2, ".section-saitama button");
            $imgs2[imagen2].style.setProperty("transform", "translate(0,0)");
        }

        //Botones PunPun
        if(e.target.matches(".section-punpun .btn-manga")){
            seleccionarBoton($btns, "estado-hover", 0, ".section-punpun button");
            if($imgs3.getAttribute("style")){
                $imgs3.setAttribute("style", null);
            }
            $imgs3.style.setProperty("transform", "translate(0,0)");
        }

        
        //Botones Wukong
        if(e.target.matches(".section-wukong .btn-novela")){
            if($imgs4[imagen4].getAttribute("style")){
                $imgs4[imagen4].setAttribute("style", null);
            }
            imagen4 = 0;
            reemplazarDesc($descs, "template-text-wukong", imagen4, d.querySelector(".descripcion-wukong"));
            seleccionarBoton($btns, "estado-hover", imagen4, ".section-wukong button");
            $imgs4[imagen4].style.setProperty("transform", "translate(0,0)");
        }
        if(e.target.matches(".section-wukong .btn-juego")){
            if($imgs4[imagen4].getAttribute("style")){
                $imgs4[imagen4].setAttribute("style", null);
            }
            imagen4 = 1;
            reemplazarDesc($descs, "template-text-wukong", imagen4, d.querySelector(".descripcion-wukong"));
            seleccionarBoton($btns, "estado-hover", imagen4, ".section-wukong button");
            $imgs4[imagen4].style.setProperty("transform", "translate(0,0)");
        }
        if(e.target.matches(".section-wukong .btn-insp")){
            if($imgs4[imagen4].getAttribute("style")){
                $imgs4[imagen4].setAttribute("style", null);
            }
            imagen4 = 2;
            reemplazarDesc($descs, "template-text-wukong", imagen4, d.querySelector(".descripcion-wukong"));
            seleccionarBoton($btns, "estado-hover", imagen4, ".section-wukong button");
            $imgs4[imagen4].style.setProperty("transform", "translate(0,0)");
        }
        if(e.target.matches(".section-wukong .btn-peli")){
            if($imgs4[imagen4].getAttribute("style")){
                $imgs4[imagen4].setAttribute("style", null);
            }
            imagen4 = 3;
            reemplazarDesc($descs, "template-text-wukong", imagen4, d.querySelector(".descripcion-wukong"));
            seleccionarBoton($btns, "estado-hover", imagen4, ".section-wukong button");
            $imgs4[imagen4].style.setProperty("transform", "translate(0,0)");
        }
    });
    d.addEventListener("scroll", e => {

        if(window.scrollY > 500) {
            $imgs[imagen].style.setProperty("transform", "translate(0,0)");
        }
        if(window.scrollY > 1500) {
            $imgs2[imagen2].style.setProperty("transform", "translate(0,0)");
        }
        if(window.scrollY > 2500) {
            $imgs3.style.setProperty("transform", "translate(0,0)");
        }
        if(window.scrollY > 3500) {
            $imgs4[imagen4].style.setProperty("transform", "translate(0,0)");
        }
    });
}