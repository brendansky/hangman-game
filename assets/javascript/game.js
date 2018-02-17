// array of all possible answers //

var possibleAnswer = ["ZERO", "ONE", "TWO", "THREE", "FOUR", "INCREDIBLE", "SIX", "SEVEN", "EIGHT", "NINE"];

// chooses a random number 0-9 //
var n = (Math.floor(Math.random() * 10));
alert(possibleAnswer[n]);

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
                    doomApproaches.classList.add("background"+ wrongTotal );
                    
                }
            }
        }

        // adjusts counter variable //
        wrongThisRound = 0;


        // checks for win or loss condtion //

        if (correctTotal === answer.length) {
            alert("you win!");

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
            alert("you lose!");

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
