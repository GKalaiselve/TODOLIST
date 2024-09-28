// Select elements
const taskInput = document.getElementById('taskInput');
const addTaskBtn = document.getElementById('addTaskBtn');
const todoList = document.getElementById('todoList');

// Add task to the list
addTaskBtn.addEventListener('click', () => {
  const taskText = taskInput.value.trim();
  if (taskText) {
    addTask(taskText);
    taskInput.value = ''; // Clear input after adding
  }
});

// Add task when pressing Enter key
taskInput.addEventListener('keypress', (e) => {
  if (e.key === 'Enter') {
    const taskText = taskInput.value.trim();
    if (taskText) {
      addTask(taskText);
      taskInput.value = ''; // Clear input after adding
    }
  }
});

// Function to create and add task to the list
function addTask(task) {
  const li = document.createElement('li');
  li.innerHTML = `${task} <button class="delete-btn">Delete</button>`;
  
  // Delete task functionality
  li.querySelector('.delete-btn').addEventListener('click', () => {
    li.remove();
  });
  
  // Append to the list
  todoList.appendChild(li);
}
