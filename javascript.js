function inserirNomeNaLista() {
    const nome = document.querySelector("#inputNome").value;
    const divNome = document.createElement("div");
    divNome.className = "nome";
    divNome.innerText = nome;
    document.body.appendChild(divNome);
}
