const d = document;
export default function navLinkAnimation(classBtn, optionP = false) {
    d.addEventListener("mouseover", e => {
        if (e.target.classList.contains(classBtn)) {
            if(optionP) e.target.previousElementSibling.style.setProperty("opacity", "0");
            e.target.nextElementSibling.classList.remove("nav-js-animation-down");
            e.target.nextElementSibling.classList.add("nav-js-animation-up");
        }
    });
    d.addEventListener("mouseout", e => {
        if (e.target.classList.contains(classBtn)) {
            if(optionP) e.target.previousElementSibling.style.setProperty("opacity", "1");
            e.target.nextElementSibling.classList.remove("nav-js-animation-up");
            e.target.nextElementSibling.classList.add("nav-js-animation-down");
        }
    });
}