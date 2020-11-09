// importing div elements from views/index.hbs file
// form-action text area
const textArea = document.querySelector('.text-area');
// form-action sumbit button
const button = document.querySelector('.button');
// todoContainer trash button
const todoList = document.querySelector('.todo-list');
// data store container of form input value
const todoContainer = document.querySelector('.todo-container');

// firebase realtime database info ...
const database = firebase.database();
const ref = database.ref('/users/data/');

// let data = "hello world" ;

// CRUD operation //

// fat arrow function to create and append data from form-action
function addTodo() {
    // creating div for todoContainer
    let todoDiv = document.createElement('div');
    todoDiv.classList.add('child-todo-container');

    // creating content for child-todoContainer
    let todoP = document.createElement('p');
    todoP.classList.add('grandchild-todo-container');
    todoP.innerText = textArea.value;
    //
    ref.push(todoP.innerText);
    ref.on('value', (snapshot) => {
        snapshot.todoP((childSnapshot) => {
            let data = childSnapshot.val();
            todoP.innerText = data ;
        });
    });
    //
    todoDiv.appendChild(todoP);

    // adding complete button to todoContainer
    let completeBtn = document.createElement('button');
    completeBtn.classList.add('completeBtn');
    let completeImg = document.createElement('img');
    completeImg.src = '/Img/tick.png';
    completeImg.classList.add('complete');
    completeBtn.appendChild(completeImg);
    todoDiv.appendChild(completeBtn);

    // adding trash button to todoContainer
    let todoBtn = document.createElement('button');
    todoBtn.classList.add('trashBtn');
    let todoImg = document.createElement('img');
    todoImg.src = "/Img/trash.png";
    todoImg.classList.add('trash');
    todoBtn.appendChild(todoImg);
    todoDiv.appendChild(todoBtn);

    // appendChild created Element
    todoContainer.appendChild(todoDiv);
    // clearing input fill after submitting
    textArea.value = "";

    // function to complete list parentElement
    function complete(e) {
        const list = e.target;
        list.style.textDecoration = "line-through";
        list.classList.toggle('sucess');
    }
    // function to delete list parent element
    function hello(e) {
        const list = e.target;
        //
        ref.on('value' , (snapshot) => {
            snapshotforEach((childSnapshot) => {
                childSnapshot.ref.remove();
            });
        });
        //
        list.parentElement.remove();
        
    }
    //listining on completeBtn
    completeBtn.addEventListener('click', (event) => {
        completeBtn.parentElement.classList.toggle('sucess');
    });
    // listining event on trash button
    todoBtn.addEventListener('click', hello);
}

// listening event of form button
button.addEventListener('click', (event) => {
    // prevent Form from sumbitting
    event.preventDefault();
    // calling addTodo fat arrow function on button click
    if (textArea.value !== "") addTodo();
});