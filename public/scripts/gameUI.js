
const button = document.getElementById("mainClickButton");
const buttonFilling = document.getElementById("fillButton");

let clickValue = 10;
let filledCircles = 0;
let clickIncrease = 100 / (filledCircles+3);

button.addEventListener("click", () => {
    clickValue += clickIncrease;
    if (clickValue >= 100) {
        clickValue = 5;
        filledCircles++;
        clickIncrease = 100 / (filledCircles+3)
    }
    resizeFilling()
});

function resizeFilling(){
    buttonFilling.style.width = clickValue + "%";
    buttonFilling.style.height = clickValue + "%";
}

resizeFilling()

