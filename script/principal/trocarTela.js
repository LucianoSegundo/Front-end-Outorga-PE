


let trocaTela = function (atual, novo) {
    atual.style.display = "none";
    novo.style.display = "flex";
}
let trocar3telas = function (nova, tela2, tela3) {
    nova.style.display = "flex";
    tela2.style.display = "none";
    tela3.style.display = "none";
}




export default { trocaTela, trocar3telas };