const playerScoreDisplay = document.getElementsByClassName("playerScoreDisplay");
const computerScoreDisplay = document.getElementsByClassName("playerScoreDisplay");

let playerScore = 0;
let computerScore = 0;

const choices = ["rock", "paper", "scissors"];
const playerDisplay = document.getElementsByClassName("playerDisplay");
const computerDisplay = document.getElementsByClassName("computerDisplay");
const resultsDisplay = document.getElementsByClassName("resultsDisplay");

function playGame(playerChoice){
        const computerChoice = choices[Math.floor(Math.random() *3)];
        let result= "";
        if(playerScore === 5 || computerScore === 5){
            if(playerScore > computerScore){
                alert("We beat them back, this time. Hurry, prepare for the next assault, they don't give up so easily.")
            }
            else{
                alert("Retreat, retreat! Our last stronghold has fallen, regroup at the rendezvous!")
            }
            location.reload();
        }
        if (playerChoice === computerChoice){
            result = "We got em, we got em! We can hold em here until backup arrives.";
        }
        else{
            switch(playerChoice){
                case "rock":
                    result = (computerChoice === "scissors") ? "Congrats, you've held them back this time" : "They got through our defense, give it another try soldier!"
                    break;
                case "paper":
                    result = (computerChoice === "rock") ? "Congrats, you've held them back this time" : "They got through our defense, give it another try soldier!"
                    break;
                case "scissors":
                    result = (computerChoice === "paper") ? "Congrats, you've held them back this time" : "They got through our defense, give it another try soldier!"
                    break;
            }
        }
        playerDisplay.textContent = `PLAYER: ${playerChoice}`;
        computerDisplay.textContent = `Computer: ${computerChoice}`;
        resultsDisplay.textContent = result;

        switch(result){
            case "Congrats, you've held them back this time":
                playerScore++;
                document.querySelector(".playerScoreDisplay").innerHTML = playerScoreDisplay.textContent = playerScore;
                break;
            case "They got through our defense, give it another try soldier!":
                computerScore++;
                document.querySelector(".computerScoreDisplay").innerHTML = computerScoreDisplay.textContent = computerScore;
                break;
        }

        // Add this to get the text to display when then function completes
        document.querySelector(".resultsDisplay").innerHTML = resultsDisplay.textContent;
        document.querySelector(".playerDisplay").innerHTML = playerDisplay.textContent;
        document.querySelector(".computerDisplay").innerHTML = computerDisplay.textContent;
        // document.querySelector(".playerScoreDisplay").innerHTML = playerScoreDisplay.textContent;
        // document.querySelector(".computerScoreDisplay").innerHTML = computerScoreDisplay.textContent;
        // alert(playerScore);
        // alert(computerScore);
};

