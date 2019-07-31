function generatePattern() {
    genColor = { r: Math.random() * 235, g: Math.random() * 235, b: Math.random() * 235 };
    genSecondColor = { r: Math.random() * 235, g: Math.random() * 235, b: Math.random() * 235 };
    genHowMany = Math.floor((Math.random() * parseInt((((parseInt(size)) + (parseInt(size) - 3)) * 2) - (parseInt(size)))) + parseInt(parseInt(size) + 1));
    genDeg = Math.floor(Math.random() * 360);
    // console.log("genHowMany: " + genHowMany);
    gradientOrNot = Math.floor((Math.random() * 2));
    gameStarted = false;

    var div = document.createElement("div");
    div.setAttribute("class", "game");
    div.style.width = "92vw";
    div.style.height = "90vw";
    div.style.maxWidth = "88vh";
    div.style.maxHeight = "88vh";
    div.style.paddingRight = "0.75%";
    div.style.paddingLeft = "0.75%";
    div.style.paddingTop = "0.75%";
    div.style.paddingBottom = "0.75%";
    div.style.borderRadius = "2.55%";
    document.body.appendChild(div);

    for (var i = 0; i < size; i++) {
        for (var j = 0; j < size; j++) {
            var element = document.createElement("div");
            element.setAttribute("class", "place");
            element.style.margin = (10 / size) + "%";
            element.style.width = (80 / size) + "%";
            element.style.height = (80 / size) + "%";
            element.style.maxWidth = (80 / size) + "vh";
            element.style.maxHeight = (80 / size) + "vh";
            element.style.borderRadius = "20%";
            element.on = "No";
            element.paint = "No";
            element.onclick = function (e) {
                if (gameStarted == true) {
                    if (e.target.paint != "Yes") {
                        e.target.style.backgroundColor = "rgb(" + Math.floor(genColor.r) + "," + Math.floor(genColor.g) + "," + Math.floor(genColor.b) + ")";
                        if (gradientOrNot == 1) {
                            e.target.style.background = "linear-gradient("+genDeg+"deg, rgb(" + Math.floor(genColor.r) + "," + Math.floor(genColor.g) + "," + Math.floor(genColor.b) + "), rgb(" + Math.floor(genSecondColor.r) + "," + Math.floor(genSecondColor.g) + "," + Math.floor(genSecondColor.b) + "))";
                        }
                        e.target.paint = "Yes";
                    } else {
                        e.target.style.backgroundColor = "white";
                        e.target.style.background = "white";
                        e.target.paint = "No";
                    }
                    checker = false;
                    for (var i = 0; i < document.getElementsByClassName("place").length; i++) {
                        if (document.getElementsByClassName("place")[i].on != document.getElementsByClassName("place")[i].paint) {
                            checker = true;
                        }
                    }
                    if (checker == false) {
                        done++;
                        document.getElementById("done").innerHTML = "Done: " + done;
                        changeBackground();
                        startFromBeginning();
                    }
                }
            }
            div.appendChild(element);
        }
    }

    randomGenerate();
    readySteadyGo.otherFunctionsCreate();
    readySteadyGo.create(genColor);
    readySteadyGo.backFunction();
}

function startFromBeginning () {
    gameStarted = false;
    stopTimer();
    for (var i = 0; i < document.getElementsByClassName("place").length; i++) {
        document.getElementsByClassName("place")[i].on = "No";
        document.getElementsByClassName("place")[i].paint = "No";
        document.getElementsByClassName("place")[i].style.backgroundColor = "white";
        document.getElementsByClassName("place")[i].style.background = "white";
    }
    generateDigits();
    readySteadyGo.changeButton("Ready, steady, go!", "rgb(" + Math.floor(genColor.r) + "," + Math.floor(genColor.g) + "," + Math.floor(genColor.b) + ")", "rgb(" + Math.floor(genSecondColor.r) + "," + Math.floor(genSecondColor.g) + "," + Math.floor(genSecondColor.b) + ")");
    randomGenerate();
}

function randomGenerate() {
    do {
        var random = Math.floor((Math.random() * document.getElementsByClassName("game")[0].childNodes.length));
        if (document.getElementsByClassName("place")[random].on == "No") {
            document.getElementsByClassName("place")[random].on = "Yes";
            document.getElementsByClassName("place")[random].style.backgroundColor = "rgb(" + Math.floor(genColor.r) + "," + Math.floor(genColor.g) + "," + Math.floor(genColor.b) + ")";
            if (gradientOrNot == 1) {
                document.getElementsByClassName("place")[random].style.background = "linear-gradient(" + genDeg + "deg, rgb(" + Math.floor(genColor.r) + "," + Math.floor(genColor.g) + "," + Math.floor(genColor.b) + "), rgb(" + Math.floor(genSecondColor.r) + "," + Math.floor(genSecondColor.g) + "," + Math.floor(genSecondColor.b) + "))";
            }
            genHowMany--;
        }
    } while (genHowMany > 0)
}

function generateDigits() {
    genColor = { r: Math.random() * 235, g: Math.random() * 235, b: Math.random() * 235 };
    genSecondColor = { r: Math.random() * 235, g: Math.random() * 235, b: Math.random() * 235 };
    genHowMany = Math.floor((Math.random() * parseInt((((parseInt(size)) + (parseInt(size) - 3)) * 2) - (parseInt(size)))) + parseInt(parseInt(size) + 1));
    gradientOrNot = Math.floor((Math.random() * 2));
    genDeg = Math.floor(Math.random() * 360);
}