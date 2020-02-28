// Countdown Clock with Pause and Resume
// https://codepen.io/yaphi1/pen/QbzrQP

// 10 minutes from now
var time_in_minutes = 10;
var current_time = Date.parse(new Date());
var deadline = new Date(current_time + time_in_minutes * 60 * 1000);

function time_remaining(endtime) {
  var t = Date.parse(endtime) - Date.parse(new Date());
  var seconds = Math.floor((t / 1000) % 60);
  var minutes = Math.floor((t / 1000 / 60) % 60);
  var hours = Math.floor((t / (1000 * 60 * 60)) % 24);
  var days = Math.floor(t / (1000 * 60 * 60 * 24));
  return {
    total: t,
    days: days,
    hours: hours,
    minutes: minutes,
    seconds: seconds
  };
}

var timeinterval;
function run_clock(id, endtime) {
  var clock = document.getElementById(id);
  function update_clock() {
    var t = time_remaining(endtime);
    clock.innerHTML = "minutes: " + t.minutes + "<br>seconds: " + t.seconds;
    if (t.total <= 0) {
      clearInterval(timeinterval);
    }
  }
  update_clock(); // run function once at first to avoid delay
  timeinterval = setInterval(update_clock, 1000);
}

run_clock("clockdiv", deadline);

var paused = false; // is the clock paused?
var time_left; // time left on the clock when paused

function pause_clock() {
  if (!paused) {
    paused = true;
    clearInterval(timeinterval); // stop the clock
    time_left = time_remaining(deadline).total; // preserve remaining time
  }
}

function resume_clock() {
  if (paused) {
    paused = false;

    // update the deadline to preserve the amount of time remaining
    deadline = new Date(Date.parse(new Date()) + time_left);

    // start the clock
    run_clock("clockdiv", deadline);
  }
}

// handle pause and resume button clicks
document.getElementById("pause").onclick = pause_clock;
document.getElementById("resume").onclick = resume_clock;

// ============================ Simple timer with pause & restart ================================
// https://jsfiddle.net/Mottie/sML8b/
/*
var time = document.querySelector(".time");
var restartButton = document.querySelector(".restart");
var pauseButton = document.querySelector(".pause");

var count = 0;
var timer;
var paused = false;

counter = function() {
  count++;
  if (count > 100) {
    count = 1;
  }
  time.innerHTML = count; //.html(count);
  timer = setTimeout(function() {
    counter();
  }, 1000);
};

counter();

function handleRestart(event) {
  clearTimeout(timer);
  count = 0;
  paused = false;
  counter();
}

function handlePause(event) {
  clearTimeout(timer);
  paused = !paused;
  if (!paused) {
    counter();
  }
}

restartButton.addEventListener("click", handleRestart);

pauseButton.addEventListener("click", handlePause);
*/

/*
$("button").on("click", function() {
  clearTimeout(timer);
  if ($(this).hasClass("restart")) {
    count = 0;
    paused = false;
    counter();
  } else {
    paused = !paused;
    if (!paused) {
      counter();
    }
  }
});
*/
// ===================================================================================================
// ================ first attempt =========
/*
var timeoutHandle;
// var counter = document.getElementById("timer");

function countdown(minutes, seconds = 0) {
  function tick() {
    var counter = document.getElementById("timer");
    counter.innerHTML = `${minutes}:${seconds < 10 ? "0" : ""} ${seconds}`;
    seconds--;
    if (seconds >= 0) {
      timeoutHandle = setTimeout(tick, 1000);
    } else {
      if (minutes >= 1) {
        // countdown(mins-1);   never reach “00″ issue solved:Contributed by Victor Streithorst
        setTimeout(function() {
          countdown(minutes - 1, 59);
        }, 1000);
      }
    }
  }
  tick();
}

// countdown(1, 30);
countdown(25);
*/

// counter.innerHTML = timeoutHandle;
/*
function displayTime(time) {
  for (let i = time - 1; i >= 0; i--) {
    for (let j = 59; j >= 0; j--) {
      console.log(`${i}:${j}`);
    }
  }
}

displayTime(2);
*/
