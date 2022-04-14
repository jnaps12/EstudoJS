
//Sintaxe para criação de uma nova Promise
let aceitar = true;
console.log("Pedir uber");
const promessa = new Promise((resolve, reject)=>{
  if(aceitar){
    return resolve("Pedido aceito!");
  }

    return reject("Pedido recusado");
});

promessa
.then(result => console.log(result)) 
.catch(error => console.log(error))
.finally(() => console.log("finalizado")) 

console.log('aguardando');

  /* o then pega o result quando o resolve é retornado;
  * o catch pega o result quando o reject é retornado;
  * finally é executado independente se foi executada ou rejeitada.
  */
