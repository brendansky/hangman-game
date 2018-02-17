// IIFE //
(function(){


// array of all possible answers //
var possibleAnswer = ["MISSISSIPPI", "NULL", "AMAZON", "AIRPLANE", "DAVINCI", "HEISENBERG", "DHARMA", "VANBUREN", "PASSWORD", "SESAME", "RHYTHM", "CAT", "VENDETTA"];

// chooses a random number 0-9 //
var n = (Math.floor(Math.random() * 13));

// gets the possible answer with the index of the random number //
var answer = possibleAnswer[n];
console.log(answer);

// creates an element for each letter of the chosen answer //

for (var i = 0; i < answer.length; i++) {
    hiddenAnswer = document.createElement("answer");
    hiddenAnswer.classList.add("letter", "hidden");
    hiddenAnswer.setAttribute("id", "answer" + i)
    hiddenAnswer.innerHTML = answer[i];

    var createAnswer = document.getElementById("hidden-answer");
    createAnswer.appendChild(hiddenAnswer);
}

// creates a button for each letter // 

var letters = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z", ];

for (var i = 0; i < letters.length; i++) {

    var button = document.createElement("button");
    button.classList.add("btn", "btn-primary", );
    button.innerHTML = letters[i];



    var buttons = document.getElementById("buttons");
    buttons.appendChild(button);

};

// creates an on-click for each letter-button //

var userChoice = document.getElementsByClassName("btn");

var correctTotal = 0;
var wrongTotal = 0;
var correctThisRound = 0;
var wrongThisRound = 0;



for (var i = 0; i < userChoice.length; i++) {
    userChoice[i].addEventListener("click", function () {

        // hides the button //    
        this.classList.add("invisible");
        console.log(this.innerHTML);


        for (i = 0; i < answer.length; i++) {

            if (this.innerHTML === answer[i]) {
                correctThisRound++;
                correctTotal++;

                // reveals the guessed letter if correct //
                var reveal = document.getElementById("answer" + i);
                reveal.classList.remove("hidden");

            } else {
                wrongThisRound++;
                console.log(wrongThisRound);

                // if no matches were found //
                if (wrongThisRound === answer.length) {
                    wrongTotal++;
                    var doomApproaches = document.getElementById("background");
                    doomApproaches.classList.add("background" + wrongTotal);

                }
            }
        }

        // adjusts counter variable //
        wrongThisRound = 0;


        // checks for win or loss condtion //

        if (correctTotal === answer.length) {
            console.log( "you win");
            var victory = document.createElement("div");
            victory.classList.add("alert", "alert-success");
            victory.setAttribute("role", "alert");
            victory.innerHTML = "<h2>you win!<h2><a href='index.html'><h2>play again?<h2></a>";
            console.log( victory ); 
            var victoryAlert = document.getElementById("body");
            console.log( victoryAlert);

            victoryAlert.appendChild(victory);
        
            

            var gameOver = document.getElementsByClassName("btn");
            for (i = 0; i < gameOver.length; i++) {
                gameOver[i].classList.add("invisible");
            };

            var answerOver = document.getElementsByClassName("letter");
            for (i = 0; i < answerOver.length; i++) {
                answerOver[i].classList.remove("hidden");

            };
        }

        if (wrongTotal === 7) {
            
            console.log( "you lose");
            var defeat = document.createElement("div");
            defeat.classList.add("alert", "alert-primary");
            defeat.setAttribute("role", "alert");
            defeat.innerHTML = "<h2>you lose!<h2><a href='index.html'><h2>play again?<h2></a>";
            console.log( defeat ); 
            var defeatAlert = document.getElementById("body");
            console.log( defeatAlert);

            defeatAlert.appendChild(defeat);

            var gameOver = document.getElementsByClassName("btn");
            for (i = 0; i < gameOver.length; i++) {
                gameOver[i].classList.add("invisible");
            };

            var answerOver = document.getElementsByClassName("letter");
            for (i = 0; i < answerOver.length; i++) {
                answerOver[i].classList.remove("hidden");

            };

        }


    })

}

})();