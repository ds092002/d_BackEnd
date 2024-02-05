let currentDisplay = "0";
let resultDisplay = false;

function appendToDisplay(value) {
    if (currentDisplay === "0" || resultDisplay) {
        currentDisplay = value;
    } else {
        currentDisplay += value;
    }
    resultDisplay = false;
    updateDisplay();
}

function updateDisplay() {
    const displayElement = document.getElementById("display");
    displayElement.textContent = currentDisplay;
}

function calculateResult() {
    try {
        let result = eval(currentDisplay); // Declare the 'result' variable
        currentDisplay += "\n" + result.toString();
        updateDisplay();
    } catch (error) {
        currentDisplay += "\nError";
        updateDisplay();
    }
    resultDisplay = true;
}


function clearLastElement() {
    currentDisplay = currentDisplay.slice(0, -1);
    if (currentDisplay.trim() === "") {
        currentDisplay = "0";
    }
    updateDisplay();
}


function clearDisplay() {
    currentDisplay = "0";
    updateDisplay();
}

window.addEventListener("resize", handleOverflow);
handleOverflow();