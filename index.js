function computerPlay() {
    const randomNumber = Math.floor(Math.random() *3);

    switch(randomNumber){
        case 0:
            return "Rock"
        break

        case 1:
            return "Paper"
        break

        case 2:
            return "Scissors"
        break
    }
      
}

function playRound(playerSelection, computerSelection){
    playerSelection = sanitizeInput(playerSelection);

    if (playerSelection === computerSelection) {
        outcome = "You tie. Try again";
    }

    else if (playerSelection === "Rock") {
        if (computerSelection === "Paper"){
            outcome = "You lose! Paper beats Rock";
        }
        else {
            outcome = "You win! Rock beats Scissors";
        }
    }

    else if (playerSelection === "Paper") {
        if (computerSelection === "Scissors"){
            outcome = "You lose! Scissors beats Paper";
        }
        else {
            outcome = "You win! Paper beats Rock";
        }
    }
    
    else if (playerSelection === "Scissors") {
        if (computerSelection === "Rock"){
            outcome = "You lose! Rock beats Scissors";
        }
        else {
            outcome = "You win! Scissors beats Paper";
        }
    }

    else {
        outcome = "Invalid input! Enter either rock, paper, or scissors.";
    }
    return outcome
}

function playRound2(playerSelection, computerSelection){
    playerSelection = sanitizeInput(playerSelection);

    if (playerSelection === computerSelection) 
    {
        outcome = "You tie. Try again";
    }

    else if (playerSelection === "Rock" && computerSelection === "Scissors" ||
             playerSelection === "Paper" && computerSelection === "Rock" ||
             playerSelection === "Scissors" && computerSelection === "Paper" )
    {
    outcome = `You win! ${playerSelection} beats ${computerSelection}`;
    }

    else if (playerSelection === "Rock" && computerSelection === "Paper" ||
            playerSelection === "Paper" && computerSelection === "Scissors" ||
            playerSelection === "Scissors" && computerSelection === "Rock" )
    {
    outcome = `You lose! ${computerSelection} beats ${playerSelection}`;
    }

    else 
    {
        outcome = "Invalid input! Enter either rock, paper, or scissors.";
    }

    return outcome
}




function sanitizeInput(word){
    return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()
    
}

function game(rounds){
    console.log("Welcome to a new game.");
    playerOneWins = 0;
    playerTwoWins = 0;
    for (i = 1; i < rounds + 1 ; i++) {
        console.log(`Round ${i}`);
        let playerChoice = prompt("What's your choice?");
        let result = playRound2(playerChoice,computerPlay());
        console.log(result);
  
        if (result.includes("win")){
            playerOneWins ++;
        }

        if (result.includes("lose")){
            playerTwoWins ++;
        }
    }
    console.log(`Player: ${playerOneWins}`);
    console.log(`Computer: ${playerTwoWins}`);
}

/* 

create Function computerPlay
    Create random number from 1-3
    Initialize choice
    If 1 choose rock
    if 2 choose paper
    if 3 choose scissors
    Return choice

create Function playRound
    Takes parameters playerSelection and computerSelection
    Compare two selections
        if equal then repeat
        if 
*/