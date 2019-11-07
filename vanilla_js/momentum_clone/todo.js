const todoForm = document.querySelector(".js-todoForm"),
    todoInput = todoForm.querySelector("input"),
    todoList = document.querySelector(".js-todoList");

const TODOS_LS = 'todos';

// save current todo list to the loca storage
let todos = [];

function deletaTodo(event) {
    // console.log(event.target.parentNode);

    // get the item id to delete
    const button = event.target;
    const li_to_delete = button.parentNode;
    todoList.removeChild(li_to_delete);

    // assign new list
    const cleanTodos = todos.filter(function (todo) {
        // generate a new list
        return todo.id !== parseInt(li_to_delete.id);
    });
    todos = cleanTodos;
    saveTodos();
}

function saveTodos() {
    localStorage.setItem(TODOS_LS, JSON.stringify(todos));
}

// generate a new item
function paintTodo(text) {
    const li = document.createElement("li");
    const delButton = document.createElement("button");
    const span = document.createElement("span");
    const newId = todos.length + 1;
    delButton.innerHTML = "❌";
    delButton.addEventListener("click", deletaTodo);

    span.innerText = text;
    li.appendChild(delButton);
    li.appendChild(span);
    li.id = newId;

    // generate html code
    todoList.appendChild(li);
    const todoObj = {
        text: text,
        id: newId
    }

    // add to the list
    todos.push(todoObj);
    saveTodos();
}

function handleSubmit(event){

    event.preventDefault();
    const currentValue = todoInput.value;
    paintTodo(currentValue);
    todoInput.value = "";
}

function loadTodos() {
    const loadedTodos = localStorage.getItem(TODOS_LS);
    if (loadedTodos !== null) {
        const parsedTodos = JSON.parse(loadedTodos);
        parsedTodos.forEach(function (todo) {
            paintTodo(todo.text);
        });
    }
}

function init() {
    loadTodos();
    todoForm.addEventListener("submit", handleSubmit);
}

init();
