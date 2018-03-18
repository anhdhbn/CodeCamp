var button = document.getElementById('btnAdd');
var input = document.getElementById('inputAdd');
var list = document.getElementById('mylist');

function removeTodoFromStorage(id)
{
    var todos = getTodosFromStorage();
    todos.splice(id, 1);
    saveTodosToStorage(todos);
}

function addTodoToLocalStorage(text)
{
    var todos = getTodosFromStorage();
    todos.push({
        text: text,
        completed: false
    });

    saveTodosToStorage(todos);
}

function clearInput()
{
    input.value = '';
}

function clearList()
{
    list.innerHTML = '';
}

function saveTodosToStorage(todos) {
    var str = JSON.stringify(todos);
    return localStorage.setItem('todos', str);
}

function handleToggleTodo(target) {
    var todos = getTodosFromStorage();

    var id = target.id;
    var todo = todos[id];
    todo.completed = !todo.completed;

    saveTodosToStorage(todos);
}

function handleRemoveTodo(target) {
    var todo = target.parentElement;
    var id = todo.id;

    removeTodoFromStorage(id);
}

function onClickTodo(event) {
    var target = event.target;

    var tag = target.tagName;

    if (tag === 'LI') {
        handleToggleTodo(target);
    }

    if (tag === 'SPAN') {
        handleRemoveTodo(target);
    }

    render();
}

function renderTodoToHTML(text, completed, i) {
    var todo = document.createElement('li');
    todo.innerHTML = text + '<span class="close">×</span>';
    todo.id = i;

    if (completed) {
        todo.className = "completed";
    }
    todo.addEventListener('click', onClickTodo);

    list.appendChild(todo);
}

function getTodosFromStorage()
{
    var str = localStorage.getItem('todos');
    if (!str) {
        return [];
    }

    try {
        return JSON.parse(str);
    } catch (error) {
        return [];
    }
}

function renderData()
{
    var todos = getTodosFromStorage();
    for (var i = 0; i < todos.length; i++) {
        var todo = todos[i];
        renderTodoToHTML(todo.text, todo.completed, i);
    }
}

function render()
{
    clearList();
    renderData();
}

button.addEventListener('click', function () {
    var text = input.value;
    addTodoToLocalStorage(text);
    render();
    clearInput();
});

render();