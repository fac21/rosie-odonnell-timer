## My Process

### Design

1. To begin with, I mocked up what my design would look like using [Figma](https://www.figma.com/) (I find Figma to be more intuitive than Sketch). I went for simple design, using boxes within boxes, to practice my use of containers in HTML/ CSS.

Here's the mock-up I created on Figma:

![](figma.png)

I also decided that I wanted to include the following features:

- At the start of the 5 minute break have celebration falling from top of screen.

- At the start of the 5 minute break have the tomatoes shake and a noise made.

- When the start ‘start’ is clicked: have 'start' change to ‘pause’.

<br />
<br />

### Writing the code


2. Next up, I got all of my elements onto my page, but adding them into my HTML file.

I set the largest outer box as my main div, placing the smaller box inside it in a simple div tag, as I didn't think it required a semantic tag:

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