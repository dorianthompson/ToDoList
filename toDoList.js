const input = document.getElementById('todo-input');
const addButton = document.getElementById('add-button');
const toDoList = document.getElementById('todo-list');

input.addEventListener('input', onInputChange);
addButton.addEventListener('click', onAddToDo);
input.addEventListener('keypress', onEnterSubmit);

function onInputChange() {
    addButton.disabled = input.value.length === 0;
}

function onAddToDo() {
    const li = createListItem(input.value);
    toDoList.appendChild(li);
    input.value = "";
    addButton.disabled = true;
}

function onEnterSubmit(event) {
    if (event.key === 'Enter'){
        event.preventDefault();
        onAddToDo();
    }
}

function createListItem(toDo) {
    const li  = document.createElement('li');
    const heading = document.createElement('h2');
    heading.textContent = toDo;
    const button = document.createElement('button');
    button.textContent = "X"
    button.classList.add('delete-button');
    button.addEventListener('click', onDeleteToDo);

    li.appendChild(heading);
    li.appendChild(button);

    return li;
}

function onDeleteToDo() {
    this.parentNode.remove();
}