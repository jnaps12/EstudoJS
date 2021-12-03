const empresas = [
  { nome:'Samsung',valorDeMercado: 50, CEO: 'Kim Hyun Suk', anoDeCriacao: 1938},
    { nome: 'Microsoft',valorDeMercado: 415, CEO: 'Satya Nadella', anoDeCriacao: 1975 },
    { nome: 'Intel',valorDeMercado: 117, CEO:'Brian Krzanich', anoDeCriacao: 1968},
    { nome: 'Facebook',valorDeMercado: 383, CEO:'Mark Zuckerberg', anoDeCriacao: 2004},
    { nome: 'Spotify',valorDeMercado: 30, CEO:'Daniel Ek', anoDeCriacao: 2006  },
    {nome: 'Apple', valorDeMercado: 845, CEO: 'Tim Cook', anoDeCriacao: 1976}
]

//o Map serve para percorrer o array e extrair informações e faz transformações que você quer sem alterar o array original, retornando um array novo.

//Imagine que você quer todos os nomes dos CEOs

  const nomeDosCeos = empresas.map(empresa =>`${empresa.CEO} é o CEO da ${empresa.nome}`)

  console.log(nomeDosCeos)


  async function buscaDados() {
  const users = await fetch('https://jsonplaceholder.typicode.com/users').then(res => res.json());
  // const usersNameString = users.map(user => `Olá meu nome é ${user.name}!!`)
  
  users.forEach(user => {
    console.log(user.address.street)
  });
} 
buscaDados()