const canvas = document.getElementById("jsCanvas");
const colors = document.getElementsByClassName("jsColor");
const ctx = canvas.getContext("2d");

function handleColorClick(event){
    const color = event.target.style.backgroundColor;
    ctx.strokeStyle = color;
}

Array.from(colors).forEach(color => color.addEventListener("click", handleColorClick));

canvas.width = 700;
canvas.height = 700;

ctx.lineWidth = 2.5;
ctx.strokeStyle = "black";

let  painting = false;

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

if (canvas) {

    canvas.addEventListener("mousemove", onMouseMove);
    canvas.addEventListener("mousedown", startPainting);
    canvas.addEventListener("mouseup", stopPainitng);
    canvas.addEventListener("mouseleave", stopPainitng);
}
