document.addEventListener('DOMContentLoaded', () => {
    const taskForm = document.getElementById('task-form');
    const taskInput = document.getElementById('task-input');
    const taskList = document.getElementById('task-list');
    const dueDateInput = document.getElementById('due-date');
    const prioritySelect = document.getElementById('priority');

    taskForm.addEventListener('submit', addTask);

    function addTask(e) {
        e.preventDefault();

        const taskText = taskInput.value;
        const dueDate = dueDateInput.value;
        const priority = prioritySelect.value;

        const taskItem = document.createElement('li');

        const taskInfo = document.createElement('div');
        taskInfo.className = 'task-info';
        taskInfo.innerHTML = `<strong>${taskText}</strong> <br> Due: ${dueDate} <br> Priority: ${priority}`;
        taskItem.appendChild(taskInfo);

        const taskActions = document.createElement('div');
        taskActions.className = 'task-actions';

        const completeButton = document.createElement('button');
        completeButton.className = 'complete';
        completeButton.textContent = 'Complete';
        completeButton.addEventListener('click', () => {
            taskItem.classList.toggle('completed');
        });
        taskActions.appendChild(completeButton);

        const deleteButton = document.createElement('button');
        deleteButton.className = 'delete';
        deleteButton.textContent = 'Delete';
        deleteButton.addEventListener('click', () => {
            taskList.removeChild(taskItem);
        });
        taskActions.appendChild(deleteButton);

        taskItem.appendChild(taskActions);

        taskList.appendChild(taskItem);

        taskInput.value = '';
        dueDateInput.value = '';
        prioritySelect.value = 'low';
    }
});
