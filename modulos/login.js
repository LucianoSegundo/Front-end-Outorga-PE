import trocarTela from "./trocarTela.js";
let fomrLogin = document.getElementById("form-Login");


fomrLogin.addEventListener("submit", function (event) {
    event.preventDefault();
   
    let email = document.getElementById('email').value;
    let senha = document.getElementById('senha').value;

    let dados = {
        email: email,
        senha: senha
    };

    enviarDados('', dados);
})
let enviarDados = async function (url, dados) {


    try {
        const resposta = await fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(dados)
        });

        if (!resposta.ok) {
            throw new Error('Erro ao enviar requisição, login não permitido.');
        }

        const token = await resposta.json();

        let telaCad = document.getElementById("cadastro");
        let TelaLog = document.getElementById("login");
        let telaPrincipal = document.getElementById("principal");

        trocarTela.trocaTela(TelaLog, telaPrincipal)
        localStorage.setItem(token, JSON.stringify(token));

        console.log('Requisição enviada com sucesso:', data);
    } catch (error) {
        console.error('Erro:', error);
    }
}

export default { fomrLogin };