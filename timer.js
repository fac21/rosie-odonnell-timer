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

timeRemaining.innerHTML = startTime(300);

start.addEventListener("click", countdown);
startBreak.addEventListener("click", timer5Function);
restart.addEventListener("click", timer25Function);
pause.addEventListener("click", pauseButton);


//   MY FUNCTION FOR ADDING A ZERO IN FRONT 
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
      } }

  // if (minutes < 10) {
  //   minutes = `0${minutes}`;
  // } 
  //     if (seconds < 10) {
  //     seconds = `0${seconds}`;
  //     }  
}


// FUNCTION FOR SETTING THE START TIME WHEN PAGE IS OPENED  
function startTime(time) {
  minutes = Math.floor(time / 60);
  seconds = time % 60;

  return addZero(); // I have moved the add zero instructions to a separate function, so I can reuse.
      
}

// FUNCTION FOR MY 5 MINUTE COUNTDOWN

function timer5Function() {
  is5ClockTicking = true;
  startTime(30);

  setInterval
      (function() { if(seconds > 0) {
          seconds--;
      } else if(minutes > 0 && seconds <= 0) {
          seconds = 59;
          minutes--;
       }

       timeRemaining.innerText = addZero();

    //    if (minutes < 10) {
    // timeRemaining.innerText = `0${minutes}:${seconds}`; 

    //    }
    //    else {
    // timeRemaining.innerText = `${minutes}:${seconds}`; 
    //    }


  if (minutes == 0 && seconds ==0) {
  clearInterval(timer5Function);
  is5ClockTicking = false;
  }
  console.log(is5ClockTicking)
}, 
      1000)

}

// FUNCTION FOR MY 25 MINUTE COUNTDOWN

    function timer25Function() {
      is25ClockTicking = true;
      startTime(1500);
    
      setInterval
          (function() { if(seconds > 0) {
              seconds--;
          } else if(minutes > 0 && seconds <= 0) {
              seconds = 59;
              minutes--;
           }

          
           //timeRemaining.innerText = addZero();
    
      if (minutes <= 0 && seconds <=0) {
      clearInterval(timer25Function);
      is25ClockTicking = false;
        // HERE I WANT TO SEND YOU TO THE 5 MINUTE FUNCTION, BUT IT EXCEEDS CALLSTACK

      }
      console.log(is25ClockTicking)
    }, 
          1000)
    }
    

// CALLBACK FUNCTION FOR 25 MINUTE COUNTDOWN
// THIS WILL BE MY FUNCTION SO THAT THE 25 MINUTE COUNTDOWN TRIGGERS THE 5 MINUTE COUNTDOWN AT 00:00

function countdown(timer5Function) {
  is25ClockTicking = true;
  startTime(5);

  setInterval(function() { 
      if(seconds > 0) {
          seconds--;
      } else if(minutes > 0 && seconds <= 0) {
          seconds = 59;
          minutes--;
       }
      
  timeRemaining.innerText = `${minutes}:${seconds}`;

  if (minutes <= 0 && seconds <=0) {
  clearInterval(timer25Function);
  is25ClockTicking = false;
    // HERE I WANT TO SEND YOU TO THE 5 MINUTE FUNCTION, BUT IT EXCEEDS CALLSTACK
  }
  console.log(is25ClockTicking)
}, 
      1000);
// The issue is that the above function isn't ending, which is why this function below isn't working
timer5Function();   
console.log(timer5Function);  
}
//timer5Function();
//}
 



//MY PAUSE BUTTON

function pauseButton() {
  if (is25ClockTicking) {
  clearInterval(timer25Function)
} else {
  clearInterval(timer5Function)
}
}



