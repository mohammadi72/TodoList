// selectors
let addBtn = document.querySelector(".todo-button");
let todoInput = document.querySelector(".todo-input");
let todoList = document.querySelector(".todo-list");
let filterOption = document.querySelector(".filter-todos");
//event listener
addBtn.addEventListener("click", addTodo);
todoList.addEventListener("click", checkRemove);
filterOption.addEventListener("click", filterTodos);
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
  todoInput.value = "";
}
function checkRemove(e) {
  const classList = [...e.target.classList];
  const item = e.target;
  const todo = item.parentElement.parentElement;

  if (classList.includes("fa-trash")) {
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

// for (const todo of todos) {
//   switch (e.target.value) {
//     case "all":
//       todo.style.display = "flex";
//       break;
//     case "completed":
//       if (todo.classList.contains("completed")) {
//         todo.style.display = "flex";
//       } else {
//         todo.style.display = "none";
//       }
//       break;
//     case "uncompleted":
//       if (!todo.classList.contains("completed")) {
//         todo.style.display = "flex";
//       } else {
//         todo.style.display = "none";
//       }
//       break;
//   }
// }
// todos.forEach((todo) => {
//   const selectedFilter = e.target.value;
//   if (selectedFilter == "all") {
//     todo.style.display = "flex";
//   }

//   if (selectedFilter == "completed" && todo.classList.contains("completed")) {
//     todo.style.display = "flex";
//   } else {
//     todo.style.display = "none";
//   }

//   if (
//     selectedFilter == "uncompleted" &&
//     !todo.classList.contains("completed")
//   ) {
//     todo.style.display = "flex";
//   } else {
//     todo.style.display = "none";
//   }
// });
