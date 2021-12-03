function gritar(expr){
  return expr.toUpperCase() + '!!!'
}

const x = gritar('Bom dia')
console.log(x)

function somar(a, b = 1){ //definindo valor default para b, caso não seja recebido nada, ele assumirá o valo 1
  return a+b
}

const resultado1 = somar(1, 2, 3, 4, 5, 6) //javascript vai ignorar os outros parâmetros passados
console.log(resultado1)

const resultado2 = somar(1,2)
console.log(resultado2)

//Caso o parâmetro da função não rebeca nenhuma valor, ele assumirá o tipo "undefined", e vc trá que lidar com isso

