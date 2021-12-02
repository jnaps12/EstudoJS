const o1 = Object.freeze({name: 'a'})
//por mais que o1 seja uma constante, seus atributos podem ser alterados, pois o objeto é constante e não seus atributos. Para que isso seja diferente, você tem que colocar o objeto como "freeze". - Object.freeze()
//Evoluindo o dado
const o2 = {...o1, name: 'b'} 
//o Operador rest vai trazer todos os atributos de o1, criando um novo objeto o2, o2 é apenas uma cópia de o1 e não faz mais referência a ele na memória.

o2.name = 'x'

console.log(o1.name, o2.name)

function alterar(obj){
  obj.name = 'x'
}

alterar(o2)
console.log(o1.name, o2.name)

//O código vai funcionar perfeitamente, mas o valor do atributo name do o1 jamais será al