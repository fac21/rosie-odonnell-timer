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

I wanted to put my new CSS learingss into practice, so focused on including center class and stack class in my CSS file:

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

We can apply multiple classes to a single element in HTML, by separating the class names with a comma:

```HTML
<div main id="outer-box" class="center, stack">
```

### CSS Problems and Solutions

I found writing the CSS very difficult this week, and it has been a good test of my skills and understanding of how to use different classes.

I have two issues which are yet to be resolved:

1. The height of the page is currently unresponsive - I need to add in some max-height styling.
2. I have not mastered the use of the center class and its variations to control layout - currently, I have relied on media queries and styling individual elements to make sure the page works on all screens.


## Making my page talk - Javascript

I found the Javascript element of this workshop extremely challenging. This was my first experience working with play/resume/reset buttons, however once I had started to get the hang of things, I found this work really rewarding.

I know that my code could do with **a lot** of improvements, especially simplifying and shortening.

## Problems and Solutions

1. I worked hard on getting a callback function to work this week, in order to call the 5 minute countdown function once the 25 minute countdown function had completed. However, ultimately, I wasn't able to get it working.

I started by creating two separate functions. Here's one of them:

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

In the end, with some help from the wonderful [Craig](https://github.com/Tiarama) I resolved to create an if statement and place my new function within that. It was a shame not to use a callback in this challenge, but it was some good thinking practice on how to use it.

``` Javascript

if (minutes <= 0 && seconds <=0) {
      playAudioBreak();
      timer5Function();    // Second function: triggered if our countdown has reached zero
      clearInterval(timing); // Clear the timing function
      is25ClockTicking = false;

  ```

1. Another issue I had was making it possible to click any button at any time and have it carried it out uninterfered, and responsive to the other buttons. For example, when I had all the buttons almost working, I realised that my pause button worked on my 5:00 countdown only if I clicked that first, but if I clicked on my 'take a break' button to trigger a five minute countdown, any time except first, my pause and resume wouldn't work!

Here's what the code looked like:

``` Javascript
function pauseButton() {
  if (is25ClockTicking) {
    clearInterval(timer25Function)
}   else {
      clearInterval(timer5Function)
    } 
}
```

My problem was that I wasn't using the clearInterval() function correctly. Rather than the argument being timer25Function, I needed the argument to a variable which the function *within* that function is assigned to (I've cut out some of the code in the function for readability here ):

``` Javascript
function timer25Function() {
  
  setInterval(function() { 
        if(seconds > 0) {
          seconds--;
          } else if(minutes > 0 && seconds <= 0) {
              seconds = 59;
              minutes--;
        }


- One issue I had was that my buttons would jump if pressed twice, or I if I started the break time countdown whilst the work countodnw was still playing. The way I solved this was to add in a clearInterval() for each of the timers, at the beginning of each function:

``` Javascript
function timer5Function() {
  clearInterval(timing);
  clearInterval(timing2); //This stops our button to start running quickly, as it disables previous click if clicked again.
  is5ClockTicking = true;
  startTime(300);
  ```

  That way, the interval was cleared ready to play the function of the click.


 1. The solution to the above problem, actually created another one for me in the shape of my resume button. As I had set my two timers - 5 mins and 25 mins - to clear the interval before they started, I couldn't link my resume button to setInterval() using them, as those functions reset the clock. I tried to re-write the functions within the resume function, leaving out clearInterval() at the beginning, but of course, that meant that that button ran into the same issue I had just solved.

 1.  Not enough buttons!
  I started off with two button: start and restart. I planned to toggle start and pause. However, as I needed this countdown to perform multiple functions, I ended up requiring multiple buttons! By the end I had:

 START, PAUSE, RESUME, BREAKTIME, RESET



 ## Other things I've learnt

 I've really understood the powers of commits to Github this week, I've gone back through commits to start again when I've coded myself into more bugs than before, or when I was looking for certain piece of CSS styling. I know everyone raves about how good it is to access all your saves, but now I finally *get* it!

