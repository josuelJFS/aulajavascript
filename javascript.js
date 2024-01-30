function inserirNomeNaLista() {
    const nome = document.querySelector("#inputNome").value;
    const divNome = document.createElement("div");
    divNome.className = "nome";
    divNome.innerText = nome;
    document.querySelector("#container").appendChild(divNome);
}

function salvarListagem() {
    const nomesEmHTML = document.querySelector("#container").innerHTML;
    localStorage.setItem("nomes-salvos", nomesEmHTML);
}

function carregarListagem() {
    document.querySelector("#container").innerHTML = localStorage.getItem("nomes-salvos");
}

window.addEventListener("load", () => {
    carregarListagem();
});
