
const optionArray = document.querySelectorAll('.box');
const startButton = document.getElementById('start');
// human and computer genereated arrays 
let humanSelectionArray = [];
let computerSelectionArray = [];

// computer activate class when computer number is originated
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

// human computer Checker 
const humanComputerChecker=(selected)=>{
	console.log(selected)
	for(let i = 0; i<computerSelectionArray.length; i++){
		if(selected === computerSelectionArray[i]){
			console.log('same')
		}else{
			console.log('try again')
		}
	}

}

// get selection by human 
optionArray.forEach(selected => {
    selected.addEventListener('click', () => {
        humanSelectionArray.push(selected.id)
        // check if computer selection is equal
    humanComputerChecker(selected.id);
      

    })
})
// input and array creation 



// logic: if iterate thru computed array , user can click
// as user clicks check if index of computer is equal 


// comparing selections


