function escolhaUmaApi(api){
  if(api == 1){
    return fetch('https://servicodados.ibge.gov.br/api/v2/censos/nomes/joao').then(res => res.json());
  }else if(api == 2){
    return fetch('https://jsonplaceholder.typicode.com/todos/').then(res => res.json());
  }else if (api ==3){
    return fetch('https://jsonplaceholder.typicode.com/comments').then(res => res.json());
  }
  else if (api ==4){
    return fetch('https://ws.apicep.com/cep/48970000.json').then(res => res.json());
  }
}

const ps = [
  escolhaUmaApi(1),
  escolhaUmaApi(2),
  escolhaUmaApi(3),
  escolhaUmaApi(4),
]

Promise.race(ps).then((res) => {
  console.log(res);
})



