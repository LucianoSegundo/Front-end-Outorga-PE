import trocarTela from "./trocarTela.js";
let fomrLogin = document.getElementById("form-Login");


fomrLogin.addEventListener("submit", async function (event) {
    event.preventDefault();

    // montando json que será enviado
    let email = document.getElementById('email').value;
    let senha = document.getElementById('senha').value;

    let dados = {
        email: email,
        senha: senha
    };
    // enviando json  e guardando saida
    let tokenn = await enviarDados('', dados, "login não permitido");
    
    //se o login foi autorizado, armazena-se o token e avança para tela de login.
     if (token!=null) {
         let barraInterna = document.getElementById("barraInterna");
         let TelaLog = document.getElementById("login");
         let telaPrincipal = document.getElementById("principal");
     
         localStorage.setItem(token, JSON.stringify(tokenn));

         trocarTela.trocaTela(TelaLog, telaPrincipal);
         barraInterna.style.display = "flex";
        
     }
     fomrLogin.reset();
})
let enviarDados = async function (url, dados, mensagemERRO) {


    try {
        const resposta = await fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(dados)
        });

        if (!resposta.ok) {
            throw new Error('Erro ao enviar requisição, '+ mensagemERRO + '.');
            alert(mensagemERRO);
        }
        if (resposta.status == 200) {
            const token = await resposta.json();
            return token;
        }
        else return null;


        console.log('Requisição enviada com sucesso:', data);
    } catch (error) {
        console.error('Erro:', error);
    }
}

export default { fomrLogin, enviarDados, trocarTela };