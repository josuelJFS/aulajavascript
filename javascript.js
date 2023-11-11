function calculadora() {
  let resultado = document.getElementById("resultado");
  let resultadoDoCalculo = 0;
  let operacoes = document.getElementById("operacoes").value;
  let input1 = parseInt(document.getElementById("input1").value);
  let input2 = parseInt(document.getElementById("input2").value);

  if (operacoes == "+") {
    resultadoDoCalculo = input1 + input2;
  }

  if (operacoes == "-") {
    resultadoDoCalculo = input1 - input2;
  }

  if (operacoes == "*") {
    resultadoDoCalculo = input1 * input2;
  }

  if (operacoes == "/") {
    resultadoDoCalculo = input1 / input2;
  }
  resultado.innerText = resultadoDoCalculo;
}
