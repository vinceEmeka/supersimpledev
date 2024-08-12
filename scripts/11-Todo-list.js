const todoList = [{
 name: 'make dinner',
 dueDate: '08-10-2024'
},
{
 name: 'bake bread',
 dueDate: '08-10-2024'
}];

renderTodoList();

function renderTodoList() {


 let todoListHTML = '';

 //using forEach()

 todoList.forEach((todoObject, index) => {
  const { name, dueDate } = todoObject;
  const html = `
 <div>
  ${name} </div> 
  <div>${dueDate} </div>
  <button onclick="
  todoList.splice(${index}, 1);
  renderTodoList()
  " class = "delete-button">Delete</button>
  `;
  todoListHTML += html;

 })


 /*
  for (let i = 0; i < todoList.length; i++) {
   const todoObject = (todoList[i]);
   const { name, dueDate } = todoObject;
   // const dueDate = todoObject.dueDate;
 
 
   const html = `
  <div>
   ${name} </div> 
   <div>${dueDate} </div>
   <button onclick="
   todoList.splice(${i}, 1);
   renderTodoList()
   " class = "delete-button">Delete</button>
   `;
   todoListHTML += html;
 
  }
 
  */

 document.querySelector('.js-todo-list').innerHTML = todoListHTML;

}

function addTodo() {
 const inputElement = document.querySelector('.js-name-input');
 const name = inputElement.value;

 const dateInputElement = document.querySelector('.js-due-date-input');
 const dueDate = dateInputElement.value;

 todoList.push({
  // name: name,
  // dueDate: dueDate,
  name,
  dueDate
 });


 inputElement.value = '';

 renderTodoList();

}

