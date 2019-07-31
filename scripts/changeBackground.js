function changeBackground() {
    var bgnColor = { r: Math.random() * 240, g: Math.random() * 240, b: Math.random() * 240 };
    var bgnSecondColor = { r: Math.random() * 240, g: Math.random() * 240, b: Math.random() * 240 };

    document.body.style.background = "linear-gradient(to left, rgb(" + Math.floor(bgnColor.r) + "," + Math.floor(bgnColor.g) + "," + Math.floor(bgnColor.b) + "), rgb(" + Math.floor(bgnSecondColor.r) + "," + Math.floor(bgnSecondColor.g) + "," + Math.floor(bgnSecondColor.b) + "))";

    // console.log(rgbToHsl(bgnColor.r, bgnColor.g, bgnColor.b));

    if (rgbToHsl(bgnColor.r, bgnColor.g, bgnColor.b) < 0.4) {
        document.body.style.color = "white";
    } else {
        document.body.style.color = "black";
    }
}



// http://stackoverflow.com/questions/2353211/hsl-to-rgb-color-conversion

function rgbToHsl(r, g, b) {
    r /= 255, g /= 255, b /= 255;
    var max = Math.max(r, g, b), min = Math.min(r, g, b);
    var h, s, l = (max + min) / 2;

    if (max == min) {
        h = s = 0; // achromatic
    } else {
        var d = max - min;
        s = l > 0.5 ? d / (2 - max - min) : d / (max + min);
        switch (max) {
            case r: h = (g - b) / d + (g < b ? 6 : 0); break;
            case g: h = (b - r) / d + 2; break;
            case b: h = (r - g) / d + 4; break;
        }
        h /= 6;
    }

    return l;
}