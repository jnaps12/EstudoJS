const now = new Date;

console.log( now.getDate() + ' ' + now.getMonth() + ' ' + now.getFullYear() + ' ' + now.getHours() + ' ' + now.getMinutes() + ' ' + now.getSeconds());

function isDateValid(){
  let eventTime = document.querySelector('#dateInput').value;
  let splitedTime = eventTime.split('-'); //splitedTime é um array de 3 posições, [0] = ano, [1] = mes, [2] = dia
  splitedTime = splitedTime.map(Number); //convertendo todo array para Number;

  if(splitedTime[0] < now.getFullYear()){
    console.log('ano invalido');
  }



}

function calcTime(){
  
}

