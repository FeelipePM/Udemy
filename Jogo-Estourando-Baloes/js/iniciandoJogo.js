let timerId = null;

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
  let qtdeBaloesEstourados = 0;

  criaBaloes(qtdeBaloes);

  document.getElementById('baloesInteiros').innerHTML = qtdeBaloes;
  document.getElementById('baloesEstourados').innerHTML = qtdeBaloesEstourados;

  contagemtempo(tempoSegundos + 1);

}

function contagemtempo(segundos) {
  segundos = segundos - 1;

  if (segundos == -1) {
    clearTimeout(timerId);
    gameOver();
    return false;
  }

  document.getElementById('cronometro').innerHTML = segundos;

  timerId = setTimeout("contagemtempo("+segundos+")", 1000);

}

function gameOver() {
  removeEventoBaloes();
  alert("Fim de jogo! Você não conseguiu estourar todos os balões a tempo.");
}