// Obtiene y carga las tareas almacenadas en el local storage
document.addEventListener("DOMContentLoaded", function() {
    var storedTasks = localStorage.getItem("tasks");
    if (storedTasks) {
        document.getElementById("taskList").innerHTML = storedTasks;
    }
});
// Agrega nuevos elementos a la lista de tareas
function agregarTarea() {
    var taskInput = document.getElementById("taskInput");
    var taskList = document.getElementById("taskList");
    var taskText = taskInput.value.trim();

    if (taskText !== "") {
        
        var newTask = document.createElement("li");
        newTask.textContent = taskText;
        taskList.appendChild(newTask);
        taskInput.value = "";
        localStorage.setItem("tasks", taskList.innerHTML);
    }
}
// Limpia la lista de tareas en el DOM y en el Local Storage
function limpiarTareas() {
    document.getElementById("taskList").innerHTML = "";
    localStorage.removeItem("tasks");
}