const canvas = document.getElementById("jsCanvas");
const colors = document.getElementsByClassName("jsColor");
const ctx = canvas.getContext("2d");
const range = document.getElementById("jsRange");
const mode = document.getElementById("jsMode");
const saveBtn = document.getElementById("jsSave");

const INITIAL_COLOR = "black";
const CANVAS_SIZE = 700;

function handleColorClick(event){
    const color = event.target.style.backgroundColor;
    ctx.strokeStyle = color;
    ctx.fillStyle = color;
}

Array.from(colors).forEach(color => color.addEventListener("click", handleColorClick));

canvas.width = CANVAS_SIZE;
canvas.height = CANVAS_SIZE;

ctx.fillStyle = "white";
ctx.fillRect(0,0,CANVAS_SIZE,CANVAS_SIZE);
ctx.lineWidth = 2.5;
ctx.strokeStyle = INITIAL_COLOR;
ctx.fillStyle = INITIAL_COLOR;

// ctx.fillStyle = "green";
// ctx.fillRect(50, 20, 100, 49);

let painting = false;
let filling = false;

if (mode){
    mode.addEventListener("click", handleModeClick);
}

function handleModeClick(){
    if (filling){
        filling = false;
        mode.innerText = "Fill";
    }
    else {
        filling = true;
        mode.innerText = "Paint";
    }
}

if (range) {
    range.addEventListener("input", handleRangeChange)
}

function handleRangeChange(event){
    const size = event.target.value;
    ctx.lineWidth = size;
}

function onMouseMove(event){
    const x = event.offsetX;
    const y = event.offsetY;

    if (!painting){
        ctx.beginPath();
        ctx.moveTo(x,y);
    } else {
        ctx.lineTo(x,y);
        ctx.stroke();
    }
}

function stopPainitng(){
    painting = false;
}

function startPainting(){
    painting = true;
}

function handleCanvasClick(){
    if (filling) 
        ctx.fillRect(0,0,CANVAS_SIZE,CANVAS_SIZE);
}

function handleCM(event){
    event.preventDefault();
}

if (saveBtn) {
    saveBtn.addEventListener("click", handleSaveClick);
}

function handleSaveClick(){
    const image = canvas.toDataURL("image/png");
    const link = document.createElement("a");
    link.href = image;
    link.download = "PaintJS[Export]";
    link.click();
}

if (canvas) {

    canvas.addEventListener("mousemove", onMouseMove);
    canvas.addEventListener("mousedown", startPainting);
    canvas.addEventListener("mouseup", stopPainitng);
    canvas.addEventListener("mouseleave", stopPainitng);
    canvas.addEventListener("click", handleCanvasClick);
    canvas.addEventListener("contextmenu", handleCM);
}
