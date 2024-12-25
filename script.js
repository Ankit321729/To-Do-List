// script.js

// Get DOM elements
const taskInput = document.getElementById('taskInput');
const addTaskButton = document.getElementById('addTaskButton');
const taskList = document.getElementById('taskList');

// Add task event
addTaskButton.addEventListener('click', function() {
    const taskText = taskInput.value.trim();
    
    if (taskText !== "") {
        const taskElement = document.createElement('li');
        taskElement.innerHTML = `
            <span class="task-text">${taskText}</span>
            <button class="delete-btn">Delete</button>
        `;
        
        // Add event listener for marking the task as completed
        taskElement.addEventListener('click', function(e) {
            if (e.target.className !== 'delete-btn') {
                taskElement.classList.toggle('completed');
            }
        });
        
        // Add event listener for deleting the task
        const deleteButton = taskElement.querySelector('.delete-btn');
        deleteButton.addEventListener('click', function() {
            taskList.removeChild(taskElement);
        });
        
        taskList.appendChild(taskElement);
        taskInput.value = ""; // Clear input field
    }
});

// Optional: Allow pressing 'Enter' to add a task
taskInput.addEventListener('keypress', function(e) {
    if (e.key === 'Enter') {
        addTaskButton.click();
    }
});
