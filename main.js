const optionArray = document.querySelectorAll('.box');
const startButton = document.getElementById('start');
// human and computer genereated arrays 
let humanSelectionArray = [];
let computerSelectionArray = [];
let levelCounter = 0;
let level = 0;
let turn = '';

// click to start 
startButton.addEventListener('click', () => {
    startRound();
})
// computer generated 
const startRound = () => {
    let computerGenerated = Math.floor(Math.random() * 4)
    let option = optionArray[computerGenerated].id;
    computerSelectionArray.push(option);
    humanSelectionArray = [];
    showSequence();
}
// toggles class for  human and computer 
const showSequence = () => {
    	let counter = 1;
        for (let i = 0; i < computerSelectionArray.length; i++) {
            ((i) => {
            	counter +=1
                setTimeout(() => {
                	console.log(computerSelectionArray[i])
                    classToggle(computerSelectionArray[i])
                }, 700* counter)
            })(i)
            
        }
    }



// toggle and remove class
const classToggle = (element) => {

    let boxSelection = document.getElementById(`${element}`)
    console.log(boxSelection)
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
        let clickedElement = e.id
        humanSelectionArray.push(clickedElement)
        checkSequense(humanSelectionArray.length - 1)
        classToggle(clickedElement)
    })
})

// check if answer is correct 

const checkSequense = (indexofArray) => {
    if (humanSelectionArray[indexofArray] === computerSelectionArray[indexofArray] &&
        humanSelectionArray.length === computerSelectionArray.length) {
        setTimeout(() => {
            startRound()
        }, 1000)
    }
}