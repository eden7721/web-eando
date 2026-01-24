const d = document;

export function abrirConsejo(btnOpen, btnClose, advice){
    d.addEventListener("click", e => {
        if(e.target.matches(btnOpen)){
            d.querySelector(advice).classList.remove("close");
            d.querySelector(advice).classList.add("open");
        };
        if(e.target.matches(btnClose)){
            d.querySelector(advice).classList.remove("open");
            d.querySelector(advice).classList.add("close");
        };
    });  
}