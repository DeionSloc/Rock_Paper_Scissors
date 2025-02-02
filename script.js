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
        else if(humanChoice == "scissors")
        {
            return "Scissors"
        }
}

function playRound(humanChoice, computerChoice){
    if (humanSelection == "Rock" && computerSelection == "Scissors")
            {
                humanScore ++;
                return "Rock beats scissors, you win"
            }
            else if (humanSelection == "Paper" && computerSelection == "Rock") {
                    humanScore ++;
                    return "Paper beats rock, you win."
                }
                else if (humanSelection == "Scissors" && computerSelection == "Paper")
                {
                    humanScore ++;
                    return "Scissors beats paper, you win."    
                }
                    else if (humanSelection == "Scissors" && computerSelection == "Rock")
                        {
                            computerScore ++;
                            return "Rock beats scissors, you lose."
                        }
                        else if (humanSelection == "Paper" && computerSelection == "Scissors")
                            {
                                computerScore ++;
                                return "Scissors beats paper, you lose."
                            }
                            else if (humanSelection == "Rock" && computerSelection == "Paper")
                                {
                                    computerScore ++;
                                    return "Paper beats rock, you lose."
                                }
                                else {
                                    return "It's a draw"
                                }
}
const humanSelection = getHumanChoice();
const computerSelection = getComputerChoice();

// console.log(getComputerChoice(3))
// console.log(getHumanChoice())
console.log(playRound(humanSelection, computerSelection));
console.log("Your score is " + humanScore)
console.log("The computer's score is " + computerScore)

