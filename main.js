function computerPlay() {
    let play = Math.floor(Math.random() * (3) + 1);

    if (play === 1) {
        return 'Rock';
    } else if (play === 2) {
        return 'Paper';
    } else {
        return 'Scissors';
    }
}

function userPlay() {
    let play = window.prompt("Please select Rock, Paper, or Scissors!");
    return play;
}

function gameRound() {
    let computerPlayResult = computerPlay().toLowerCase();
    let userPlayResult = userPlay().toLowerCase();

    if (computerPlayResult === userPlayResult) {
        return "It's a tie! You both chose the same move!";
    }

    if (userPlayResult === 'rock') {
        if (computerPlayResult === 'scissors') {
            return 'You win! Rock beats scissors.';
        }
        return 'You lose! Paper beats rock.';
    } else if (userPlayResult === 'paper') {
        if (computerPlayResult === 'rock') {

            return 'You win! Paper beats rock.';
        }

        return 'You lose! Scissors beat paper.';
    } else {
        if (computerPlayResult === 'paper') {

            return 'You win! Scissors beat paper.';
        }

        return 'You lose! Rock beats scissors.'
    }
}

function game() {
    let userScore = 0;
    let computerScore = 0;

    let result = '';

    while (userScore < 5 & computerScore < 5) {
        result = gameRound();
        if (result.split('!')[0] === 'You win') {
            userScore++;
        } else if (result.split('!')[0] === 'You lose') {
            computerScore++;
        }
        window.alert(result);
        window.alert(`User Score: ${userScore} \nComputer Score: ${computerScore}`);
    }

}

game();