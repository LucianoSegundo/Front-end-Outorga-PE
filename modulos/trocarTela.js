//trocar telas
let ircadastar = document.getElementById("irCad");
let irlogar = document.getElementById("irLog");
let telaCad = document.getElementById("cadastro");
let TelaLog = document.getElementById("login");


let trocaTela = function (atual, novo) {
    atual.style.display = "none";
    novo.style.display = "flex";
}

ircadastar.addEventListener("click", function (event) {
    event.preventDefault();
    trocaTela(TelaLog, telaCad)
}
);

irlogar.addEventListener("click", function (event) {
    event.preventDefault();
    trocaTela(telaCad, TelaLog)
}
);

// cadastrar usuário

let registrar= function () {
    console.log("carlalho");
}

let cadastrar = document.getElementById("form-Cadastro");

cadastrar.addEventListener("submit", function (event) {
    event.preventDefault();
    registrar();
    trocaTela(telaCad, TelaLog);
    cadastrar.reset();

});




export default { ircadastar, irlogar, trocaTela };