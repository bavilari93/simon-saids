// computer generated 

const optionArray = document.querySelectorAll('.box');
const startButton = document.getElementById('start');
// human and computer genereated arrays 
let humanSelectionArray = [];
let computerSelectionArray = [];


const activeClass=()=>{

	computerSelectionArray.forEach(box=>{

		let boxNumber = document.getElementById(`${box}`);
		console.log(boxNumber);

		boxNumber.classList.toggle('active');
		setTimeout(()=>{
	
			boxNumber.classList.remove('active')
		},1000)
	})
}

const computerSelection = () => {
    const indexSelect = Math.floor(Math.random() * Math.floor(4));
    console.log(indexSelect)
    const computerSelection = optionArray[indexSelect].id;
    computerSelectionArray.push(computerSelection);
    activeClass()
    // function to add active class
}

// if array is iqual zero them generate first random number
const computeRun = ()=>{
	if(computerSelectionArray.length == 0){
		computerSelection()
	}else{
		console.log(computerSelectionArray)
		// iterate through them toggle class active
		// once iterated wait for user to click
	}
}

// initialize game with start button
startButton.addEventListener('click',()=>{
	computeRun()
})

// get selection by human 

// input and array creation 

optionArray.forEach(selected => {
    selected.addEventListener('click', () => {
        humanSelectionArray.push(selected.id)
      

    })
})

// logic: if iterate thru computed array , user can click
// as user clicks check if index of computer is equal 


// comparing selections


