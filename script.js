let humanScore = 0;
let computerScore = 0;

function getComputerChoice(max){
    if (Math.floor(Math.random() * max) == 0)
    {
        return "Rock"
    }
        if (Math.floor(Math.random() * max) == 1)
        {
            return "Paper"
        }
        else (Math.floor(Math.random() * max) == 2)
    {
        return"Scissors"
    }
}

function getHumanChoice(){
   let humanChoice = prompt("Selcect rock, paper, or scissors")

    if (humanChoice == "rock")
        {
            return "Rock"
        }
        if (humanChoice == "paper")
            {
                return "Paper"
            }   
        else (humanChoice == "scissors")
        {
            return "Scissors"
        }
}

function playRound(humanChoice, computerChoice){

}

console.log(getComputerChoice(3))
console.log(getHumanChoice())