/* //Guess the number game

//Adding the event listener from JS. This is done by invoking a function
const inputFieldArray = [];
let secretNumber = Math.trunc(Math.random() * 20) + 1;

function checkInput() {
    let x = Number(document.querySelector('.guess').value);
    const minNumber = Number(document.querySelector('.guess').min);
    const maxNumber = Number(document.querySelector('.guess').max);
    let scoreValue = Number(document.querySelector('.score').textContent);
    let highScoreValue = Number(
        document.querySelector('.highscore').textContent
    );

    if (!x || x < minNumber || x > maxNumber) {
        displayMessage('⛔ Type in a number between 1 and 20!');
    } else if (x !== secretNumber) {
        displayMessage(x < secretNumber ? '↕ Too low!' : '↕ Too high!');
        scoreValue--;
        document.querySelector('.score').textContent = scoreValue;
        checkScoreValue();
    } else if (x === secretNumber) {
        displayMessage('🎉 Correct number');
        document.querySelector('.number').textContent = secretNumber;
        scoreValue = scoreValue + secretNumber;
        document.querySelector('.score').textContent = scoreValue;
        document.querySelector('body').style.backgroundColor =
            'rgb(25, 190, 108)';
        if (highScoreValue <= scoreValue) {
            highScoreValue = scoreValue;
            document.querySelector('.highscore').textContent = highScoreValue;
        }
        styleVisibility();
    }
}

//Function reveals the message on the screen
function displayMessage(message) {
    document.querySelector('.message').textContent = message;
}

//Function checks if the game is lost
function checkScoreValue() {
    if (Number(document.querySelector('.score').textContent) <= 0) {
        displayMessage('You loose. Try again!');
        styleVisibility();
    }
}

//Function which is triggered by the Again button. The function resets the states and values of the objects to their original values.
function resetGame() {
    disabledButton.disabled = false;
    document.querySelector('.score').textContent = '20';
    displayMessage('Start guessing...');
    document.querySelector('.number').textContent = '?';
    document.querySelector('.guess').value = '';
    styleVisibility();
    document.querySelector('body').style.backgroundColor = 'rgb(25, 36, 30)';
}

//Function will set the visibility for Check and Again buttons
function styleVisibility() {
    document.querySelector('.check').style.visibility = 'hidden';
    document.querySelector('.again').style.visibility = 'visible';
}

document.querySelector('.check').addEventListener('click', checkInput);
document.querySelector('.again').addEventListener('click', resetGame);
 */

const minNumber = Number(document.querySelector('.guess').min);
const maxNumber = Number(document.querySelector('.guess').max);
let secretNumber = Math.floor(
    Math.random() * (maxNumber - minNumber + 1) + minNumber
);

function checkInput() {
    let inputNumber = Number(document.querySelector('.guess').value);
    let score = Number(document.querySelector('.score').textContent);
    let highscore = Number(document.querySelector('.highscore').textContent);

    if (!inputNumber || inputNumber < minNumber || inputNumber > maxNumber) {
        document.querySelector('.message').textContent =
            '⛔ Type in a number between 1 and 20!';
    }
    if (inputNumber >= minNumber && inputNumber <= maxNumber) {
        if (inputNumber !== secretNumber) {
            displayMessage(
                inputNumber < secretNumber ? '↕ Too low!' : '↕ Too high!'
            );
            score--;
            document.querySelector('.score').textContent = score;
            checkScore();
        }
    }
    if (inputNumber === secretNumber) {
        highscore += score;
        document.querySelector('.message').textContent = '🎉 Correct number';
        document.querySelector('.highscore').textContent = highscore;
        document.querySelector('.score').textContent = 0;
        document.querySelector('.check').style.visibility = 'hidden';
        document.querySelector('.number').textContent = secretNumber;
        document.getElementsByTagName('body')[0].style.backgroundColor =
            'rgb(25, 190, 108)';
    }
}

function resetProgress() {
    document.querySelector('.score').textContent = '20';
    document.querySelector('.check').style.visibility = 'visible';
    document.querySelector('.message').textContent = 'Start guessing...';
    document.querySelector('.guess').value = '';
    document.querySelector('.number').textContent = '?';
    document.getElementsByTagName('body')[0].style.backgroundColor =
        'rgb(25, 36, 30)';
}

function checkScore() {
    if (Number(document.querySelector('.score').textContent) === 0) {
        document.querySelector('.highscore').textContent = '0';
        document.querySelector('.check').style.visibility = 'hidden';
        document.querySelector('.message').textContent =
            '😲 You loose. Try again!';
        document.getElementsByTagName('body')[0].style.backgroundColor =
            'rgb(214, 17, 30)';
    }
}

function displayMessage(message) {
    document.querySelector('.message').textContent = message;
}

document.querySelector('.check').addEventListener('click', checkInput);
document.querySelector('.again').addEventListener('click', resetProgress);
