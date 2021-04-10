// Setting varibale
let theInput = document.querySelector('.add-task input'),
    theAddButton = document.querySelector('.add-task .plus'),
    taskContainer = document.querySelector('.tasks-content'),
    noTaskMsg = document.querySelector('.no-tasks-message'),
    taskCount = document.querySelector('.tasks-count span'),
    taskComplete = document.querySelector('.tasks-completed span');

// focus in input
window.onload = () => {

    theInput.focus();

};