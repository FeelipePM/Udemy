function iniciandoJogo() {
  const url = window.location.search;

  const nivelDeJogo = url.replace("?", "");

  let tempoSegundos = 0;

  if (nivelDeJogo == 1) {
    tempoSegundos = 120;
  }
  if (nivelDeJogo == 2) {
    tempoSegundos = 60;
  }
  if (nivelDeJogo == 3) {
    tempoSegundos = 30;
  }

  document.getElementById('cronometro').innerHTML = tempoSegundos;

  let qtdeBaloes = 80;
  let qtdeBaloesEstourados = 40;

  criaBaloes(qtdeBaloes);

  document.getElementById('baloesInteiros').innerHTML = qtdeBaloes;
  document.getElementById('baloesEstourados').innerHTML = qtdeBaloesEstourados;
}

function criaBaloes(qtdeBaloes) {
  for (let i = 1; i <= qtdeBaloes; i++) {
    
    let balao = document.createElement("img");
    balao.src = './imagens/balao_azul_pequeno.png';
    balao.style = 'margin: 10px';

    document.getElementById('cenario').appendChild(balao);
  }
  
}