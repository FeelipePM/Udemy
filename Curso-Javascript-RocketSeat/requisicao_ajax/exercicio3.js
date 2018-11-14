let inputElement = document.querySelector('input');
let listElement = document.querySelector('ul');

function renderRepositories(repositories) {
  listElement.innerHTML = "";

  for ( repo of repositories) {
    let textElement = document.createTextNode(repo.name);
    let liElement = document.createElement('li');

    liElement.appendChild(textElement);
    listElement.appendChild(liElement);
  }
}

function renderLoading(loading) {
  listElement.innerHTML = "";

  let textElement = document.createTextNode('Carregando....');
  let loadingElement = document.createElement('li');

  loadingElement.appendChild(textElement);
  listElement.appendChild(loadingElement);
}

function renderError(loading) {
  listElement.innerHTML = "";

  let textElement = document.createTextNode('Erro!');
  let errorElement = document.createElement('li');

  errorElement.style.color = "F00";
  
  errorElement.appendChild(textElement);
  listElement.appendChild(errorElement);
}

function listRepositories () {
  let user = inputElement.value;
  if (!user) return;
    renderLoading();

  axios.get('https://api.github.com/users/' + user + '/repos')
  .then(function (response) {
    renderRepositories(response.data);
  })
  .catch(function () {
    renderError();
  });
} 
