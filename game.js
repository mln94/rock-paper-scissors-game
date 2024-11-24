let playerScore = 0;
let computerScore = 0;
const playerScoreSpanElement = document.getElementById("player-score")
const computerScoreSpanElement = document.getElementById("computer-score")
const roundResultsMsg = document.getElementById("results-msg")
const winnerMsgElement = document.getElementById("winner-msg")
const optionContainer = document.getElementsByClassName("options-container")
const resetGameBtn = document.getElementById("reset-game-btn")
const rockBtn = document.getElementById("rock-btn")
const scissorsBtn = document.getElementById("scissors-btn")
const paperBtn = document.getElementById("paper-btn")

function randomComputerResult() {
    const computerChoice = ["rock","paper","scissors"]
    const randomIndex = Math.floor(Math.random() * 3)
    const optionComputer = computerChoice[randomIndex]
    return optionComputer
}

function hasPlayerWon(player,computer){
    return (
        (player === "rock" && computer ==="Scissors") || 
        (player === "scissors" && computer === "Paper") ||
        (player === "paper" && computer === "rock")
    )
}

function getResults(userOption) {
    const computerResult = randomComputerResult()
    if(hasPlayerWon(userOption, computerResult)){
        playerScore++
        return `Player wins ${userOption} beats ${computerResult}`
    } else if (computerResult === userOption){
        return `It is a tie both chose ${userOption}`
    } else {
        computerScore++
        return `Computer wins ${computerResult} beats ${userOption}`
    }
}

function showResult(userOption) {
    roundResultsMsg.innerText = getResults(userOption)
    console.log(roundResultsMsg)
    playerScoreSpanElement.innerText = playerScore
    computerScoreSpanElement.innerText = computerScore
    if(playerScore === 3 || computerScore === 3){
        winnerMsgElement.innerText = `${playerScore === 3 ? "Player":"Computer"} has won the game!`
        resetGameBtn.style.display = "block"
        optionContainer[0].style.display = "none"
    }

}
function resetGame(){
    winnerMsgElement.innerText=""
    roundResultsMsg.innerText=""
    optionContainer[0].style.display = "block"
    resetGameBtn.style.display = "none"
    playerScore = 0;
    computerScore = 0;
    playerScoreSpanElement.innerText = playerScore
    computerScoreSpanElement.innerText = computerScore
}

resetGameBtn.addEventListener("click", resetGame)

rockBtn.addEventListener("click", function() {
    showResult("Rock")
})

paperBtn.addEventListener("click", function() {
    showResult("paper")
})

scissorsBtn.addEventListener("click", function() {
    showResult("scissors")
})
