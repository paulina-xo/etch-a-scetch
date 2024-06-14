/*
function main() {

    generateSmall();

    // PAPER
    const paper = document.getElementById("paper");

    // TOOLS
    const colorPicker = document.getElementById("picker");
    const drawingPen = document.getElementById("draw");
    const drawRainbow = document.getElementById("rainbow");
    const eraser = document.getElementById("eraser");
    const clearPaper = document.getElementById("clear");

    // EVENT LISTENERS FOR TOOLS
    if (colorPicker) colorPicker.addEventListener("click", function() { showColorPicker(); });
    if (drawingPen) drawingPen.addEventListener("click", function() { usePickedColor(); });
    if (drawRainbow) drawRainbow.addEventListener("click", function() { randomizeColor(); });
    if (eraser) eraser.addEventListener("click", function() { drawWhite(); });
    if (clearPaper) clearPaper.addEventListener("click", function() { clearAll(); });

    // SIZES
    const small = document.getElementById("16");
    const medium = document.getElementById("32");
    const large = document.getElementById("64");

    // EVENT LISTENERS FOR SIZES
    if (small) small.addEventListener("click", function() { generateSmall(); });
    if (medium) medium.addEventListener("click", function() { generateMedium(); });
    if (large) large.addEventListener("click", function() { generateLarge(); });
}

function generateSmall() {
    const paper = document.getElementById("paper");
    const amount = 256;

    paper.innerHTML = '';

    for (let i = 0; i < amount; i++) {
        const square = document.createElement("div");
        square.className = "small";
        paper.appendChild(square);
    }

    const squares = document.getElementsByClassName("small");
    for (let i = 0; i < squares.length; i++) {
        squares[i].addEventListener("mouseover", function() {
            this.style.backgroundColor = "black";
        });
    }

    const clearPaper = document.getElementById("clear");
    if (clearPaper) clearPaper.addEventListener("click", function() { clearAll(amount); });

}

function generateMedium() {
    const paper = document.getElementById("paper");
    const amount = 1024;

    paper.innerHTML = '';

    for (let i = 0; i < amount; i++) {
        const square = document.createElement("div");
        square.className = "medium";
        paper.appendChild(square);
    }

    const squares = document.getElementsByClassName("medium");
    for (let i = 0; i < squares.length; i++) {
        squares[i].addEventListener("mouseover", function() {
            this.style.backgroundColor = "black";
        });
    }

    const clearPaper = document.getElementById("clear");
    if (clearPaper) clearPaper.addEventListener("click", function() { clearAll(amount); });
}

function generateLarge() {
    const paper = document.getElementById("paper");
    const amount = 4096;

    paper.innerHTML = '';

    for (let i = 0; i < amount; i++) {
        const square = document.createElement("div");
        square.className = "large";
        paper.appendChild(square);
    }

    const squares = document.getElementsByClassName("large");
    for (let i = 0; i < squares.length; i++) {
        squares[i].addEventListener("mouseover", function() {
            this.style.backgroundColor = "black";
        });
    }
    
    const clearPaper = document.getElementById("clear");
    if (clearPaper) clearPaper.addEventListener("click", function() { clearAll(amount); });
         
}

function clearAll(amount) {

    if (amount === 256) {generateSmall();}
    else if (amount === 1024) {generateMedium();}
    else if (amount === 4096) {generateLarge();}
}

main();

*/
let DEFAULT_COLOR = "#000000";

// DISPLAY DATE id="today"

function main()
{
    getSize();
    changeColor(DEFAULT_COLOR);

    // ----------------- TOOLS -----------------

    const drawButton = document.getElementById("draw");
    const rainbowButton = document.getElementById("rainbow");
    const eraseButton = document.getElementById("eraser");
    const clearButton = document.getElementById("clear");
    

    // ----------------- EVENT LISTENERS -----------------


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

    for (let i = 0; i < (grid*grid); i++) {
        const square = document.createElement("div");
        square.id = "square";
        square.style.minWidth = `${squareSize}px`;
        square.style.minHeight = `${squareSize}px`;
        paper.appendChild(square);
    }
}

main();