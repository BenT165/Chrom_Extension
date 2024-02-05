document.addEventListener("DOMContentLoaded", function() {
    
//string representing the current time
let time = "";

//div with the timer
let timer = document.getElementById("currentTime");

//whether or not to display seconds in time
let precision = false;

timer.addEventListener("mouseover", toggle, false);
timer.addEventListener("mouseout", toggle, false);

function getTimeMinutes() {
    var today = new Date();
    var hours = today.getHours();
    var minutes = today.getMinutes();

    hours = pad_zero(hours);
    minutes = pad_zero(minutes);

    time = hours + ":" + minutes;
    timer.textContent = time;
}

function getTimeSeconds() {
    var today = new Date();
    var hours = today.getHours();
    var minutes = today.getMinutes();
    var seconds = today.getSeconds();

    hours = pad_zero(hours);
    minutes = pad_zero(minutes);
    seconds = pad_zero(seconds);

    time = hours + ":" + minutes + ":" + seconds;
    timer.textContent = time;
}

// pad zeros before the time value if necessary
function pad_zero(val) {
    if (val < 10) {
        return val.toString().padStart(2, '0');
    } else {
        return val.toString();
    }
}

// figure out how to format the time
function decide() {
    if (precision == false) {
        getTimeMinutes();
    } else {
        getTimeSeconds();
    }
}

function toggle() {
    precision = !precision;
}

// get time every 1000 milliseconds
setInterval(decide, 1000);


});