const taskInput = document.getElementById("taskInput");
const addBtn = document.getElementById("addBtn");
const taskList = document.getElementById("taskList");

// Mockup tasks to display on page load
const mockTasks = ["Buy groceries", "Finish homework", "Call friend"];

// Function to create a task element
function createTask(taskText) {
  const li = document.createElement("li");
  li.textContent = taskText;

  // Complete task on click
  li.addEventListener("click", () => {
    li.classList.toggle("completed");
  });

  // Delete button
  const deleteBtn = document.createElement("button");
  deleteBtn.textContent = "X";
  deleteBtn.className = "deleteBtn";
  deleteBtn.addEventListener("click", (e) => {
    e.stopPropagation(); // Prevent completing when deleting
    li.remove();
  });

  li.appendChild(deleteBtn);
  taskList.appendChild(li);
}

// Add mock tasks on page load
mockTasks.forEach(task => createTask(task));

// Add a new task from input
addBtn.addEventListener("click", () => {
  const taskText = taskInput.value.trim();
  if (taskText !== "") {
    createTask(taskText);
    taskInput.value = "";
  }
});

// Optional: add task on Enter key
taskInput.addEventListener("keypress", (e) => {
  if (e.key === "Enter") {
    addBtn.click();
  }
});
