//Selectors
const todoInput = document.querySelector('.todo-input');
const todoButton = document.querySelector('.todo-button');
const todoList = document.querySelector('.todo-list');
const clearButton = document.querySelector('.clear-btn');
let todoTitle = document.querySelector('.title');
let listName = localStorage.getItem("person");


//list name setting
const setName = () => {
    let person = listName;

    if (person == false || person === null) {
        todoTitle.innerHTML = "to do list";
    } else {
        todoTitle.innerHTML = person + "'s to do list";
    }
}

if (!listName) {
    //prompt for name and save
    listName = prompt("Hey! What's your name?");
    localStorage.setItem("person", listName);

    //set name to saved name
    setName();

} else {
    //set name to saved name
    setName();
}


//Functions
const addTodo = e => {
    //prevent form from submitting
    e.preventDefault();
    //create div
    const todoDiv = document.createElement('div');
    todoDiv.classList.add('todo');
    //create li
    const newTodo = document.createElement('li');
    newTodo.innerText = todoInput.value;
    newTodo.classList.add('todo-item');
    todoDiv.appendChild(newTodo);
    //create complete button
    const completeButton = document.createElement('button');
    completeButton.innerHTML = '<i class="fa fa-check-square"></i>';
    completeButton.classList.add('complete-btn');
    todoDiv.appendChild(completeButton);
    //create delete button
    const deleteButton = document.createElement('button');
    deleteButton.innerHTML = '<i class="fa fa-minus-square"></i>';
    deleteButton.classList.add('delete-btn');
    todoDiv.appendChild(deleteButton);
    //append to todo list
    todoList.appendChild(todoDiv);
    //clear input value
    todoInput.value = "";
};

const deleteCheck = e => {
    const item = e.target;
    //delete todo
    if (item.classList[0] === 'delete-btn') {
        const todo = item.parentElement;

        todo.classList.add('fall');
        
        todo.addEventListener('transitionend', function(){
            todo.remove();
        });
    }

    //complete task
    if (item.classList[0] === 'complete-btn') {
        item.parentElement.classList.toggle('completed');
    }

}

const clearAll = () => {
    document.querySelector('.todo-list').innerHTML = "";
}


//Event listeners
todoButton.addEventListener('click', addTodo);
todoList.addEventListener('click', deleteCheck);
clearButton.addEventListener('click', clearAll);


