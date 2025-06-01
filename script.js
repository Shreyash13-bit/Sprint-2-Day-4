
displayTasks();

var tasks = [];

function addTask() {
  var taskInput = document.getElementById("taskInput");
  var taskText = taskInput.value;

  if (taskText.trim() === "") {
    alert("Please enter a task.");
    return;
  }

  var task = {
    id: Date.now(),
    title: taskText,        
    completed: false        
  };

  tasks.push(task);
  taskInput.value = "";

  displayTasks(); 
}

function displayTasks() {
  var taskList = document.getElementById("taskList");
  taskList.innerHTML = "";
  for (var i = 0; i < tasks.length; i++) {
    var task = tasks[i];

    var li = document.createElement("li");
    li.textContent = task.title + (task.completed ? " ✅" : "");
    var completeBtn = document.createElement("button");
    completeBtn.textContent = "Done";
    completeBtn.onclick = (function(index) {
      return function() {
        tasks[index].completed = true;
        displayTasks();
      };
    })(i);
    var deleteBtn = document.createElement("button");
    deleteBtn.textContent = "Delete";
    deleteBtn.onclick = (function(index) {
      return function() {
        tasks.splice(index, 1);
        displayTasks();
      };
    })(i);

    li.appendChild(completeBtn);
    li.appendChild(deleteBtn);
    taskList.appendChild(li);
  }
}
