let tasks = [];

function addTask() {
  const taskInput = document.getElementById("taskInput");
  const taskText = taskInput.value.trim();
  if (taskText !== "") {
    tasks.push({ text: taskText, completed: false });
    taskInput.value = "";
    showTasks();
  }
}

function showTasks() {
  const taskList = document.getElementById("taskList");
  taskList.innerHTML = "";

  tasks.forEach((task, index) => {
    const li = document.createElement("li");
    li.innerHTML = `
      <input type="checkbox" onchange="toggleComplete(${index})" ${task.completed ? "checked" : ""}>
      <span class="${task.completed ? "completed" : ""}">${task.text}</span>
      <button onclick="editTask(${index})">Edit</button>
      <button onclick="deleteTask(${index})">Delete</button>
    `;
    taskList.appendChild(li);
  });
}

function toggleComplete(index) {
  tasks[index].completed = !tasks[index].completed;
  showTasks();
}

function editTask(index) {
  const editedText = prompt("Edit the task:", tasks[index].text);
  if (editedText !== null) {
    tasks[index].text = editedText.trim();
    showTasks();
  }
}

function deleteTask(index) {
  tasks.splice(index, 1);
  showTasks();
}

function showAll() {
  showTasks();
}

function showActive() {
  const activeTasks = tasks.filter(task => !task.completed);
  displayFilteredTasks(activeTasks);
}

function showCompleted() {
  const completedTasks = tasks.filter(task => task.completed);
  displayFilteredTasks(completedTasks);
}

function displayFilteredTasks(filteredTasks) {
  const taskList = document.getElementById("taskList");
  taskList.innerHTML = "";

  filteredTasks.forEach((task, index) => {
    const li = document.createElement("li");
    li.innerHTML = `
      <input type="checkbox" onchange="toggleComplete(${index})" ${task.completed ? "checked" : ""}>
      <span class="${task.completed ? "completed" : ""}">${task.text}</span>
      <button onclick="editTask(${index})">Edit</button>
      <button onclick="deleteTask(${index})">Delete</button>
    `;
    taskList.appendChild(li);
  });
}