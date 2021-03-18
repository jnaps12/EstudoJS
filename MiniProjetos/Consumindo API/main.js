function fazGet(url){
  let request = new XMLHttpRequest();
  request.open("GET", url, false);
  request.send();
  return request.responseText
}

function criaLinha(usuario){
  linha = document.createElement("tr");
  tdId = document.createElement("td");
  tdNome = document.createElement("td");
  tdId.innerHTML = usuario.id;
  tdNome.innerHTML = usuario.name;

  linha.appendChild(tdId);
  linha.appendChild(tdNome);

  return linha;
}

function main(){
  let data = fazGet("https://jsonplaceholder.typicode.com/users");
  let usuarios = JSON.parse(data); //JSON.parse transforma a String que veio e transforma ela em JSON;
  let tabela = document.getElementById("tabela");
  usuarios.forEach(element => {
    let linha = criaLinha(element);
    tabela.appendChild(linha);
  });
  // para cada usuário
    // criar uma linha
      // adicionar na tabela;
}

main();