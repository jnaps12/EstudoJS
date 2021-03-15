
function calcularIMC(){
  let nome = document.querySelector("#nome").value;
  let altura = document.querySelector("#altura").value;
  let peso = document.querySelector("#peso").value;
  resultado = peso/altura**2;
  sendAnswer(nome, resultado);
  
}

function sendAnswer(nome, resultado){
  resultado = resultado.toFixed(2);
  let msg = `${nome} seu IMC é de ${resultado}`;
  document.getElementById("resposta").innerHTML = msg;

}