
let tie = "It's a tie!"
let win = "You won because the computer played "
let loss = "You lost because the computer played "
let scoreHuman = 0
let scoreComputer = 0
/* Function for one round of the game */
function game() {
    /* Player Choice */
    let playerSelection = prompt("Rock, paper or scissors").toLowerCase()
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
        let computerResult = computerPlay()
        /* Tests to see who wins the round */
    if (playerSelection == "rock" && computerResult != "rock") {
        if (computerResult == "paper") {
            scoreComputer++
            alert(loss + computerResult + ". Your score: " + scoreHuman + ", Computer Score: " + scoreComputer)
        }
        if (computerResult == "scissors") {
            scoreHuman++
            alert(win + computerResult + ". Your score: " + scoreHuman + ", Computer Score: " + scoreComputer)
        }
    }
    else if (playerSelection == "paper" && computerResult != "paper") {
        if (computerResult == "rock") {
            scoreHuman++
            alert(win + computerResult + ". Your score: " + scoreHuman + ", Computer Score: " + scoreComputer)
        }
        if (computerResult == "scissors") {
            scoreComputer++
            alert(loss + computerResult + ". Your score: " + scoreHuman + ", Computer Score: " + scoreComputer)
        }
    }
    else if (playerSelection == "scissors" && computerResult != "scissors") {
        if (computerResult == "rock") {
            scoreComputer++
            alert(loss + computerResult + ". Your score: " + scoreHuman + ", Computer Score: " + scoreComputer)
        }
        if (computerResult == "paper") {
            scoreHuman++
            alert(win + computerResult + ". Your score: " + scoreHuman + ", Computer Score: " + scoreComputer)
        }
    }
    else {
        alert(tie + " Your score: " + scoreHuman + ", Computer score: " + scoreComputer)
    }
}
/* Loop for 5 rounds */
for (i = 0; i < 5; i++) {
game()
}
if (scoreHuman > scoreComputer) {
    var winner = ". You won!"
}
else if (scoreHuman < scoreComputer) {
    var winner = ". The computer won."
}
else {
    var winner = ". The game was a tie."
}
alert(`The game is finished. Your score was ${scoreHuman} and the computer's score was ${scoreComputer} ${winner}. Refresh to play again.`)