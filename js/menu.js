const hamburger = document.querySelector(".js");
const menu = document.querySelector(".menu-navegation");

hamburger.addEventListener("click", ()=>(
    menu.classList.toggle("spread")
))

window.onclick(e=>{
    if(menu.classList.contains("spread")&& e.target != menu && e.target != hamburger){
            menu.classList.toggle("spread")
        }
})
