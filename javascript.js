let nota1 = 0;
let nota2 = 0;
let nota3 = 0;
let resultado = 0;

nota1 = parseInt(prompt("Informe a primeira nota"));
nota2 = parseInt(prompt("Informe a segunda nota"));
nota3 = parseInt(prompt("Informe a terceira nota"));

resultado = (nota1 + nota2 + nota3) / 3;
resultado = parseInt(resultado);
console.log(resultado);
if (resultado > 0 && resultado <= 5) {
  alert("Reprovado");
}

if (resultado == 6) {
  alert("recuperação");
}

if (resultado > 6) {
  alert("Aprovado");
}
