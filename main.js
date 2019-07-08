// computer generated 

const optionArray = document.querySelectorAll('.box');

// human and computer genereated arrays 
let humanSelectionArray = [];
let computerSelectionArray = [];


const computerSelection = () => {
    const indexSelect = Math.floor(Math.random() * Math.floor(4));
    const computerSelection = optionArray[indexSelect].id;
    computerSelectionArray.push(computerSelection);
}

// get selection by human 

// input and array creation 

optionArray.forEach(selected => {
    selected.addEventListener('click', () => {
        humanSelectionArray.push(selected.id)

    })
})
// if array is iqual zero them generate first random number
// logic: if iterate thru computed array , user can click
// as user clicks check if index of computer is equal 


// comparing selections


