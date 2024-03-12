
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


export default { ircadastar, irlogar, trocaTela };