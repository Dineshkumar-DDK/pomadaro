const workTime = 25*60;
let timeLeft = workTime;
let timer = null;

const timerArea = document.querySelector('#timer')
const startButton = document.querySelector('#startBtn')
const pauseButton = document.querySelector('#pauseBtn')
const resetButton = document.querySelector('#resetBtn')


function startTimer(){
    timer = setInterval(()=>{
        if(timeLeft>0){
            timeLeft--;
            updateUI();
        }else{
            clearInterval(timer);
            timer=null
            updateUI();
            timeLeft=workTime;
            startTimer()
        }
    },1000)
}

const updateUI = () =>{
    const minutes = String(Math.floor(timeLeft/60)).padStart(2,'0');
    const seconds = String(timeLeft % 60).padStart(2,'0');
    timerArea.textContent = `${minutes}:${seconds}`;
}


function pauseTimer(){
    clearInterval(timer);
    timer=null
}

function resetTimer(){
    pauseTimer();
    timeLeft = workTime;
    updateUI();
}


// order of this presenting in the bottom matters
// because we want to make sure that the DOM is loaded before we attach event listeners to the buttons
startButton.addEventListener('click',startTimer) // we just pass ref of function and not execute it

pauseButton.addEventListener('click',pauseTimer)

resetButton.addEventListener('click',resetTimer)


