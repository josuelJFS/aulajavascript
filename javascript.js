function pegarData() {
    const data = new Date("1995-12-17T03:24:00");
    let ano = data.getFullYear();
    let mes = data.getMonth().toString().padStart("2", "0");
    let dia = data.getDate().toString().padStart("2", "0");
    let DataInput = document.querySelector("#data");
    DataInput.value = `${ano}-${mes}-${dia}`;
    document.querySelector("#exibirData").innerText = data.toLocaleDateString();
    console.log(data.toLocaleDateString());
}
