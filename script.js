const workTime =25*60; // 25 minutes in seconds
const breakTime= 5*60;
let timeLeft = workTime;
let timer = null;
let isWorkTime = true;
let count = 0

const timerArea = document.querySelector('#timer')
const startButton = document.querySelector('#startBtn')
const pauseButton = document.querySelector('#pauseBtn')
const resetButton = document.querySelector('#resetBtn')
const statusArea = document.querySelector('#status');
const cyclesArea = document.querySelector('#cycles');


function startTimer(){
    timer = setInterval(()=>{
        if(timeLeft>0){
            timeLeft--;
            updateUI();
        }else{
            clearInterval(timer);
            timer=null
            toggleWorkBreak()
            updateUI();
            startTimer()
        }
    },1000)
}

const updateUI = () =>{
    const minutes = String(Math.floor(timeLeft/60)).padStart(2,'0');
    const seconds = String(timeLeft % 60).padStart(2,'0');
    timerArea.textContent = `${minutes}:${seconds}`;
}

function stopTimer(){
clearInterval(timer);
isWorkTime = true;
statusArea.textContent = "Focus Time";
timer=null;
}

function pauseTimer(){
    stopTimer();
}

function resetTimer(){
    stopTimer();
    timeLeft = workTime;
    count=0;
    cyclesArea.textContent = count;
    updateUI();
}

function toggleWorkBreak(){
    updateCycles();
    isWorkTime=!isWorkTime;
    timeLeft = isWorkTime?workTime:breakTime;
    statusArea.textContent = isWorkTime?"Work Time":"Break Time";
}

function updateCycles(){
    isWorkTime && count++;
    cyclesArea.textContent = count;
}


// order of this presenting in the bottom matters
// because we want to make sure that the DOM is loaded before we attach event listeners to the buttons
startButton.addEventListener('click',startTimer) // we just pass ref of function and not execute it

pauseButton.addEventListener('click',pauseTimer)

resetButton.addEventListener('click',resetTimer)


