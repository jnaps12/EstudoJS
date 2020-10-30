let ball = document.querySelector('#ball');

function changeColorByInterval(){
  let status = true;
  setInterval(() => {
    if(status){
      ball.style.backgroundColor = "#0fb0f5";
      status = false;
    }else{
      ball.style.backgroundColor = "#b52a6f";
      status = true;
    }
  },1000);
}




changeColorByInterval();