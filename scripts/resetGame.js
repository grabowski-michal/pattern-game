done = 0;
omitted = 0;

saveTime = {
    milisecond: 0,
    second: 0,
    minute: 0,
    hour: 0,
}

beforeTime = {
    milisecond: 0,
    second: 0,
    minute: 0,
    hour: 0,
}

function resetGame() {
    done = 0;
    omitted = 0;
    size = undefined;
    gameStarted = false;

    startFromBeginning();
    saveTime = {
        milisecond: 0,
        second: 0,
        minute: 0,
        hour: 0,
    }

    beforeTime = {
        milisecond: 0,
        second: 0,
        minute: 0,
        hour: 0,
    }
    document.body.innerHTML = "";
    chooseDifficulty();
}