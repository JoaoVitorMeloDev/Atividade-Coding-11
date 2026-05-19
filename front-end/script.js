function mostrarProjeto() {

    let nome = document.getElementById("nomeProjeto").value;

    if (nome === "") {

        document.getElementById("resultado").innerText =
            "Digite um projeto.";

        document.getElementById("resultado").style.color =
            "red";

        return;
    }

    document.getElementById("resultado").innerText =
        "Projeto selecionado: " + nome;

    document.getElementById("resultado").style.color =
        "green";

    document.getElementById("imagemProjeto").style.display =
        "block";
}

function limparProjeto() {

    document.getElementById("nomeProjeto").value = "";

    document.getElementById("resultado").innerText = "";

    document.getElementById("imagemProjeto").style.display =
        "none";
}