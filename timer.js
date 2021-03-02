const start = document.getElementById("start-button");
const restart = document.getElementById("restart-button");
const pause = document.getElementById("pause-button");
const timeRemaining = document.getElementById("time-remaining");

let is25ClockTicking = false;
let is5ClockTicking = false;

let minutes = null;
let seconds = null;

let breakSession = startTime(300);
let workSession = startTime(1500);


//MY EVENT LISTENERS:

timeRemaining.innerHTML = startTime(5);

start.addEventListener("click", countdown25);

//restart.addEventListener("click", restartButton);


//   MY FUNCTION FOR ADDING A ZERO IN FRONT 
function addZero() {
  if (minutes < 10) {
    minutes = `0${minutes}`
      } 
      if (seconds < 10) {
    seconds = `0${seconds}` 
      }  
}


//ASSIGNING THE TIME FUNCTION  
function startTime(time) {

minutes = Math.floor(time / 60);
seconds = time % 60;

    addZero(); // I have moved the add zero instructions to a separate function, so I can reuse.
      
  return `${minutes}:${seconds}`;
}

// CALLBACK FUNCTION FOR 25 MINUTE COUNTDOWN

function countdown25() {
  setInterval(timer25Function, 1000);
 
}


function timer25Function() {
  is25ClockTicking = true;
      if(seconds > 0) {
          seconds--;
      } else if(minutes > 0 && seconds <= 0) {
          seconds = 59;
          minutes--;
       }
       
  timeRemaining.innerText = `${minutes}:${seconds}`;

  if (minutes <= 0 && seconds <=0) {
    clearInterval(startTime(300));
    is25ClockTicking = false;
    is5ClockTicking = true;
  } 
  
  //console.log(is25ClockTicking)
  //console.log(is5ClockTicking)

  if (is5ClockTicking) {
    setInterval(timer5Function(), 1000);
   }
   
timeRemaining.innerText = `${minutes}:${seconds}`;

    //timer5Function();
  }
  //


function timer5Function() {
  is5ClockTicking = true;
      if(seconds > 0) {
          seconds--;
      } else if(minutes > 0 && seconds <= 0) {
          seconds = 59;
          minutes--;
       }
       
  timeRemaining.innerText = `${minutes}:${seconds}`;

  // if (minutes <= 0 && seconds <=0) {
  //   clearInterval(timer5Function);
  //   //alert("break time!");
  //   is5ClockTicking = false;
  console.log(is5ClockTicking)

}












