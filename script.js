
const timeDisplay = document.getElementById('timer')

const workTime = 25 * 60; // 25 minutes
let workLeft = workTime;
let timer=null;
function startTimer(){
    timer =setInterval(()=>{
        if(workLeft>0){
            workLeft--;
            updateTimer();
        }else{
            clearInterval(timer);
            timer=null;
            updateTimer();
            startTimer();
            
        }
    },1000)
}

function updateTimer(){
    const minutes = String(Math.floor(workLeft/60)).padStart(2,'0');
    const seconds = String(workLeft%60).padStart(2,'0');
    timeDisplay.textContent = `${minutes}:${seconds}`;
}

startTimer();