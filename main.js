var films = ["Piratas del Caribe", "Lalaland", "La Bella y La Bestia", "Los guardianes de la galaxia", "Aliados", "Escuadrón Suicida", "Capitán América"];



selectedFilm = films[Math.floor(films.length * Math.random())];

var attemptsLeft = 5;


var answer = selectedFilm;

var myLength = films.length;



var win = myLength;



var letters = selectedFilm.toString();




var selectedButton = document.querySelectorAll(".selected");
var guessFilm = document.getElementById("guess_film");

for (var i = 0; i < selectedButton.length; i++) {
    for (var j; j<films.length-1; j++){
        if (films[j] == selectedButton[i]){
            guessFilm.innerText
        }
    }
    selectedButton[i].addEventListener("click", function () {
        
       
        

    });
}
