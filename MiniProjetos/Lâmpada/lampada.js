// const turnOn = document.getElementById('turnOn');
// const turnOff = document.getElementById('turnOff');
const lamp = document.getElementById('lamp');
const btn = document.getElementById('btn');

function isLampBroken(){
  return lamp.src.indexOf('quebrada') > -1;
  //caso return > -1  == true
  //caso return igual -1 == false
}
function changeStatus(){
  if(btn.textContent == "Ligar"){
    lampOn();
    btn.textContent = "Desligar";
  }else{
    lampOff();
    btn.textContent = "Ligar";
  }
}

function lampOn(){
  if(!isLampBroken()){
    lamp.src = './img/ligada.jpg';
  }
}

function lampOff(){
  if(!isLampBroken()){
    lamp.src = './img/desligada.jpg';
  }
}

function lampBroken(){
  lamp.src = './img/quebrada.jpg';
}

btn.addEventListener('click', changeStatus);
// turnOn.addEventListener('click', lampOn);
// turnOff.addEventListener('click', lampOff);
lamp.addEventListener('mouseover',  lampOn);
lamp.addEventListener('mouseleave', lampOff);
lamp.addEventListener('dblclick', lampBroken);