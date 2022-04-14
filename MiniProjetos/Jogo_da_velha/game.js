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
        verificarVencedor();
      }
    });
  }
}


async function verificarVencedor(){
  let a1 = document.getElementById('a1').getAttribute('jogada');
  let a2 = document.getElementById('a2').getAttribute('jogada');
  let a3 = document.getElementById('a3').getAttribute('jogada');

  let b1 = document.getElementById('b1').getAttribute('jogada');
  let b2 = document.getElementById('b2').getAttribute('jogada');
  let b3 = document.getElementById('b3').getAttribute('jogada');

  let c1 = document.getElementById('c1').getAttribute('jogada');
  let c2 = document.getElementById('c2').getAttribute('jogada');
  let c3 = document.getElementById('c3').getAttribute('jogada');

  let vencedor = '';

  let a1Verify = (((a1 == b1 && a1 == c1) || (a1 == a2 && a1==a3) || (a1 == b2 && a1 == c3)) && a1 != '');
  let b2Verify = (((b2 == b1 && b2 == b3) || (b2 == a2 && b2 == c2) || (b2 == a3 && b2 == c1)) && b2 != '');
  let c3Verify = (c3 == c2 && c3 == c1 && c3 != '') || (c3 == a3 && c3 == b3 && c3 != '');
  
  if(a1Verify){
    vencedor = a1;
  }else if(b2Verify){
    vencedor = b2;
  }else if(c3Verify){
    vencedor = c3;
  }else if((a1 != "" && a2 != "" && a3 != "") && (b1 != "" && b2 != "" && b3 != "") && (c1 != "" && c2 != "" && c3 != "") && vencedor == ''){
    vencedor = "#"
  }

  if(vencedor != '' && vencedor != "#"){
    gameOver = true;

    await sleep(50);
    alert("o Ganhador foi o : '"+ vencedor + "'")
  }else if (vencedor == '#'){
    gameOver = true;
    await sleep(50);
    alert("VELHA!");
  }

}

function sleep(ms){
  return new Promise(resolve => setTimeout(resolve, ms));
}


function reset() {
  let espacos = document.getElementsByClassName("espaco");
  for (const espaco of espacos) {
    espaco.innerHTML = "";
    espaco.setAttribute("jogada", "");
  }
  gameOver = false;
  playTime = player1;
  atualizaMostrador();
}