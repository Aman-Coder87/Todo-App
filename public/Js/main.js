// importing div elements from views/index.hbs file
// form-action text area
const textArea = document.querySelector('.text-area');
// form-action sumbit button
const button = document.querySelector('.button');
// data store container of form input value
const todoContainer = document.querySelector('.todo-container');

// fat arrow function to create and append data from form-action
function addTodo() {
    body.style.backgroundColor = 'red' ;
    // creating div for todoContainer
    let todoDiv = document.createElement('div');
    todoDiv.classList.add('child-todo-container');
    todoDiv.appendChild(todoContainer);
    // creating content for child-todoContainer
    let todoP = document.createElement('p');
    todoP.classList.add('grandchild-todo-container');
    todoP.innerText = "hello world";
    todoP.appendChild(todoDiv);
}

// listening event of form button
button.addEventListener('onclick', (event) => {
    // prevent Form from sumbitting
    event.preventDefault();
    // calling addTodo fat arrow function on button click
    addTodo();
});