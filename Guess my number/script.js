'use strict';

const diceImg = document.getElementById('diceImage');
let scorePlayer1 = Number(document.querySelector('.score1').textContent);
let scorePlayer2 = Number(document.querySelector('.score2').textContent);
let totalScore1 = Number(document.querySelector('.totalScore1').textContent);
let totalScore2 = Number(document.querySelector('.totalScore2').textContent);
const activePlayerStatus1 = document.querySelector('.left').classList;
const activePlayerStatus2 = document.querySelector('.right').classList;
let activePlayer = 0;

function rollDice() {
    let diceNumber = Math.trunc(Math.random() * 6) + 1;
    //This code changes the sources of the dice image
    switch (diceNumber) {
        case 1:
            diceImg.src = `imagery/dice_${diceNumber}.svg`;
            break;
        case 2:
            diceImg.src = `imagery/dice_${diceNumber}.svg`;
            break;
        case 3:
            diceImg.src = `imagery/dice_${diceNumber}.svg`;
            break;
        case 4:
            diceImg.src = `imagery/dice_${diceNumber}.svg`;
            break;
        case 5:
            diceImg.src = `imagery/dice_${diceNumber}.svg`;
            break;
        case 6:
            diceImg.src = `imagery/dice_${diceNumber}.svg`;
            break;
    }
    //The below conditions check which of the players is active
    if (activePlayerStatus1[1] === 'active') {
        if (diceNumber !== 1) {
            scorePlayer1 += diceNumber;
            document.querySelector('.score1').textContent = scorePlayer1;
        } else if (diceNumber === 1) {
            scorePlayer1 = 0;
            document.querySelector('.score1').textContent = scorePlayer1;
            activePlayerStatus1.remove('active');
            activePlayerStatus2.add('active');
        }
    } else if (activePlayerStatus2[1] === 'active') {
        if (diceNumber !== 1) {
            scorePlayer2 += diceNumber;
            document.querySelector('.score2').textContent = scorePlayer2;
        } else if (diceNumber === 1) {
            scorePlayer2 = 0;
            document.querySelector('.score2').textContent = scorePlayer2;
            activePlayerStatus2.remove('active');
            activePlayerStatus1.add('active');
        }
    }
}

function holdBtn() {
    if (activePlayerStatus1[1] == 'active') {
        totalScore1 += scorePlayer1;
        document.querySelector('.totalScore1').textContent = totalScore1;
        scorePlayer1 = 0;
        document.querySelector('.score1').textContent = scorePlayer1;
        if (totalScore1 < 10) {
            activePlayerStatus1.remove('active');
            activePlayerStatus2.add('active');
        } else if (totalScore1 >= 10) {
            document.querySelector('.btn2').style.visibility = 'hidden';
            document.querySelector('.btn3').style.visibility = 'hidden';
            document.querySelector('.win1').style.visibility = 'visible';
        }
    } else if (activePlayerStatus2[1] == 'active') {
        totalScore2 += scorePlayer2;
        document.querySelector('.totalScore2').textContent = totalScore2;
        scorePlayer2 = 0;
        document.querySelector('.score2').textContent = scorePlayer2;
        if (totalScore2 < 10) {
            activePlayerStatus2.remove('active');
            activePlayerStatus1.add('active');
        } else if (totalScore2 >= 10) {
            document.querySelector('.btn2').style.visibility = 'hidden';
            document.querySelector('.btn3').style.visibility = 'hidden';
            document.querySelector('.win2').style.visibility = 'visible';
        }
    }
}

function newGame() {
    document.getElementById('diceImage').src = 'imagery/dice_null.svg';
    totalScore1 = 0;
    totalScore2 = 0;
    scorePlayer1 = 0;
    scorePlayer2 = 0;
    document.querySelector('.score1').textContent = '0';
    document.querySelector('.score2').textContent = '0';
    document.querySelector('.totalScore1').textContent = '0';
    document.querySelector('.totalScore2').textContent = '0';
    activePlayerStatus1.add('active');
    activePlayerStatus2.remove('active');
    document.querySelector('.btn2').style.visibility = 'visible';
    document.querySelector('.btn3').style.visibility = 'visible';
    document.querySelector('.win1').style.visibility = 'hidden';
    document.querySelector('.win2').style.visibility = 'hidden';
    console.log(totalScore1, totalScore2);
}

document.querySelector('.btn1').addEventListener('click', newGame);
document.querySelector('.btn2').addEventListener('click', rollDice);
document.querySelector('.btn3').addEventListener('click', holdBtn);

/* console.log('Hello');

function cut(fruit) {
    return (fruit = 4);
}

function fruiteProcessor(apples, oranges) {
    const applePieces = cut(apples);
    const orangePieces = cut(oranges);

    const juice = `Juice with ${apples} apples and ${oranges} oranges.`;
    return juice;
}

console.log(fruiteProcessor(5, 5));

function calcAvg(score1, score2, score3) {
    return (score1 + score2 + score3) / 3;
}

const scoreDolphins = calcAvg(44, 23, 71);
const scoreKoalas = calcAvg(65, 54, 49);

function checkWinner(avgDolphins, avgKoalas) {
    return avgDolphins > avgKoalas
        ? `Dolphins win (${avgDolphins} vs ${avgKoalas})`
        : `Koalas win (${avgKoalas} vs ${avgDolphins})`;
}

console.log(checkWinner(scoreDolphins, scoreKoalas)); */

/*Arrays*/

const calcAge = function (birthyear) {
    return 2024 - birthyear;
};

const years = [1991, 1992, 1993, 1994];
const age = new Array();

for (let i = 0; i < years.length; i++) {
    age.push(calcAge(years[i]));
}

console.log(age);
