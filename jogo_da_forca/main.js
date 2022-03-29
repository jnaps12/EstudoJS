let palavra = {
  texto: "irineu",
  dica: "Você não sabe, nem eu",
};
const tam = palavra.texto.length;

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

function checkLetter(){
  let letra = 'i';
  let palavraArray = palavra.texto.split("");

  
  for (let cont = 0; cont < palavraArray.length; cont++) {
    if(palavraArray[cont].toLowerCase() == letra.toLowerCase()){
      let posLine = document.querySelector("h1#letra"+cont)
      posLine.textContent = letra;
    }
  }
}

createLines();

checkLetter();


