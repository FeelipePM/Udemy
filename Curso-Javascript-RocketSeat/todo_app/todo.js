let listElement = document.querySelector("#app ul");
let inputElement = document.querySelector("#app input");
let buttonElement = document.querySelector("#app button");

let todos = JSON.parse(localStorage.getItem('list_todos')) || [];

function renderizaTodos() {
  listElement.innerHTML = '';

  for (todo of todos) {
    let todoElement = document.createElement("li");
    let todoText = document.createTextNode(todo);

    let linkElement = document.createElement('a');
        linkElement.setAttribute('href', '#');

    let pos = todos.indexOf(todo);
      linkElement.setAttribute('onclick', 'deletaTodo(' + pos +')');
    
    let linkText = document.createTextNode('Excluir');

    linkElement.appendChild(linkText);

    todoElement.appendChild(todoText);
    todoElement.appendChild(linkElement);

    listElement.appendChild(todoElement);
  }
}

renderizaTodos();

function adicionaTodo() {
  let todoText = inputElement.value;

  todos.push(todoText);
  inputElement.value = '';
  
  renderizaTodos();
  saveToStorage();
}

buttonElement.onclick = adicionaTodo;

function deletaTodo(pos) {
  todos.splice(pos, 1);
  renderizaTodos();
  saveToStorage();
}

function saveToStorage() {
  localStorage.setItem('list_todos', JSON.stringify(todos));
}
