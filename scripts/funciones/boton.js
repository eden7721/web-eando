const d = document;
const $imgs = document.querySelectorAll(".section-garou img");
const $imgs2 = document.querySelectorAll(".section-saitama img");
const $imgs3 = document.querySelector(".section-punpun img");
let imagen = 0;
let imagen2 = 0;
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
        if(e.target.matches(".section-garou .btn-web")){
            if($imgs[imagen].getAttribute("style")){
                $imgs[imagen].setAttribute("style", null);
            }
            imagen = 0;
            $imgs[imagen].style.setProperty("transform", "translate(0,0)");
        }
        if(e.target.matches(".section-garou .btn-manga")){
            if($imgs[imagen].getAttribute("style")){
                $imgs[imagen].setAttribute("style", null);
            }
            imagen = 1;
            $imgs[imagen].style.setProperty("transform", "translate(0,0)");
        }
        if(e.target.matches(".section-garou .btn-anime")){
            if($imgs[imagen].getAttribute("style")){
                $imgs[imagen].setAttribute("style", null);
            }
            imagen = 2;
            $imgs[imagen].style.setProperty("transform", "translate(0,0)");
        }


        if(e.target.matches(".section-saitama .btn-web")){
            if($imgs2[imagen2].getAttribute("style")){
                $imgs2[imagen2].setAttribute("style", null);
            }
            imagen2 = 0;
            $imgs2[imagen2].style.setProperty("transform", "translate(0,0)");
        }
        if(e.target.matches(".section-saitama .btn-manga")){
            if($imgs2[imagen2].getAttribute("style")){
                $imgs2[imagen2].setAttribute("style", null);
            }
            imagen2 = 1;
            $imgs2[imagen2].style.setProperty("transform", "translate(0,0)");
        }
        if(e.target.matches(".section-saitama .btn-anime")){
            if($imgs2[imagen2].getAttribute("style")){
                $imgs2[imagen2].setAttribute("style", null);
            }
            imagen2 = 2;
            $imgs2[imagen2].style.setProperty("transform", "translate(0,0)");
        }


        if(e.target.matches(".section-punpun .btn-manga")){
            if($imgs3.getAttribute("style")){
                $imgs3.setAttribute("style", null);
            }
            $imgs3.style.setProperty("transform", "translate(0,0)");
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
    });
}