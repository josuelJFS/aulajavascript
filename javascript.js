function main() {
  let anoNascimento = 0;
  let btn = document.getElementById("btn");
  anoNascimento = document.getElementById("anoNascimentoInput");

  btn.onclick = function () {
    let idade = 2023 - parseInt(anoNascimento.value);
    document.getElementById("resultado").innerText =
      "sua idade é " + idade + " anos";
  };
}

window.onload = function () {
  main();
};
