//alert('Im working. Im JS, Im beautiful, Im worth it!');
console.log('Im working. Im JS, Im beautiful, Im worth it!');
const info = 0
let a = 221;
let b = a - 5;
a = 4
const name = "jaykop"
const emoji = "😊"

//js object
const personInfo = {
    name:"Jay", 
    age:27,
    gender:"Male"
}

function sayhello(info) {
    console.log("hello" + info.name + "you are" + info.age)
    // *******backtick!!!!!!!!
    return `Hello ${info.name} you are ${info.age} years old`;
}

// var can have function
const greetJay = sayhello(personInfo)

console.log(b, a, name, emoji);
console.log(personInfo);
sayhello(personInfo);

console.log(greetJay)

// created an object
const calculator = {
    add: function (a, b) { return a+b; },
    subtract: function (a, b) {return a-b;},
    multiply: function (a, b) {return a*b},
    divide: function (a, b) {return a/b},
    pow: function(a, b) {return a**b;}
}

console.log(calculator.add(1,1))
console.log(calculator.pow(2,3))

// js file can acecss to the html and edit the dom
// const title = document.getElementById("title");
// //console.log(document);
// title.innerHTML = "Hi you"
// console.error("Fuck");
// title.style.color = 'red';
// console.dir(title);
// console.dir(document);
// document.title = 'I own u noe'

// // event handlers
// function handleResize(event){
//     console.log(event)
//     //sconsole.log("I have been resized");
// }

// window.addEventListener("resize", handleResize);


// function handleClick(){
//     title.style.color = "blue"
// }

// title.addEventListener("click", handleClick)

// don't use prompt function
// const age = prompt("How old are u?");

// if (age > 18) {
//     console.log("U can drink");
// }
// else{
//     console.log("u can't");
// }

const title = document.querySelector("#title");
// const BASE_COLOR = "rgb(54, 73, 94)";
// const OTHER_COLOR = "#7f8c8d";
// function handleClick(){
    
//     const currentColor = title.style.color;
//     if (currentColor === BASE_COLOR){
//         title.style.color = OTHER_COLOR;
//     }
//     else {
//         title.style.color = BASE_COLOR;
//     }

//     console.log(title.style.color);

// }

const CLICKED_CLASS = "clicked";
function handleClick () {
    
    title.classList.toggle(CLICKED_CLASS);
    // const hasClass = title.classList.contains(CLICKED_CLASS);
    // // const currentClass = title.className;
    // if (hasClass){
    //     title.classList.remove(CLICKED_CLASS);
    //     // title.className = CLICKED_CLASS;
    // }
    // else {
    //     // title.className = "";
    //     title.classList.add(CLICKED_CLASS);
    // }
}
function init(){
    //title.style.color = BASE_COLOR;
    title.addEventListener("click", handleClick)
}

init();

