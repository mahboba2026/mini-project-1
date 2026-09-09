// part:1
const taskInput = document.getElementById("task-input");
const addTaskBtn = document.getElementById("add-task-btn");
const taskList = document.getElementById("task-list");
const taskCount = document.getElementById("task-count");

let tasks = [];

// part:2

addTaskBtn.addEventListener("click", function () {
  const taskText = taskInput.value;
  if (taskText === "") {
    alert("PLZ write a text!");
    return;
  }

  tasks.push(taskText);
  taskList.innerHTML = "";
  for (let task of tasks) {
    const newLi = document.createElement("li");
    newLi.textContent = task;

    // part:3

    taskList.appendChild(newLi);
  }

  taskCount.textContent = tasks.length;
  taskInput.value = "";
});
