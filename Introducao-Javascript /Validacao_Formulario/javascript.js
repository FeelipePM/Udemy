function valida() {
  let nome = document.getElementById("nome");

  if (nome.value == "") {
    alert("Insira seu nome");
  } else {
    alert("Enviado com Sucesso!");
  }
}