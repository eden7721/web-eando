const d = document;

export default function imgRandomizer(img, cantidad){
    let random = Math.ceil(Math.random()*cantidad);
    d.getElementById(img).setAttribute("src", `../assets/img/momos/momo${random}.png`);
    console.log(d.getElementById(img).getAttribute("src"));
}