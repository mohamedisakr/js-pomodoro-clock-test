const demo = document.querySelector("#demo");
const daySpan = document.querySelector("#day");
const hourSpan = document.querySelector("#hour");
const minuteSpan = document.querySelector("#minute");
const secondSpan = document.querySelector("#second");

// var deadline = new Date("April 28, 2020 00:00:00"); //(2020, 4, 28, 0, 0, 0); //("April 23, 2020 00:00:00").getTime();

var x = setInterval(createCountDown, 1000);

function createCountDown() {
  let deadline = new Date("Feb 28, 2020 00:00:00");
  console.log(`deadline is ${deadline}`);
  let now = new Date(); //.getTime();
  console.log(`now is ${now}`);

  var diff = deadline - now;
  var days = Math.floor(diff / (1000 * 60 * 60 * 24));
  var hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((diff % (1000 * 60)) / 1000);

  daySpan.innerHTML = days;
  hourSpan.innerHTML = hours;
  minuteSpan.innerHTML = minutes;
  secondSpan.innerHTML = seconds;

  if (diff < 0) {
    clearInterval(x);
    demo.innerHTML = "TIME UP";
    daySpan.innerHTML = "0";
    hourSpan.innerHTML = "0";
    minuteSpan.innerHTML = "0";
    secondSpan.innerHTML = "0";
  }
}

/*
const timerDemo = document.querySelector("#timerDemo");

// 1. Set a valid end date.
let deadline = new Date("April 23, 2020 00:00:00").getTime();
let now = new Date().getTime();

console.log(deadline);
console.log(now);

// 2. Calculate the time remaining
let diff = deadline - now;

let days = Math.floor(diff / (1000 * 24 * 60 * 60));
// console.log(`# of days ${days}`);

let hours = Math.floor((diff % (1000 * 24 * 60 * 60)) / (1000 * 60 * 60));
// console.log(`# of hours ${hours}`);

let minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
// console.log(`# of minutes ${minutes}`);

let seconds = Math.floor((diff % (1000 * 60)) / 1000);
// console.log(`# of seconds ${seconds}`);

// 3. Convert the time to a usable format.
timerDemo.innerHTML = `${days} d ${hours} h ${minutes} m ${seconds} s`;

// 4. Output the clock data as a reusable object.
if(diff<0){
    clearInterval()
    timerDemo.innerHTML='EXPIRED'
}

// 5. Display the clock on the page, and stop the clock when it reaches zero.
*/
