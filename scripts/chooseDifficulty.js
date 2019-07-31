function chooseDifficulty() {
    var container = document.createElement("div");
    container.innerHTML = "Choose difficulty level.<br/>";
    container.setAttribute("class", "difContainer");
    container.style.margin = "0 auto";
    container.style.textAlign = "center";
    container.style.lineHeight = "1";
    container.style.marginTop = "5vh";
    container.style.fontSize = "5vw";
    document.body.appendChild(container);

    var difficulties = [{ color: "#3b91ed", text: "Very easy", difficulty: 3, }, { color: "#54c3fb", text: "Easy", difficulty: 4, }, { color: "#ff8d43", text: "Medium", difficulty: 5, }, { color: "#cfba48", text: "Hard", difficulty: 6, }, { color: "#f36f48", text: "Very hard", difficulty: 8, }, { color: "#ee0000", text: "Impossibru", difficulty: 10, }, { color: "#946e4a", text: "Custom" }];

    for (var i = 0; i < difficulties.length; i++) {
        var button = document.createElement("button");
        button.innerHTML = difficulties[i].text;
        button.style.backgroundColor = difficulties[i].color;
        button.setAttribute("class", "dif");
        button.style.fontSize = "4vw";
        button.on = difficulties[i].difficulty;
        container.appendChild(button);
        container.appendChild(document.createElement("br"));
    }

    for (var i = 0; i < document.getElementsByClassName("dif").length; i++) {
        document.getElementsByClassName("dif")[i].onclick = function (e) {
            document.getElementsByClassName("difContainer")[0].remove(container.selectedIndex);
            defineSize(3, 10, e.target.on);
        }
    }
}