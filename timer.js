const start = document.getElementById("start-button");
const reset = document.getElementById("reset-button");
const pause = document.getElementById("pause-button");
const resume = document.getElementById("resume-button");
const startBreak = document.getElementById("start-break-button");
const timeRemaining = document.getElementById("time-remaining");
const outerBox = document.getElementById("outer-box");
const innerBox = document.getElementById("inner-box");
const workAlarm = document.getElementById("work-alarm");
const breakAlarm = document.getElementById("break-alarm");

let is25ClockTicking = false;
let is5ClockTicking = false;

let minutes = 0;
let seconds = 0;

let timing;
let timing2;
let timing3;

let pause25 = false;
let pause5 = false;

let resume25 = false;
let resume5 = false;

let breakSession = startTime(300);
let workSession = startTime(1500);


//EVENT LISTENERS:

timeRemaining.innerHTML = startTime(1500);

start.addEventListener("click", countdown);
startBreak.addEventListener("click", timer5Function);
reset.addEventListener("click", resetFunction);
pause.addEventListener("click", pauseButton);
resume.addEventListener("click", resumeCountdown);


// FUNCTION FOR ADDING A ZERO IN FRONT OF SINGLE DIGITS

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

// FUNCTION FOR SETTING THE START TIME WHEN PAGE IS OPENED AND IN EACH FUNCTION
function startTime(time) {
  minutes = Math.floor(time / 60);
  seconds = time % 60;
  return addZero();    
}

// FUNCTION FOR MY 5 MINUTE COUNTDOWN WHICH TRIGGERS THE 25:00 COUNTDOWN AT 00:00.
function timer5Function() {
  innerBox.style.backgroundColor = "#E7ABAF";
  outerBox.style.backgroundColor = "#851118";
  timeRemaining.style.color = "black";

  
  clearInterval(timing);
  clearInterval(timing2); //This stops our button to start running quickly, as it disables previous click if clicked again.
  

  is5ClockTicking = true;
  is25ClockTicking = false;
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
          //alert("fun's over, back to work!");
          // add noise function here.
          playAudioWork();
          countdown();
          clearInterval(timing2);
          is5ClockTicking = false;
          } //console.log("5", is5ClockTicking)
  }, 1000)
}

// FUNCTION FOR 25 MINUTE COUNTDOWN WHICH TRIGGERS THE 5 MINUTE COUNTDOWN AT 00:00.
function countdown() {

  innerBox.style.backgroundColor = "#851118";
  outerBox.style.backgroundColor = "#E7ABAF";
  timeRemaining.style.color = "white";
  start.innerHTML = "RESTART"; //}

    
  clearInterval(timing); //This stops our button to start running quickly, as it disables previous click if clicked again.
  clearInterval(timing2); //This clears the countdown in case 5:00 is running - means we can switch between the timers.
  

  is25ClockTicking = true;
  is5ClockTicking = false;
  startTime(1500);

  timing = setInterval(function() { 
      if(seconds > 0) {
          seconds--;
      } else if(minutes > 0 && seconds <= 0) {
          seconds = 59;
          minutes--;
       }
      
    timeRemaining.innerText = addZero(); //this is making sure 0 is added to any value less than 10.

      if (minutes <= 0 && seconds <=0) {
      playAudioBreak();
      timer5Function();    // Second function: triggered if our countdown has reached zero
      clearInterval(timing); // Clear the timing function
      is25ClockTicking = false; //Let our buttons know the 25 minute funtion is not happening
    
      } //console.log("25", is25ClockTicking)
}, 1000); //console.log(timer5Function);  
}

// // FUNCTION FOR MY 25 MINUTE COUNTDOWN:
function timer25Function() {

  innerBox.style.backgroundColor = "#851118";
  outerBox.style.backgroundColor = "#E7ABAF";
  timeRemaining.style.color = "white";


  clearInterval(timing); //This stops our button to start running quickly, as it disables previous click if clicked again.
  clearInterval(timing2);


  is25ClockTicking = true;
  is5ClockTicking = false;
  startTime(1500);

  var timing3 = setInterval(function() { 
        if(seconds > 0) {
          seconds--;
          } else if(minutes > 0 && seconds <= 0) {
              seconds = 59;
              minutes--;
        }

    timeRemaining.innerText = addZero();

      if (minutes <= 0 && seconds <=0) {
          playAudioBreak();
          clearInterval(timer25Function);
          is25ClockTicking = false;
          } //console.log("25", is25ClockTicking)
    }, 1000)
  }


// FUNCTION FOR PAUSE BUTTON

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

  if (!pause25 || !pause5) {
    
    clearInterval(timing); //This stops our button to start running quickly, as it disables previous click if clicked again.
    clearInterval(timing2); //This clears the countdown in case 5:00 is running - means we can switch between the timers.
    }

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
          playAudioBreak();
          timer5Function();    // Second function: triggered if our countdown has reached zero
          clearInterval(timing); // Clear the timing function
          is25ClockTicking = false; //Let our buttons know the 25 minute function is not happening
        
          } console.log("25", is25ClockTicking)
        }, 1000); //console.log(timer5Function);  
      }

  if (pause5) {
    timing2 = setInterval(function() { 
      if(seconds > 0) {
          seconds--;
      } else if(minutes > 0 && seconds <= 0) {
          seconds = 59;
          minutes--;
       }
  
    timeRemaining.innerText = addZero(); //this is making sure 0 is added to any value less than 10.
  
      if (minutes <= 0 && seconds <=0) {
      playAudioWork();
      countdown();    // Second function: triggered if our countdown has reached zero
      clearInterval(timing2); // Clear the timing function
      is5ClockTicking = false; //Let our buttons know the 25 minute function is not happening
  
      } console.log("5", is5ClockTicking)
  }, 1000); //console.log(timer5Function);  
  }
  }


// FUNCTION TO RESET TO START

function resetFunction() {
  innerBox.style.backgroundColor = "#851118";
  outerBox.style.backgroundColor = "#E7ABAF";
  timeRemaining.style.color = "white";
  start.innerHTML = "START";
  pause.innerHTML = "PAUSE";

  clearInterval(timing);
  clearInterval(timing2);
  timeRemaining.innerHTML = startTime(1500);

}

// FUNCTION PLAY WORK ALARM

function playAudioWork() {
  workAlarm.play();
}

// FUNCTION PLAY BREAK ALARM

function playAudioBreak() {
  breakAlarm.play();
}
