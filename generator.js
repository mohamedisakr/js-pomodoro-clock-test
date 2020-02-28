const dayInput = document.querySelector("#day");
const monthInput = document.querySelector("#month");
const yearInput = document.querySelector("#year");
const hourInput = document.querySelector("#hour");
const minuteInput = document.querySelector("#minute");
const secondInput = document.querySelector("#second");
const createButton = document.querySelector("#createButton");

document.addEventListener("DOMContentLoaded", handleDOMContentLoaded);

function handleDOMContentLoaded() {
  createButton.addEventListener("click", generateClock);
}

function getInputs() {
  var today = new Date();
  // console.log(today);
  today.setHours(23, 59, 59, 59);
  let year = yearInput.value || today.getFullYear();
  let month = monthInput.value - 1 || today.getMonth();
  let day = dayInput.value || today.getDate();
  // console.log(`day ${day}`);

  let hour = hourInput.value || today.getHours(); // 23; //
  let minute = minuteInput.value || today.getMinutes(); // 59; //
  let second = secondInput.value || today.getSeconds(); //59; //
  let deadline = new Date(year, month, day, hour, minute, second);
  // console.log(`deadline ${deadline}`);
  console.log(`year: ${year} month: ${month} day: ${day}`);
  return deadline;
}

function generateClock() {
  let deadline = getInputs();
  let now = new Date();
  var diff = deadline - now;
  var days = Math.floor(diff / (1000 * 60 * 60 * 24));
  var hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((diff % (1000 * 60)) / 1000);

  console.log(
    `days: ${days} hours: ${hours} minutes: ${minutes} seconds: ${seconds} `
  );
}

function createCountDown() {
  var now = new Date(); //.getTime();
  deadline = getInputs();
  console.log(`now is ${now}`);
  var diff = deadline - now;
  var days = Math.floor(diff / (1000 * 60 * 60 * 24));
  var hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((diff % (1000 * 60)) / 1000);

  console.log(
    `days: ${days} hours: ${hours} minutes: ${minutes} seconds: ${seconds} `
  );
}

/*
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
  */

// year = year || today.getFullYear();
// month = month || today.getMonth();
// day = day || today.getUTCDate();
