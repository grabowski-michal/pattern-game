var Interval;

function Timing() {
    data2 = new Date();
    milisecond = beforeTime.milisecond;
    second = beforeTime.second;
    minute = beforeTime.minute;
    hour = beforeTime.hour;
    Interval = setInterval(Timer, 10);
}

function stopTimer() {
    clearInterval(Interval);
    beforeTime.milisecond = saveTime.milisecond;
    beforeTime.second = saveTime.second;
    beforeTime.minute = saveTime.minute;
    beforeTime.hour = saveTime.hour;
}

function Timer() {
    string = "";
    show_time = "";
    data = new Date();

    if ((data.getMilliseconds() + beforeTime.milisecond) >= 1000) {
        data.setMilliseconds(data.getMilliseconds() + beforeTime.milisecond - 1000);
        data.setSeconds(data.getSeconds() + 1);
    } else {
        data.setMilliseconds(data.getMilliseconds() + beforeTime.milisecond);
    }

    if ((data.getSeconds() + beforeTime.second) >= 60) {
        data.setSeconds((data.getSeconds() + beforeTime.second) - 60);
        data.setMinutes(data.getMinutes() + 1);
    } else {
        data.setSeconds((data.getSeconds() + beforeTime.second));
    }

    if ((data.getMinutes() + beforeTime.minute) >= 60) {
        data.setMinutes((data.getMinutes() + beforeTime.minute) - 60);
        data.setHours(data.getHours() + 1);
    } else {
        data.setMinutes((data.getMinutes() + beforeTime.minute));
    }

    tempHour = data.getHours() + beforeTime.hour;

    if (data.getMilliseconds() >= data2.getMilliseconds()) {
        milisecond = (data.getMilliseconds() - data2.getMilliseconds());
        if (data.getSeconds() >= data2.getSeconds()) {
            second = (data.getSeconds() - data2.getSeconds());
            if (data.getMinutes() >= data2.getMinutes()) {
                minute = (data.getMinutes() - data2.getMinutes());
                hour = (tempHour - data2.getHours());
            } else if (data.getMinutes() < data2.getMinutes()) {
                minute = (60 - data2.getMinutes()) + data.getMinutes();
            }
        } else if (data.getSeconds() < data2.getSeconds()) {
            second = (60 - data2.getSeconds()) + data.getSeconds();
        }
    } else {
        milisecond = (1000 - data2.getMilliseconds()) + data.getMilliseconds();
    }

    saveTime.milisecond = milisecond;
    saveTime.second = second;
    saveTime.minute = minute;
    saveTime.hour = hour;

    if (hour < 10) {
        show_time += "0" + hour + ":";
    } else {
        show_time += hour + ":";
    }
    if (minute < 10) {
        show_time += "0" + minute + ":";
    } else {
        show_time += minute + ":";
    }
    if (second < 10) {
        show_time += "0" + second + ".";
    } else {
        show_time += second + ".";
    }
    if (milisecond < 10) {
        show_time += "00" + milisecond;
    } else if (milisecond > 10 && milisecond < 100) {
        show_time += "0" + milisecond;
    } else {
        show_time += milisecond;
    }
    // console.log(show_time);
    document.getElementById("time").innerHTML = "Time: " + show_time;
}