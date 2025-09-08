
const workDuration = 25 * 60; // 25 minutes
const timeLeft  = workDuration;
const timer = null;

function startTimer(){
    timer = setInterval(updateTimer,1000)
    if(timeLeft>0){
        timeLeft--;
        updateTimer();
    }
    else{
        clearInterval(timer);
        updateTimer();
        startTimer();
    }
}

function updateTimer(){
    const minutes = String(Math.floor(timeLeft /60)).padStart(2,'0');
    const seconds = String (timeLeft % 60).padStart(2,'0');
    document.getElementById("timer").innerText = `${minutes}:${seconds}`;
}

startTimer();