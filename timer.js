const start = document.getElementById("start-button");
const restart = document.getElementById("restart-button");
const pause = document.getElementById("pause-button");
const startBreak = document.getElementById("start-break-button");
const timeRemaining = document.getElementById("time-remaining");

let is25ClockTicking = false;
let is5ClockTicking = false;

let minutes = 0;
let seconds = 0;

let minutesZero;
let secondsZero;

let breakSession = startTime(300);
let workSession = startTime(1500);


//MY EVENT LISTENERS:

timeRemaining.innerHTML = startTime(1500);

start.addEventListener("click", countdown);
startBreak.addEventListener("click", timer5Function);
restart.addEventListener("click", timer25Function);
pause.addEventListener("click", pauseButton);


//   MY FUNCTION FOR ADDING A ZERO IN FRONT OF SINGLE DIGITS
function addZero() {

  if (minutes < 10 && seconds <10) {
    return `0${minutes}:0${seconds}`; 
  } else { if(minutes < 10 ) {
    return `0${minutes}:${seconds}`; 
  } else { if(seconds < 10 ) {
    return `${minutes}:0${seconds}`; 
  }
    else {
    return `${minutes}:${seconds}`; 
      }
    } 
  }  
}


// FUNCTION FOR SETTING THE START TIME WHEN PAGE IS OPENED  
function startTime(time) {
  minutes = Math.floor(time / 60);
  seconds = time % 60;
  return addZero();    
}

// FUNCTION FOR MY 5 MINUTE COUNTDOWN:

function timer5Function() {
  is5ClockTicking = true;
  startTime(300);

  setInterval(function() { 
        if(seconds > 0) {
          seconds--;
          } else if(minutes > 0 && seconds <= 0) {
            seconds = 59;
            minutes--;
       }
       
    timeRemaining.innerText = addZero();

      if (minutes == 0 && seconds ==0) {
          timer25Function();
          clearInterval(timer5Function);
          is5ClockTicking = false;
          } //console.log(is5ClockTicking)
  }, 1000)
}

// FUNCTION FOR MY 25 MINUTE COUNTDOWN

function timer25Function() {
  is25ClockTicking = true;
  startTime(1500);
    
  setInterval(function() { 
        if(seconds > 0) {
          seconds--;
          } else if(minutes > 0 && seconds <= 0) {
              seconds = 59;
              minutes--;
        }
        
    timeRemaining.innerText = addZero();
    
      if (minutes <= 0 && seconds <=0) {
          clearInterval(timer25Function);
          is25ClockTicking = false;
          } //console.log(is25ClockTicking)
    }, 1000)
  }
    
// THIS WILL BE MY FUNCTION SO THAT THE 25 MINUTE COUNTDOWN TRIGGERS THE 5 MINUTE COUNTDOWN AT 00:00

function countdown() {
  is25ClockTicking = true;
  startTime(1500);

  // first function (a copy of the 25 min function above)
  var timing = setInterval(function() { 
      if(seconds > 0) {
          seconds--;
      } else if(minutes > 0 && seconds <= 0) {
          seconds = 59;
          minutes--;
       }
      
    timeRemaining.innerText = addZero(); //this is making sure 0 is added to any value less than 10.

      if (minutes <= 0 && seconds <=0) {
      timer5Function();    // If our countdown has reached zero, start our 5:00 countdown function
      clearInterval(timing); // Clear the timing function
      is25ClockTicking = false; //Let our buttons know the 25 minute funtion is not happening
    
      } //console.log(is25ClockTicking)
}, 1000); //console.log(timer5Function);  
}

//MY PAUSE BUTTON

// function pauseButton() {
//   if (is25ClockTicking) {
//   clearInterval(timer25Function)
//     is25ClockTicking = false;
//   }
//     if(!is25ClockTicking) {
//   timer25Function();
//     }
// } else {
//   clearInterval(timer5Function)
// }
// }



