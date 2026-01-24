import { abrirConsejo } from "./funciones/consejo_btn.js";
import imgRandomizer from "./funciones/momo-randomizer.js";
import navLinkAnimation from "./funciones/nav_link.js";

const d = document,
    w = window,
    n = navigator;

d.addEventListener("DOMContentLoaded", e=> {
    if(d.querySelector("title").textContent === "Apuntes Javascript")imgRandomizer("img-meme", 4);
    abrirConsejo("#btn-advice-open", "#btn-advice-close", ".advice");
    navLinkAnimation("#nav-link-js", ".nav-js img", ".nav-js p");
    navLinkAnimation("#nav-link-css", ".nav-css img", ".nav-css p");
    navLinkAnimation("#nav-link-html", ".nav-html img", ".nav-html p");
    navLinkAnimation("#nav-link-csharp", ".nav-csharp img", ".nav-csharp p");
});