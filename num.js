let randomNumber = parseInt(Math.random() * 100 + 1);

// Selecting components

const userInput = document.querySelector('#guessField');
const submit = document.querySelector('#subt');
const prevSlot = document.querySelector('.guesses');
const remGuess = document.querySelector('.lastResult');
const lowOrHigh = document.querySelector('.lowOrHi');
const starOver = document.querySelector('.resultParas');

//Initialization

const p = document.createElement('p');  

let prevGuess = [];
let numGuess = 1;

let playGame = true;

//Functions

if(playGame){
    submit.addEventListener('click',function(e){
        e.preventDefault()
        const userGuess = parseInt(userInput.value);
        validateGuess(userGuess);
    })
}
function validateGuess(userGuess){

    if(isNaN(userGuess)){
        alert('Please guess a number greater than 0')
     }
else if(userGuess < 1){
    alert('Please guess a number greater than 0')
}
else if(userGuess > 100){
   alert('Please guess a number les s than 100')
}

else {
    prevGuess.push(userGuess);
    if(numGuess === 10){
        displayGuess(userGuess);
        displaymessage(`Game is over, Random Number was ${randomNumber}`);
    }
    else{
        displayGuess(userGuess);
        checkGuess(userGuess);
    }
}
 
}

function checkGuess(userGuess){
    if(userGuess === randomNumber){
        displaymessage(`Congrats u Won.`)
        gameEnd();
    }
    else{
        if(userGuess < randomNumber){
            displaymessage(`Your guess is less than random number.`)
        }
        else if(userGuess > randomNumber){
            displaymessage(`Your guess is greater than random number.`)
        }
       
    }
}

function displayGuess(guess){
    userInput.value = '';
    prevSlot.innerHTML += `${guess}   `;
    numGuess++
    remGuess.innerHTML = `${10 - numGuess + 1}`

}

function displaymessage(message){
    lowOrHigh.innerHTML = `<h2>${message}</h2>`
}

function gameEnd(){
    userInput.value = '';
    userInput.setAttribute('disabled','');
    p.classList.add('button');
    p.innerHTML = `<h2 id="newGame">Click for NEW GAME</h2>`;
    starOver.appendChild(p);
    playGame = false;
    gameStart();
}

function gameStart(){
    const newGameButton = document.querySelector('#newGame');
    newGameButton.addEventListener('click',function(e){
        let randomNumber = parseInt(Math.random() * 100 + 1);
        prevGuess = [];
        numGuess = 1;
        
        prevSlot.innerHTML = '';
        remGuess.innerHTML = `${10 - numGuess + 1}`

        userInput.removeAttribute('disabled');

        playGame = true;
    })
}
