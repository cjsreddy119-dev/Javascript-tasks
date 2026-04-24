let screen = document.getElementById('screen');

// Add values to the display
function appendToScreen(value) {
    screen.value += value;
}

// Clear the entire screen
function clearScreen() {
    screen.value = "";
}

// Delete the last character
function backspace() {
    screen.value = screen.value.slice(0, -1);
}

// Perform the calculation
function calculate() {
    try {
        // eval() takes the string (e.g., "7+2*3") and executes it as math
        screen.value = eval(screen.value);
    } catch (err) {
        alert("Invalid Input");
        clearScreen();
    }
}