
let ircadastar = document.getElementById("irCad");
let irlogar = document.getElementById("irLog");
let telaCad = document.getElementById("cadastro");
let TelaLog = document.getElementById("login");


let trocaTela = function (atual, novo) {
    atual.style.display = "none";
    novo.style.display = "flex";
}
let trocar3telas = function (nova, tela2, tela3) {
    nova.style.display = "flex";
    tela2.style.display = "none";
    tela3.style.display = "none";
}

// da tela de login para de cadastro.
ircadastar.addEventListener("click", function (event) {
    event.preventDefault();
    trocaTela(TelaLog, telaCad)
}
);

// de tela de cadastro para a de login
irlogar.addEventListener("click", function (event) {
    event.preventDefault();
    trocaTela(telaCad, TelaLog)
}
);


export default { ircadastar, irlogar, trocaTela, trocar3telas };