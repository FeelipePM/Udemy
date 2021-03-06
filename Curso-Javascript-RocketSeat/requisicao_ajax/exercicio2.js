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

function listRepositories () {
  let user = inputElement.value;
  if (!user) return;
  axios.get('https://api.github.com/users/' + user + '/repos')
  .then(function (response) {
    renderRepositories(response.data);
  })
} 
