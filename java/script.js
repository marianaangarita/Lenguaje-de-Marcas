let enlaceActive = document.querySelector(".navbar .active");

enlaceActive.style.textDecoration = "none";

enlaceActive.style.borderBottom = "0";

let enlaces = document.querySelectorAll(".navbar a");

for (var i=0; i < enlaces.length; i++) {
    enlaces[i].addEventListener("click", function() {
       for (var j=0; j < enlaces.length; j++){
        enlaces[j].style.textDecoration = "none";
       }
        this.style.textDecoration = "underline";   
    });
};

