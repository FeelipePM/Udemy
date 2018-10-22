function iniciaJogo() {
  var nivelJogo = document.getElementById("nivel-jogo").value;

  window.location.href  = 'jogo.html?' +nivelJogo;

}