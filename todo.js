const toDoForm = document.querySelector(".js-toDoForm"),
    toDoInput = toDoForm.querySelector("input"),
    toDoList = document.querySelector(".js-toDoList");

const TODOS_LS = 'toDos'

function paintToDo(text) {
    // toDoList.classList.add(text);
    console.log(text);
}

function handleSubmit(event) {
    event.preventDefault();
    console.log(event);
    const currentValue = toDoInput.value;
    paintToDo(currentValue);
    toDoInput.value = "";
}


function loadToDos() {
    const toDos = localStorage.getItem(TODOS_LS);
    if(toDos !== null) {
    } 
}


function init() {
    loadToDos();
    toDoForm.addEventListener("submit", handleSubmit);
}

init();