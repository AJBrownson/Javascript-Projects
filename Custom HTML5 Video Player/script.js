

            /*const input = document.querySelector('.input');
            const button = document.querySelector('.button');
            const parentElement= document.querySelector('.todo-list');
            const todoList = document.querySelector('.todo-list');




/***********************************************************/
/*                       Selectors                          */
/*************************************************************/

const input = document.querySelector(".input");
const button = document.querySelector(".button");
const parentElement= document.querySelector(".todoList");
const todoList = document.querySelector(".todoList");


/***********************************************************/
/*                   End of Selectors                       */
/*************************************************************/




            /* addEventListeners
            button.addEventListener('click',addTodoOnClick);
            input.addEventListener('keypress' , addTodoOnKeypress);
            todoList.addEventListener('click' ,deleteTodo);




/******************************************/
/*           Event Listeners               */
/********************************************/


button.addEventListener('click',addTodoOnClick);
input.addEventListener('keypress' , addTodoOnKeypress);
todoList.addEventListener('click' ,deleteTodo);


/******************************************/
/*         End of Event Listeners          */
/********************************************/









            /* functions
            function addTodoOnKeypress(e){
                if( input.value!=="" && e.which === 13){
                    const todoDiv = document.createElement('div');
                todoDiv.classList.add('todo');
                const newTodo = document.createElement('li');
                newTodo.innerText=input.value;
                newTodo.classList.add('todo-item');
                todoDiv.appendChild(newTodo);
                const trashBtn = document.createElement('button');
                trashBtn.innerHTML=` <i class="fas fa-trash"></i>`;
                trashBtn.classList.add('trash-btn');
                todoDiv.appendChild(trashBtn);
                parentElement.appendChild(todoDiv);
                input.value ="";
                }
            }
            function addTodoOnClick(event){
                if(input.value !==""){
                const todoDiv = document.createElement('div');
                todoDiv.classList.add('todo');
                const newTodo = document.createElement('li');
                newTodo.innerText=input.value;
                newTodo.classList.add('todo-item');
                todoDiv.appendChild(newTodo);
                const trashBtn = document.createElement('button');
                trashBtn.innerHTML=` <i class="fas fa-trash"></i>`;
                trashBtn.classList.add('trash-btn');
                todoDiv.appendChild(trashBtn);
                parentElement.appendChild(todoDiv);
                input.value ="";
                }
            }
            function deleteTodo(e){
                 const todo = e.target;
                if(todo.classList[0]==="trash-btn"){
                    todo.parentElement.remove();
                }
            }


/******************************************************/
/*                    Functions                        */
/********************************************************/

function addTodoOnKeypress(e) {
 if( input.value!=="" && e.which === 13){
      const todoDiv = document.createElement("div");
  todoDiv.classList.add('todo');
  const newTodo = document.createElement("li");
  newTodo.innerText=input.value;
  newTodo.classList.add("todoItem");
  todoDiv.appendChild(newTodo);
  const trashBtn = document.createElement("button");
  trashBtn.innerHTML=` <i class="fas fa-trash"></i>`;
  trashBtn.classList.add("trash_btn");
  todoDiv.appendChild(trashBtn);
  parentElement.appendChild(todoDiv);
  input.value ="";
  }
}



function addTodoOnClick(event) {
  if(input.value !==""){
  const todoDiv = document.createElement("div");
  todoDiv.classList.add("todo");
  const newTodo = document.createElement("li");
  newTodo.innerText=input.value;
  newTodo.classList.add("todoItem");
  todoDiv.appendChild(newTodo);
  const trashBtn = document.createElement("button");
  trashBtn.innerHTML=` <i class="fas fa-trash"></i>`;
  trashBtn.classList.add("trash_btn");
  todoDiv.appendChild(trashBtn);
  parentElement.appendChild(todoDiv);
  input.value ="";
  }
}


function deleteTodo(e){
  const todo = e.target;
 if(todo.classList[0]==="trash_btn"){
     todo.parentElement.remove();
 }
}


/******************************************************/
/*                End of Functions                     */
/********************************************************/

