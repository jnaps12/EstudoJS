const now = new Date;

console.log( now.getDate() + ' ' + now.getMonth() + ' ' + now.getFullYear() + ' ' + now.getHours() + ' ' + now.getMinutes() + ' ' + now.getSeconds());
console.log('\n');


function isDateValid(){
  let isValid = true;
  let msg = '';
  let eventTime = document.querySelector('#dateInput').value;
  let splitedTime = eventTime.split('-'); //splitedTime é um array de 3 posições, [0] = ano, [1] = mes, [2] = dia
  splitedTime = splitedTime.map(Number); //convertendo todo array para Number;
  

  if(splitedTime[0] < now.getFullYear()){
    msg = "Inserted date is not valid - Year!";
    isValid = false;
  }else if(splitedTime[1] < (now.getMonth()+1)){
    msg = "Inserted date is not valid! - Month";
    isValid = false;
  }else if(splitedTime[2] <= now.getDate()){
    msg = "Inserted date is not valid! - Day";
    isValid = false;
  }

  isValid ? calcTime(splitedTime) : showError(msg);
}

function showError(err){
  document.getElementById('msg').innerHTML = err;

}

function calcTime(date){
  if(date[0] == now.getFullYear()){
    if(date[1] == now.getMonth()+1){
      
      console.log(date[2]-now.getDate());
    }
  }
  console.log('everything ok!');
}

