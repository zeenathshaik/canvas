// Get references to the new controls
const colorPicker = document.getElementById("color-picker");
const lineWidthSlider = document.getElementById("line-width-slider");
const clearButton = document.getElementById("clear-button");
const backgroundColorPicker = document.getElementById("background-color-picker");
const setBackgroundButton = document.getElementById("set-background-button");



// Add event listeners for the new controls
colorPicker.addEventListener("input", () => {
    changeColor(colorPicker.value);
});

lineWidthSlider.addEventListener("input", () => {
    changeLineWidth(lineWidthSlider.value);
});

clearButton.addEventListener("click", () => {
    clearCanvas();
});
backgroundColorPicker.addEventListener("input", () => {
    changeBackgroundColor(backgroundColorPicker.value);
});

setBackgroundButton.addEventListener("click", () => {
    setBackgroundColor(backgroundColorPicker.value);
});


// ... (previous code) ...

// Change the canvas background color
function changeBackgroundColor(color) {
    canvas.style.backgroundColor = color;
}
function setBackgroundColor(color) {
    canvas.style.backgroundColor = color;
}



// ... (previous code) ...
// Get the canvas element and its 2d context
const canvas = document.getElementById("paint-canvas");
const ctx = canvas.getContext("2d");

// Set up initial drawing properties
ctx.strokeStyle = "#000"; // Initial stroke color
ctx.lineWidth = 2; // Initial line width
ctx.lineCap = "round"; // Rounded line ends

let painting = false; // Flag to track if the user is painting

// Event listeners for mouse and touch events
canvas.addEventListener("mousedown", startPaint);
canvas.addEventListener("mouseup", endPaint);
canvas.addEventListener("mousemove", paint);
canvas.addEventListener("touchstart", startPaint);
canvas.addEventListener("touchend", endPaint);
canvas.addEventListener("touchmove", paint);

// Start painting
function startPaint(event) {
    painting = true;
    paint(event);
}

// Stop painting
function endPaint() {
    painting = false;
    ctx.beginPath();
}

// Paint on the canvas
function paint(event) {
    if (!painting) return;

    // For touch events, get the first touch
    if (event.touches) {
        event = event.touches[0];
    }

    ctx.lineTo(event.clientX - canvas.getBoundingClientRect().left, event.clientY - canvas.getBoundingClientRect().top);
    ctx.stroke();
    ctx.beginPath();
    ctx.moveTo(event.clientX - canvas.getBoundingClientRect().left, event.clientY - canvas.getBoundingClientRect().top);
}

// Clear the canvas
function clearCanvas() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
}

// Change stroke color
function changeColor(color) {
    ctx.strokeStyle = color;
}

// Change line width
function changeLineWidth(width) {
    ctx.lineWidth = width;
}


// Clear the canvas
function clearCanvas() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
}

// Change stroke color
function changeColor(color) {
    ctx.strokeStyle = color;
}

// Change line width
function changeLineWidth(width) {
    ctx.lineWidth = width;
}
