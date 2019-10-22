const clockContainer = document.querySelector(".js-clock");
const clockTitle = clockContainer.querySelector("h1");

function getTime(){
    const date = new Date();
    const minites = date.getMinutes();
    const hours = date.getHours();
    const seconds = date.getSeconds();
    clockTitle.innerText = `${hours< 10 ? `0${hours}` : hours}:${minites< 10 ? `0${minites}` : minites}:${seconds < 10 ? `0${seconds}` : seconds}`;
}

function sayHi(){
    console.log("say hi");
}

function init(){
    // getTime();
    setInterval(getTime, 0)
}

init();
// setInterval(sayHi, 3000);