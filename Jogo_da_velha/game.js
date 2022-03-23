const player1 = "X";
const player2 = "O";
let playTime = player1;
let gameOver = false;


atualizaMostrador();
inicializarEspacos();


function atualizaMostrador(){
  if(gameOver){return;}

  if(playTime == player1){
    let player = document.querySelector("div#mostrador img");
    player.setAttribute("src", "./imagens/x.svg");
  }else{
    let player = document.querySelector("div#mostrador img");
    player.setAttribute("src", "./imagens/o.svg");
  }
}

function inicializarEspacos(){
  
  let espacos = document.getElementsByClassName("espaco");

  for(const espaco of espacos){
    espaco.addEventListener("click", () => {
      if (gameOver) {
        return;
      }
      if (espaco.getElementsByTagName("img").length == 0) {
        if (playTime == player1) {
          espaco.innerHTML = "<img src='./imagens/x.svg'/>";
          espaco.setAttribute("jogada", player1);
          playTime = player2;
        } else {
          espaco.innerHTML = "<img src='./imagens/o.svg'/>";
          espaco.setAttribute("jogada", player2);
          playTime = player1;
        }
        atualizaMostrador();
      }
    });
  }

  
}