const empresas = [
  { nome:'Samsung',valorDeMercado: 50, CEO: 'Kim Hyun Suk', anoDeCriacao: 1938},
    { nome: 'Microsoft',valorDeMercado: 415, CEO: 'Satya Nadella', anoDeCriacao: 1975 },
    { nome: 'Intel',valorDeMercado: 117, CEO:'Brian Krzanich', anoDeCriacao: 1968},
    { nome: 'Facebook',valorDeMercado: 383, CEO:'Mark Zuckerberg', anoDeCriacao: 2004},
    { nome: 'Spotify',valorDeMercado: 30, CEO:'Daniel Ek', anoDeCriacao: 2006  },
    {nome: 'Apple', valorDeMercado: 845, CEO: 'Tim Cook', anoDeCriacao: 1976}
]

//nesse caso a empresa é o elemento que tá sendo percorrido.
empresas.forEach((empresa, index) => {
  console.log(`${empresa.nome} , ${index}`)
})



async function buscaDados() {
  const users = await fetch('https://jsonplaceholder.typicode.com/users').then(res => res.json());
  // const usersNameString = users.map(user => `Olá meu nome é ${user.name}!!`)
  
  users.forEach(user => {
    console.log(user.address.street)
  });

} 
buscaDados()