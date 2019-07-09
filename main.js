const optionArray = document.querySelectorAll('.box');
const startButton = document.getElementById('start');
// human and computer genereated arrays 
let humanSelectionArray = [];
let computerSelectionArray = [];
let levelCounter = 0;
let level = 0;

// click to start 
startButton.addEventListener('click', ()=>{
	startRound();
})
// computer generated 
const startRound = () =>{
	let computerGenerated = Math.floor(Math.random()*4)
	let option = optionArray[computerGenerated].id;
	computerSelectionArray.push(option);
	showSequence(computerSelectionArray[computerSelectionArray.length -1]);
	humanSelectionArray =[];
}

const showSequence =(element)=>{
	console.log(element)
	switch(element){
		case 'boxA' :
			classToggle(element);
		break;
	}

}

const classToggle = (element)=>{
	let boxSelection = document.getElementById(`${element}`)
		boxSelection.classList.toggle('active');
		setTimeOut(()=>{
			boxSelection.classList.remove('active');
		})
}