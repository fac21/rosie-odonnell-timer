const start = document.getElementById("start-button");
const reset = document.getElementById("reset-button");
const pause = document.getElementById("pause-button");
const resume = document.getElementById("resume-button");
const startBreak = document.getElementById("start-break-button");
const timeRemaining = document.getElementById("time-remaining");

let is25ClockTicking = false;
let is5ClockTicking = false;

let minutes = 0;
let seconds = 0;

let timing;
let timing2;
let timing3;

let pause25 = false;
let pause5 = false;

let breakSession = startTime(300);
let workSession = startTime(1500);


//MY EVENT LISTENERS:

timeRemaining.innerHTML = startTime(1500);

start.addEventListener("click", countdown);
start.addEventListener("click", changeName)
startBreak.addEventListener("click", timer5Function);
reset.addEventListener("click", resetFunction);
pause.addEventListener("click", pauseButton);
resume.addEventListener("click", resumeCountdown);


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

function changeName() {
  if(start.inputText = "START" ) {
    start.inputText = "RESUME";
  } else {
    start.inputText = "START";
  }
}

// FUNCTION FOR MY 5 MINUTE COUNTDOWN:
function timer5Function() {
  clearInterval(timing2); //This stops our button to start running quickly, as it disables previous click if clicked again.
  is5ClockTicking = true;
  startTime(300);
  timing2 = setInterval(function() { 
        if(seconds > 0) {
          seconds--;
          } else if(minutes > 0 && seconds <= 0) {
            seconds = 59;
            minutes--;
       }
       
    timeRemaining.innerText = addZero();

      if (minutes == 0 && seconds ==0) {
          alert("fun's over, back to work!");
          // add noise function here.
          countdown();
          clearInterval(timing2);
          is5ClockTicking = false;
          } //console.log("5", is5ClockTicking)
  }, 1000)
}

// // FUNCTION FOR MY 25 MINUTE COUNTDOWN:
// function timer25Function() {
//   is25ClockTicking = true;
//   startTime(5);
    
//   setInterval(function() { 
//         if(seconds > 0) {
//           seconds--;
//           } else if(minutes > 0 && seconds <= 0) {
//               seconds = 59;
//               minutes--;
//         }
        
//     timeRemaining.innerText = addZero();
    
//       if (minutes <= 0 && seconds <=0) {
//           clearInterval(timer25Function);
//           is25ClockTicking = false;
//           } console.log("25", is25ClockTicking)
//     }, 1000)
//   }
    
// FUNCTION SO THAT THE 25 MINUTE COUNTDOWN TRIGGERS THE 5 MINUTE COUNTDOWN AT 00:00:
function countdown() {
  start.innerHTML = "RESTART"; //}
  clearInterval(timing); //This stops our button to start running quickly, as it disables previous click if clicked again.
  is25ClockTicking = true;
  startTime(1500);

  // first function (a copy of the 25 min function above)
  timing = setInterval(function() { 
      if(seconds > 0) {
          seconds--;
      } else if(minutes > 0 && seconds <= 0) {
          seconds = 59;
          minutes--;
       }
      
    timeRemaining.innerText = addZero(); //this is making sure 0 is added to any value less than 10.

      if (minutes <= 0 && seconds <=0) {
      alert("break time!");
      timer5Function();    // Second function: triggered if our countdown has reached zero
      clearInterval(timing); // Clear the timing function
      is25ClockTicking = false; //Let our buttons know the 25 minute funtion is not happening
    
      } console.log("25", is25ClockTicking)
}, 1000); //console.log(timer5Function);  
}

function postPauseCountdown() {
  is25ClockTicking = true;

  // first function (a copy of the 25 min function above)
  timing3 = setInterval(function() { 
      if(seconds > 0) {
          seconds--;
      } else if(minutes > 0 && seconds <= 0) {
          seconds = 59;
          minutes--;
       }
      
    timeRemaining.innerText = addZero(); //this is making sure 0 is added to any value less than 10.

      if (minutes <= 0 && seconds <=0) {
      alert("break time!");
      timer5Function();    // Second function: triggered if our countdown has reached zero
      clearInterval(timing); // Clear the timing function
      is25ClockTicking = false; //Let our buttons know the 25 minute funtion is not happening
    
      } console.log("25", is25ClockTicking)
}, 1000); //console.log(timer5Function);  
}





//MY PAUSE BUTTON

function pauseButton() {
  if(is25ClockTicking) {
clearInterval(timing);
//pause.innerHTML = "RESUME";
pause25 = true;
console.log("pause25", pause25)
} else if (is5ClockTicking) {
  clearInterval(timing2);
  //pause.innerHTML = "RESUME";
  pause5 = true;
  console.log("pause5", pause5)
}
}


function resumeCountdown() {
if (pause25) {
  
  timing = setInterval(function() { 
    if(seconds > 0) {
        seconds--;
    } else if(minutes > 0 && seconds <= 0) {
        seconds = 59;
        minutes--;
     }

  timeRemaining.innerText = addZero(); //this is making sure 0 is added to any value less than 10.

    if (minutes <= 0 && seconds <=0) {
    alert("break time!");
    timer5Function();    // Second function: triggered if our countdown has reached zero
    clearInterval(timing); // Clear the timing function
    is25ClockTicking = false; //Let our buttons know the 25 minute function is not happening
  
    } console.log("25", is25ClockTicking)
}, 1000); //console.log(timer5Function);  
}
}






//     is25ClockTicking = false;
//   }
//     if(!is25ClockTicking) {
//   timer25Function();
//     }
// } else {
//   clearInterval(timer5Function)
// }
// }

function resetFunction() {
  start.innerHTML = "START";
  pause.innerHTML = "PAUSE";
  if (is25ClockTicking) {
  clearInterval(timing);
  timeRemaining.innerHTML = "25:00"
} else clearInterval(timing2);
  timeRemaining.innerHTML = "25:00"
//startTime(1500);
}


