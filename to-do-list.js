const todoList = [{name: 'Make dishes', dueDate: `22-01-2022`}];

renderToDo();

function renderToDo() {
let todoListHTML ='';

for (let i=0; i < todoList.length; i++) {
    const todoObject = todoList[i];
    const  name = todoObject.name;
    const dueDate = todoObject.dueDate;
    const html = `
                <div class="name-div">${name}</div>
                <div class="dueDate-div">${dueDate}</div>  
                <button class="delete-div" onclick="todoList.splice(${i},1);renderToDo();">Delete</button>
                `;
    todoListHTML += html;
    }
     document.querySelector('.listdiv').innerHTML = todoListHTML;

}


function toDoList() {
    const inputElement = document.querySelector('.input');
    const name = inputElement.value;

    const dateElement = document.querySelector('.date');
    const dueDate = dateElement.value

    todoList.push({name: name, dueDate: dueDate});
    inputElement.value = '';
    renderToDo();

}