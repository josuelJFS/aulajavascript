function load() {
  let inputNome = document.getElementById("nome");
  let btn = document.getElementById("btn");
  let exibirNome = document.getElementById("exibirNome");

  btn.onclick = function () {
    exibirNome.innerText = inputNome.value;
  };
}

window.onload = function () {
  load();
};
