// document.addEventListener('click', handleDocumentClick) //o AddEventListener é uma High order function, o handleDocumentClick é uma função que tá sendo passada como parâmetro.

// function handleDocumentClick(){
//   console.log('Clicou no documento.');
// }

const getMultiplier = multiplier => aNumber => aNumber*multiplier;
//a função de cima faz a mesma coisa que o de baixo.
// function getMultiplier(multiplier){
//   return function (aNumber){
//     return aNumber * multiplier;
//   }
// }

const double = getMultiplier(2); // seria o mesmo que color a função retornada dentro dessa variável. nesse caso ele irá executar a função retornada.
const triple = getMultiplier(3);
const quadruple = getMultiplier(4);

console.log(double(5));

// console.log(double(9));

//map
  const numbers = [1, 2, 3];
  // Você quer obter um novo array com a mesma quantidade do array original, só que com cada item transformado.
  const squareNumbers = numbers.map(item => item ** 2);
  //outro uso com map
  const tvShows = [
    {name: 'breaking bad', releaseYear: 2008},
    {name: 'Mr. Robot', releaseYear: 2015},
    {name: 'Watchmen', releaseYear: 2019},
    {name: 'Hannibal', releaseYear: 2013}
  ]

  // const showNames = tvShows.map(tvShows => tvShows.name);
  //o de baixo faz o mesmo que o de cima
  const showNames = tvShows.map(({ name }) => name);

  console.log(showNames);

