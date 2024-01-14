const red = document.querySelector(".red");
const yellow = document.querySelector(".yellow");
const green = document.querySelector(".green");

const nav = document.querySelector(".nav-BP");

const Bord1 = document.querySelector(".Bord_1")
const Bord2 = document.querySelector(".Bord_2")

const JC = document.querySelector("#JC");
const Card = document.querySelector(".card__content");

const HTMLSecret =`<a href="">Secret ?</a>`

const HTMLNormal = `                <a href="html/projet.html">Projet</a>
<a href="">A propos</a>
<a href="html/logiciel&code.html">Logiciel & Code</a>
<a href="html/cursus.html">Cursus</a>
<a href="html/contact.html">Contact</a>`

const HTMLCard =`            <div class="LP">
<img src="./img/logo_vec.png" class="Logo">
<p>
  Un jeune développeur passionné par l'informatique, l'électronique et les microcontrôleurs.
</p>
</div>

<div class="dev">
<p>
Projet : 
</p>
<img src="./img/problem.png" alt="Problème">
<img src="./img/imgcard/right-arrow.png" alt="flèche">
<img src="./img/idea.png" alt="idée">
<img src="./img/app-development.png" alt="flèche">
<img src="./img/imgcard/right-arrow.png" alt="flèche">
<img src="./img/check.png" alt="solution">
</div>`

const HTMLCat = `<img src="" alt="Chat" id="Cat" width=500 height=325>`

let compteur = 0;
let compterLogo = 0;

function secretPage(event){

    if(event.target === red && compteur === 0){
        compteur++
    }
    else if(event.target === green && compteur === 1){
        compteur++
    }
    else if(event.target === yellow && compteur === 2 ){
        console.log("Bravo")
        navToggle();
        compteur =0;
    }
    else{
        compteur =0;
    }

}

function navToggle(){
    
    if(nav.children.length === 5){
        nav.innerHTML = HTMLSecret;
    }
    else{
        nav.innerHTML = HTMLNormal;
    }
}

function secretLogo(event){

    if(event.target == Bord1 && compterLogo ===0)
    {
        compterLogo++
    }
    else if(event.target == Bord2 && compterLogo ===1){
        ToggleLogo();
        compterLogo = 0;
    }
    else{
        compterLogo = 0;
    }
}

function ToggleLogo(){
    const logo = document.querySelector(".Logo")
    
    if(logo.getAttribute("src") == "./img/ElectroLogo.png"){
        logo.src = "./img/logo_vec.png";
    }
    else{
        logo.src = "./img/ElectroLogo.png";
    }

}

function toggleCard(event){
    event.target.innerText = event.target.innerText === "Un Chat Aléatoire" ? "Jérémy Clémente" : "Un Chat Aléatoire";
    Card.innerHTML = event.target.innerText === "Un Chat Aléatoire" ? HTMLCat : HTMLCard;
    if(event.target.innerText === "Un Chat Aléatoire"){
        const chat = document.querySelector("#Cat")
        fetch("https://api.thecatapi.com/v1/images/search")
        .then(res =>{
            if(res.ok){
                res.json().then(data=>{
                    chat.src = data[0].url
                })
            }else{
                console.log("Erreur")
            }
        })
        .catch(error=>{
            console.log(error)
        })
    }
}

red.addEventListener("click", secretPage)
yellow.addEventListener("click", secretPage)
green.addEventListener("click", secretPage)

Bord1.addEventListener("click", secretLogo)
Bord2.addEventListener("click", secretLogo)

JC.addEventListener("copy",toggleCard)

document.querySelector("body").addEventListener("keydown",(event)=>{
    if ((event.ctrlKey || event.key === 'Control') && event.key === 'q') {
    event.currentTarget.classList.toggle("background-acceuil");
    }
})