const start = document.getElementById("start-button");
const restart = document.getElementById("restart-button");
const pause = document.getElementById("pause-button");
const startBreak = document.getElementById("start-break-button");
const timeRemaining = document.getElementById("time-remaining");

let is25ClockTicking = false;
let is5ClockTicking = false;

let minutes = null;
let seconds = null;

let minutesZero;
let secondsZero;

let breakSession = startTime(300);
let workSession = startTime(1500);


//MY EVENT LISTENERS:

timeRemaining.innerHTML = startTime(1500);

start.addEventListener("click", timer25Function);
startBreak.addEventListener("click", timer5Function);
restart.addEventListener("click", timer25Function);



//restart.addEventListener("click", restartButton);


//   MY FUNCTION FOR ADDING A ZERO IN FRONT 
function addZero() {
  if (minutes < 10) {
    minutes = "0" + minutes;
      } 
      if (seconds < 10) {
        seconds = "0" + seconds;
   // seconds = `0${seconds}` 
      }  
}


//ASSIGNING THE TIME FUNCTION  
function startTime(time) {
  minutes = Math.floor(time / 60);
  seconds = time % 60;
  addZero(); // I have moved the add zero instructions to a separate function, so I can reuse.
      return `${minutes}:${seconds}`;
}


function timer5Function() {
  is5ClockTicking = true;
  startTime(300);

  setInterval
      (function() { if(seconds > 0) {
          seconds--;
      } else if(minutes > 0 && seconds <= 0) {
          seconds = 59;
          minutes--;
       }
      
  timeRemaining.innerText = `${minutes}:${seconds}`;

  if (minutes <= 0 && seconds <=0) {
  clearInterval(timer5Function);
  //   //alert("break time!");
  //   is5ClockTicking = false;
  }
  console.log(is5ClockTicking)
}, 
      1000)

}

// CALLBACK FUNCTION FOR 25 MINUTE COUNTDOWN

function countdown25(callback) {
  setInterval(timer25Function, 1000);
  if (minutes == 0 && seconds == 0)
{callback();
}
}

//countdown25(timer5Function);

    function timer25Function() {
      is25ClockTicking = true;
      startTime(50);
    
      setInterval
          (function() { if(seconds > 0) {
              seconds--;
          } else if(minutes > 0 && seconds <= 0) {
              seconds = 59;
              minutes--;
           }
          
      timeRemaining.innerText = `${minutes}:${seconds}`;
    
      if (minutes <= 0 && seconds <=0) {
      clearInterval(timer25Function);
      //   //alert("break time!");
      //   is5ClockTicking = false;
      }
      console.log(is25ClockTicking)
    }, 
          1000)
    
    }
    
 











