var size;

function defineSize(f, t, n) {
    if (n == undefined) {
        onYourOwn();
    } else {
        size = n;
    }
    if (size != undefined) {
        generatePattern();
    }
}