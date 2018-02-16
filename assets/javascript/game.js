alert("hello world!");

var possibleAnswer = ["zero", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine"];

var n = (Math.floor(Math.random() * 10));
alert(possibleAnswer[n]);


var answer = possibleAnswer[n];
console.log(answer);

for (var i = 0; i < answer.length; i++) {
    hiddenAnswer = document.createElement("answer");
    hiddenAnswer.classList.add("letter");
    hiddenAnswer.innerHTML = answer[i];

    var createAnswer = document.getElementById("hidden-answer");
    createAnswer.appendChild(hiddenAnswer);

}

var letters = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z",];

for (var i = 0; i < letters.length; i++) {

    var button = document.createElement("button");
    button.classList.add("btn", "btn-primary");
    button.innerHTML = letters[i];

    var buttons = document.getElementById("buttons");
    buttons.appendChild(button);

};

var userChoice = document.getElementsByClassName( "btn" );
console.log (userChoice)

for (var i = 0; i < userChoice.length; i++){
    userChoice[i].addEventListener("click", function(){
        console.log("hello world")
    })

}
























