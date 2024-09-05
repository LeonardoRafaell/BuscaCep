// Criar Função para Coletar os dados

function Coletar() {
  let input = document.querySelector(".Input-CEP").value;
  console.log(input);
  Dados(input);
}
//Função para consumir a API Via CEP
async function Dados(input) {
  let Dados = await fetch(`https://viacep.com.br/ws/${input}/json/`).then(
    (Response) => Response.json()
  );
  console.log(Dados);
  ExibirDados(Dados);
}

function ExibirDados(Dados) {
  document.querySelector(".Estado").value = Dados.uf;
  document.querySelector(".Cidade").value = Dados.localidade;
  document.querySelector(".Endereco").value = Dados.logradouro;
  document.querySelector(".ddd").value = Dados.ddd;
}

function Limpar(Estado, Cidade, Endereco, ddd) {
  document.querySelector(".Estado").value = "0";
  document.querySelector(".Cidade").value = "0";
  document.querySelector(".Endereco").value = "0";
  document.querySelector(".ddd").value = "0";
}
