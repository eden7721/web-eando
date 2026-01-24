const d = document;
export default function navLinkAnimation(idBtn, img, options = null){

    const $img = d.querySelector(img);

    const $p = d.querySelector(options);
    d.addEventListener("mouseover", e => {
        if(e.target.matches(idBtn)) {
            if($p) $p.style.setProperty("opacity", "0");
            $img.classList.remove("nav-js-animation-down");
            $img.classList.add("nav-js-animation-up");
            console.log($img);
        }
    });
    d.addEventListener("mouseout", e => {
        if(e.target.matches(idBtn)) {
            if($p) $p.style.setProperty("opacity", "1");
            $img.classList.remove("nav-js-animation-up");
            $img.classList.add("nav-js-animation-down");
            console.log($img);
        }
    });
}