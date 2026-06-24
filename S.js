// Smooth Scrolling Navigation

document.querySelectorAll('a[href^="#"]').forEach(link => {

    link.addEventListener('click', function(e) {

        e.preventDefault();

        document.querySelector(this.getAttribute('href'))
            .scrollIntoView({
                behavior: 'smooth'
            });

    });

});


// Welcome Message

window.onload = function() {

    alert("Welcome to Chennai Super Kings Fan Website! Whistle Podu!");

};


// Fan Poll

const form = document.querySelector("form");

if(form){

    form.addEventListener("submit", function(e){

        e.preventDefault();

        alert("Thank you for voting! 💛");

    });

}


// Button Click Effect

const button = document.querySelector(".btn");

if(button){

    button.addEventListener("click", function(){

        alert("CSK - The Pride of Chennai! 🏏");

    });

}