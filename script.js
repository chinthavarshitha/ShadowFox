// Typing Effect

const typing = document.querySelector(".typing");

const words = [
    "Full Stack Developer",
    "Web Developer",
    "Programmer",
    "AI Enthusiast"
];

let wordIndex = 0;
let charIndex = 0;
let isDeleting = false;

function typeEffect(){

    const currentWord = words[wordIndex];

    if(!isDeleting){

        typing.textContent = currentWord.substring(0,charIndex++);

        if(charIndex > currentWord.length){

            isDeleting = true;

            setTimeout(typeEffect,1000);

            return;
        }

    }else{

        typing.textContent = currentWord.substring(0,charIndex--);

        if(charIndex < 0){

            isDeleting = false;

            wordIndex++;

            if(wordIndex >= words.length){

                wordIndex = 0;
            }

        }

    }

    setTimeout(typeEffect,isDeleting ? 60 : 120);

}

typeEffect();


// Dark Mode

const theme=document.querySelector(".theme");

theme.onclick=()=>{

document.body.classList.toggle("light");

if(document.body.classList.contains("light")){

theme.innerHTML='<i class="fa-solid fa-sun"></i>';

}else{

theme.innerHTML='<i class="fa-solid fa-moon"></i>';

}

}


// Scroll Animation

const cards=document.querySelectorAll(".skill,.project-card,.certificate");

window.addEventListener("scroll",()=>{

cards.forEach(card=>{

const top=card.getBoundingClientRect().top;

if(top<window.innerHeight-100){

card.style.opacity="1";

card.style.transform="translateY(0)";

}

});

});

cards.forEach(card=>{

card.style.opacity="0";

card.style.transform="translateY(60px)";

card.style.transition=".8s";

});