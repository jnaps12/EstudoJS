const empresas = [
  { nome:'Samsung',valorDeMercado: 50, CEO: 'Kim Hyun Suk', anoDeCriacao: 1938},
    { nome: 'Microsoft',valorDeMercado: 415, CEO: 'Satya Nadella', anoDeCriacao: 1975 },
    { nome: 'Intel',valorDeMercado: 117, CEO:'Brian Krzanich', anoDeCriacao: 1968},
    { nome: 'Facebook',valorDeMercado: 383, CEO:'Mark Zuckerberg', anoDeCriacao: 2004},
    { nome: 'Spotify',valorDeMercado: 30, CEO:'Daniel Ek', anoDeCriacao: 2006  },
    {nome: 'Apple', valorDeMercado: 845, CEO: 'Tim Cook', anoDeCriacao: 1976}
]


//O Reduce percorre o array e no fim retorna um único valor de acordo com a expressão escolhida.

//Por exemplo, supomos que você precise trazer o o valor de mercado de todas as empresas somadas, então fariamos:

// const total = empresas.reduce((resultado, empresa) => {
//   return (resultado + empresa.valorDeMercado)
// }, 0)

// console.log(total)


//outro exemplo
var numeros = [0, 1, 2, 3, 4, 5, 6];
var total = numeros.reduce((acumulador, numero, indice, original) => {
console.info(`${acumulador} total até o momento`);
console.log(`${numero} valor atual`);
console.log(`${indice} indice atual`);
console.log(`${original} array original`);
return acumulador += numero;
}, 0)
console.warn('acaboooou');
console.log(total)