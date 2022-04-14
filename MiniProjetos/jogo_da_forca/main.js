let palavra = {
  texto: "irineu",
  dica: "Você não sabe, nem eu",
};
let lettersWord = palavra.texto.split("");
const tam = palavra.texto.length;
let errorsLimit = 0;
let submitBtn = document.querySelector("button#submitBtn");
let img = document.getElementById("img-forca");
let gameOver = false;

submitBtn.addEventListener("click", checkLetter);

let letrasField = document.querySelector("div#letras");
let dica = document.querySelector("span#dica");

dica.textContent = palavra.dica;


function createLines(){
  letras.style.cssText = "grid-template-columns: repeat(" + tam + ", 60px);";
  for(let cont = 0; cont < tam; cont++){
    let line = document.createElement("h1");
    line.textContent = "*";
    line.setAttribute("class", "letra");
    line.setAttribute("id", `letra${cont}`);
    letrasField.appendChild(line);
  }
}

function isGameOver(){
  if(!gameOver){
    let stringPlayed = gatherLettersPlayed();
    if(stringPlayed == palavra.texto){
      gameover = true;
      alert("Venceu")
    }
  }else{
    alert("Game over");
    return
  }
}

function checkLetter(){
  let jogada = document.getElementById("input_letra").value;
  console.log(jogada)
  let checked = false;

  if(gameOver){
    alert("Game over"); 
    return
  }  

  for (let cont = 0; cont < tam; cont++) {
    if (lettersWord[cont].toLowerCase() == jogada.toLowerCase()) {
      let posLine = document.querySelector("h1#letra" + cont);
      posLine.textContent = jogada;
      checked = true;
    } 
  }

  if(!checked){
    errorsLimit++;
    changeImg();
  }else{
    isGameOver();
  }
  
}


createLines();


function gatherLettersPlayed(){
  let fieldString = "";
  for (let cont = 0; cont < tam; cont++) {
    let letter = document.querySelector("h1#letra"+cont);
    fieldString += letter.textContent;
  }
  return fieldString;
}

function changeImg(){
  img.src = `./imgs/${errorsLimit}.png`;
  console.log(errorsLimit);

  if(errorsLimit < 6){
    return
  }else{
    gameOver = true;
    alert("Game over");
    isGameOver();
  }
}





