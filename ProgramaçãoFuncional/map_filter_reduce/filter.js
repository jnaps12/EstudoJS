const empresas = [
  { nome:'Samsung',valorDeMercado: 50, CEO: 'Kim Hyun Suk', anoDeCriacao: 1938},
    { nome: 'Microsoft',valorDeMercado: 415, CEO: 'Satya Nadella', anoDeCriacao: 1975 },
    { nome: 'Intel',valorDeMercado: 117, CEO:'Brian Krzanich', anoDeCriacao: 1968},
    { nome: 'Facebook',valorDeMercado: 383, CEO:'Mark Zuckerberg', anoDeCriacao: 2004},
    { nome: 'Spotify',valorDeMercado: 30, CEO:'Daniel Ek', anoDeCriacao: 2006  },
    {nome: 'Apple', valorDeMercado: 845, CEO: 'Tim Cook', anoDeCriacao: 1976}
]

//pegando empresas que nasceram depois dos anos 2000
//o .filter vai criar um novo array de acordo com as confições que foram passadas
const empresasdoSeculo21 = empresas.filter(empresa => (empresa.anoDeCriacao > 2000))

//outra forma de usar o filter
//empresas que nasceram em ano par

function anosPares(empresas){
  if(empresas.anoDeCriacao % 2 == 0){
    return empresas
  }
}

const empresasDeAnoPar = empresas.filter(anosPares)

// console.log('seculo 21: ' + empresasdoSeculo21)
// console.log('par: ' + empresasDeAnoPar)


//index

function teste(empresas, index){
  if(index > 2){
    return empresas
  }
}

const indexMaiorQue2 = empresas.filter(teste)

console.log(indexMaiorQue2)
