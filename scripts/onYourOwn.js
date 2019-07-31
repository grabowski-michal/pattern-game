function onYourOwn() {
    var range = document.createElement("input");
    range.setAttribute("class", "range");
    range.type = "range";
    range.max = 15;
    range.min = 3;
    range.value = 6;

    var container = document.createElement("div");
    container.setAttribute("class", "difContainer");

    var text = document.createElement("div");
    text.innerHTML = "Choose your own size: " + range.value + "<br/>";

    var button = document.createElement("button");
    button.setAttribute("class", "done");
    button.innerHTML = "Done";

    var back = document.createElement("button");
    back.setAttribute("class", "back");
    back.innerHTML = "Back";

    document.body.appendChild(container);
    container.appendChild(text);
    container.appendChild(range);
    container.appendChild(document.createElement("br"));
    container.appendChild(button);
    document.body.appendChild(back);

    range.oninput = function () {
        text.innerHTML = "Choose your own size: " + range.value + "<br/>";
    }

    back.onclick = function () {
        document.getElementsByClassName("difContainer")[0].remove(container.selectedIndex);
        document.getElementsByClassName("back")[0].remove(container.selectedIndex);
        chooseDifficulty();
    }

    button.onclick = function () {
        defineSize(3, 15, range.value);
        document.getElementsByClassName("difContainer")[0].remove(container.selectedIndex);
        document.getElementsByClassName("back")[0].remove(container.selectedIndex);
    }
}