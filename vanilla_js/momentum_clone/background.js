const body = document.querySelector("body");

const IMG_NUMBER = 3;

// function handleImgLoad(){
//     console.log("finished loading...");
// }

function paintImage(imgNumber){
    const image = new Image();
    image.src = `images/${imgNumber}.jpg`;
    image.classList.add("bgImage");
    body.appendChild(image);
    // image.addEventListener("loaded", handleImgLoad);
}

function genRandom(){
    // get random number between 0 to IMG_NUMBER(less than)
    const number = Math.floor(Math.random()* IMG_NUMBER) + 1;
    return number;
}

function init(){
    // get random number and show the image
    const randomNumber = genRandom();
    paintImage(randomNumber);
}

init();