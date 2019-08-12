let tie = "It's a tie!"
let win = "You won because the computer played "
let loss = "You lost because the computer played "
let scoreHuman = 0
let scoreComputer = 0
let rockbtn = document.querySelector("#rock")
let paperbtn = document.querySelector("#paper")
let scissorsbtn = document.querySelector("#scissors")
rockbtn.addEventListener("click", function() { playerSelection = "rock";
game()});
paperbtn.addEventListener("click", function() { playerSelection = "paper";
game()});
scissorsbtn.addEventListener("click", function() { playerSelection = "scissors";
game()});
/* Function for one round of the game */
function game() {
    /* choose computer choice */
    function computerPlay() {
        let rand = Math.floor(Math.random() * 3);
            if (rand == 0) {
                return "rock"
            }
            else if (rand == 1) {
                return "paper"
            }
            else if (rand == 2) {
                return "scissors"
            }
        }
        let computerResult = computerPlay();
        document.getElementById("choice").innerText = computerResult
        console.log(document.getElementById("choice").value)
        /* Tests to see who wins the round */
    if (playerSelection == "rock" && computerResult != "rock") {
        if (computerResult == "paper") {
            scoreComputer++
            document.getElementById("results").innerText = loss + computerResult + ". Your score: " + scoreHuman + ", Computer Score: " + scoreComputer
        }
        if (computerResult == "scissors") {
            scoreHuman++
            document.getElementById("results").innerText = win + computerResult + ". Your score: " + scoreHuman + ", Computer Score: " + scoreComputer
        }
    }
    else if (playerSelection == "paper" && computerResult != "paper") {
        if (computerResult == "rock") {
            scoreHuman++
            document.getElementById("results").innerText = win + computerResult + ". Your score: " + scoreHuman + ", Computer Score: " + scoreComputer
        }
        if (computerResult == "scissors") {
            scoreComputer++
            document.getElementById("results").innerText = loss + computerResult + ". Your score: " + scoreHuman + ", Computer Score: " + scoreComputer
        }
    }
    else if (playerSelection == "scissors" && computerResult != "scissors") {
        if (computerResult == "rock") {
            scoreComputer++
            document.getElementById("results").innerText = loss + computerResult + ". Your score: " + scoreHuman + ", Computer Score: " + scoreComputer
        }
        if (computerResult == "paper") {
            scoreHuman++
            document.getElementById("results").innerText = win + computerResult + ". Your score: " + scoreHuman + ", Computer Score: " + scoreComputer
        }
    }
    else {
        document.getElementById("results").innerText = tie + " Your score: " + scoreHuman + ", Computer score: " + scoreComputer
    }
    if (scoreHuman > scoreComputer) {
    var winner = ". You won!"
}
else if (scoreHuman < scoreComputer) {
    var winner = ". The computer won."
}
if (scoreComputer == 5 || scoreHuman == 5) {
alert(`The game is finished. Your score was ${scoreHuman} and the computer's score was ${scoreComputer} ${winner}.`)
location.reload()}
}
