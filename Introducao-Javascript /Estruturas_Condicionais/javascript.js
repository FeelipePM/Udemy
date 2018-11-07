
let a = 2;
let b = 3;
let c = "Olá Mundo!";

let soma = a + b;
let dim = a - b;
let mult = a * b;
let div = a / b;

document.write("a = " + a);
document.write("<br>");
document.write("b = " + b);
document.write("<br>");
document.write("<br>");
document.write("a + b = " + soma);
document.write("<br>");
document.write("a - b = " + dim);
document.write("<br>");
document.write("a * b = " + mult);
document.write("<br>");
document.write("a / b = " + div);
document.write("<br>");
document.write("<br>");

if (c % a == 1) {
  document.write("O resto de c % a é um numero impar");
} 
else if (c % a == 0) {
  document.write("O resto de c % a é um numero par");
}

else {
  document.write("Valor Inválido");
}