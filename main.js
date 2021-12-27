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

function gameRound(play) {
    let computerPlayResult = computerPlay().toLowerCase();
    let userPlayResult = play;

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
    let userScoreRow = document.getElementById("user-score");

    let computerScore = 0;
    let computerScoreRow = document.getElementById("computer-score");

    let result = '';

    let rockButton = document.querySelector("#rock");
    let paperButton = document.querySelector("#paper");
    let scissorsButton = document.querySelector("#scissors");

    rockButton.addEventListener('click', () => {
        result = gameRound('rock');

        window.alert(result);

        if (result.split('!')[0] === 'You win') {
            userScore++;
            userScoreRow.innerHTML = userScore;
        } else if (result.split('!')[0] === 'You lose') {
            computerScore++;
            computerScoreRow.innerHTML = computerScore;
        }

        if (userScore > 4 || computerScore > 4) {
            window.alert("Game over!");

            computerScore = 0;
            computerScoreRow.innerHTML = 0;

            userScore = 0;
            userScoreRow.innerHTML = 0;
        }
    });

    paperButton.addEventListener('click', () => {
        result = gameRound('paper');

        window.alert(result);

        if (result.split('!')[0] === 'You win') {
            userScore++;
            userScoreRow.innerHTML = userScore;
        } else if (result.split('!')[0] === 'You lose') {
            computerScore++;
            computerScoreRow.innerHTML = computerScore;
        }

        if (userScore > 4 || computerScore > 4) {
            window.alert("Game over!");
            computerScoreRow.innerHTML = 0;
            userScoreRow.innerHTML = 0;
        }
    });

    scissorsButton.addEventListener('click', () => {
        result = gameRound('scissors');

        window.alert(result);

        if (result.split('!')[0] === 'You win') {
            userScore++;
            userScoreRow.innerHTML = userScore;
        } else if (result.split('!')[0] === 'You lose') {
            computerScore++;
            computerScoreRow.innerHTML = computerScore;
        }

        if (userScore > 4 || computerScore > 4) {
            window.alert("Game over!");
            computerScoreRow.innerHTML = 0;
            userScoreRow.innerHTML = 0;
        }
    });
}

game();