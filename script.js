const container = document.querySelectorAll(".con")
const computer = document.querySelectorAll(".computer")
const tringe = document.querySelector(".tringe")
let user = document.querySelector(".user")
let machine = document.querySelector(".machine")
let winmodal = document.querySelector(".win-modal")
let winner = document.querySelector(".winner")
let play = document.querySelector(".play")




// Hide 'YOUR PICKED' initially
user.style.opacity = "0"; 



// Display show score 

const userScoreDisplay = document.getElementById('user-score');
const computerScoreDisplay = document.getElementById('computer-score');

// Load scores from localStorage or set initial values
let userScore = localStorage.getItem('userScore') ? parseInt(localStorage.getItem('userScore')) : 0;
let computerScore = localStorage.getItem('computerScore') ? parseInt(localStorage.getItem('computerScore')) : 0;

// Display initial scores
userScoreDisplay.innerText = userScore;
computerScoreDisplay.innerText = computerScore;

// score end


let random = Math.floor(Math.random()*3)
container.forEach((element, index) => {

    
    element.addEventListener("click", () =>{

        user.style.opacity = "1"
        user.style.paddingLeft = "2rem"
        user.style.marginLeft = "2rem"
        user.style.color = "White"
        user.style.fontSize = "1.5rem"
        user.style.fontWeight = "600"
        machine.style.color = "White"
        machine.style.fontSize = "1.5rem"
        machine.style.fontWeight = "600"
        tringe.style.display = "none"
        element.style.position = "absolute";  
        element.style.left = "10rem";  
        element.style.top = "initial"; 
container.forEach(item=>{
item.style.display = "none"
})   
element.style.display = "block"  
element.classList.add('show')


setTimeout(() =>{
 machine.style.opacity = "1"
 setTimeout(() =>{
    computer[random].style.display = 'block'
computer[random].classList.add("right")
},1000)
setTimeout(() => {
    if(random===index){
        winmodal.style.display = "grid",
        winner.innerText = "TIE UP" 
    }
else if(index===0 && random===2 || index===1 && random===0 || index===2 && random===1){
winmodal.style.display = "grid",
winner.innerText = "YOU WIN AGAINST PC",

// updated score 
userScore++;
userScoreDisplay.innerText = userScore;
localStorage.setItem('userScore', userScore);

}else{
winmodal.style.display = "grid",
winner.innerText = "YOU LOST AGAINST PC"

// computer score 
computerScore++;
computerScoreDisplay.innerText = computerScore;
localStorage.setItem('computerScore', computerScore); 
}
},1500)
},500)

    })
});

play.addEventListener("click", () => {
    window.location.reload()
})

const ruleButton = document.querySelector('.show-rule');
const ruleContainer = document.querySelector('.rule-con');
const closeButton = document.querySelector('.close-btn');



ruleButton.addEventListener('click', () => {
    ruleContainer.style.display = 'flex'; 
});

closeButton.addEventListener('click', () => {
    ruleContainer.style.display = 'none'; 
});


// Reset Button Logic 

const resetButton = document.querySelector('.reset-btn');

// Reset scores when the reset button is clicked
resetButton.addEventListener('click', () => {
    // Reset both scores to 0
    userScore = 0;
    computerScore = 0;

    // Update the display
    userScoreDisplay.innerText = userScore;
    computerScoreDisplay.innerText = computerScore;

    // Update localStorage
    localStorage.setItem('userScore', userScore);
    localStorage.setItem('computerScore', computerScore);

    // Optionally, you can also reset the game state (hide the win modal, reset picks, etc.)
    winmodal.style.display = "none";
    machine.style.opacity = "0";
    user.style.opacity = "0";
    tringe.style.display = "block";

    // Reset the display of computer and user picks
    container.forEach(item => item.style.display = "block");
    computer.forEach(item => item.style.display = "none");
});

// winner page 

