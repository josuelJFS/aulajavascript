function media() {
  let nota1 = parseInt(document.getElementById("nota1").value);
  let nota2 = parseInt(document.getElementById("nota2").value);
  let nota3 = parseInt(document.getElementById("nota3").value);
  let nota4 = parseInt(document.getElementById("nota4").value);
  let media = 0;
  media = (nota1 + nota2 + nota3 + nota4) / 4;
  media = Math.round(media);
  console.log(media);

  if (media >= 7) {
    document.getElementById("resultado").innerText = "Aprovado";
    document.getElementById("resultado").style.color = "#529B25";
  }

  if (media <= 4) {
    document.getElementById("resultado").innerText = "Reprovado";
    document.getElementById("resultado").style.color = "#FD1010";
  }

  if (media > 4 && media < 7) {
    document.getElementById("resultado").innerText = "Recuperação";
    document.getElementById("resultado").style.color = "#FF9B06";
  }
}
