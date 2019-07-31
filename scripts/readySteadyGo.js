var readySteadyGo = {

    remember: document.createElement("button"),
    back: document.createElement("button"),

    create : function (genColor) {
        var remember = readySteadyGo.remember;
        remember.setAttribute("class", "remember");
        readySteadyGo.changeButton("Ready, steady, go!", "rgb(" + Math.floor(genColor.r) + "," + Math.floor(genColor.g) + "," + Math.floor(genColor.b) + ")", "rgb(" + Math.floor(genSecondColor.r) + "," + Math.floor(genSecondColor.g) + "," + Math.floor(genSecondColor.b) + ")");
        setInterval(function () {
            if (window.innerWidth > 600) {
                remember.style.fontSize = "24px";
                remember.style.paddingTop = "7.5px";
                remember.style.paddingBottom = "7.5px";
            } else {
                remember.style.fontSize = "4vw";
                remember.style.paddingTop = "1.25%";
                remember.style.paddingBottom = "1.25%";
            }
        }, 10);
        document.body.appendChild(remember);

        remember.onclick = function () {
            if (gameStarted == false) {
                Timing();
                gameStarted = true;
                readySteadyGo.changeButton("Next pattern", "#eadd5d");
                for (var i = 0; i < document.getElementsByClassName("place").length; i++) {
                    document.getElementsByClassName("place")[i].style.backgroundColor = "white";
                    document.getElementsByClassName("place")[i].style.background = "white";
                }
            } else {
                changeBackground();
                startFromBeginning();
                omitted++;
                document.getElementById("omitted").innerHTML = "Omitted: " + omitted;
            }
        }
    },

    changeButton: function (text, color, secondColor) {
        readySteadyGo.remember.innerHTML = text;
        readySteadyGo.remember.style.backgroundColor = color;
        if (gradientOrNot == 1) {
            readySteadyGo.remember.style.background = "linear-gradient(" + genDeg + "deg, rgb(" + Math.floor(genColor.r) + "," + Math.floor(genColor.g) + "," + Math.floor(genColor.b) + "), rgb(" + Math.floor(genSecondColor.r) + "," + Math.floor(genSecondColor.g) + "," + Math.floor(genSecondColor.b) + "))";
        } else {
            readySteadyGo.remember.style.background = color;
        }
    },

    backFunction: function () {
        var back = readySteadyGo.back;
        back.setAttribute("class", "back");
        back.innerHTML = "Back";
        back.style.backgroundColor = "#dd0000";
        setInterval(function () {
            if (window.innerWidth > 600) {
                back.style.fontSize = "24px";
                back.style.paddingTop = "7.5px";
                back.style.paddingBottom = "7.5px";
            } else {
                back.style.fontSize = "4vw";
                back.style.paddingTop = "1.25%";
                back.style.paddingBottom = "1.25%";
            }
        }, 10);
        document.body.appendChild(back);

        back.onclick = function () {
            resetGame();
        }
    },

    otherFunctionsCreate: function () {
        for (var h = 0; h < 4; h++) {
            var divv = document.createElement("div");
            divv.setAttribute("id", "time");
            divv.style.display = "inline";
            divv.innerHTML = "Time: 00:00:00:000";
            setInterval(function () {
                if (window.innerWidth > 600) {
                    divv.style.marginTop = "15px";
                } else {
                    divv.style.marginTop = "2.5%";
                }
            }, 10);
            divv.style.fontFamily = "Dolce Vita";
            divv.style.position = "absolute";
            divv.style.left = "1%";
            divv.style.bottom = "2vw";
			divv.style.fontSize = "3vw";

            document.body.appendChild(divv);

            if (h == 3) {
                divv.innerHTML = "";
            }
            else if (h == 2) {
                divv.setAttribute("id", "done");
                divv.innerHTML = "Done: 0";
                divv.style.bottom = "8vw";
            } else if (h == 1) {
                divv.setAttribute("id", "omitted");
                divv.innerHTML = "Omitted: 0";
                divv.style.bottom = "5vw";
            }
        }
    }
}