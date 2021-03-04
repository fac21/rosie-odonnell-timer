# Pomodoro Timer

This week, our challenge was to create a [Pomodoro Timer](https://en.wikipedia.org/wiki/Pomodoro_Technique).

### [Here's mine!](https://fac21.github.io/rosie-odonnell-timer/)

<br />

# My Process

## Design

1. To begin with, I mocked up what my design would look like using [Figma](https://www.figma.com/) (I prefer Figma over Sketch). I went for a simple design, using boxes within boxes, to practice my use of containers in HTML/ CSS.

Here's the mock-up I created on Figma:

![](figma.png)

I also decided that I wanted to include the following features:

- At the start of the 5 minute break have celebration falling from top of screen.

- At the start of the 5 minute break have the tomatoes shake and a noise made.

- When the start ‘start’ is clicked: have 'start' change to ‘pause’.

<br />
<br />

## Writing the code


2. Next up, I got all of my elements onto my page, but adding them into my HTML file.

I set the largest outer box as my main div, placing the smaller box inside it in a simple div tag, as I didn't think a  semantic tag was required in this instance:

``` HTML

<body>
<div main id="outer-box" class="center">
    <div id="inner-box" class="center width-md">

```

Then, I put the countdown timer and images inside one section tag, and my two buttons inside a separate section tag:

``` HTML
<section>
    <img src="tomato.png" class="tomato">
    <h1 id=timer>25:00</h1>
    <img src="tomato.png" class="tomato">
</section>

```
``` HTML
<section>
    <button id="start-button">START</button>
    <button id="restart-button">RESTART</button>
</section>

```

Now I had all of my elements on the page:

![](initial-elements.png)

<br />
<br />


3. I linked up my CSS file to my HTML using the below code, and started to style the page:

``` HTML
  <link rel="stylesheet" href="style.css">
  ```

I wanted to put my new CSS learnigns into practice, so focused on including center class and stack class:

``` CSS
.center {
    max-width: 90rem;
    margin-left: auto;
    margin-right: auto;
}

.width-sm {
    max-width: 40rem;
  }
```

``` CSS
.stack > * {
    margin-top: 15rem;
    margin-bottom: 15rem;
  }
```

We can apply multiple classes to a single element in HTML, so I decided to try and create some universal padding classes by emulating the stack class structure and apply these to the same elements, alongside our stack classes:

We add multiple classes to an element by separating the class names with a comma:

```HTML
<div main id="outer-box" class="center, stack">
```

### CSS Problems and Solutions

I found writing the CSS very difficult this week, and it has been a good test of my skills and understanding of different classes.

I have three issues which are yet to be resolved:

1. The height of page is currently unresponsive - I need to add in some max-height style.
2. I have not mastered the use of the center class and its variations to control layout - currently, I have relied on media queries and styling individual elements to make sure the page works on all screens.


## Making my page talk

I found the javascript element of this workshop extremely challenging. This was my first experience working with play/resume/reset buttons, and once I had started to get the hang of things, I found this work really rewarding.

I know that my code could do with **a lot** of improvements, especially simplifying and shortening.

I spent a long time sitting and thinking of the best order to tackle this problem.
I knew that although I have pieces of the necessary knowledge in my head already, I'd also need to rely on the online community to get things working.

To create my digital clock, I used (this codewars challenge)[https://www.codewars.com/kata/52685f7382004e774f0001f7] but altered it to remove the hours part.




I got my countdown working (although I still needed to add the 0 in front of single digits):
``` Javascript
function timer25Function() {
  is25ClockTicking = true;

    if(seconds > 0) {
        seconds--;
    } else if(minutes > 0 && seconds <= 0) {
        seconds = 59;
        minutes--;
    }  else if (minutes <=0 && seconds <=0) {
          clearInterval();
    }
timeRemaining.innerText = `${minutes}:${seconds}`
```

but what I wanted now was for my timer5Function to be called once this function had finished, so that the timer would start counting down from 5:00. The reason I wanted to do this, is because I want there to be continous loop between the 25:00 and 5:00 minute countdowns. If I just reset the time to be 5:00 and countdown, then at the end of that coutnodwn, I'd need to respecify 25:00 etc. The code would never end. However, I thought that if at the end of the two functions, it would point to the other one, then that loop would happen automaticall. 


### Callbacks

I worked hard on getting a callback function to work this week, in order to call the 5 minute countdown function once the 25 minute countdown function had completed. However, ultimately, I wasn't able to get it working.

I started by creating two separate functions fors. Here's one of them:

``` Javascript 
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
          
      timeRemaining.innerText = `${minutes}:${seconds}`;
    
      if (minutes <= 0 && seconds <=0) {
      clearInterval(timer25Function);
      is25ClockTicking = false;
      }
    }, 1000)
  }
  ```

Then I created a new function called countdown, which took my fiveminute function as an argument, which copied the above function, and then called the five minute function at the end:

``` Javascript

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
  }
  console.log(is25ClockTicking)
}, 
      1000);
timer5Function();   
}

```

The problem was, it didn't work!
I console.logged and realised that my issue was that my timer kept ticking (the function didn't finish) even after my timer had reached zero. In order for the next function to be executed, I needed to make sure that function finished first.
### Learnings

- CSS is hard!



## Problems and Solutions

- One issue I had was making it possible to click any button at any time and have it carried it out uninterfered, and responsive to the other buttons. For example, when I had all the buttons almost working, I realised that my pause button worked on my 5:00 countdown only if I clicked that first, if I clicked on my 'take a break' button to trigger a five minute countdown, any time except first, my pause and resume wouldn't work!

- One issue I had was that my buttons would jump if pressed twice, or I if I started the break time countdown whilst the work countodnw was still playing. The way I solved this was to add in a clearInterval() for each of the timers, at the beginning of each function:

``` Javascript
function timer5Function() {
  clearInterval(timing);
  clearInterval(timing2); //This stops our button to start running quickly, as it disables previous click if clicked again.
  is5ClockTicking = true;
  startTime(300);
  ```

  That way, the interval was cleared ready to play the function of the click.


  - Not enough buttons!
  I started off with two button: start and restart. I planned to toggle start and pause. However, as I needed this countdown to perform multiple functions, I ended up requiring multiple buttons! By the end I had:

 START, PAUSE, RESUME, BREAKTIME, RESET


 - The solution to the above problem, actually created another one for me in the shape of my resume button. As I had set my two timers - 5 mins and 25 mins - to clear the interval before they started, I couldn't link my resume button to setInterval() using them, as those functions reset the clock. I tried to re-write the functions within the resume function, leaving out clearInterval() at the beginning, but of course, that meant that that button ran into the same issue I had just solved.