function precoComImposto(imposto, preco){
  return preco * (1 + imposto)
}

console.log(precoComImposto(0.11, 56.78))
console.log(precoComImposto(0.11, 34.00))
console.log(precoComImposto(0.11, 22.78))


//HOF

//currying - É uma técnica de transformação de uma função que recebe múltiplos parâmetros de forma que ela pode ser chamada como uma cadeia de funções que recebe msomente um parâmetro cada
function precoComImposto2(imposto){
  function calcular(preco){
    return preco * (1 + imposto)
  }
  return calcular
}

const precoComImpostoBahia =  precoComImposto2(0.11)


console.log(precoComImpostoBahia(56.78))
console.log(precoComImpostoBahia(34.00))
console.log(precoComImpostoBahia(22.78))
