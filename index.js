// selectors
let addBtn = document.querySelector(".todo-button");
let todoInput = document.querySelector(".todo-input");
let todoList = document.querySelector(".todo-list");
let filterOption = document.querySelector(".filter-todos");
//event listener
addBtn.addEventListener("click", addTodo);
todoList.addEventListener("click", checkRemove);
filterOption.addEventListener("click", filterTodos);
document.addEventListener("DOMContentLoaded", getLocalTodos);
//functions
function addTodo(e) {
  e.preventDefault();
  //create element
  const todoDiv = document.createElement("div");
  todoDiv.classList.add("todo");
  const newTodo = `
  <li>${todoInput.value}</li>
  <span>
      <i class="fa-solid fa-clipboard-check"></i>
  </span>
  <span><i class="fa-solid fa-file-pen"></i></span>
  <span><i class="fa-solid fa-trash"></i></i></span>`;
  todoDiv.innerHTML = newTodo;
  //append div
  todoList.appendChild(todoDiv);
  saveLocalTodoes(todoInput.value);
  todoInput.value = "";
}
function checkRemove(e) {
  const classList = [...e.target.classList];
  const item = e.target;
  const todo = item.parentElement.parentElement;

  if (classList.includes("fa-trash")) {
    removeLocalTodos(todo);
    todo.remove();
  } else if (classList.includes("fa-clipboard-check")) {
    todo.classList.toggle("completed");
  } else if (classList.includes("fa-file-pen")) {
    // const oldLiElement = todo.firstChild.nextElementSibling.innerHTML;//sow input value
    // // todo.firstChild.nextElementSibling.innerHTML = "";
    // todo.firstChild.nextElementSibling.innerHTML(todoInput.value);
    // console.log();
  }
}
function filterTodos(e) {
  let todos = [...todoList.childNodes];
  todos.shift();
  todos.forEach((todo) => {
    switch (e.target.value) {
      case "all":
        todo.style.display = "flex";
        break;
      case "completed":
        if (todo.classList.contains("completed")) {
          todo.style.display = "flex";
        } else {
          todo.style.display = "none";
        }
        break;
      case "uncompleted":
        if (!todo.classList.contains("completed")) {
          todo.style.display = "flex";
        } else {
          todo.style.display = "none";
        }
        break;
    }
  });
}
function saveLocalTodoes(todo) {
  let saveTodos = localStorage.getItem("todos")
    ? JSON.parse(localStorage.getItem("todos"))
    : [];
  saveTodos.push(todo);
  localStorage.setItem("todos", JSON.stringify(saveTodos));
}

function getLocalTodos() {
  let saveTodos = localStorage.getItem("todos")
    ? JSON.parse(localStorage.getItem("todos"))
    : [];
  saveTodos.forEach((todo) => {
    const todoDiv = document.createElement("div");
    todoDiv.classList.add("todo");
    const newTodo = `
  <li>${todo}</li>
  <span>
      <i class="fa-solid fa-clipboard-check"></i>
  </span>
  <span><i class="fa-solid fa-file-pen"></i></span>
  <span><i class="fa-solid fa-trash"></i></i></span>`;
    todoDiv.innerHTML = newTodo;
    //append div
    todoList.appendChild(todoDiv);
  });
}
function removeLocalTodos(todo) {
  // console.log(todo.children[0].innerText);
  let saveTodos = localStorage.getItem("todos")
    ? JSON.parse(localStorage.getItem("todos"))
    : [];
  const filterTodos = saveTodos.filter((t) => t !== todo.children[0].innerText);
  localStorage.setItem("todos", JSON.stringify(filterTodos));
}
