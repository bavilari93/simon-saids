const optionArray = document.querySelectorAll('.box');
const startButton = document.getElementById('start');
const counter = document.getElementById('counter');
// human and computer genereated arrays 
let humanSelectionArray = [];
let computerSelectionArray = [];
let level = 0;
let turn = 'computer';

// click to start 
startButton.addEventListener('click', () => {
    humanSelectionArray = [];
    computerSelectionArray = [];
    startRound();

})
// computer generated 
const startRound = () => {
   	counter.innerHTML= level;
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
            }, 700 * counter)
        })(i)

    }
    turn = 'human'
    console.log(turn)

}



// toggle and remove class
const classToggle = (element) => {

    let boxSelection = document.getElementById(`${element}`)

    boxSelection.classList.toggle('active');
    setTimeout(() => {
        boxSelection.classList.remove('active');
    }, 1000)
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
            checkSequense(humanSelectionArray.length - 1)

            classToggle(clickedElement)
            }
        })
    
})


// check if answer is correct 

const checkSequense = (indexofArray) => {
    if (humanSelectionArray[indexofArray] === computerSelectionArray[indexofArray] &&
        humanSelectionArray.length === computerSelectionArray.length) {
        setTimeout(() => {
        		turn = 'computer'
            startRound()
            levelUp()
        }, 1000)
    } else {
        // modal box for loosing
        // reset all 
    }
}
