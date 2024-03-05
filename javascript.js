async function userInfo() {
    const result = await fetch("https://randomuser.me/api/?results=100");
    const user = await result.json();

    user.results.forEach((element) => {
        const data = new Date(element.dob.date);
        const divName = document.createElement("div");
        const divAniversario = document.createElement("div");
        const divEmail = document.createElement("div");
        const foto = document.createElement("img");
        divName.classList.add("name");
        foto.src = element.picture.large;
        divAniversario.innerText = data.toLocaleString();
        divEmail.innerText = element.email;
        divName.innerText = element.name.first;
        document.body.appendChild(foto);
        document.body.appendChild(divName);
        document.body.appendChild(divEmail);
        document.body.appendChild(divAniversario);
        console.log(element);
    });
}

window.addEventListener("load", () => {
    userInfo();
});
