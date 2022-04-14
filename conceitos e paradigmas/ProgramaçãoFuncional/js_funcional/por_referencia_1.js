const o1 = {name: 'a'}
const o2 = o1

o2.name = 'b'

console.log(o1.name, o2.name)

function alterar(obj){
  obj.name = 'x'
}

alterar(o2)
console.log(o1.name, o2.name)