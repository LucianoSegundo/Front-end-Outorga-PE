import login from "./login";

let formCadastro = document.getElementById("cadastro");

formCadastro.addEventListener("submit", async function (event) {
    let nome = document.getElementById("nome").value;
    let cpf_cnpj = document.getElementById("cpf/cnpj").value;
    let cep = document.getElementById("cep").value;
    let logradouro = document.getElementById("logradouro").value;
    let numero = document.getElementById("numero").value;
    let complemento = document.getElementById("complemento").value;
    let bairro = document.getElementById("bairro").value;
    let cidade = document.getElementById("cidade").value;
    let estado = document.getElementById("estado").value;
    let email = document.getElementById("cadastro-email").value;
    let telefone = document.getElementById("telefone").value;
    let celular = document.getElementById("celular").value;

    let dados = {
        nome: nome,
        cpf_cnpj: cpf_cnpj,
        endereco: {
            cep: cep,
            logradouro: logradouro,
            numero: numero,
            complemento: complemento,
            bairro: bairro,
            cidade: cidade,
            estado: estado
        },
        contato: {
            email: email,
            telefone: telefone,
            celular: celular
        }
    };
    
    let resultado = await login.enviarDados('', dados, "não foi possivel realizar o cadastro")

    if (resultado != null) {
        let telaCad = document.getElementById("cadastro");
        let TelaLog = document.getElementById("login");
        login.trocarTela.trocaTela(telaCad, TelaLog);
        formCadastro.reset();
        
    }
})