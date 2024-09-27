let playBtn = document.getElementById("timer_play_button");
let pauseBtn = document.getElementById("timer_pause_button");
let resetBtn = document.getElementById("timer_reset_button");
let timeDisplay = document.getElementById("stopwatch_clock");
//let timeStamp_1 = document.getElementById("timeStamp_1");
let totalSecondsIndicator = document.getElementById("total_seconds_indicator");

let totalSeconds = 0;
let minute = 0;
let second = 0;
let millisecond = 0;

// let testStopBtn = document.getElementById("stopWatchButton_1"); // must be array
// testStopBtn.addEventListener("click", () => { // this must be accessed through array
//     let s = second;
//     let min = minute;
//     let ms = millisecond;

//     if (minute <= 9) {
//         min = "0"+min;
//     }
//     if (second <= 9) {
//         s = "0"+s;
//     }
//     if (millisecond <= 9) {
//         ms = "0"+ms;
//     }

//     timeStamp_1.value = `${min}:${s}:${ms}`;
// });

function twoChForTimeFormat() {
    let ms = millisecond;
    let s = second;
    let min = minute;    
    let ts = totalSeconds;

    if (minute <= 9) {
        min = "0"+min;
    }
    if (second <= 9) {
        s = "0"+s;
    }
    if (millisecond <= 9) {
        ms = "0"+ms;
    }

    timeDisplay.textContent = `${min}:${s}:${ms}`;
    totalSecondsIndicator.textContent = `${ts}`;
};

function stopWatch() {
    if (timer) {
        millisecond++;

        if (millisecond == 100) {
            second++;
            millisecond = 0;
        }

        if (second == 60) {
            minute++;
            second = 0;
        }

        if (minute == 60) {
            minute = 0;
            second = 0;
        }

        totalSeconds = minute * 60 + second;

        twoChForTimeFormat();
        setTimeout(stopWatch, 10);
    }
};

twoChForTimeFormat();
console.log(minute, second, millisecond);

//event listener
//
playBtn.addEventListener("click", () => {
    timer = true;
    stopWatch();
});

pauseBtn.addEventListener("click", () => {
    timer = false;
});

resetBtn.addEventListener("click", () => {
    timer = false;
    minute = 0;
    second = 0;
    millisecond = 0;
    totalSeconds = 0;
    twoChForTimeFormat();
});
//
//