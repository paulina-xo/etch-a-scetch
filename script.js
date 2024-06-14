let DEFAULT_COLOR = "#000000";
let currentMode = 'draw';
let drawingOn = false;

function main() {

    displayTime();
    const drawButton = document.getElementById("draw");
    drawButton.addEventListener("click", function() { setMode('draw'); });

    const rainbowButton = document.getElementById("rainbow");
    rainbowButton.addEventListener("click", function() { setMode('rainbow'); });

    const eraseButton = document.getElementById("eraser");
    eraseButton.addEventListener("click", function() { setMode('erase'); });

    const clearButton = document.getElementById("clear");
    clearButton.addEventListener("click", clearAll);
    
    getSize();
}

function getSize() {
    let gridSlider = document.getElementById("gridSlider").value;
    const output = document.getElementById("value");
    output.innerHTML = gridSlider;
    changeSize(gridSlider);
}

function changeSize(grid) {
    const paper = document.getElementById("paper");
    paper.innerHTML = "";
    let squareSize = 640 / grid;

    for (let i = 0; i < grid * grid; i++) {
        const square = document.createElement("div");
        square.className = "square";
        square.style.minWidth = `${squareSize}px`;
        square.style.minHeight = `${squareSize}px`;
        paper.appendChild(square);

        square.addEventListener("mousedown", function(event) {
            drawingOn = true;
            startDrawing(square);
        });

        square.addEventListener("mousemove", function(event) {
            if (drawingOn) {
                continueDrawing(square);
            }
        });

        square.addEventListener("mouseup", function(event) {
            drawingOn = false;
        });
    }
}

function startDrawing(square) {
    switch (currentMode) {
        case 'draw':
            square.style.backgroundColor = "black";
            break;
        case 'rainbow':
            square.style.backgroundColor = `#${randomColor()}`;
            break;
        case 'erase':
            square.style.backgroundColor = "rgb(243, 242, 233)";
            break;
    }
}

function continueDrawing(square) {
    switch (currentMode) {
        case 'draw':
            square.style.backgroundColor = "black";
            break;
        case 'rainbow':
            square.style.backgroundColor = `#${randomColor()}`;
            break;
        case 'erase':
            square.style.backgroundColor = "rgb(243, 242, 233)";
            break;
    }
}

function setMode(mode) {
    currentMode = mode;
}

function randomColor() {
    let colors = "ABCDEF0123456789";
    let color = "";

    for (let i = 0; i < 6; i++) {
        color += colors.charAt(Math.floor(Math.random() * colors.length));
    }

    return color;
}

function clearAll() {
    const paper = document.getElementById("paper");
    paper.innerHTML = "";
    getSize();
}

main();