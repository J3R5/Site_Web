const matrice = document.querySelector(".img-binaire");
const background = document.querySelector("body");
console.log(background)
matrice.addEventListener("click", ()=>{
    background.classList.toggle("matrice");
})