function executarNoConsole(fn, num1, num2){
  console.log(fn(num1, num2))
}

const somar = function(a,b){
  return a+b
}

executarNoConsole(somar, 2, 3) //uma coisa é INVOCAR A FUNÇÃO colocando os "()", outra coisa é passar a função como parâmetro

