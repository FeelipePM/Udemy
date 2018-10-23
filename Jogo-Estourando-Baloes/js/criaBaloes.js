function criaBaloes(qtdeBaloes) {
  for (let i = 1; i <= qtdeBaloes; i++) {
    
    let balao = document.createElement("img");
    balao.src = './imagens/balao_azul_pequeno.png';
    balao.style = 'margin: 10px';
    balao.id = 'b'+i;

    balao.onclick = function(){
      estourarBaloes(this);
    }

    document.getElementById('cenario').appendChild(balao);
  }
  
}

function estourarBaloes(e) {
  
  let idBalao = e.id;

  document.getElementById(idBalao).setAttribute("onclick", "");
  document.getElementById(idBalao).src = './imagens/balao_azul_pequeno_estourado.png';

  pontuacao(-1);
}

function pontuacao(acao) {

  let baloesInteiros = document.getElementById('baloesInteiros').innerHTML;
  let baloesEstourados = document.getElementById('baloesEstourados').innerHTML;

  baloesInteiros = parseInt(baloesInteiros);
  baloesEstourados = parseInt(baloesEstourados);

  baloesInteiros = baloesInteiros + acao;
  baloesEstourados = baloesEstourados - acao;

  document.getElementById('baloesInteiros').innerHTML = baloesInteiros
  document.getElementById('baloesEstourados').innerHTML = baloesEstourados

  situacaoJogo(baloesInteiros, baloesEstourados);

}

function situacaoJogo(baloesInteiros) {
  if (baloesInteiros == 0 ) {
    alert("Parabéns! você conseguiu estourar todos os balões a tempo.");
    pararJogo();

  }
}

function pararJogo() {
  clearTimeout(timerId);
}

function removeEventoBaloes() {
  let i = 1;

  while (document.getElementById('b'+i)) {
    document.getElementById('b'+i).onclick = "";
    i++;
  }
}

