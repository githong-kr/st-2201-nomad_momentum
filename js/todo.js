const toDoForm = document.querySelector('#todo-form');
const toDoInput = toDoForm.querySelector('input');
const toDoList = document.querySelector('#todo-list');
const TODOS_KEY = 'todos';

let toDos = null;

const saveTodo = () => {
  localStorage.setItem(TODOS_KEY, JSON.stringify(toDos));
};

const deleteTodo = (event) => {
  const li = event.target.parentElement;
  toDos = toDos.filter((el) => el.id !== parseInt(li.id));

  li.remove();

  console.log(toDos);
  saveTodo();
};

const paintTodo = (newTodo) => {
  const li = document.createElement('li');
  li.id = newTodo.id;

  const a = document.createElement('a');
  a.classList.add('btn-gradient');
  a.innerText = 'X';
  a.addEventListener('click', deleteTodo);

  const span = document.createElement('span');
  span.innerText = newTodo.text;

  li.appendChild(a);
  li.appendChild(span);
  toDoList.appendChild(li);
};

const initTodo = () => {
  toDos = JSON.parse(localStorage.getItem(TODOS_KEY));

  toDos.forEach(paintTodo);
};

const handleToDoSubmit = (event) => {
  event.preventDefault();
  const newTodo = {
    id: Date.now(),
    text: toDoInput.value,
  };

  toDoInput.value = '';

  toDos.push(newTodo);
  paintTodo(newTodo);
  saveTodo();
};

toDos = JSON.parse(localStorage.getItem(TODOS_KEY));
if (toDos !== null) {
  initTodo();
} else {
  toDos = [];
}

toDoForm.addEventListener('submit', handleToDoSubmit);
