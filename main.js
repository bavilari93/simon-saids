const optionArray = document.querySelectorAll('.box');
const modal = document.getElementById('game-over');
const startButton = document.getElementById('start');
const restart = document.getElementById('restart');
const counter = document.getElementById('counter');

// sounds 
let soundSnare = "Click";
createjs.Sound.registerSound("https://s3.amazonaws.com/nrf-codepen-assets/water-drop.mp3", soundSnare);
// human and computer genereated arrays 
let humanSelectionArray = [];
let computerSelectionArray = [];
let level = 1;
let turn = 'computer';

restart.addEventListener('click', () => {
    modal.style.display = 'none';
    startRound();
    startButton.disabled = true;

})
// click to start 
startButton.addEventListener('click', () => {
    humanSelectionArray = [];
    computerSelectionArray = [];
    startRound();


})


// computer generated 
const startRound = () => {
    counter.innerHTML = level;
    let computerGenerated = Math.floor(Math.random() * 4)
    let option = optionArray[computerGenerated].id;
    if (option === computerSelectionArray[computerSelectionArray.length - 1]) {
        startRound();
    } else {

        computerSelectionArray.push(option);
        humanSelectionArray = [];
        showSequence();
    }

}

// toggles class for  human and computer 
const showSequence = () => {
    let counter = 1;

    for (let i = 0; i < computerSelectionArray.length; i++) {
        ((i) => {
            counter += 1
            setTimeout(() => {

                classToggle(computerSelectionArray[i])
            }, 400 * counter)
        })(i)

    }

    turn = 'human'
}



// toggle and remove class
const classToggle = (element) => {

    let boxSelection = document.getElementById(`${element}`)
    createjs.Sound.play(soundSnare);
    boxSelection.classList.toggle('active');
    setTimeout(() => {
        boxSelection.classList.remove('active');
    }, 600)
}

const levelUp = () => {
    level++;

}

// human sequense 


optionArray.forEach(e => {

    e.addEventListener('click', () => {

        // stop from click 
        if (turn === 'human') {

            let clickedElement = e.id
            humanSelectionArray.push(clickedElement)
            classToggle(clickedElement)
            let index = humanSelectionArray.length - 1;
            checkSequense(clickedElement, index)

        }
    })

})



const checkSequense = (clickedElement, index) => {

    // chek if clicked element is equal to computer
    if (clickedElement === computerSelectionArray[index]) {
        if (humanSelectionArray.length === computerSelectionArray.length) {
            setTimeout(() => {
                turn = 'computer'
                startRound()
                levelUp()
            }, 1000)
        }
    } else {

        modal.style.display = 'flex';
        computerSelectionArray = [];
        level = 1;
    }

}