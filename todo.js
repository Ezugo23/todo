    const todoList = [{name: 'make dinner', dueDate:'2023-12-23'
  }, {name: 'wash dishes',
dueDate: '2023-12-22'}];

    renderTodoList();
    
    function renderTodoList() {
    let todoListHTML = '';

    todoList.forEach(function(todoObject, index) {
      const { name, dueDate} = todoObject;
      const html = `
      <div>${name}</div>
      <div>${dueDate}</div>
      <button class="delete js-delete">Delete</button> 
      `;
      todoListHTML += html;
    });
    

    document.querySelector('.js-todo')
    .innerHTML = todoListHTML;

    document.querySelectorAll('.js-delete')
    .forEach((deleteButton, index) => {
       deleteButton.addEventListener('click', () => {
        todoList.splice(index, 1);
        renderTodoList();
       });
    });
  }

  document.querySelector('.js-add')
  .addEventListener('click', () => {
    addTodo();
  });
    function addTodo() {
      const inputElem = document.querySelector('.js-input');
    const name = inputElem.value;

    const dateInputElem = document.querySelector('.js-due');
    const dueDate = dateInputElem.value;
  
    todoList.push({name: name,
     dueDate: dueDate});
    

    inputElem.value = '';

    renderTodoList();
    }
