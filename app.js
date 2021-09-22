// Define UI Vars
const form = document.querySelector('#task-form');
const taskList = document.querySelector('.collection');
const clearBtn = document.querySelector('.clear-task');
const filter = document.querySelector('#filter');
const taskInput = document.querySelector('#task');

// Load all event listeners
loadEventListeners();

// Load all event listeners
function loadEventListeners() {
  // Add task event
  form.addEventListener('submit', addTask);
  // Remove task event
  taskList.addEventListener('click', removeTask);
  // Clear Task event
  clearBtn.addEventListener('click',clearTasks);
  // Filter tasks events
  filter.addEventListener('keyup', filterTasks);
}

// Add Task
function addTask(e) {
  if(taskInput.value === '') {
      alert('Add a task');
  }

  // Create li elelment
  const li = document.createElement('li');
  // Add class
  li.className = 'collection-item';
  // Create text Node and appen to li 
  li.appendChild(document.createTextNode(taskInput.value));
  // Create a new link element
  const link = document.createElement('a');
  // Add class
  link.className = 'delete-item secondary-content';
  // Add icon html
  link.innerHTML = '<i class="fa fa-remove"></i>';
  // Append the link to li 
  li.appendChild(link);

  // Append li to ul
  taskList.appendChild(li);

  // Clear Input when you send it to list 
  taskInput.value = '';

  // Dont send the form
  e.preventDefault();
}


// Remove Task 
function removeTask(e) {
  if(e.target.parentElement.classList.contains('delete-item')) {
   e.target.parentElement.parentElement.remove();
  }
}

// Clear Task 
function clearTasks() {
  taskList.innerHTML = ''; 
}

// Filter Tasks 
function filterTasks(e){
  const text = e.target.value.toLowerCase();

  document.querySelectorAll('.collection-item').forEach(function(task){
    const item = task.firstChild.textContent;
    if(item.toLowerCase().indexOf(text) != -1){
    task.style.display = 'block';
    } else {
      task.style.display = 'none';
    }
  });


}

 // Clock for the site :
function displayTime() {
  let date = new Date();
  let time = date.toLocaleTimeString();
  document.querySelector(".clock").textContent = time;
}
displayTime();
const createClock = setInterval(displayTime, 1000);