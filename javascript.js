function mediaDoAluno() {
  let nota1 = parseInt(document.getElementById("nota1").value);
  let nota2 = parseInt(document.getElementById("nota2").value);
  let nota3 = parseInt(document.getElementById("nota3").value);
  let nota4 = parseInt(document.getElementById("nota4").value);
  let resultadoDoAluno = "";
  let divResultado = document.getElementById("resultado");

  resultadoDoAluno = calculoMediaDoAluno(nota1, nota2, nota3, nota4);
  divResultado.innerText = resultadoDoAluno;
  if (resultadoDoAluno == "Aprovado") {
    divResultado.style.color = "#529B25";
  }
  if (resultadoDoAluno == "Reprovado") {
    divResultado.style.color = "#FD1010";
  }
  if (resultadoDoAluno == "Recuperação") {
    divResultado.style.color = "#FF9B06";
  }
}

function calculoMediaDoAluno(nota1, nota2, nota3, nota4) {
  let media = (nota1 + nota2 + nota3 + nota4) / 4;
  media = Math.round(media);
  if (media >= 7) {
    document.getElementById("notaDoaluno").innerText = "Média = " + media;
    return "Aprovado";
  }

  if (media <= 4) {
    document.getElementById("notaDoaluno").innerText = "Média = " + media;
    return "Reprovado";
  }

  if (media > 4 && media < 7) {
    document.getElementById("notaDoaluno").innerText = "Média = " + media;
    return "Recuperação";
  }
}
