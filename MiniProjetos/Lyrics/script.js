const botao = document.getElementById("botao");

function fazGet(url){
  let request = new XMLHttpRequest();
  request.open("Get", url, false);
  request.send();
  return request.responseText;
}

function getSongLyrics(){
  let artista = document.querySelector("#artista");
  let musica = document.querySelector("#musica");
  let lyric = "teste";
  console.log(lyric);
}





