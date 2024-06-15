let currentMode = 'draw';
let drawingOn = false;

function main() {

    // EVENT LISTENERS FOR DRAWING
    const drawButton = document.getElementById("draw");
    drawButton.addEventListener("click", function() { setMode('draw'); });

    const rainbowButton = document.getElementById("rainbow");
    rainbowButton.addEventListener("click", function() { setMode('rainbow'); });

    const eraseButton = document.getElementById("eraser");
    eraseButton.addEventListener("click", function() { setMode('erase'); });

    // EVENT LISTENER FOR CLEARALL
    const clearButton = document.getElementById("clear");
    clearButton.addEventListener("click", clearAll);
    
    // GRID SIZE
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

        // START DRAWING ON MOUSEDOWN
        square.addEventListener("mousedown", function(event) { drawingOn = true; drawing(square); });

        // CONTINUE ON MOUSEMOVE
        square.addEventListener("mousemove", function(event) { if (drawingOn) { drawing(square); }});

        // STOP ON MOUSEUP
        square.addEventListener("mouseup", function(event) { drawingOn = false; });
    }
}

function drawing(square) {
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