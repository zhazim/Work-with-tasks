let todoList = document.querySelector('#todo-list');

let tasks = ['Buy lemonade', 'Make toasts', 'Repair car', 'Play games', 'Pet a cat'];

for(let i = 0; i < tasks.length; i++){
    let li = document.createElement("li")
    li.classList.add('task')
    li.innerHTML = tasks[i]
    todoList.append(li)
}